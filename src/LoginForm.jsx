import Button from './Button'
import './LoginForm.css'

export default function LoginForm({onSubmit}) {
  return (
    <div className="auth">
      <form className="auth__form" action="#" method="post" autoComplete="off" onSubmit={onSubmit}>
        <h1 className="auth__title">Login Form</h1>
        <div>
          <label>
            <span className="visually-hidden">Enter your name</span>
            <input type="text" name="username" placeholder="Username" required/>
          </label>
        </div>
        <div>
          <label>
            <span className="visually-hidden">Enter your password</span>
            <input type="password" name="password" placeholder="Password" required/>
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
