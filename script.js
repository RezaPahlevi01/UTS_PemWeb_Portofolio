const navSlide = () => {
    const navLists = document.querySelector("nav");
  
  navSlide();
  window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
      form.reset();
    }
  };
}