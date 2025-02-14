const ds = {
  clear: (text, pm) => {

  }
}

const getLines = (text) => {
  return text.split(`\n`).filter((text) => text != ``)
}

export const run = (code, addOutput) => {
  const lines = getLines(code)

  for(const line of lines) {
    if(line.includes(`print`)) {
      addOutput(line.slice(6))
    }
  }

  addOutput(`\nDone`)
}
