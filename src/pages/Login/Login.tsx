import "./login.css";

const Login = () => {
  return (
    <div className="login_page">
     <div className="login_container">
      {/* <img src="src\assets\images\Login\logogrande.webp" alt="Apollofy logo" /> */}
      <img
        className="login_apollofyTextLogo"
        src="src\assets\images\Login\titulologo.webp"
        alt="Apollofy"
      />
      <form className="login_form">
        <div className="inputUser_container">
          <input
            className="login_input"
            type="email"
            placeholder="email"
            required
          ></input>
        </div>
        <div className="inputUser_container">
          <input
            className="login_input"
            type="password"
            placeholder="password"
            required
          ></input>
        </div>
        <button className="login_Btn">Log in</button>
      </form>
      </div>
    </div>
  );
};

export default Login;
