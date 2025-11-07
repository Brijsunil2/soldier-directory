import "./DirectoryPage.css";
import soldierLinkData from "../../data/soldierLinks.json";
import Directory from "../../components/Directory/Directory";

const DirectoryPage = () => {
  return (
    <div className="directory-page-container">
      <Directory directoryData={soldierLinkData} />
    </div>
  );
};

export default DirectoryPage;
