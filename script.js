const h1 = document.querySelector('h1')
const happy = document.querySelector('#happy')
const sad = document.querySelector('#sad')
const sleepy = document.querySelector('#sleepy')
const confused = document.querySelector('#confused')

happy.addEventListener('click', (e) => {
    store.dispatch({type: 'HAPPY', payload: "(ಥ◡ಥ)"})
    h1.innerHTML = store.getState().face
})
sad.addEventListener('click', (e) => {
    store.dispatch({type: 'SAD', payload: "⊙︿⊙"})
    h1.innerHTML = store.getState().face
})
sleepy.addEventListener('click', (e) => {
    store.dispatch({type: 'SLEEPY', payload: "(ᴗ˳ᴗ)"})
    h1.innerHTML = store.getState().face
})
confused.addEventListener('click', (e) => {
    store.dispatch({type: 'CONFUSED', payload: "ↂ_ↂ"})
    h1.innerHTML = store.getState().face
})