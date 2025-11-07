const DirectoryListing = ({listingData}) => {
  return (
    <div className="directory-listing">
      <a href={listingData.link} target="_blank" rel="noopener noreferrer">
        <p className="listing-name">{listingData.name}</p>
      </a>
      <p className="listing-data">{listingData.description}</p>
    </div>
  )
}

export default DirectoryListing