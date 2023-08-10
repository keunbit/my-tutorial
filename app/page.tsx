'use client';

import NewsRender from '@/components/NewsRender';
import SearchBar from '@/components/Searchbar';
import {NextPage} from 'next';
import {useState} from 'react';

const Home: NextPage = () => {
	return (
		<main className="flex flex-col items-center justify-between">
			<div className="pt-24">
				<SearchBar />
			</div>
			<div className="pt-6">
				<NewsRender />
			</div>
		</main>
	);
};

export default Home;
