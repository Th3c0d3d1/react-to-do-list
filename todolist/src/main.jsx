import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// ReactDOM hooks index.html to the react code ---> ('root') <---

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
