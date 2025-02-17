import { useState } from "react"

export const Output = () => {
  const [output, setOutput] = useState([])

  let value = output
  const addOutput = (newText) => {
    if(typeof newText === `string` && newText.length > 0) {
      value += newText
    } else {
      value = ``
    }
    setOutput(value)
  }

  window.data.addOutput = addOutput

  return <textarea
    id="f"
    type="textarea"
    value={output}
    readOnly
  />
}