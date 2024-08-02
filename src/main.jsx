import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProRouter from './Router/ProRouter.jsx'
import Card from './UI/Component/Card/Card.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
    <App />
    <ProRouter/>
   
    {/* <Card/> */}
  </>
    
  // </React.StrictMode>,
)
