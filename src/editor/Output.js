import { useEffect, useRef, useState } from "react"

export const Output = () => {
  const [output, setOutput] = useState([])
  const ref = useRef()

  let value = output
  const addOutput = (newText) => {
    if(typeof newText === `string` && newText.length > 0) {
      value += newText
    } else {
      value = ``
    }
    setOutput(value)
  }

  useEffect(() => {
    ref.current.scrollTop = ref.current.scrollHeight
  })

  window.data.addOutput = addOutput

  return <textarea
    ref={ref}
    id="f"
    type="textarea"
    value={output}
    readOnly
  />
}