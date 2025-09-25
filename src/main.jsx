import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

// Add error handling and debugging
const root = document.getElementById('root')
if (!root) {
  console.error('Root element not found!')
  document.body.innerHTML = '<div style="color: red; padding: 20px;">Error: Root element not found!</div>'
} else {
  try {
    createRoot(root).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    )
    console.log('React app mounted successfully')
  } catch (error) {
    console.error('Error mounting React app:', error)
    root.innerHTML = '<div style="color: red; padding: 20px;">Error loading React app: ' + error.message + '</div>'
  }
}
