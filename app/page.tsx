'use client';

import NewsRender from '@/components/NewsRender';
import SearchBar from '@/components/Searchbar';
import {NextPage} from 'next';
import {useState} from 'react';

const Home: NextPage = () => {
	const [newsList, setNewsList] = useState([]);
	return (
		<main className="flex flex-col items-center justify-between">
			<div className="pt-24">
				<SearchBar setNewsList={setNewsList} />
			</div>
			<div className="pt-6">
				{newsList.length === 0 ? (
					<div className="flex justify-center items-center">
						<h1>검색 결과가 없습니다.</h1>
					</div>
				) : (
					<NewsRender newsList={newsList} />
				)}
			</div>
		</main>
	);
};

export default Home;
