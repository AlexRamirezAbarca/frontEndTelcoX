module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        'background-light': 'var(--background-light)',
        'background-dark': 'var(--background-dark)',
        'surface-light': 'var(--surface-light)',
        'surface-dark': 'var(--surface-dark)',
        'text-light': 'var(--text-light)',
        'text-dark': 'var(--text-dark)',
        'muted-light': 'var(--muted-text-light)',
        'muted-dark': 'var(--muted-text-dark)',
        'border-light': 'var(--border-light)',
        'border-dark': 'var(--border-dark)',
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
      },
    },
  },
  darkMode: 'class', // habilita dark:…
};
