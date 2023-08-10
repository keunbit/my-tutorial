const NewsCard = ({title, description}: any) => {
	return (
		<div className="p-3 m-3 border border-gray-400 shadow-lg rounded-lg">
			<h1>{title}</h1>
			<p>{description}</p>
		</div>
	);
};
export default NewsCard;
