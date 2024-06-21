export const isWord = (str) => {
    if (str.trim().indexOf(' ') > -1) {
        return Boolean (false)
    } else {
        return Boolean (true)
    }
}