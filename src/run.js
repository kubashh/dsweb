/*const memory = {}

const ds = {
  clear: (text, pm) => {

  }
}*/

const getTrimmedLines = (text) => {
  return text.split(`\n`)
    .filter((line) => line !== ``)
    .map((line) => {
      return line.trim()
    })
}

export const run = () => {
  window.data.addOutput()
  const lines = getTrimmedLines(window.data.code)

  for(let line of lines) {
    if(line.includes(`print`)) {
      window.data.addOutput(`${line.slice(6)}\n`)
    }
  }

  window.data.addOutput(`\nDone`)
}
