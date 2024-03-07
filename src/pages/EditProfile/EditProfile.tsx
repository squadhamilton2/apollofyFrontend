import { SetStateAction, useState } from 'react';
import "./editprofile.css";
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';

export const EditProfile = () => {

  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [country, setCountry] = useState('');

  const handleDayChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setDay(event.target.value);
  }

  const handleMonthChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setMonth(event.target.value);
  }

  const handleYearChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setYear(event.target.value);
  }

  const currentYear = new Date().getFullYear();

  const handleCountryChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setCountry(event.target.value);
  }

  return (
    <main className="profile_settings">
      <h1 className="edit_profile">Edit profile</h1>

      <form className="profile_form">
        <input className='name_inputForm' type="text" placeholder="Name"/>
         
        <div className="date_selectors">
          <select className='profile_inputForm' value={day} onChange={handleDayChange}>
            <option value="">Day</option>
          
            {Array.from({length: 31}, (_, index) => index + 1).map(day => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>

          <select className='profile_inputForm' value={month} onChange={handleMonthChange}>
            <option value="">Month</option>
    
            {Array.from({length: 12}, (_, index) => index + 1).map(month => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>

          <select className='profile_inputForm' value={year} onChange={handleYearChange}>
            <option value="">Year</option>
      
            {Array.from({length: currentYear - 1929}, (_, index) => 1930 + index).map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
          </div>

        <div className="country_container">
          <select className='profile_inputForm country_inputForm' value={country} onChange={handleCountryChange}>
          <option value="">Select country</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
          <option value="Brazil">Brazi</option>
          <option value="France">France</option>
          <option value="Germany">Germany</option>
          <option value="Japan">Japan</option>
          <option value="China">China</option>
          <option value="Australia">Australia</option>
          <option value="Spain">Spain</option>
          </select>
        </div>
        

        <div className="buttons">
          <Link to="/profile" className="link"><button className="cancel_button">Cancel</button></Link>
          <Link to="/profile" className="link"><button className="save_button">Save profile</button></Link>
        </div>

      </form>
      <Footer />
    </main>
  );
};
