import { useState } from "react";

export default function Genderize() {
  const [name, setName] = useState('');

  function getGenderByName() {
    const serverUrl = 'https://api.genderize.io';
    const url = `${serverUrl}?name=${name}`
    fetch(url)
      .then(response => {
        if (response.status === 404) {
          throw new Error('Запись не найдена');
        }
        return response.json();
      })
      .then(data => alert(`${name} is ${data.gender}`))
  }

  function handleSubmit(e) {
    e.preventDefault();
    getGenderByName();
  }

  return (
    <div className="genderize-container auth">
      <h2 className="auth__title">Genderize</h2>
      <form className="auth__form"  onSubmit={handleSubmit}>
        <label>
          <span className="visually-hidden">Enter your name</span>
          <input className="genderize-input" type="text" placeholder="Your name" onChange={(e) => setName(e.target.value)}/>
        </label>
        <button className="genderize-button" type="submit">Genderize name!</button>
      </form> 
    </div>
  )
}

