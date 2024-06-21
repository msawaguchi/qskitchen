module.exports = {
  process(_, filename) {
    return `module.exports = ${JSON.stringify(filename)};`
  },
}
