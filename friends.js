let itemsFriends = [
  "friend",
  "friend",
  "friend",
  "friend",
  "friend",
  "empty",
  "empty",
];

const itemsCycle = (reverse) => {
  if (reverse) {
    itemsFriends.push(itemsFriends.shift());
  } else {
    itemsFriends.unshift(itemsFriends.pop());
  }
  let result = itemsFriends.slice();
  result.unshift(itemsFriends[itemsFriends.length - 1]);
  result.push(itemsFriends[0]);
  return result;
};

const getHtmlResult = (items) => {
  return items.map((element) => {
    if (element == "friend") {
      return '<img src="./images/friend.png" width="50" height="51" />';
    }
    return '<img src="./images/empty.png" width="50" height="51" />';
  });
};

const moveItems = (reverse) => {
  friends = document.getElementById("friendsItems");
  if (reverse)
    friends.style.animation = "left 0.4s cubic-bezier(.39,.58,.57,1)";
  else friends.style.animation = "right 0.4s cubic-bezier(.39,.58,.57,1)";
  const resetItems = () => {
    while (friends.firstChild) {
      friends.removeChild(friends.firstChild);
    }
    let items;
    if (reverse) {
      items = itemsCycle(true);
      friends.style = "margin-right: 0";
    } else {
      items = itemsCycle();
      friends.style = "margin-left: 0";
    }
    let htmlResult = getHtmlResult(items).join("");
    friends.innerHTML = htmlResult;
    friends.style.removeProperty("animation");
    friends.removeEventListener("animationend", resetItems);
  };
  friends.addEventListener("animationend", resetItems);
};
