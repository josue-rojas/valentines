import './App.css';
import { Heart } from './components/Heart';
import { useEffect, useMemo, useState } from 'react';

const makeHearts = (amount: number) => {
  const hearts = [];
  for (let i = 0; i < amount; i++) {
    hearts.push(<Heart key={`heart-${i}`}></Heart>);
  }

  return hearts;
}

const PADDING_HEIGHT = 0;
const PADDING_WIDTH = 0;
const HEART_SIZE = 32;

function App() {
  const [amountHearts, setAmountHearts] = useState(100);
  const heartsMemo = useMemo(() => makeHearts(amountHearts), [amountHearts]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      const height = entries[0].target.clientHeight - PADDING_HEIGHT;
      const width = entries[0].target.clientWidth - PADDING_WIDTH;

      const nextAmountHearts = (Math.floor(height / HEART_SIZE) * Math.floor(width / HEART_SIZE));

      setAmountHearts(nextAmountHearts);
    });

    resizeObserver.observe(document.body);

    return () => resizeObserver.unobserve(document.body);
  }, []);

  return (
    <div className="App">
      <div className='hearts'>
        {heartsMemo}
      </div>
      <header className="App-header">
        <p className='message'>
          Happy Valentines!<br></br>
          I love you! 🤠
        </p>
      </header>
    </div>
  );
}

export default App;
