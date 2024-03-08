import { useFetchDBJSON } from "../../hooks/useFetch";

import { Link } from "react-router-dom";

import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const { user }: { user: User[] } = useFetchDBJSON();

  const onChange = (e: Event) => {
    setForm({
      ...form,
      [e.target?.name]: e.target?.value,
    });
  };

  const onSubmit = (e: Event) => {
    e.preventDefault();
    let validation = false;
    if (!form.email.split("").includes("@")) alert("email invalido");

    if (form.password.length < 6)
      alert("password must be at least 6 characters");

    user.map((eachUser) => {
      if (eachUser.email === form.email && eachUser.password === form.password)
        validation = true;
    });

    if (validation) {
      alert("Bienvenido");
      // cambiar el estado del contexto login a true
      navigate("/");
    } else {
      alert("user and/or password incorrect");
    }
  };

  return (
    <div className="login_page">
      <div className="login_container">
        {/* <img src="src\assets\images\Login\logogrande.webp" alt="Apollofy logo" /> */}
        <img
          className="login_apollofyTextLogo"
          src="src\assets\images\Login\titulologo.webp"
          alt="Apollofy"
        />
        <form onSubmit={onSubmit} className="login_form">
          <div className="inputUser_container">
            <input
              className="login_input"
              type="email"
              placeholder="email"
              required
              name="email"
              value={form.email}
              onChange={onChange}
            ></input>
          </div>
          <div className="inputUser_container">
            <input
              className="login_input"
              type="password"
              placeholder="password"
              required
              name="password"
              value={form.password}
              onChange={onChange}
            ></input>
          </div>
          <Link to="/" className="link">
            <button className="login_Btn">Log in</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
