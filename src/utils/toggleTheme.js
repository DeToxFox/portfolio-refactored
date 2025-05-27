// src/utils/toggleTheme.js
const toggleTheme = () => {
  const root = document.documentElement
  root.classList.toggle('dark')

  if (root.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark')
  } else {
    localStorage.setItem('theme', 'light')
  }
}

export default toggleTheme
