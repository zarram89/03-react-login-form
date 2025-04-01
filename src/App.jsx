import LoginForm from "./LoginForm";
import RegistarationForm from "./RegistrationForm"

export default function App() {
  const isVisible = true;

  const handleSubmit = (e, username, password) => {
    e.preventDefault();
    console.log(`Пользователь успешно авторизован:\nЛогин: ${username}\nПароль: ${password}`);
	};

  return isVisible ? (
    <LoginForm onSubmit={handleSubmit}/>
  ) : (
	<RegistarationForm onSubmit={handleSubmit}/>
  );
}
