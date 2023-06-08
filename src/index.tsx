import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/App'

const documentRoot = document.getElementById('root')
if (!documentRoot) throw new Error('root not found.')

const root = createRoot(documentRoot)
root.render(
    <StrictMode>
        <App />
    </StrictMode>
)
