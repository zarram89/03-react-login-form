import LoginButton from "./LoginButton.jsx"
import './LoginForm.css'

export default function LoginForm() {
  return (
    <div className="auth">
      <form className="auth__form" action="#" method="post" autoComplete="off">
        <h1 class="auth__title">Login Form</h1>
          <div>
		  <label>
            <input type="text" name="username" placeholder="Username"/>
          </label>
		  </div>
		  <div>
          <label>
            <input type="password" name="password" placeholder="Password" />
          </label>
		  </div>
          <LoginButton />
      </form>

    </div>
  )
}
