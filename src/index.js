import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { App } from "./App"

window.data = { code: `` }

const root = createRoot(document.getElementById("root"))
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)
