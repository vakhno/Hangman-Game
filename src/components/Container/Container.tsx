import React, { useState, useEffect, useCallback } from 'react';
// styles
import styles from './styles.module.scss';
// components
import Drawing from '../Drawing/Drawing.tsx';
import Word from '../Word/Word.tsx';
import Keyboard from '../Keyboard/Keyboard.tsx';
import Title from '../Title/Title.tsx';
// assets
import WORDLIST from '../../assets/wordList.json';

const getWord = () => WORDLIST[Math.floor(Math.random() * WORDLIST.length)];

function Container() {
	const [wordToGuess, setWordToGuess] = useState(() => {
		return WORDLIST[Math.floor(Math.random() * WORDLIST.length)];
	});
	const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
	const incorrectLetters = guessedLetters.filter((letter) => !wordToGuess.includes(letter));
	const isLoser = incorrectLetters.length >= 6;
	const isWinner = wordToGuess.split('').every((letter) => guessedLetters.includes(letter));

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			const key = e.key;
			if (!key.match(/^[a-z]$/)) {
				return;
			}
			e.preventDefault();
			addGuessedLetter(key);
		};
		document.addEventListener('keypress', handler);
		return () => {
			document.removeEventListener('keypress', handler);
		};
	}, [guessedLetters]);

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			const key = e.key;
			if (key !== 'Enter') {
				return;
			}
			e.preventDefault();
			setGuessedLetters([]);
			setWordToGuess(getWord());
		};
		document.addEventListener('keypress', handler);
		return () => {
			document.removeEventListener('keypress', handler);
		};
	});

	const addGuessedLetter = useCallback(
		(letter: string) => {
			if (!guessedLetters.includes(letter) || isLoser || isWinner) {
				setGuessedLetters((prev) => [...prev, letter]);
			}
		},
		[guessedLetters, isLoser, isWinner],
	);

	return (
		<div className={styles.container}>
			<Title isWinner={isWinner} isLoser={isLoser} />
			<Drawing numberOfGuesses={incorrectLetters.length} />
			<Word reveal={isLoser} wordToGuess={wordToGuess} guessedLetters={guessedLetters} />
			<Keyboard
				disabled={isWinner || isLoser}
				activeLetters={guessedLetters.filter((letter) => guessedLetters.includes(letter))}
				inactiveLetters={incorrectLetters}
				addGuessedLetter={addGuessedLetter}
			/>
		</div>
	);
}

export default Container;
