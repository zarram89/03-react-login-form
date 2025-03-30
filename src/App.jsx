import LoginForm from "./LoginForm";
import RegistarationForm from "./RegistrationForm"

export default function App() {
  const isVisible = false;

  const handleSubmit = (e) => {
	e.preventDefault();
	const username = e.target.username.value;
	const password = e.target.password.value;
	console.log(`Пользователь успешно авторизован:\nЛогин: ${username}\nПароль: ${password}`);
	};

  return isVisible ? (
    <LoginForm onSubmit={handleSubmit}/>
  ) : (
	<RegistarationForm onSubmit={handleSubmit}/>
  );
}
