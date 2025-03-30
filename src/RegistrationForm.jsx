import './LoginForm.css'

export default function RegistarationForm() {
  return (
    <div className="auth">
      <form className="auth__form" action="#" method="post" autoComplete="off">
        <h1 className="auth__title">Registration Form</h1>
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
            <span className="visually-hidden">Confirm your password</span>
            <input type="password" name="confirm-password" placeholder="Confirm password" />
          </label>
        </div>
        <div>
          <label>
            <span className="visually-hidden">Enter your email address</span>
            <input type="email" name="email" placeholder="Confirm email" />
          </label>
        </div>
        <button className="auth__button" type="submit">Register</button>
      </form>
    </div>
  )
}
