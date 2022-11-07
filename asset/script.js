let counter = document.getElementById('counter')
let saveEn = document.getElementById('save-en')
let count = 0


function increment() {
    count += 1
    counter.textContent = count
}

function save() {
    let countStr = count + ' - '
    saveEn.textContent += countStr
    counter.textContent = 0
    count = 0
    console.log(count)
}
