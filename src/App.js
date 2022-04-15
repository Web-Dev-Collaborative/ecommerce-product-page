import { useState } from 'react';

// components
import Nav from './components/Nav';
import Slider from './components/Slider';
import Details from './components/Details';

function App() {
  const [count, setCount] = useState(0);
  const [savedCount, setSavedCount] = useState(0);

  return (
    <div className="relative min-h-screen">
      <Nav savedCount={savedCount} setSavedCount={setSavedCount} />

      <Slider />

      <Details
        count={count}
        setCount={setCount}
        setSavedCount={setSavedCount}
      />
    </div>
  );
}

export default App;
