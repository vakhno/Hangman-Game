import React from 'react';
// styles
import styles from './styles.module.scss';

type TitleProps = {
	isWinner: boolean;
	isLoser: boolean;
};

function Title({ isWinner = false, isLoser = false }: TitleProps) {
	return (
		<div className={styles.title}>
			{isWinner
				? 'Win! Press ENTER to restart!'
				: isLoser
				? 'Lose! Press ENTER to restart!'
				: 'In progress!'}
		</div>
	);
}

export default Title;
