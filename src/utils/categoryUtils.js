export const CATEGORIES = {
  BOOKS: "Books",
  FILMS: "Films",
  NOTES: "Notes",
};

export const CATEGORY_COLORS = {
  [CATEGORIES.BOOKS]: "hsl(106, 47%, 64%)",
  [CATEGORIES.FILMS]: "hsl(196, 83%, 75%)",
  [CATEGORIES.NOTES]: "#ffd82b",
};

export const getCategoryFromPath = (path) => {
  const categories = Object.values(CATEGORIES);
  return (
    categories.find((category) => path.includes(category)) || CATEGORIES.NOTES
  );
};

export const getCategoryColor = (category) => {
  return CATEGORY_COLORS[category] || CATEGORY_COLORS[CATEGORIES.NOTES];
};

export const CDate = (note) => {
  if (typeof note?.created === "string") {
    const date = new Date(note?.created);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return day + "." + month + "." + year;
  }
};
