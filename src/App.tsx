import './App.css';
import "./"
import logo from './logo.nutritech.png.png';
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"></link>

export default function App() {
  return (
    <div className="background">
     <div className="container-right">
        <img src={logo} alt="Logo NutriTech" className="logo" />
        <h2>O MELHOR PARA A SUA SAÚDE</h2>
      </div> 
     <div className="container-left">
         <h1>Login</h1>
         <label className="email-label">Email:</label>
         <input type="email" className="email-input" />
         <label className="password-label">Senha:</label>
         <input type="password" className="password-input" />
       <main className="main-Content">
         <button className="button">Clique aqui</button>
       </main>
     </div>
    </div>
  );

}


// * foi removido o header * //