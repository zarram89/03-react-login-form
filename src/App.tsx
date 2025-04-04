import { LoginForm } from './LoginForm'
import { RegistrationForm } from './RegistrationForm';
import { Genderize } from './Genderize';

function App() {
	const isVisible = true;

	const handleSubmit = (email: string, password: string): void => {
		console.log(`Пользователь успешно авторизован:\nЛогин: ${email}\nПароль: ${password}`);
	};

	return isVisible ? (
		<>
			<LoginForm onSubmit={handleSubmit} />
			<Genderize />
		</>
	) : (
		<RegistrationForm onSubmit={handleSubmit} />
	);
}

export { App }
