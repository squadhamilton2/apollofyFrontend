import { Link } from 'react-router-dom';
import { CreateAccountHeader } from '../../components/Register/CreateAccountHeader';



export const Register1 = () => {
  
  return (
    <>
      <Link to="/" className='link'><CreateAccountHeader /></Link>
      <form className="register_form" action="">

        <label className='register_labelForm' htmlFor=""> What's your Email?</label>
        <input className='register_inputForm' type="email" />

        <label className='register_labelForm' htmlFor="">Create a password</label>
        <input className='register_inputForm' type="text" />

        <label className='register_labelForm' htmlFor="">What's your gender?</label>
        <select className='register_inputForm' name="" id="">
          <option value="woman">Woman</option>
          <option value="man">Man</option>
          <option value="other">Other</option>
        </select>

        <Link to="/register2" className='link'><input type="submit" value="Next" className='register_nextBtn'/></Link>
      </form>
    </>
  )
}
