import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import AppGenerate from './components/app'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <main>
        <AppGenerate />
      </main>
  </React.StrictMode>,
)
