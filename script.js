// Add a favorite to the page without saving it beyond this browser session.
const likesForm = document.querySelector("#likes-form");
const likeInput = document.querySelector("#like-input");
const likesList = document.querySelector("#likes-list");
const likesEmpty = document.querySelector("#likes-empty");

likesForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Trim spaces so an empty or spaces-only entry is ignored.
  const favorite = likeInput.value.trim();
  if (!favorite) {
    return;
  }

  // Use textContent so the entry is shown as text, not treated as HTML.
  const listItem = document.createElement("li");
  listItem.textContent = favorite;
  likesList.append(listItem);

  likesEmpty.hidden = true;
  likeInput.value = "";
  likeInput.focus();
});

// Let the robin hop when its picture is clicked.
const birdButton = document.querySelector("#bird-button");
const bird = document.querySelector("#state-bird");

birdButton.addEventListener("click", () => {
  // Remove and re-add the class so quick repeat clicks restart the animation.
  bird.classList.remove("is-shaking");
  void bird.offsetWidth;
  bird.classList.add("is-shaking");
});

bird.addEventListener("animationend", () => {
  bird.classList.remove("is-shaking");
});
