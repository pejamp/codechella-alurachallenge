import './style.scss';
import { Banner } from '../../components/banner';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { DefaultPage } from '../../layout-patterns/default-page';
import BannerForm from '../../assets/images/banner-form.jpg';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '../../components/button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

enum TicketEnum {
  standard = "standard",
  lounge = "lounge",
  comfort = "comfort"
}

type FormProps = {
  fullName: string;
  email: string;
  ticketType: TicketEnum;
  dateOfBirth: string;
}

export function Form() {
  const [ isValidAge, setIsValidAge] = useState(true);
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormProps>();
  const onSubmit: SubmitHandler<FormProps> = data => {
    const date = new Date(data.dateOfBirth);

    if (!validateAge(date)) {
      setIsValidAge(false);
      return;
    }

    function validateAge(date: Date) {
      const currentDate = new Date();
      const dateOver16 = new Date(date.getUTCFullYear() + 16, date.getUTCMonth(), date.getUTCDate());

      return currentDate >= dateOver16;
    }

    localStorage.setItem('user', JSON.stringify(data));
    navigate('/ticket');
  };

  return (
    <DefaultPage>
      <Header />
      <main>
        <Banner bannerImage={BannerForm} bannerText={'Garanta seu Ingresso'} />
        <section className="form-section">
          <h2 className='title'>Preencha o formulário a seguir:</h2>
          <form className='form' onSubmit={handleSubmit(onSubmit)}>
            {!isValidAge && <span className='form__error-message alert'>*O usuário não é maior de 16 anos.</span>}
            <label className='form__label'>Nome Completo:
              <input className='form__input' type='text' {...register("fullName", { required: true, minLength: 3 })} />
              {errors.fullName && <span className='form__error-message'>Este campo é obrigatório. Preencha corretamente.</span>}
            </label>
            <label className='form__label'>Email:
              <input className='form__input' type='email' {...register("email", { required: true, pattern: /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/ })} />
              {errors.email && <span className='form__error-message'>Este campo é obrigatório. Preencha corretamente. ex: example@email.com</span>}
            </label>
            <label className='form__label'>Tipo de ingresso
              <div className='form__select-container'>
                <select className='form__select' {...register("ticketType", { required: true })}>
                  <option value="" disabled selected>Tipo de ingresso</option>
                  <option value="standard">Standard Pass</option>
                  <option value="lounge">Lounge Pass</option>
                  <option value="comfort">Comfort Pass</option>
                </select>
                <ArrowDropDownIcon />
              </div>
              {errors.ticketType && <span className='form__error-message'>Por favor, selecione um tipo de ingresso.</span>}
            </label>
            <label className='form__label'>Data de nascimento:
              <input className='form__input' type="date" {...register("dateOfBirth", { required: true })} />
              {errors.dateOfBirth && <span className='form__error-message'>Este campo é obrigatório. Preencha corretamente.</span>}
            </label>
            <div className='form__button'>
              <Button type='button' text='Avançar!' icon={<ArrowForwardIcon />} />
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </DefaultPage>
  );
}