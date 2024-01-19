import React from 'react';
// styles
import styles from './styles.module.scss';

type WordProps = {
	reveal?: boolean;
	guessedLetters: string[];
	wordToGuess: string;
};

function Word({ reveal = false, guessedLetters = [], wordToGuess = '' }: WordProps) {
	return (
		<div className={styles.word}>
			{wordToGuess.split('').map((wordLetter, index) => {
				return (
					<div className={styles.letter} key={`${index}_${wordLetter}`}>
						<span
							className={`${
								guessedLetters.includes(wordLetter) || reveal
									? styles.letter__visible
									: styles.letter__hidden
							} ${
								!guessedLetters.includes(wordLetter) && reveal
									? styles.letter__unguessed
									: styles.letter__guessed
							}`}>
							{wordLetter}
						</span>
					</div>
				);
			})}
		</div>
	);
}

export default Word;
