function LazyLoading() {
  const lazyElements = document.querySelectorAll(".lazy");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazyElement = entry.target;
        lazyElement.textContent = lazyElement.getAttribute("data-content");
        lazyElement.classList.remove("lazy");
        lazyElement.classList.add("loaded");
        observer.unobserve(lazyElement);
      }
    });
  });

  lazyElements.forEach((element) => {
    observer.observe(element);
  });
}
export default LazyLoading;
