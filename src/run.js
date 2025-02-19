/*const memory = {}

const ds = {
  clear: (text, pm) => {

  }
}*/

const keywords = [
  `if`,
  `else`,
  `var`,
  `while`,
  `for`
]

const getTrimmedLines = (text) => {
  return text.split(`\n`)
    .filter((line) => line !== ``)
    .map((line) => {
      return line.trim()
    })
}

export const run = () => {
  const start = performance.now()
  window.data.addOutput()
  const lines = getTrimmedLines(window.data.code)

  for(let line of lines) {
    if(keywords.includes(line)) {}
    if(line.includes(`print`)) {
      window.data.addOutput(`${line.slice(6)}\n`)
    }
  }

  window.data.addOutput(`\nDone in ${performance.now() - start}ms`)
}
