'use client';
import useSWR from 'swr';

import {useForm} from 'react-hook-form';
import {Button} from './Button';
import {Input} from './Input';
import {searchTextStore} from '@/lib/store';

interface SearchForm {
	text: string;
}

const SearchBar = () => {
	const {setSearchText} = searchTextStore();
	const {register, handleSubmit, reset} = useForm<SearchForm>();

	const onValid = (data: SearchForm) => {
		console.log(data);
		setSearchText({text: data.text});
	};

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
