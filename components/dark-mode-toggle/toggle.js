// Wrap everything in an immediately invoked function or simple block to prevent variable leaking
{
  const initDarkMode = () => {
    const toggleCheckbox = document.querySelector('#dm-theme-checkbox');
    
    // Safety check: if the toggle HTML isn't on this specific page, stop running code
    if (!toggleCheckbox) return; 

    toggleCheckbox.addEventListener('change', () => {
      document.body.classList.toggle('dark-theme', toggleCheckbox.checked);
    });
  };

  // Run the function when the script loads
  initDarkMode();
}