import { useState } from 'react';

// components
import Nav from './components/Nav';
import Slider from './components/Slider';
import Details from './components/Details';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);
  const [savedCount, setSavedCount] = useState(0);

  return (
    <div className="relative min-h-screen lg:grid lg:grid-rows-[1fr_auto]">
      <div className="mx-auto max-w-6xl">
        <Nav savedCount={savedCount} setSavedCount={setSavedCount} />

        <main className="lg:mt-20 lg:flex lg:items-center lg:justify-center lg:gap-24 lg:px-12">
          <Slider />

          <Details
            count={count}
            setCount={setCount}
            setSavedCount={setSavedCount}
          />
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default App;
