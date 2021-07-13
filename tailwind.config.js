module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "sans": "'PT Sans', 'Noto Sans TC', sans-serif",
        "serif": "'Noto Serif TC', serif",
        "mono": "'JetBrains Mono', monospace",
      },
      width: {
        "2-3-screen": "75vw",
        "1-3-screen": "40vw",
      },
      height: {
        "2-3-screen": "75vh",
        "1-3-screen": "40vw",
      },
      minHeight: {
        "card": "24em",
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
