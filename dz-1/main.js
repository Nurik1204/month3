const gmailInput = document.querySelector("#gmailInput")
const chek = document.querySelector("#chek")
const result = document.querySelector(".result")

const regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

chek.onclick = () => {
    if (regExp.test(gmailInput.value)){
        result.innerHTML = 'good'

    }else{
        result.innerHTML = 'bad'
    }
}


// dz1-2//
let counter = 0
const big = document.querySelector(".big_block")
const mini = document.querySelector(".block")

big.addEventListener('click', rev=()=>{
    if (counter<=450){
        setTimeout(()=>{
            mini.style.left = `${counter}px`
            counter += 50
            rev()}
        ,50)}
}
)