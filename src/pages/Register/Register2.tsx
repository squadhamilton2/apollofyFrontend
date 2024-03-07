import { CreateAccountHeader } from '../../components/Register/CreateAccountHeader';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export const Register2 = () => {
  
  const [form, setForm] = useState({ name: '', news: false, data: false})

  const navigate = useNavigate()
  
  
  

  
  const onChange = (e:Event) => {
    setForm({
      ...form,
      [e.target?.name]: e.target?.value
    })
  
  }

  const onChangeCheck = (e:Event) => {
    setForm({
      ...form,
      [e.target?.name]: e.target?.checked
    })
  }

  const onSubmit = (e) =>{
    e.preventDefault()
    let validation = true
    if( form.name.length < 3 ) {
      alert('name must be at least 3 characters')
      validation = false
    }
    if( form.data === false){
      alert('you must accept data management')
      validation = false
    }

    if (validation){
      alert('registration succesfull')
      //Here should be a post method to the backed to save the user information
      //Also it would be great if here we put an automatic login to the account created
      navigate('/login') //if the automatic login is implemented here it should navigate to '/'
    }
  }

  return (
    <>
      <CreateAccountHeader />
      <form onSubmit={ onSubmit } className="register_form" action="">

        <label className='register_labelForm' htmlFor=""> What's your name?</label>
        <input 
          className='register_inputForm' 
          type="text"
          name='name'
          value={ form.name }
          onChange={ onChange } 
        />

        <p className='register_text'>By tapping on “Create an account, you agree to the Apollofy terms of use</p>

        <h3 className='register_smallTitle'>Terms of use</h3>
        <p className='register_text'>To learn more about how Apollofy collect, uses, shares and protects your personal data, Please see the Apollofy Privacy Policy.</p>

        <h3 className='register_smallTitle'>Privacy Policy</h3>
        <div className='register_toggle-switch-container'>
            <span className='register_textCheckbox'>Please send me news and offers from Apollofy.</span>
            <label className="register_toggle-switch">
                <input 
                  type="checkbox"
                  name='news'
                  checked={ form.news }
                  onChange={ onChangeCheck } 
                />
                <span className="register_toggle-slider"></span>
            </label>
        </div>
        <div className='register_toggle-switch-container'>
            <span className='register_textCheckbox'>Share my registration data with Apollofy´s content providens for marketin purposes..</span>
            <label className="register_toggle-switch">
                <input 
                  type="checkbox"
                  name='data'
                  checked={ form.data }
                  onChange={ onChangeCheck } 
                />
                <span className="register_toggle-slider"></span>
            </label>
        </div>

       

        <input type="submit" value="Create an Account" className='register_createAccountBtn'/>
      </form>
    </>
  )
}
// Share my registration data with Apollofy´s content providens for marketin purposes.