import { run } from "./run"
import { Editor } from "./editor/Editor"
import { Output } from "./editor/Output"


const Button = ({ onClick }) => <input
  type="button"
  style={{
    fontSize: 32
  }}
  value="Run"
  onClick={onClick}
/>


export const App = () => {
  return <div
    id="main"
  >
    <h1
      id="a"
      style={{
        color: `white`,
        marginLeft: 16
      }}
    >
      DeathScript
    </h1>
    <div id="c">main.ds</div>
    <div id="d">output</div>
    <div
      id="b"
      style={{
        display: `flex`,
        alignItems: `center`
      }}
    >
      <Button
        onClick={run}
      />
    </div>
    <Editor />
    <Output />
  </div>
}
