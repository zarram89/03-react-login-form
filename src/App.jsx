import LoginForm from "./LoginForm";
import RegistarationForm from "./RegistrationForm"
import Genderize from "./Genderize";

export default function App() {
  const isVisible = true;

  const handleSubmit = (email, password) => {
    console.log(`Пользователь успешно авторизован:\nЛогин: ${email}\nПароль: ${password}`);
	};

  return isVisible ? (
    <>
      <LoginForm onSubmit={handleSubmit}/>
      <Genderize />
    </>
  ) : (
	<RegistarationForm onSubmit={handleSubmit}/>
  );
}
