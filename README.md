# Pics to Words - Language Learning Game

Pics to Words is an interactive educational game designed to help users learn foreign languages through visual association. The game presents players with a grid of cards containing both images and words, challenging them to match pictures with their corresponding foreign language words.

## Features

- **Multiple Language Support**: Learn Finnish, German, and Italian
- **Interactive Gameplay**: Click on cards to select and match images with words
- **Visual Feedback**: Immediate visual feedback on correct/incorrect matches
- **Progress Tracking**: Track your learning progress and compare with others
- **Responsive Design**: Works on various screen sizes

## Gameplay

1. **Start Screen**: Choose your target language (Finnish, German, or Italian)
2. **Game Screen**: Match image cards with their corresponding word cards
3. **Results Screen**: See your score and compare with other players

## Technologies Used

- React 19
- Webpack 5
- Babel 7
- ESLint with Prettier
- CSS for styling

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/endophenotype/pics-to-words.git
   cd pics-to-words
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

- `src/` - Main application source code
  - `components/` - React components (Card, GamePage, InitialPage, etc.)
  - `hooks/` - Custom React hooks (useGame)
  - `img/` - Image assets
  - `pages/` - Page components
  - `data.js` - Game data (words and images)
  - `settings.js` - Game configuration
  - `style.css` - Main stylesheet
- `public/` - Public assets and HTML template
