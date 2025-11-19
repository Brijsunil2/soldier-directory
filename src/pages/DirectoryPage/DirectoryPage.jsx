import "./DirectoryPage.css";
import soldierLinkData from "../../data/soldierLinks.json";
import Directory from "../../components/Directory/Directory";
import ScrollToTopBtn from "../../components/ScrollToTopBtn/ScrollToTopBtn";

const DirectoryPage = () => {
  return (
    <div className="directory-page">
      <Directory directoryData={soldierLinkData} />
      <ScrollToTopBtn />
    </div>
  );
};

export default DirectoryPage;
