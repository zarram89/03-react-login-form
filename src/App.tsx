import { LoginForm } from './LoginForm'
import { RegistrationForm } from './RegistrationForm';
import { Genderize } from './Genderize';
import { Button } from './components/button/Button';
import { useState } from 'react';

function App() {
	const [showLogin, setShowLogin] = useState(true);

	const handleSubmit = (email: string, password: string): void => {
		console.log(`Пользователь успешно авторизован:\nЛогин: ${email}\nПароль: ${password}`);
	};

	const handleFormSwitch = () => {
		setShowLogin(!showLogin);
	}

	return (
		<div className="app-container">
			{showLogin ? (
				<div className="form-container">
					<LoginForm onSubmit={handleSubmit} />
					<Button
						onClick={handleFormSwitch}
						className="switch-button"
					>
						Switch to Registration Form
					</Button>
				</div>
			) : (
				<div className="form-container">
					<RegistrationForm onSubmit={handleSubmit} />
					<Button
						onClick={handleFormSwitch}
						className="switch-button"
					>
						Switch to Login Form
					</Button>
				</div>
			)}

			<Genderize />
		</div>
	);
}

export { App }
