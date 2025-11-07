import "./Directory.css";
import DirectoryListing from "./DirectoryListing";

const Directory = ({directoryData}) => {
  return (
    <section className="directory">
      {directoryData.map((data, index) => (
        <DirectoryListing key={index} listingData={data} />
      ))}
    </section>
  )
}

export default Directory