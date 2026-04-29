const primaryColorScheme = ''; // "light" | "dark"

// Get theme data from local storage
const currentTheme = localStorage.getItem('theme');

function getPreferTheme() {
  // explicit user choice in local storage wins
  if (currentTheme === 'light' || currentTheme === 'dark') return currentTheme;

  // return primary color scheme if it is set
  if (primaryColorScheme) return primaryColorScheme;

  // otherwise (unset / 'auto') follow user device's preferred color scheme
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

let themeValue = getPreferTheme();

function setPreference() {
  localStorage.setItem('theme', themeValue);
  reflectPreference();
}

function reflectPreference() {
  const stored = localStorage.getItem('theme');
  const mode = stored === 'light' || stored === 'dark' ? stored : 'auto';
  document.firstElementChild.setAttribute('data-theme', themeValue);
  document.firstElementChild.setAttribute('data-theme-mode', mode);

  document.querySelector('#theme-btn')?.setAttribute('aria-label', themeValue);
}

// set early so no page flashes / CSS is made aware
reflectPreference();

window.onload = () => {
  // set on load so screen readers can get the latest value on the button
  reflectPreference();

  // now this script can find and listen for clicks on the control
  document.querySelector('#theme-btn')?.addEventListener('click', () => {
    themeValue = themeValue === 'light' ? 'dark' : 'light';
    setPreference();
  });
};

// sync with system changes — but don't clobber a user's explicit pick
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', ({ matches: isDark }) => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') return;
    themeValue = isDark ? 'dark' : 'light';
    reflectPreference();
  });
