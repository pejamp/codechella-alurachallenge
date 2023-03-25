import { Banner } from '../../components/banner';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { DefaultPage } from '../../layout-patterns/default-page';
import './style.scss';
import BannerForm from '../../assets/images/banner-form.jpg';
import { useForm, SubmitHandler } from 'react-hook-form';

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
        <section className="form">
          <h2>Preencha o formulário a seguir:</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Nome Completo:</label>
            <input defaultValue="test" {...register("fullName")} />
            <label>Email:</label>
            <input defaultValue="test" {...register("email")} />
            <label>Tipo de ingresso</label>
            <select {...register("ticketType")}>
              <option defaultValue={'Tipo de ingresso'} selected disabled>Tipo de ingresso</option>
              <option value="standard">Standard Pass</option>
              <option value="lounge">Lounge Pass</option>
              <option value="comfort">Comfort Pass</option>
            </select>
            <label>Data de nascimento:</label>
            <input {...register("dateOfBirth")} />
            <input type="submit" />
          </form>
        </section>
      </main>
      <Footer />
    </DefaultPage>
  );
}