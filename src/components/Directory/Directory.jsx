import { Fragment, useEffect, useState } from "react";
import "./Directory.css";
import DirectoryListing from "./DirectoryListing";
import { sortDirectoryByName } from "../../utils/sortByName";

const Directory = ({ directoryData }) => {
  const [data, setData] = useState(directoryData);

  useEffect(() => {
    setData(sortDirectoryByName(directoryData));
  }, [directoryData]);

  return (
    <section className="directory">
      {data.map((listing, index) => (
        <Fragment key={index}>
          {listing.name &&
            (index === 0 ||
              data[index - 1]?.name?.charAt(0) !== listing.name.charAt(0)) && (
              <h3
                className="directory-letter-header"
              >
                {listing.name.charAt(0)}
              </h3>
            )}

          <DirectoryListing listingData={listing} />
        </Fragment>
      ))}
    </section>
  );
};

export default Directory;
