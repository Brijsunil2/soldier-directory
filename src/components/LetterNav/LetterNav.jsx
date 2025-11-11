import "./LetterNav.css";

const LetterNav = ({ letters = [] }) => {
  if (!letters.length) return null;
  return (
    <nav className="letters-nav-container" aria-label="Directory letters">
      {letters.map((letter) => (
        <a
          key={letter}
          className="letter-link"
          href={`#letter-${letter}`}
        >
          {letter}
        </a>
      ))}
    </nav>
  );
};

export default LetterNav;