const BASE_URL = 'https://api.genderize.io';

const getData = async (name: string) => {
	try {
		const url = `${BASE_URL}?name=${name}`
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error('Запись не найдена');
		}

		const data = await response.json();

		alert(`${name} is ${data.gender}`);
	} catch (error) {
		if (error instanceof TypeError) {
			alert('Проблемы с сетью');
		} else if (error instanceof Error) {
			alert(error.message);
		} else {
			alert('Неизвестная ошибка');
		}
	}
}

export { getData }
