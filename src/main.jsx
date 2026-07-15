import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AsgardeoProvider } from '@asgardeo/react'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AsgardeoProvider
      clientId="cK5OYWFaafAiLjIJ2KlQ1F7kqfAa"
      baseUrl="https://api.asgardeo.io/t/nethma"
    >
      <App />
    </AsgardeoProvider>
  </StrictMode>,
)