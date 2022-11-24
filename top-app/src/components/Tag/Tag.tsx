import { TagProps } from './Tag.props';
import styles from './Tag.module.css';

export const Tag = ({
	size = 's',
	color = 'ghost',
	href,
	children,
	className,
	...props
}: TagProps): JSX.Element => {
	const cls = [styles.tag, className, styles[size], styles[color]];

	return (
		<div className={cls.join(' ')} {...props}>
			{href ? <a href={href}>{children}</a> : children}
		</div>
	);
};
