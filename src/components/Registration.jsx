import React, {useState, useEffect} from "react";

const Registration = (props) => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
  
    const [emailDirty, setEmailDirty] = useState(false) //состояние то есть нечего нет 
    const [passwordDirty, setPasswordDirty] = useState(false)
  
    const [ emailError, setEmailError ] = useState('incorrectly')
    const [ passwordError, setPasswordError] = useState('incorrectly')
  
    const [formValid, setFormValid] = useState(false)
  
  
    // если все хуки тру то форма валидна и отправляется для этого проверка введены ли корректно емаил пароль
  useEffect(() => {
    if(emailError || passwordError){
        setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailError, passwordError]); // активация кнопки для отправки формы disabli
  
  
  
  const emailHandler = (event) =>{
    setEmail(event.target.value)
     const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
     if (!re.test(String(event.target.value).toLocaleLowerCase())){
       setEmailError('incorrectly')
     } else {
       setEmailError('')
     }
  }
  
  const passwordHandler = (event) =>{
    setPassword(event.target.value)
    if(event.target.value.length < 3 || event.target.value.length > 8){
      setPasswordError('пароль должен бытьбольше 3х и меньше 8')
      if(!event.target.value){
        setPasswordError("---пароль не может быть пустым")
      }
    } else {
      setPasswordError(" ")
    }
  }
  
  const blurHandler = (event) =>{
    switch(event.target.name){
      case 'email':
        setEmailDirty(true)
        break
        case 'password':
          setPasswordDirty(true)
          break
    }
  }  //события при наводе на инпут 
  
  
  
    return (
      <div className="App">
          <div> <img src="Images\logo.svg" alt="" /> </div>
         <h1>Create your Account</h1>
        <form>
         
        
          <input 
          onChange={event => emailHandler(event)}
          onBlur={ event => blurHandler(event)}
           name='email'
           type='text'
            placeholder='email'/>
               {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}  
  <br/>
         
          <input
          onChange={event => passwordHandler(event)} //при вводе
          onBlur={ event => blurHandler(event)}  //при наводе 
           name='password'
            type='password'
             placeholder='password'/>
              {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
  <br/>
          <button disabled={!formValid} type='submit'>Continue</button>
        </form>
  
  <div> Already have an account? <a href="##"> Login </a></div>
  

      </div>
  );
};

export default Registration;
