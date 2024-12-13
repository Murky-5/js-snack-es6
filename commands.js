function Randomizer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }

function betweenNumbers(container = [], a, b) {
  if (a > b) {
    return console.error("!404!");
  } else {
    container.push((((b - a) / 2) + a))
    return container
  }
}

function betweenSquads(container, a, b) {
  const containerFun = []
  if (a > b) {
    return console.error("!404!");
  } else {
      for (let i = 0; a <= b; i++){
        containerFun.push(container[a])
        a = a + i
      }
    return containerFun
  }
}