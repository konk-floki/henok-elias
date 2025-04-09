 // Theme toggle functionality
 const themeToggle = document.getElementById('themeToggle');
 const themeIcon = themeToggle.querySelector('i');
 const html = document.documentElement;
 
 // Check for saved theme preference or use preferred color scheme
 const currentTheme = localStorage.getItem('theme') || 
                     (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
 
 // Apply the stored theme
 html.setAttribute('data-theme', currentTheme);
 
 // Set initial icon
 if (currentTheme === 'dark') {
     themeIcon.classList.replace('fa-moon', 'fa-sun');
 }
 
 // Theme switcher click handler
 themeToggle.addEventListener('click', function() {
     const currentTheme = html.getAttribute('data-theme');
     const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
     
     // Update the theme
     html.setAttribute('data-theme', newTheme);
     localStorage.setItem('theme', newTheme);
     
     // Update the icon
     if (newTheme === 'dark') {
         themeIcon.classList.replace('fa-moon', 'fa-sun');
     } else {
         themeIcon.classList.replace('fa-sun', 'fa-moon');
     }
 });

 // Watch for system preference changes
 window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
     if (!localStorage.getItem('theme')) {
         const newTheme = e.matches ? 'dark' : 'light';
         html.setAttribute('data-theme', newTheme);
         
         // Update the icon
         if (newTheme === 'dark') {
             themeIcon.classList.replace('fa-moon', 'fa-sun');
         } else {
             themeIcon.classList.replace('fa-sun', 'fa-moon');
         }
     }
 });
