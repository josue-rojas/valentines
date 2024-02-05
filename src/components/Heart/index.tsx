import styles from './styles.module.css';
import { useEffect, useState } from 'react';

const HEART_COLORS = [
  'pink',
  'red',
  'rgb(139, 9, 32)',
  'rgb(153, 80, 146)',
  'rgb(173, 37, 21)',
  'rgb(218, 149, 249)',
  'rgb(226, 90, 90)',
  'rgb(237, 200, 196)',
  'rgb(242, 208, 214)',
  'rgb(247, 187, 187)',
  'rgb(247, 192, 202)',
  'rgb(250, 49, 205)',
  'rgb(255, 0, 127)',
  'rgb(255, 0, 230)',
  'rgb(255, 23, 232)',
  'salmon',
]

function getRandomInt(min: number, max: number): number {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);

  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
function pickRandomColor(arr = HEART_COLORS): string {
  const randomColorNumber = getRandomInt(0, arr.length);

  return arr[randomColorNumber];
}

export function Heart() {
  const [heartColor, setHeartColor] = useState<string>(pickRandomColor())

  useEffect(() => {
    const colorInterval = setInterval(() => {
      const nextColor = pickRandomColor();

      setHeartColor(nextColor);
    }, getRandomInt(1000, 8000));

    return () => clearInterval(colorInterval);
  }, []);

  return <svg
    className={styles.heart}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    enable-background="new 0 0 50 50"><path
      style={
        {
          fill: heartColor
        }
      }
      d="M25 39.7l-.6-.5C11.5 28.7 8 25 8 19c0-5 4-9 9-9 4.1 0 6.4 2.3 8 4.1 1.6-1.8 3.9-4.1 8-4.1 5 0 9 4 9 9 0 6-3.5 9.7-16.4 20.2l-.6.5zM17 12c-3.9 0-7 3.1-7 7 0 5.1 3.2 8.5 15 18.1 11.8-9.6 15-13 15-18.1 0-3.9-3.1-7-7-7-3.5 0-5.4 2.1-6.9 3.8L25 17.1l-1.1-1.3C22.4 14.1 20.5 12 17 12z" /></svg>
}
