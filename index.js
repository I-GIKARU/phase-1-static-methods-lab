class Formatter {
  // Capitalizes the first letter of a word
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // Removes non-alphanumeric characters except for dash, single quote, and space
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-' ]/g, "");
  }

  // Capitalizes all words except small words, but always capitalizes the first word
  static titleize(string) {
    const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    return string
      .split(" ")
      .map((word, index) =>
        index === 0 || !exceptions.includes(word) ? this.capitalize(word) : word
      )
      .join(" ");
  }
}

module.exports = Formatter;
