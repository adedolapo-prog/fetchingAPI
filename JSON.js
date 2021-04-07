const baseURL ="https://api.adviceslip.com";
const statement = document.querySelector('.advice')
const button = document.querySelector('.btn-click')

const fetchData = async () => {
    const response = await fetch(`${baseURL}/advice`)
    const data = await response.json()
    return data
}

console.log(fetchData())

const display =  async () => {
    const result =  await fetchData();
    statement.innerHTML = `<h1>${result.slip.advice}</h1>`
}

button.addEventListener('click', display)