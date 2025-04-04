import { useState, FormEvent } from 'react'
import { getData } from './services/genderize';

function Genderize() {
	const [name, setName] = useState('');


	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		getData(name);
	}

	return (
		<div className="genderize-container auth">
			<h2 className="auth__title">Genderize</h2>
			<form className="auth__form" onSubmit={handleSubmit}>
				<label>
					<span className="visually-hidden">Enter your name</span>
					<input className="genderize-input" type="text" placeholder="Your name" onChange={(e) => setName(e.target.value)} />
				</label>
				<button className="genderize-button" type="submit">Genderize name!</button>
			</form>
		</div>
	)
}

export { Genderize }
