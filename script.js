  // sticky nav bar
  const navbar = document.getElementById("nav");

  // Get the navbar's initial position
  const navOffset = navbar.offsetTop;
  
  window.addEventListener("scroll", () => {
      // Check when scroll reaches navbar's position
      if (window.scrollY >= navOffset) {
          navbar.classList.add("sticky");
      } else {
          navbar.classList.remove("sticky");
      }
  });
  
  
  // progress bar animation
  const targets = [75, 50, 55, 40, 30]; // Target percentages for each bar
          const bars = ['bar1', 'bar2', 'bar3', 'bar4', 'bar5'];
          const texts = ['text1', 'text2', 'text3', 'text4', 'text5'];
  
          // Function to animate each progress bar independently
          function animateProgressBar(barId, textId, targetPercentage) {
              let currentPercentage = 0;
              const progressBar = document.getElementById(barId);
              const percentageText = document.getElementById(textId);
  
              function animate() {
                  if (currentPercentage < targetPercentage) {
                      currentPercentage++;
                      progressBar.style.width = currentPercentage + "%";
                      percentageText.textContent = currentPercentage + "%";
                      setTimeout(animate, 10);
                  }
              }
  
              animate(); // Start animation immediately
          }
  
          // Trigger animation for all bars at once
          bars.forEach((bar, i) => animateProgressBar(bar, texts[i], targets[i]));
  
          // contact me walla
          document.getElementById('contactForm').addEventListener('submit', function(e) {
              e.preventDefault();
              const name = document.getElementById('name').value.trim();
              const email = document.getElementById('email').value.trim();
              const message = document.getElementById('message').value.trim();
  
              if (name && email && message) {
                  alert(`Thank you, ${name}! Your message has been sent.`);
                  document.getElementById('contactForm').reset();
              } else {
                  alert('Please fill in all fields before submitting.');
              }
          });
  
          // Theme switcher
          const themeDots = document.querySelectorAll('.theme-dot');
          themeDots.forEach(dot => {
              dot.addEventListener('click', () => {
                  const color = dot.getAttribute('data-color');
                  const description=document.getElementById("des");
                  const navwalla=document.getElementsByClassName('nav');
                  if (color === 'white') {
                      document.body.style.backgroundColor = '#fff';
                      document.body.style.color = '#000';
                      des.style.color='#964B00';
                      Array.from(navwalla).forEach(navwalla => navwalla.style.color = '#964B00');
                  } else if (color === 'purple') {
                      document.body.style.backgroundColor = '#800080';
                      document.body.style.color = '#fff';
                      des.style.color='white';
                      Array.from(navwalla).forEach(navwalla => navwalla.style.color = 'white');
                  }
                  else if (color === 'black') {
                      document.body.style.backgroundColor = 'Black';
                      document.body.style.color = 'white';
                      des.style.color='#bbbbbb';
                      Array.from(navwalla).forEach(navwalla => navwalla.style.color = '#bbbbbb');
                  }
              });
          });
  
          // scroll up button 
         // Scroll progress bar
  window.addEventListener('scroll', function() {
      const scrollProgress = document.querySelector('.scroll-progress');
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (window.scrollY / totalHeight) * 100;
  
      scrollProgress.style.width = scrolled + '%';
  
      // Show up-arrow button when scrolling down
      const upArrow = document.querySelector('.up-arrow');
      if (window.scrollY > 100) {
          upArrow.classList.add('show');
      } else {
          upArrow.classList.remove('show');
      }
  });
  
  // Smooth scroll effect for the "Back to Top" button
  document.querySelector('.up-arrow').addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
  
  