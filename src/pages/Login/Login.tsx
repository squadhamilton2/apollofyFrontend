import { useFetchDBJSON } from "../../hooks/useFetch";

import { Link } from "react-router-dom";

import "./login.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../interfaces/user";
import { useUserContext } from "../../context/usercontext";

type Props = {};

const Login = (_props: Props) => {
  const [JSONuser, setJSONuser] = useState<User[]>([]);
  const callNavigate = useNavigate();
  const userContext = useUserContext();

  const getUserData = async () => {
    try {
      const request = await fetch("src/data/db.json");
      const JSONrequest = await request.json();

      return JSONrequest;
    } catch (error) {
      console.log("request Error");
    }
  };

  const comparingUsers = async () => {
    const userDataResponse = await getUserData();
    if (userDataResponse) {
      setJSONuser(userDataResponse);
    }
  };
  useEffect(() => {
    comparingUsers();
  }, []);

  const loginInform = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userEmail = e.currentTarget.email.value;
    const userPassword = e.currentTarget.password.value;

    const userSuccessfullyFound = JSONuser.find(
      (element) =>
        element.email === userEmail && element.password === userPassword
    );

    if (userSuccessfullyFound) {
      userContext.setUser(userSuccessfullyFound);

      callNavigate("/");
    } else {
      alert("Wrong Username or Password. Please try again");
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
        <form onSubmit={loginInform} className="login_form">
          <div className="inputUser_container">
            <input
              className="login_input"
              type="email"
              placeholder="email"
              required
              name="email"
            ></input>
          </div>
          <div className="inputUser_container">
            <input
              className="login_input"
              type="password"
              placeholder="password"
              required
              name="password"
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

// const Login = () => {
//   const [form, setForm] = useState({ email: "", password: "" });

//   const navigate = useNavigate();

//   const { user }: { user: User[] } = useFetchDBJSON();

//   const onChange = (e: Event) => {
//     setForm({
//       ...form,
//       [e.target?.name]: e.target?.value,
//     });
//   };

//   const onSubmit = (e: Event) => {
//     e.preventDefault();
//     let validation = true;
//     if (!form.email.split("").includes("@")) alert("email invalido");

//     if (form.password.length < 6)
//       alert("password must be at least 6 characters");

//     user.map((eachUser) => {
//       if (eachUser.email === form.email && eachUser.password === form.password)
//         validation = true;
//     });

//     if (validation) {
//       alert("Bienvenido");
//       // cambiar el estado del contexto login a true
//       navigate("/");
//     } else {
//       alert("user and/or password incorrect");
//     }
//   };

export default Login;
