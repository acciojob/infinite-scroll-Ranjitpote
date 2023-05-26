//your code here!
document.addEventListener("DOMContentLoaded", function() {
  const list = document.getElementById("infi-list");

  for (let i = 1; i <= 10; i++) {
    const li = document.createElement("li");
    li.textContent = "List Item " + i;
    list.appendChild(li);
  }

  function addMoreItems() {
    for (let i = 1; i <= 2; i++) {
      const li = document.createElement("li");
      li.textContent = "List Item " + (list.childElementCount + i);
      list.appendChild(li);
    }
  }
	
  list.addEventListener("scroll", function() {
    const scrollableHeight = list.scrollHeight - list.clientHeight;
    if (list.scrollTop === scrollableHeight) {
      addMoreItems();
    }
  });
});

