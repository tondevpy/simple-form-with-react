import { useForm } from 'react-hook-form';
import style from './App.module.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const handleClick = (data) => {
    reset();
    toast("Solicitação feita com sucesso...");
  };


  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <h1>Formulário</h1>
          <form onSubmit={handleSubmit(handleClick)}>
            <label htmlFor="">Nome {errors.nome && <span style={{color: 'red'}}>obrigatório</span>}</label>
            
            <input
              type="text"
              {...register('nome', { required: true })}
              placeholder="Nome"
            />
            
            <label htmlFor="">Email {errors.nome && <span style={{color: 'red'}}>obrigatório</span>}</label>
            <input
              type="email"
              placeholder="Email"
              {...register('email', { required: true })}
            />

            <div className={style.buscar}>
              <input type="submit" value="Buscar" />
            </div>
            <ToastContainer
            theme="dark" 
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
