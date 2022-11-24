import { ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';
import styles from './Button.module.css';

export const Button = ({
	children,
	arrow = 'none',
	appearance,
	className,
	...props
}: ButtonProps): JSX.Element => {
	const btnCls = [styles.button, className, styles[appearance]];
	const arrowCls = [styles.arrow, styles[arrow]];

	return (
		<button className={btnCls.join(' ')} {...props}>
			{children}
			{arrow !== 'none' && (
				<span className={arrowCls.join(' ')}>
					<ArrowIcon />
				</span>
			)}
		</button>
	);
};
