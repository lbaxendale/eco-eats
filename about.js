const newParagraph = document.createElement("p");

newParagraph.textContent =
  "Join us at Eco Eats and unlock a world of endless culinary possibilities. Together, let's transform ingredients, reduce waste, and indulge in the art of sustainable cooking. Explore, create, and contribute to a brighter, tastier future with Eco Eats";

newParagraph.style.fontSize = "18px";

const container = document.getElementById("container");

container.appendChild(newParagraph);