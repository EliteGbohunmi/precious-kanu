


var typed = new Typed("#element", {
  strings: ["product-manager", "AI Enthusiast", "Statisticiain"],
  typeSpeed: 150,
  backSpeed: 100,
  backDelay: 1000,
  startDelay: 100,
  loop: true,
});
function toggleMenu() {
  const menuIcon = document.querySelector(".menu-icon");
  menuIcon.classList.toggle("active");
  document.querySelector("ul").classList.toggle("yh");
}
ScrollReveal().reveal(".gg", {
  delay: 200,
  origin: "left",
  distance: "100px",
});
ScrollReveal().reveal(".hh", {
  delay: 200,
  origin: "bottom",
  distance: "100px",
});
ScrollReveal().reveal(".hj", {
  delay: 200,
  origin: "bottom",
  distance: "100px",
});
ScrollReveal().reveal(".hg", {
  delay: 200,
  origin: "bottom",
  distance: "100px",
});
ScrollReveal().reveal(".hl", {
  delay: 300,
  origin: "bottom",
  distance: "100px",
});
ScrollReveal().reveal(".hu", {
  delay: 200,
  origin: "bottom",
  distance: "70px",
});
ScrollReveal().reveal(".vb", {
  delay: 250,
  origin: "top",
    distance: "100px",
  duration: "1000",
});
ScrollReveal().reveal(".bb", {
  delay: 300,
  origin: "left",
  distance: "100px",
  duration: "1000",
});
ScrollReveal().reveal(".cb", {
  delay: 350,
  origin: "right",
  distance: "100px",
  duration: "2000",
});
ScrollReveal().reveal(".you", {
  delay: 200,
  origin: "bottom",
  distance: "100px",
  duration: "1000",
});
ScrollReveal().reveal(".bv", {
  delay: 300,
  origin: "bottom",
  duration: "1000",
  distance: "120px",
});
ScrollReveal().reveal(".bc", {
  delay: 400,
  origin: "bottom",
  distance: "150px",
});
ScrollReveal().reveal(".cert-card", {
  delay: 400,
  origin: "bottom",
  distance: "150px",
});



  // Function to handle the animation of progress bar and text count-up
  const animateProgress = (progress) => {
    const target = parseInt(progress.getAttribute('data-percent'), 10);
    const duration = 2500;  // Duration of the animation (ms)
    let count = 0;

    // Animate the progress bar width
    progress.style.width = target + '%';

    // Function to animate the text
    const intervalTime = 20; // Time between text updates (ms)
    const steps = duration / intervalTime; // Number of steps to reach the target
    const increment = target / steps; // Amount to increase the text on each step

    const textInterval = setInterval(() => {
      count += increment;
      if (count >= target) {
        count = target;
        clearInterval(textInterval);
      }
      progress.textContent = Math.round(count) + '%';
    }, intervalTime);
  };

  // Create the observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progress = entry.target;
        animateProgress(progress); // Start animation when in view
        observer.unobserve(progress); // Optional: stop observing after the animation
      }
    });
  }, {
    threshold: 0.5
  });

  // Start observing each progress bar
  document.querySelectorAll('.progress').forEach(bar => {
    observer.observe(bar);
  });

