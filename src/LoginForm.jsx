import './LoginForm.css'

export default function LoginForm() {
  return (
    <div className="auth">
      <form className="auth__form" action="#" method="post" autoComplete="off">
        <h1 className="auth__title">Login Form</h1>
        <div>
          <label>
            <span className="visually-hidden">Enter your name</span>
            <input type="text" name="username" placeholder="Username" />
          </label>
        </div>
        <div>
          <label>
            <span className="visually-hidden">Enter your password</span>
            <input type="password" name="password" placeholder="Password" />
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="remember" />
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        <button className="auth__button" type="submit">Login</button>
      </form>
    </div>
  )
}
