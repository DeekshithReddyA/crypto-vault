import { useState } from 'react';
import { Landing } from './components/Landing';
import { Dashboard } from './components/Dashboard';
function App() {
  const [isInitialised, setisInitialised] = useState<boolean>(false);
return(
  <>
    {(isInitialised === false) ? <Landing /> : <Dashboard />}
  </>
);
}

export default App
