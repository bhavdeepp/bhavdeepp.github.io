// import { render } from 'react-dom'
// import App from './App'
// import { ThemeProvider } from './contexts/theme'
// import './index.css'

// render(
//   <ThemeProvider>
//     <App />
//   </ThemeProvider>,
//   document.getElementById('root')
// )


import ReactDOM from 'react-dom/client';  // Updated import
import App from './App';
import { ThemeProvider } from './contexts/theme';
import './index.css';

// Create a root element and render your app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
