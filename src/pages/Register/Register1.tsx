import { CreateAccountHeader } from '../../components/Register/CreateAccountHeader';
import { useFetchDBJSON } from '../../hooks/useFetch';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { User } from '../../types/types';



export const Register1 = () => {


  const [form, setForm] = useState({ email: '', password: '', gender: 'woman'})

  const navigate = useNavigate()
  
  const { user }:{ user: User[]} = useFetchDBJSON()
  

  
  const onChange = (e:Event) => {
    setForm({
      ...form,
      [e.target?.name]: e.target?.value
    })
  
  }
  
  const onSubmit = (e:Event) => {
    e.preventDefault()
    let validation = true
    if( !form.email.split('').includes('@') ){
      alert('email invalido')
      validation = false
    }
    if( form.password.length < 6 ){
      alert('password must be at least 6 characters')
      validation = false
    }
    
    user.map( eachUser => {
      if( eachUser.email === form.email ){
        alert('email already in use')
        validation = false
      }
    })

    if (validation) navigate('/register2')
  }

  return (
    <>
      <CreateAccountHeader />
      <form onSubmit={ onSubmit } className="register_form" action="">

        <label className='register_labelForm' htmlFor=""> What's your Email?</label>
        <input 
          className='register_inputForm' 
          type="email"
          name='email'
          value={ form.email }
          onChange={ onChange } 
        />

        <label className='register_labelForm' htmlFor="">Create a password</label>
        <input 
          className='register_inputForm' 
          type="password"
          name='password'
          value={ form.password }
          onChange={ onChange } 
        />

        <label className='register_labelForm' htmlFor="">What's your gender?</label>
        <select 
          className='register_inputForm' 
          name="gender" 
          value={ form.gender }
          onChange={ onChange } 
        >
          <option value="woman">Woman</option>
          <option value="man">Man</option>
          <option value="other">Other</option>
        </select>

        <input type="submit" value="Next" className='register_nextBtn'/>
      </form>
    </>
  )
}
