import images from "../../../data/imagesArray";

const animationHome = () => {
  let i = 0;
  const home = document.querySelector(".home_header");
  const placeImage = (x, y) => {
    const nextImage = images[i];
    const img = document.createElement("img");
    img.setAttribute("src", nextImage);
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    img.style.transform = `translate(-50%, -75%) scale(${
      Math.random() * 1 + 0.5
    }) rotate(${Math.random() * 20 - 10}deg)`;
    home.append(img);
    i += 1;
    if (i >= images.length) {
      i = 0;
    }

    const lastImage = home.lastChild;

    const removeLastChild = () => {
      if (lastImage !== undefined) {
        lastImage.remove();
      }
    };

    setTimeout(removeLastChild, 1500);
  };

  let mouse = 0;
  document.addEventListener("mousemove", (event) => {
    event.preventDefault();
    mouse += 1;
    if (mouse % 15 === 0) {
      placeImage(event.pageX, event.pageY);
    }
  });
};

export default animationHome;
