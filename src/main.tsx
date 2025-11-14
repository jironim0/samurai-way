import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
// import { TestApp } from './hooks/TestApp.tsx'

const rootEl = document.getElementById('root')
const reactRoot = createRoot(rootEl!)
reactRoot.render(<App />)
