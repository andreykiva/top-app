import { RatingProps } from './Rating.props';
import { useEffect, useState, KeyboardEvent } from 'react';
import styles from './Rating.module.css';
import StarIcon from './star.svg';
import cn from 'classnames';

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const changeDisplay = (i: number) => {
		if (!isEditable) {
			return;
		}
		constructRating(i);
	};

	const onClick = (i: number) => {
		if (!isEditable || !setRating) {
			return;
		}
		setRating(i);
	};

	const handleSpace = (e: KeyboardEvent<SVGElement>, i: number) => {
		if (e.code !== 'Space' || !setRating) {
			return;
		}
		setRating(i);
	};

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => (
			<span
				className={cn(styles.star, {
					[styles.filled]: i < currentRating,
					[styles.isEditable]: isEditable,
				})}
				key={i}
				onMouseEnter={changeDisplay.bind(this, i + 1)}
				onMouseLeave={changeDisplay.bind(this, rating)}
				onClick={onClick.bind(this, i + 1)}
			>
				<StarIcon
					tabIndex={isEditable ? 0 : -1}
					onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(e, i + 1)}
				/>
			</span>
		));

		setRatingArray(updatedArray);
	};

	return (
		<div {...props}>
			{ratingArray.map((r: JSX.Element, i: number) => (
				<span key={i}>{r}</span>
			))}
		</div>
	);
};
