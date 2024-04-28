

var user_input = document.getElementById('user_input')
var result_final = document.getElementById('result_final')
var congratz = document.getElementById('congratz')

function User_number(U_number) {
    //alert(U_number)
    user_input.innerText = U_number
    var randomDone = Math.ceil(Math.random() * 6)
    //console.log(randomDone)
    result_final.innerText = randomDone
    if (U_number == randomDone) {
        congratz.innerText = 'Congratz! You won'
        congratz.style.color ='green'
    }
    else {
        congratz.innerText = 'Sorry! You lose'
        congratz.style.color ='red'

    }
}
