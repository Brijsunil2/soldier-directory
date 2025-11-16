const DirectoryListing = ({ listingData }) => {
  return (
    <div className="directory-listing">
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
      <a href={listingData.link} target="_blank" rel="noopener noreferrer">
        <p className="listing-name">{listingData.name}</p>
      </a>
      <p className="listing-subtext">
        Service Number: {listingData.serviceNumber}
      </p>
      <p className="listing-description">{listingData.description}</p>
      <p className="listing-link">View Profile</p>
    </div>
  );
};

export default DirectoryListing;
