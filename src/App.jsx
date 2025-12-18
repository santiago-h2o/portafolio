import { LoadingScreen } from './components/loading/LoadingScreen'
import './App.css'
import './index.css'
import { useState } from 'react';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {
        !isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>
      }
    </>
  )
}

export default App