import { useState, useEffect } from 'react';
import pokemon from '../api/pokemon';

const useFetch = () => {
	const [data, setData] = useState({
		name: '',
		results: {},
		isEnter: false,
	});

	useEffect(() => {
		if (data.name !== '') {
			const fetch = async () => {
				try {
					const res = await pokemon.get(`${data.name}`);
					setData({ ...data, results: res.data, isEnter: true });
				} catch (err) {
					setData({ name: '', results: {}, isEnter: false });
					console.log(err);
				}
			};
			fetch();
		}
	}, [data.name]);

	return { data, setData };
};

export default useFetch;
