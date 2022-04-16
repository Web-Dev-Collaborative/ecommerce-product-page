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
      <div className="mx-auto max-w-6xl">
        <Nav savedCount={savedCount} setSavedCount={setSavedCount} />

        <div className="lg:mt-20 lg:flex lg:items-center lg:justify-center lg:gap-24">
          <Slider />

          <Details
            count={count}
            setCount={setCount}
            setSavedCount={setSavedCount}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
