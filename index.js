window.addEventListener("load", () => {
  
  /* NAV LINK ACTIVATION - START */
  // Get the sections and the nav inks
  const navLinks = document.querySelectorAll(".nav__link");
  const sections = Array.from(document.querySelectorAll(".content__section"));
  
  // Create a function to admin the nav link activation
  function navlinkActivator() {
    
    // Retrieve the top y values of each section
    let sectionsYValues = sections.map(section => section.offsetTop);
    
    // Fill the nav status array according to the position
    let navStatus = sectionsYValues.map(function(value, index) {
      if (window.pageYOffset >= value) {
        if( index === sectionsYValues.length - 1) return true;
        if(window.pageYOffset < sectionsYValues[index + 1]) return true;
      }
      return false;
    })
    return navStatus;
  }
  
  // Call the nav link activator function on scroll
  window.addEventListener("scroll", () => {
    let status = navlinkActivator();
    
    // Admin the activate class according to the status array
    navLinks.forEach((navLink, index) => {
      if (status[index]) {
        navLink.classList.add("nav__link--active");
      } else {
        navLink.classList.remove("nav__link--active");
      }
    });
  });
  /* NAV LINK ACTIVATION - END*/
  
  /* BURGER MENU ANIMATION START */
  let opened = false;
  
  // Get the burger menu the nav links and the nav links container
  const burgerContainer = document.querySelector(".menu");
  const linksContainer = document.querySelector(".nav__links-list");
  const links = document.querySelectorAll(".nav__link");
  
  // Create a function to manage the visibility
  function visibilityManager() {
    if (opened) {
      burgerContainer.classList.add("menu--open");
      linksContainer.classList.add("nav__links-list--show");
    } else { 
      burgerContainer.classList.remove("menu--open");
      linksContainer.classList.remove("nav__links-list--show");
    }
  }
  
  // Swap the visibility of the nav links when the burger button gets clicked
  burgerContainer.addEventListener("click", () => {
    opened = !opened;
    linksContainer.classList.add("nav__links-list--transition")
    visibilityManager();
  });
  
  // Hide the nav links when the user resize the screen 
  window.addEventListener("resize", () => {
    opened = false;
    visibilityManager();
    linksContainer.classList.remove("nav__links-list--transition");
  });
  
  // hide the nav links when one of them get clicked
  links.forEach(link => {
    link.addEventListener("click", () => {
      opened = !opened;
      visibilityManager();
    })
  })
  /* BURGER MENU ANIMATION END */

  /* CHANGE THE CONTENT OF THE COPY BUTTON - START */
  
  // Get all the copy buttons
  const copyBtns = document.querySelectorAll(".copy-btn");
  
  // Create a function to copy the code sections
  function copyCode(elementId) { 
    const elementContent = document.getElementById(elementId).innerText;
    navigator.clipboard.writeText(elementContent); 
  }

  // Change the text of the button when clicked
  copyBtns.forEach(copyBtn => {
    copyBtn.addEventListener('click', () => {
      copyBtn.childNodes[1].innerText = " Copied";
      copyCode(copyBtn.value);
      setTimeout(() => {
        copyBtn.childNodes[1].innerText = " Copy";
      } ,2000);
    });
  })
  /* CHANGE THE CONTENT OF THE COPY BUTTON - END */
})