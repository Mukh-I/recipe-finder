export const shortenTitle = (title, limit = 18) => {
  const newTitle = [];
  if (title.length > limit) {
    title.split(" ").reduce((acc, curr) => {
      if (acc + curr.length <= limit) {
        newTitle.push(curr);
      }
      return acc + curr.length;
    }, 0);
    return `${newTitle.join(" ")}...`;
  }
  return title;
};

export const checkforDuplicates = (arr, obj) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === obj.id) {
      return true;
    }
  }
  return false;
};
