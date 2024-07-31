function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}

const wordlist = ["Core", "New", "Good"];
 
function App() {
  const desc = wordlist[getRandomNum(3)];
  return (
    <div>
      <header>
        <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {desc} Fundamental React concepts you will need for almost any app you
          are going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
