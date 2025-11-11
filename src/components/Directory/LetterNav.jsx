import "./Directory.css";

const LetterNav = ({ letters = [] }) => {
  if (!letters.length) return null;
  return (
    <nav className="directory-letters" aria-label="Directory letters">
      {letters.map((letter) => (
        <a
          key={letter}
          className="directory-letter-link"
          href={`#letter-${letter}`}
        >
          {letter}
        </a>
      ))}
    </nav>
  );
};

export default LetterNav;