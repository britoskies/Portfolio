import App from './app/App'
import './index.css'

// Router
import { BrowserRouter } from "react-router-dom";

// React 18, new rendering API's method
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
