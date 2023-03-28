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
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormProps>();
  const onSubmit: SubmitHandler<FormProps> = data => console.log(data);

  return (
    <DefaultPage>
      <Header />
      <main>
        <Banner bannerImage={BannerForm} bannerText={'Garanta seu Ingresso'} />
        <section className="form-section">
          <h2 className='title'>Preencha o formulário a seguir:</h2>
          <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <label className='form__label'>Nome Completo:
              <input className='form__input' defaultValue="test" {...register("fullName")} />
            </label>
            <label className='form__label'>Email:
              <input className='form__input' defaultValue="test" {...register("email")} />
            </label>
            <label className='form__label'>Tipo de ingresso
              <div className='form__select-container'>
                <select className='form__select' {...register("ticketType")}>
                  <option defaultValue={'Tipo de ingresso'} selected disabled>Tipo de ingresso</option>
                  <option value="standard">Standard Pass</option>
                  <option value="lounge">Lounge Pass</option>
                  <option value="comfort">Comfort Pass</option>
                </select>
                <ArrowDropDownIcon />
              </div>
            </label>
            <label className='form__label'>Data de nascimento:
              <input className='form__input' {...register("dateOfBirth")} />
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