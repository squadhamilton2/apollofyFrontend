import { CreateAccountHeader } from '../../components/Register/CreateAccountHeader';



export const Register2 = () => {
  
  return (
    <>
      <CreateAccountHeader />
      <form className="register_form" action="">

        <label className='register_labelForm' htmlFor=""> What's your name?</label>
        <input className='register_inputForm' type="text" />

        <p className='register_text'>By tapping on “Create an account, you agree to the Apollofy terms of use</p>

        <h3 className='register_smallTitle'>Terms of use</h3>
        <p className='register_text'>To learn more about how Apollofy collect, uses, shares and protects your personal data, Please see the Apollofy Privacy Policy.</p>

        <h3 className='register_smallTitle'>Privacy Policy</h3>
        <div className='register_toggle-switch-container'>
            <span className='register_textCheckbox'>Please send me news and offers from Apollofy.</span>
            <label className="register_toggle-switch">
                <input type="checkbox"/>
                <span className="register_toggle-slider"></span>
            </label>
        </div>
        <div className='register_toggle-switch-container'>
            <span className='register_textCheckbox'>Share my registration data with Apollofy´s content providens for marketin purposes..</span>
            <label className="register_toggle-switch">
                <input type="checkbox"/>
                <span className="register_toggle-slider"></span>
            </label>
        </div>

       

        <input type="submit" value="Create an Account" className='register_createAccountBtn'/>
      </form>
    </>
  )
}
// Share my registration data with Apollofy´s content providens for marketin purposes.