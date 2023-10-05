document.addEventListener('DOMContentLoaded', function () {

  const schemeButton = document.getElementById('scheme-button');
  const body = document.body;
  const homeButton = document.getElementById('home-button');

  let currentMode = localStorage.getItem('mode');

      // Function to toggle the mode
      function toggle() {
        if (currentMode === 'light') {
          body.classList.toggle('light');
          schemeButton.style.backgroundImage = 'url(sun.png)';
          schemeButton.style.backgroundSize = '50px 50px';
          schemeButton.style.backgroundRepeat = 'no-repeat';
          schemeButton.style.backgroundPosition = 'center';
          currentMode = 'dark';
        } else {
          body.classList.toggle('light');
          schemeButton.style.backgroundImage = 'url(moon.png)';
          schemeButton.style.backgroundSize = '50px 50px';
          schemeButton.style.backgroundRepeat = 'no-repeat';
          schemeButton.style.backgroundPosition = 'center';
          currentMode = 'light';
        }
      
        // Save the current mode to localStorage
        localStorage.setItem('mode', currentMode);
      }
      
 
      schemeButton.addEventListener('click', toggle);
      
      // Set the initial mode based on localStorage, default to dark mode
      if (currentMode === 'light') {
        body.classList.add('light');
        schemeButton.style.backgroundImage = 'url(moon.png)';
        schemeButton.style.backgroundSize = '40px 40px';
        schemeButton.style.backgroundRepeat = 'no-repeat';
        schemeButton.style.backgroundPosition = 'center';
      } else {
        body.classList.remove('light');
        schemeButton.style.backgroundImage = 'url(sun.png)';
          schemeButton.style.backgroundSize = '40px 40px';
          schemeButton.style.backgroundRepeat = 'no-repeat';
          schemeButton.style.backgroundPosition = 'center';
      }
      
      // home button functionality

function home() {
  window.location.href = '/';
}

homeButton.addEventListener('click', home);


artImage = document.getElementsByClassName('art-image');

  // Loop through each artImage element and add a mouseover event listener
  for (let i = 0; i < artImage.length; i++) {
    artImage[i].addEventListener('mouseover', (event) => {
      const targetElement = event.target;
      targetElement.style.width = "403px";
      console.log("Mouse is over an art image.");
    });
  }
  
  // Loop through each artImage element and add a mouseout event listener
  for (let i = 0; i < artImage.length; i++) {
    artImage[i].addEventListener('mouseout', (event) => {
      const targetElement = event.target;
      targetElement.style.width = "400px";
      console.log("Mouse is over an art image.");
    });
  }

  hobbiesImage = document.getElementsByClassName('hobbies-image');

  // Loop through each artImage element and add a mouseover event listener
  for (let i = 0; i < hobbiesImage.length; i++) {
    hobbiesImage[i].addEventListener('mouseover', (event) => {
      const targetElement = event.target;
      targetElement.style.width = "403px";
      console.log("Mouse is over a hobbies image.");
    });
  }
  
  // Loop through each artImage element and add a mouseout event listener
  for (let i = 0; i < hobbiesImage.length; i++) {
    hobbiesImage[i].addEventListener('mouseout', (event) => {
      const targetElement = event.target;
      targetElement.style.width = "400px";
      console.log("Mouse is over a hobbies image.");
    });
  }

  dogImage = document.getElementsByClassName('dog-image');

  // Loop through each artImage element and add a mouseover event listener
  for (let i = 0; i < dogImage.length; i++) {
    dogImage[i].addEventListener('mouseover', (event) => {
      const targetElement = event.target;
      targetElement.style.width = "403px";
      targetElement.style.height = '504px';
    });
  }
  
  // Loop through each artImage element and add a mouseout event listener
  for (let i = 0; i < dogImage.length; i++) {
    dogImage[i].addEventListener('mouseout', (event) => {
      const targetElement = event.target;
      targetElement.style.width = "400px";
      targetElement.style.height = "500px";
    });
  }






    })

    /* if you wanna make EVERYTHING change later:
  const linkText = document.getElementsByClassName('linkText');
  const allLists = document.querySelectorAll('li');
  const socialsButton = document.getElementsByClassName('socialsButton');
  const dogEmail = document.getElementsByClassName('dog-email');
  const dogEmailText = document.getElementsByClassName('dog-email-text');  
  */