import { useState, FormEvent, ChangeEvent } from 'react'
import { Button } from './components/button/Button'
import './LoginForm.css'

interface FormProps {
	onSubmit: (email: string, password: string) => void
}

function RegistrationForm({ onSubmit }: FormProps) {
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});

	function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
		setCredentials({
			...credentials,
			email: e.target.value,
		});
	}

	function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
		setCredentials({
			...credentials,
			password: e.target.value,
		});
	}

	const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmit(credentials.email, credentials.password);
	};

	return (
		<div className="auth">
			<form className="auth__form" action="#" method="post" autoComplete="off" onSubmit={handleFormSubmit}>
				<h1 className="auth__title">Registration Form</h1>
				<div>
					<label>
						<span className="visually-hidden">Enter your email</span>
						<input type="text" name="email" placeholder="Email" value={credentials.email} onChange={handleEmailChange} required />
					</label>
				</div>
				<div>
					<label>
						<span className="visually-hidden">Enter your password</span>
						<input type="password" name="password" placeholder="Password" value={credentials.password} onChange={handlePasswordChange} required />
					</label>
				</div>
				<Button>Register</Button>
			</form>
		</div>
	)
}

export { RegistrationForm }
