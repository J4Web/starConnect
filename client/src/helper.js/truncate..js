const truncateString = (inputString) => {
  if (inputString.length <= 5) {
    return inputString;
  } else {
    return inputString.slice(0, 5) + "...";
  }
};

export default truncateString;
