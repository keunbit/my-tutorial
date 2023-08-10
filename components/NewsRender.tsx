'use client';
import NewsCard from '@/components/NewsCard';

const NewsRender = ({newsList}: any) => {
	const newsItems = newsList.items;

	return (
		<div className="gird gird-col-1 gap-3 mx-auto w-full">
			{newsItems.map((news: any, index: number) => {
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
};

export default NewsRender;
