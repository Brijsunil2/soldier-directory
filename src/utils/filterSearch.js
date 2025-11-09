import Fuse from "fuse.js";

export const fuzzyFilter = (data, query, keys, threshold = 0.1) => {
  if (!query?.trim()) return data ?? [];

  const fuse = new Fuse(data ?? [], {
    keys,
    threshold,
    includeScore: false,
  });

  return fuse.search(query.trim()).map((result) => result.item);
};
