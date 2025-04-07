import { useState, FormEvent, ChangeEvent } from 'react';
import { Button } from './components/button/Button';
import './LoginForm.css';
import { emailSchema, passwordSchema } from './services/schemas';
import { z } from 'zod';

interface FormProps {
	onSubmit: (email: string, password: string) => void;
}

function LoginForm({ onSubmit }: FormProps) {
	const [credentials, setCredentials] = useState({
		email: '',
		password: '',
	});
	const [errors, setErrors] = useState({
		email: '',
		password: '',
	});

	function validateField(name: 'email' | 'password', value: string): boolean {
		try {
			if (name === 'email') {
				emailSchema.parse(value);
			} else {
				passwordSchema.parse(value);
			}
			setErrors(prev => ({ ...prev, [name]: '' }));
			return true;
		} catch (err) {
			if (err instanceof z.ZodError) {
				setErrors(prev => ({ ...prev, [name]: err.errors[0].message }));
			}
			return false;
		}
	}

	function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
		const value = e.target.value;
		setCredentials({
			...credentials,
			email: value,
		});
		validateField('email', value);
	}

	function handlePasswordChange(e: ChangeEvent<HTMLInputElement>) {
		const value = e.target.value;
		setCredentials({
			...credentials,
			password: value,
		});
		validateField('password', value);
	}

	const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const isEmailValid = validateField('email', credentials.email);
		const isPasswordValid = validateField('password', credentials.password);

		if (isEmailValid && isPasswordValid) {
			onSubmit(credentials.email, credentials.password);
		}
	};

	return (
		<div className="auth">
			<form className="auth__form" autoComplete="off" onSubmit={handleFormSubmit}>
				<h1 className="auth__title">Login Form</h1>
				<div>
					<label>
						<span className="visually-hidden">Enter your email</span>
						<input
							type="email"
							name="email"
							placeholder="Email"
							value={credentials.email}
							onChange={handleEmailChange}
							className={errors.email ? 'input-error' : ''}
						/>
					</label>
					{errors.email && <div className="error-message">{errors.email}</div>}
				</div>
				<div>
					<label>
						<span className="visually-hidden">Enter your password</span>
						<input
							type="password"
							name="password"
							placeholder="Password"
							value={credentials.password}
							onChange={handlePasswordChange}
							className={errors.password ? 'input-error' : ''}
						/>
					</label>
					{errors.password && <div className="error-message">{errors.password}</div>}
				</div>
				<Button
					type="submit"
					disabled={!!errors.email || !!errors.password || !credentials.email || !credentials.password}
				>
					Login
				</Button>
			</form>
		</div>
	);
}

export { LoginForm };
