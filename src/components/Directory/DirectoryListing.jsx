const DirectoryListing = ({ listingData }) => {
  return (
    <div className="directory-listing">
      <a href={listingData.link} target="_blank" rel="noopener noreferrer">
        <div className="listing-image-container">
          {listingData.imageUrl ? (
            <img
              src={listingData.imageUrl}
              alt={listingData.name}
              className="listing-image"
            />
          ) : (
            <div className="listing-image-placeholder">No Image</div>
          )}
        </div>

        <h4 className="listing-name">{listingData.name}</h4>

        <p className="listing-subtext">
          Service No. {listingData.serviceNumber}
        </p>
        <p className="listing-description">{listingData.description}</p>

        <p className="listing-link">View Profile</p>
      </a>
    </div>
  );
};

export default DirectoryListing;
