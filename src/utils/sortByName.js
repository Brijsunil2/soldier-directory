export const sortByProperty = (property) => (a, b) => {
  const valueA = a[property].toUpperCase();
  const valueB = b[property].toUpperCase();
  return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
};

export const sortDirectoryByName = (array) => {
    return [...array].sort(sortByProperty('name'));
};