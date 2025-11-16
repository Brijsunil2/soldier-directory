import { Fragment, useEffect, useState, useMemo } from "react";
import "./Directory.css";
import DirectoryListing from "./DirectoryListing";
import { sortDirectoryByName } from "../../utils/sortByName";
import SearchBar from "../SearchBar/SearchBar";
import { fuzzyFilter } from "../../utils/filterSearch";
import LetterNav from "../LetterNav/LetterNav";

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

  const grouped = useMemo(() => {
    return data.reduce((acc, item) => {
      const letter = item.name.charAt(0).toUpperCase();
      if (!acc[letter]) acc[letter] = [];
      acc[letter].push(item);
      return acc;
    }, {});
  }, [data]);

  return (
    <section className="directory">
      <div className="directory-header">
        <SearchBar onChangeFunc={handleSearchOnChange} />
        <LetterNav letters={letters} />
      </div>

      <div className="directory-body">
        {Object.entries(grouped).map(([letter, soldiers]) => (
          <section className="directory-letter-section" key={letter}>
            <h3 className="directory-letter-header">{letter}</h3>
            <div className="directory-letter-listings">
              {soldiers.map((s) => (
                <DirectoryListing key={s.id ?? s.name} listingData={s} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Directory;
