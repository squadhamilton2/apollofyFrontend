import { Link } from "react-router-dom";
import { CreateAccountHeader } from "../../components/Register/CreateAccountHeader";
import { useFetchDBJSON } from "../../hooks/useFetch";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../types/types";

export const Register1 = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    gender: "woman",
  });

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
    let validation = true;
    if (!form.email.split("").includes("@")) {
      alert("email invalido");
      validation = false;
    }
    if (form.password.length < 6) {
      alert("password must be at least 6 characters");
      validation = false;
    }

    user.map((eachUser) => {
      if (eachUser.email === form.email) {
        alert("email already in use");
        validation = false;
      }
    });

    if (validation) navigate("/register2");
  };

  return (
    <>
      <Link to="/register2" className="link">
        <CreateAccountHeader />
      </Link>
      <form onSubmit={onSubmit} className="register_form" action="">
        <label className="register_labelForm" htmlFor="">
          {" "}
          {/* What's your Email? */}
        </label>
        <input
          className="register_inputForm"
          type="email"
          name="email"
          placeholder="What's your Email"
          value={form.email}
          onChange={onChange}
        />

        {/* <label className="register_labelForm" htmlFor="">
          Create a password
        </label> */}
        <input
          className="register_inputForm"
          type="password"
          name="password"
          value={form.password}
          placeholder="Create a password"
          onChange={onChange}
        />

        {/* <label className="register_labelForm" htmlFor="">
          Name
        </label> */}
        <input
          className="register_inputForm"
          type="password"
          name="password"
          value={form.password}
          placeholder="Name"
          onChange={onChange}
        />

        {/* <label className="register_labelForm" htmlFor="">
          Last name
        </label> */}
        <input
          className="register_inputForm"
          type="password"
          name="password"
          placeholder="Last name"
          value={form.password}
          onChange={onChange}
        />

        {/* <label className="register_labelForm" htmlFor="">
          User name
        </label> */}
        <input
          className="register_inputForm"
          type="password"
          name="password"
          placeholder="User name"
          value={form.password}
          onChange={onChange}
        />

        <Link to="/register2" className="link">
          <input type="submit" value="Next" className="register_nextBtn" />
        </Link>
      </form>
    </>
  );
};
