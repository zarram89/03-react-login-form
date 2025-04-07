const BASE_URL = 'https://api.genderize.io';

type AnswerProps = {
	count: number;
	name: string;
	gender: string | null;
	probability: number;
}

const getAnswer = async (name: string): Promise<AnswerProps> => {
	try {
		const url = `${BASE_URL}?name=${encodeURIComponent(name)}`;
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error('Name not found');
		}

		return await response.json();
	} catch (error) {
		if (error instanceof TypeError) {
			throw new Error('Network problems');
		}
		throw error;
	}
}

export { getAnswer, AnswerProps }
