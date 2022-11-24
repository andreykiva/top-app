import { useState } from 'react';
import { Button, Htag, Ptag, Rating, Tag } from '../components';

const Home = (): JSX.Element => {
	const [rating, setRating] = useState<number>(4);

	return (
		<>
			<Htag tag="h1">OwlTop</Htag>
			<Button appearance="primary" arrow="right">
				Узнать подробнее
			</Button>
			<Button appearance="ghost" arrow="down">
				Узнать подробнее
			</Button>
			<Ptag size="s">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint optio, beatae sit veniam fugiat, dolores
				assumenda odio iste debitis ipsa minus quos quam eum dolore! Nostrum amet iure officia aspernatur.
			</Ptag>
			<Tag size="m" color="ghost">
				Ghost
			</Tag>
			<Tag size="s" color="red">
				Ghost
			</Tag>
			<Tag size="m" color="gray">
				Ghost
			</Tag>
			<Tag size="m" color="green">
				Ghost
			</Tag>
			<Tag size="m" href="https://google.com" color="primary">
				Ghost
			</Tag>
			<Rating rating={rating} isEditable setRating={setRating} />
		</>
	);
};

export default Home;
