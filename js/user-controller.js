'use strict'


function onSubmit(ev) {
    ev.preventDefault();
    const USER = {
        name: document.querySelector('[name=name]').value,
        email: document.querySelector('[name=email]').value,
        textColor: document.querySelector('[name=textColor]').value,
        backgroundColor: document.querySelector('[name=backgroundColor]').value,
        age: document.querySelector('[name=age]').value,
        birthDate: document.querySelector('[name=birthDate]').value,
        birthTime: document.querySelector('[name=birthTime]').value,


    }
    saveUsers(USER)
    // console.log('email', USER );
}
// window.addEventListener('submit', (ev) => {
//     ev.preventDefault()
// })

function onShowAge(newVal) {
    // console.log(newVal);
    document.querySelector('.age span').innerText = newVal
}

function onInit() {
    loadUsers()
    renderUser()
    renderDataList()

}

function renderUser() {
    const user = getCurrUser()
    // var head = document.querySelector('.head')
    // head.innerText = `Welcome ${user.name}`

    const elContainer = document.querySelector('.container')
    // container.style.backgroundColor = user.backgroundColor
    elContainer.querySelector('legend').innerText = `Welcome ${user.name}`
    elContainer.style.backgroundColor = user.backgroundColor
    elContainer.style.color = user.textColor
}


function renderDataList() {
    const users = getUsers()
    if(users) {
        const strHtmls = users.map(function (user) {
            return `<option value="${user.email}" label="${user.name}" />`
 
        })  
        document.querySelector('.contactList').innerHTML = strHtmls.join('')
        // console.log(strHtmls);
}
}

function onChangeUser(elVal) {
    // console.log(el);
    setUserByVal(elVal)
    renderUser()

}