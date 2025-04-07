import { useState, FormEvent } from 'react';
import { getAnswer, AnswerProps } from './services/genderize';
import { nameSchema } from './services/schemas';
import { z } from 'zod';

function Genderize() {
	const [name, setName] = useState('');
	const [answer, setAnswer] = useState<AnswerProps | null>(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [validationError, setValidationError] = useState<string | null>(null);

	async function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		try {
			nameSchema.parse(name);
			setValidationError(null);

			setLoading(true);
			setError(null);
			setAnswer(null);

			const data = await getAnswer(name);
			setAnswer(data);
		} catch (err) {
			if (err instanceof z.ZodError) {
				setValidationError(err.errors[0].message);
			} else {
				setError(err instanceof Error ? err.message : 'Неизвестная ошибка');
			}
		} finally {
			setLoading(false);
		}
	}

	function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
		const value = e.target.value;
		setName(value);

		try {
			nameSchema.parse(value);
			setValidationError(null);
		} catch (err) {
			if (err instanceof z.ZodError) {
				setValidationError(err.errors[0].message);
			}
		}
	}

	return (
		<div className="genderize-container auth">
			<h2 className="auth__title">Genderize</h2>
			<form className="auth__form" onSubmit={handleSubmit}>
				<label>
					<span className="visually-hidden">Enter your name</span>
					<input
						className={`genderize-input ${validationError ? 'input-error' : ''}`}
						type="text"
						placeholder="Your name"
						value={name}
						onChange={handleNameChange}
					/>
				</label>
				{validationError && (
					<div className="error-message">{validationError}</div>
				)}
				<button
					className="genderize-button"
					type="submit"
					disabled={loading}
				>
					{loading ? 'Loading...' : 'Genderize name!'}
				</button>
			</form>

			{loading && <div>Loading...</div>}
			{error && <div className="error-message">Error: {error}</div>}
			{answer && (
				<div className="result-container">
					<p><b>Name</b>: {answer.name}</p>
					{answer.gender ? (
						<>
							<p><b>Gender</b>: {answer.gender}</p>
							<p><b>Probability</b>: {(answer.probability * 100).toFixed(1)}%</p>
						</>
					) : (
						<p><b>Gender not found for this name!</b></p>
					)}
				</div>
			)}
		</div>
	);
}

export { Genderize };
