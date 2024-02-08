import React,{ useState } from 'react'
import "./LoginScreen.css"

const LoginScreen = () => {
    const [signIn,setSignIn] = useState(false)
  return(
  <div className="loginScreen">
    <img className='loginBackground'
     src="https://miro.medium.com/v2/resize:fit:1400/1*5lyavS59mazOFnb55Z6znQ.png" 
       alt='' />
    <div className='loginScreen_background'>
        <img className='loginScreen_logo'
     src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1597px-Netflix_2015_logo.svg.png" 
       alt='' />
        <button className='loginScreen_button' onClick={() => setSignIn(true)}>
            Sign In</button>
            <div className='loginScreen_gradient'/>
            </div>
            <div className='loginScreen_body'>
                {
                    signIn ? (
                        <signInScreen/>
                    ) : (
                        <>
                        <h1>Unlimited files, TV programes and more.</h1>
                        <h2>Watch anywhere. Cancel at any time.</h2>
                        <h3>Ready to watch? Enter your email to Add create or reset your membership. </h3>
                        <div className="loginScreen_input">
                      <form>
                        <input type='email' placeholder='Email Addess'/>
                        <button onClick={() => setSignIn(true)}
                        className='loginScreen_getStarted'>
                            GET STARTED
                        </button>
                      </form>
                      </div>
                        </>
                    )
                }
    </div>
  </div>
  )
}

export default LoginScreen