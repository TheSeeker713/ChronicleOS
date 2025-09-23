module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Merriweather', 'Georgia', 'serif'],
        display: ['Cinzel', 'Trajan', 'serif']
      },
      colors: {
        parchment: '#f6efd3',
        ink: '#0b1320',
        gold: {
          DEFAULT: '#cba135',
          50: '#f7f2e5'
        },
        silver: '#bfc7ca',
        emerald: '#046c4e',
        sapphire: '#0f5298',
        ruby: '#9b111e',
        obsidian: '#0a0a0a'
      }
    }
  },
  plugins: []
}
