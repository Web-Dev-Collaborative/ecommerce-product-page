import Nav from './Nav';

function App() {
  const [currImg, setCurrImg] = useState(0);

  return (
    <div className="min-h-screen bg-black">
      <Nav />

      <div></div>
    </div>
  );
}

export default App;
