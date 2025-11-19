import "./ScrollToTopBtn.css";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopBtn = () => {
  return (
    <button
      className="scroll-top-btn scroll-to-top"
      onClick={() => window.scrollTo(0, 0)}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopBtn;
