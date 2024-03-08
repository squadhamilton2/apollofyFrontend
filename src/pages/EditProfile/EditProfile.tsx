//import { SetStateAction, useState } from "react";
import "./editprofile.css";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

export const EditProfile = () => {
  /*   const currentYear = new Date().getFullYear(); */

  return (
    <main className="profile_settings">
      <h1 className="edit_profile">Edit profile</h1>

      <form className="profile_form">
        <input className="name_inputForm" type="text" placeholder="Name" />
        <input className="name_inputForm" type="text" placeholder="Last Name" />
        <input className="name_inputForm" type="email" placeholder="Email" />
        <input className="name_inputForm" type="text" placeholder="Username" />
        <input
          className="loginprofile_input"
          type="password"
          placeholder="Password"
          required
        ></input>

        <div className="buttons">
          <Link to="/profile" className="link">
            <button className="cancel_button">Cancel</button>
          </Link>
          <Link to="/profile" className="link">
            <button className="save_button">Save profile</button>
          </Link>
        </div>
      </form>
      <Footer />
    </main>
  );
};
