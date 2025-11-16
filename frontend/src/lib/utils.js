// Format date => "22 Jan 2025"
export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

// Convert text to URL-friendly slug
export function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}

// Capitalize first letter
export function capitalize(text = "") {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Truncate text to N characters
export function truncate(text, length = 120) {
  if (!text) return "";
  return text.length > length ? text.slice(0, length) + "..." : text;
}
