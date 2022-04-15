import { Details } from './Details';
import { useState } from 'react';

// components
import Nav from './Nav';
import Slider from './Slider';

function App() {
  const [count, setCount] = useState(0);
  const [savedCount, setSavedCount] = useState(0);

  return (
    <div className="min-h-screen">
      <Nav savedCount={savedCount} />

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
