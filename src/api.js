export const getTodosFromApi = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    return data.slice(0, 8)
  } catch (error) {
    console.log(error)
  }
}