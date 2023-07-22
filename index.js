function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
$body("light").classList.toggle("dark-mode");

function toggleMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
  
    const modeToggleBtn = document.getElementById("mode-toggle");
    if (body.classList.contains("dark-mode")) {
      modeToggleBtn.textContent = "Switchto Light Mode";
    } else {
      modeToggleBtn.textContent = "Switch to Dark Mode";
    }
  }
  
  // Check user's preferred color scheme (optional)
  function checkPreferredColorScheme() {
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const body = document.body;
    if (prefersDarkMode) {
      body.classList.add("dark-mode");
      document.getElementById("mode-toggle").textContent = "Switch to Light Mode";
    }
  }
  
  // Check preferred color scheme on page load (optional)
  checkPreferredColorScheme();



  
  

  