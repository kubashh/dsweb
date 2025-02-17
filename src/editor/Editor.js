import { useState } from "react"

export const Editor = () => {
  const [text, setText] = useState(``)

  return <textarea
    id="e"
    type="textarea"
    value={text}
    onChange={({ target: { value } }) => {
      window.data.code = value
      setText(value)
    }}
  />
}