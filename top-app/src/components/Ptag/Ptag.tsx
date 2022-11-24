import { PtagProps } from './Ptag.props';
import styles from './Ptag.module.css';

export const Ptag = ({ size = 'm', children, className, ...props }: PtagProps): JSX.Element => {
	const cls = [styles.p, className, styles[size]];

	return (
		<p className={cls.join(' ')} {...props}>
			{children}
		</p>
	);
};
