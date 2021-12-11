'use strict'

var gUsers
const KEY = 'users'
var gCurrUser
const CURR_USER_KEY = 'curr-user'


function saveUsers(user) {
    const isExist = checkUser(user)
    if (isExist) return
    // console.log(isExist);

    gUsers.push(user)
    saveToStorage(KEY, gUsers)
    saveToStorage(CURR_USER_KEY, user)
    // console.log(gUsers);
    gCurrUser = user
    renderUser()
    renderDataList()
}

function loadUsers() {
    let users = loadFromStorage(KEY)
    if (!users) users = []
    gUsers = users
    // console.log(gUsers);
}

function checkUser(user) {
    var isUser = false
    gUsers.forEach(currUser => {
        // console.log(currUser);
        if (user.email === currUser.email) isUser = true

    });
    return isUser
}

function getCurrUser() {
    let currUser = loadFromStorage(CURR_USER_KEY)
    return currUser

}

function getUsers() {
    return loadFromStorage(KEY)

}

function setUserByVal(elVal) {
    // console.log(elVal);
    gUsers.forEach(function (user) {
        if (user.email === elVal) gCurrUser = user
    });
    saveToStorage(CURR_USER_KEY, gCurrUser)
    
    console.log(gCurrUser);

}