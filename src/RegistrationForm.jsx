import {useState} from 'react';
import Button from './Button'
import './LoginForm.css'

export default function RegistarationForm({onSubmit}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  return (
    <div className="auth">
      <form className="auth__form" action="#" method="post" autoComplete="off" onSubmit={(e) => onSubmit(e, username, password)}>
        <h1 className="auth__title">Registration Form</h1>
        <div>
          <label>
            <span className="visually-hidden">Enter your name</span>
            <input type="text" name="username" placeholder="Username" value={username} onChange={handleUsernameChange} required/>
          </label>
        </div>
        <div>
          <label>
            <span className="visually-hidden">Enter your password</span>
            <input type="password" name="password" placeholder="Password" value={password} onChange={handlePasswordChange} required/>
          </label>
        </div>
        <div>
          <label>
            <span className="visually-hidden">Confirm your password</span>
            <input type="password" name="confirm-password" placeholder="Confirm password" required/>
          </label>
        </div>
        <div>
          <label>
            <span className="visually-hidden">Enter your email address</span>
            <input type="email" name="email" placeholder="Confirm email" required/>
          </label>
        </div>
        <Button>Register</Button>
      </form>
    </div>
  )
}
