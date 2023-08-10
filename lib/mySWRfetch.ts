import useSWR from 'swr';

async function fetcher(url: string) {
	const data = await fetch(url).then((res) => res.json());
	return data;
}

const useFetch = (text: string) => {
	const url = `/api/search?text=${text}`;
	const {data, error, isValidating} = useSWR(url, fetcher);
	return {
		data,
		isValidating,
		isLoading: !data && !error,
	};
};

export default useFetch;
