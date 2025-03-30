import LoginForm from "./LoginForm";
import RegistarationForm from "./RegistrationForm";

export default function App() {
  const isAuth = false;

  return (
    isAuth ? 
      <LoginForm /> : <RegistarationForm />
  );
}
