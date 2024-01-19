import React from 'react';
// styles
import styles from './styles.module.scss';

const CONSTRUCTION = {
	PLATFORM: <div key={0} className={styles.gallows__platform}></div>,
	VERTICAL: <div key={1} className={styles.gallows__vertical}></div>,
	HORIZONTAL: <div key={2} className={styles.gallows__horizontal}></div>,
	ROPE: <div key={3} className={styles.gallows__rope}></div>,
};

const FIGURE = {
	HEAD: <div key={0} className={styles.victim__head}></div>,
	BODY: <div key={1} className={styles.victim__body}></div>,
	RIGHTARM: <div key={2} className={styles.victim__rightArm}></div>,
	LEFTARM: <div key={3} className={styles.victim__leftArm}></div>,
	RIGHTLEG: <div key={4} className={styles.victim__rightLeg}></div>,
	LEFTLEG: <div key={5} className={styles.victim__leftLeg}></div>,
};

const VICTIM = [
	FIGURE.HEAD,
	FIGURE.BODY,
	FIGURE.RIGHTARM,
	FIGURE.LEFTARM,
	FIGURE.LEFTLEG,
	FIGURE.RIGHTLEG,
];

const GALLOWS = [
	CONSTRUCTION.PLATFORM,
	CONSTRUCTION.VERTICAL,
	CONSTRUCTION.HORIZONTAL,
	CONSTRUCTION.ROPE,
];

type DrawingProps = {
	numberOfGuesses: number;
};

function Drawing({ numberOfGuesses }: DrawingProps) {
	return (
		<div className={styles.drawing}>
			{VICTIM.slice(0, numberOfGuesses)}
			{GALLOWS.slice(0, GALLOWS.length)}
		</div>
	);
}

export default Drawing;
