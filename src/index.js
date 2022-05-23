const button = document.querySelector('button');

button.addEventListener('click', function handleClick(event) {
    event.target.classList.add('scale-75')
    button.disabled = true

    fetchAdvice()

    setTimeout(() => {
        button.classList.remove('scale-75')
    }, 150)

    setTimeout(() => {
        button.disabled = false
    }, 1000)
})

const fetchAdvice = async() => {
    const respond = await fetch('https://api.adviceslip.com/advice')
    const data = await respond.json()

    document.getElementById('adviceNumber').innerHTML = `Advice #${data.slip.id}`
    document.getElementById('text').innerHTML = `"${data.slip.advice}"`
}