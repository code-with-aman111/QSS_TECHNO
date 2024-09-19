const scrollContainer = document.querySelector(".scroll-container");
const fixedContent = document.querySelector(".fixed-content");
const contents = document.querySelectorAll(".content");
const imageContent = document.querySelector(".image-content");
const sectionHeight = window.innerHeight;
const totalSections = document.querySelectorAll("[data-index]").length / 2; // Divide by 2 because we have text and image for each section

// Create cursor circle
const cursorCircle = document.createElement("div");
cursorCircle.innerHTML = "Explore!";
cursorCircle.classList.add("cursor-circle");
document.body.appendChild(cursorCircle);

function updateContent() {
  const scrollPosition = window.scrollY;
  const containerOffset = scrollContainer.offsetTop;
  const containerHeight = scrollContainer.offsetHeight;
  const relativeScrollPosition = scrollPosition - containerOffset;

  if (relativeScrollPosition < 0) {
    // Before the section: show first content
    setActiveContent(0);
  } else if (relativeScrollPosition >= containerHeight - sectionHeight) {
    // After the section: show last content
    setActiveContent(totalSections - 1);
  } else if (
    relativeScrollPosition >= 0 &&
    relativeScrollPosition < containerHeight
  ) {
    // Within the section: calculate which content to show
    const index = Math.floor(relativeScrollPosition / sectionHeight);
    setActiveContent(index);
  }
}

function setActiveContent(index) {
  contents.forEach((content) => {
    if (parseInt(content.dataset.index) === index) {
      content.classList.add("active");
    } else {
      content.classList.remove("active");
    }
  });
}

function updateCursorCircle(e) {
  const imageRect = imageContent.getBoundingClientRect();
  const distanceThreshold = 80; // Distance in pixels from image edge where circle appears

  if (
    e.clientX >= imageRect.left - distanceThreshold &&
    e.clientX <= imageRect.right + distanceThreshold &&
    e.clientY >= imageRect.top - distanceThreshold &&
    e.clientY <= imageRect.bottom + distanceThreshold
  ) {
    cursorCircle.style.opacity = "1";
    cursorCircle.style.left = `${e.clientX - 40}px`;
    cursorCircle.style.top = `${e.clientY - 40}px`;
  } else {
    cursorCircle.style.opacity = "0";
  }
}

window.addEventListener("scroll", updateContent);
window.addEventListener("resize", updateContent);
document.addEventListener("mousemove", updateCursorCircle);
updateContent();

const background = document.querySelector(".Elevate");
const icon_ind = document.querySelector(".icon_con .ind");
const icon_usa = document.querySelector(".icon_con .usa");
const address = document.querySelector(".add p");
const mobile = document.querySelector(".mob p");

icon_usa.addEventListener("click", () => {
  background.style.backgroundImage =
    "url('/asssets/services+elevate+eng+reno/7.jpg')";
  address.innerHTML =
    "215 East 78th Street - Suite 200, Bloomington, Minnesota 55420";
  mobile.innerHTML = "+1 612 201 1169";
});
icon_ind.addEventListener("click", () => {
  background.style.backgroundImage =
    "url('/asssets/services+elevate+eng+reno/8.jpg')";
  address.innerHTML =
    "H-149, 1st Floor, Office No. 101, Sector 63, Noida 201301";
  mobile.innerHTML = "+91 93-107-47505";
});
