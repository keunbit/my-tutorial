'use client';
import useSWR from 'swr';

import {useForm} from 'react-hook-form';
import {Button} from './Button';
import {Input} from './Input';
import {useState} from 'react';

interface SearchForm {
	text: string;
}

async function fetcher(url: string) {
	const data = await fetch(url).then((res) => res.json());
	return data;
}

const SearchBar = ({setNewsList}: any) => {
	const [query, setQuery] = useState<string>('');
	const {register, handleSubmit, reset} = useForm<SearchForm>();
	const url = `/api/search?text=${query}`;

	const {data, error, isValidating} = useSWR(url, fetcher);
	const onValid = (data: SearchForm) => {
		console.log(data);
		setQuery(data.text);
	};

	if (data && data.ok) {
		// api 서버러도부터 data를 잘 가져올 경우 업데이트
		setNewsList(data.result);
	}

	return (
		<form className="flex" onSubmit={handleSubmit(onValid)}>
			<Input
				name="text"
				type="text"
				placeholder="type keywords..."
				register={register('text', {required: true})}
				required
			/>
			<Button className="items-center my-1 justify-center mx-3">
				검색
			</Button>
		</form>
	);
};

export default SearchBar;
