export function cleanPath(path: string) {
  const str = path.substring(1, path.length)
  return upperCase(str)
}


export function firstWord(path: string) {
  return cleanPath(path).split('/')[0]
}

export function upperCase(word: string) {
  return word.charAt(0).toUpperCase() + word.slice(1)
}