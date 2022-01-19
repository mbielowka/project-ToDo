const submitButton = document.getElementsByClassName('save')[0]
const input = document.getElementsByClassName('text')[0]

submitButton.addEventListener('click', () => {
    const activity = input.value

    if(activity.length < 3){
        return
    }

    const newActivity = document.createElement('div')
    newActivity.classList.add('container')
    const text = document.createElement('p')
    text.classList.add('example')
    text.innerHTML = activity
    newActivity.appendChild(text)
    const icon = document.createElement('i')
    icon.classList.add('bin','fas', 'fa-trash')
    newActivity.appendChild(icon)

    document.body.appendChild(newActivity)
    text.addEventListener('click', () => {
        
        if(text.style['text-decoration'] === 'line-through') {
            text.style = ''
        } else {
            text.style['text-decoration'] = 'line-through'
        }
    })

    icon.addEventListener('click', () => {
        newActivity.remove()
    })
    input.value = ''
})
