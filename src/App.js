import { useState } from "react"
import { run } from "./run"

export const App = () => {
  const [text, setText] = useState(``)
  const [output, setOutput] = useState([])

  let value = output
  const addOutput = (text) => {
    value += text
    setOutput(value)
  }

  return <div
    id="main"
  >
    <h1
      id="a"
      style={{
        color: `white`
      }}
    >
      Hello DeathScript!
    </h1>
    <div
      id="c"
    >
      main.ds
    </div>
    <div
      id="d"
    >
      output
    </div>
    <div
      id="b"
      style={{
        display: `flex`,
        alignItems: `center`
      }}
    >
      <input
        type="button"
        style={{
          fontSize: 32
        }}
        value="Run"
        onClick={() => {
          value = ``
          run(text, addOutput)
        }}
      />
    </div>
    <textarea
      id="e"
      type="textarea"
      value={text}
      onChange={({ target: { value } }) => setText(value)}
    />
    <textarea
      id="f"
      type="textarea"
      value={output}
      onChange={({ target: { value } }) => setText(value)}
      readOnly
    />
  </div>
}
