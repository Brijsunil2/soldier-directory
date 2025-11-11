import { Fragment, useEffect, useState, useMemo } from "react";
import "./Directory.css";
import DirectoryListing from "./DirectoryListing";
import { sortDirectoryByName } from "../../utils/sortByName";
import SearchBar from "../SearchBar/SearchBar";
import { fuzzyFilter } from "../../utils/filterSearch";
import LetterNav from "./LetterNav";

const Directory = ({ directoryData }) => {
  const [data, setData] = useState(sortDirectoryByName(directoryData ?? []));

  const handleSearchOnChange = (value) => {
    const filteredData = fuzzyFilter(directoryData, value, ["name"]);
    setData(sortDirectoryByName(filteredData ?? [])); 
  };

  useEffect(() => {
    setData(sortDirectoryByName(directoryData ?? []));
  }, [directoryData]);

  const letters = useMemo(() => {
    return Array.from(
      new Set(
        (data ?? [])
          .map((d) => d?.name?.charAt(0)?.toUpperCase())
          .filter(Boolean)
      )
    );
  }, [data]);

  return (
    <section className="directory">
      <div className="directory-header">
        <SearchBar onChangeFunc={handleSearchOnChange} />
        <LetterNav letters={letters} />
      </div>

      {data.map((listing, index) => {
        const key = listing.id ?? listing.name ?? index;
        const currentLetter = listing?.name?.charAt(0)?.toUpperCase();
        const prevLetter =
          index === 0 ? null : data[index - 1]?.name?.charAt(0)?.toUpperCase();

        return (
          <Fragment key={key}>
            {listing.name && (index === 0 || prevLetter !== currentLetter) && (
              <h3
                id={`letter-${currentLetter}`}
                className="directory-letter-header"
              >
                {currentLetter}
              </h3>
            )}

            <DirectoryListing listingData={listing} />
          </Fragment>
        );
      })}
    </section>
  );
};

export default Directory;
