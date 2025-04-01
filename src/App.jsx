import LoginForm from "./LoginForm";
import RegistarationForm from "./RegistrationForm"

export default function App() {
  const isVisible = false;

  const handleSubmit = (email, password) => {
    console.log(`Пользователь успешно авторизован:\nЛогин: ${email}\nПароль: ${password}`);
	};

  return isVisible ? (
    <LoginForm onSubmit={handleSubmit}/>
  ) : (
	<RegistarationForm onSubmit={handleSubmit}/>
  );
}
