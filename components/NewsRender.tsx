'use client';
import NewsCard from '@/components/NewsCard';
import {searchTextStore} from '@/lib/store';
import useFetch from '@/lib/mySWRFetch';

const NewsRender = () => {
	const {text} = searchTextStore();
	const {data, isLoading} = useFetch(text);

	if (data && data.ok) {
		const newsItems = data?.result.items;
		return (
			<div className="gird gird-col-1 gap-3 mx-auto w-full">
				{newsItems &&
					newsItems.map((news: any, index: number) => {
						return (
							<NewsCard
								key={index}
								title={news.title}
								description={news.description}
							/>
						);
					})}
			</div>
		);
	} else {
		return <div></div>;
	}
};

export default NewsRender;
