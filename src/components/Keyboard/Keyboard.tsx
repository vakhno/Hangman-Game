import React from 'react';
// styles
import styles from './styles.module.scss';
// assets
import KEYS from '../../assets/keys.json';

type KeyboardProps = {
	disabled: boolean;
	activeLetters: string[];
	inactiveLetters: string[];
	addGuessedLetter: (letter: string) => void;
};

function Keyboard({ disabled, activeLetters, inactiveLetters, addGuessedLetter }: KeyboardProps) {
	return (
		<div className={styles.keyboard}>
			{KEYS.map((keyLetter, index) => {
				const isActive = activeLetters.includes(keyLetter);
				const isInactive = inactiveLetters.includes(keyLetter);
				return (
					<button
						onClick={() => addGuessedLetter(keyLetter)}
						className={`${styles.button} ${isActive ? styles.active : ''} ${
							isInactive ? styles.inactive : ''
						}`}
						disabled={isInactive || isActive || disabled}
						key={`${index}_${keyLetter}`}>
						{keyLetter}
					</button>
				);
			})}
		</div>
	);
}

export default Keyboard;
