import { useState } from 'react'
import Button from './Button'
import './LoginForm.css'

export default function LoginForm({onSubmit}) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  function handleEmailChange(e) {
    setCredentials({
      ...credentials,
      email: e.target.value,
    });
  }

  function handlePasswordChange(e) {
    setCredentials({
      ...credentials,
      password: e.target.value,
    });
  }

  return (
    <div className="auth">
      <form className="auth__form" action="#" method="post" autoComplete="off" onSubmit={(e) => {
        e.preventDefault();
        onSubmit(credentials.email, credentials.password)}
      }>
        <h1 className="auth__title">Login Form</h1>
        <div>
          <label>
            <span className="visually-hidden">Enter your email</span>
            <input type="text" name="email" placeholder="Email" value={credentials.email} onChange={handleEmailChange} required/>
          </label>
        </div>
        <div>
          <label>
            <span className="visually-hidden">Enter your password</span>
            <input type="password" name="password" placeholder="Password" value={credentials.password} onChange={handlePasswordChange} required/>
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="remember" /> Remember me
          </label>
        </div>
		<div>
		<a href="#">Forgot Password?</a>
		</div>
        <Button>Login</Button>
      </form>
    </div>
  )
}
