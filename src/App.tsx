import { ThemeContextProvider } from './components/context/themeContextProvider';
import { Parent } from './components/Parent';

function App() {
return(
  <ThemeContextProvider>
    <Parent />
  </ThemeContextProvider>
);
}

export default App
