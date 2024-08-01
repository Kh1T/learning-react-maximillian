import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css"

function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}

const wordlist = ["Core", "New", "Good"];
export default function Header() {
  const desc = wordlist[getRandomNum(3)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {desc} Fundamental React concepts you will need for almost any app you
        are going to build!
      </p>
    </header>
  );
}
