export const formatDate = (dateInput: string | Date): string => {
  const date = new Date(dateInput);

  // Check if the date is valid
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  const day = date.getDate();
  // Get the 3-letter month abbreviation (e.g., Jan, Feb, Mar)
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const year = date.getFullYear();

  // Returns format: "12 Feb, 2026"
  return `${day} ${month}, ${year}`;
};
