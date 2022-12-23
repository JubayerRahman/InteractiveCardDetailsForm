// splash Cscreen
window.addEventListener('DOMContentLoaded',()=>{
    setTimeout(()=>{
        document.getElementById('splach').classList.add('splashDisapire');
        // document.getElementById('splach').style.display = "none"
    },10000)
})

// real Codes :)


const naMe = document.getElementById('name');
const cNumber = document.getElementById('cNumber');
const eNum1 = document.getElementById('eNum1');
const eNum2 = document.getElementById('eNum2');
const CvcNum = document.getElementById('CvcNum');
const confirm = document.getElementById('confirm').addEventListener("click",()=>{
    if(naMe.value < 1){
        console.log('Name error')
        naMe.style.border = '2px solid red'
        document.querySelector('.nameError').innerHTML ="Please Enter Name"
        setTimeout(()=>{
            document.querySelector('.nameError').innerHTML = " "
            naMe.style.border = '1px solid hsl(279, 6%, 55%)'
        },4000)
        naMe.value=""
    }
    if(cNumber.value.length < 19){
        console.log('Number error')
        cNumber.style.border = '2px solid red'
        document.querySelector('.cNumError').innerHTML ="Please Enter 19 digits for card Number"
        setTimeout(()=>{
            document.querySelector('.cNumError').innerHTML = " "
            cNumber.style.border = '1px solid hsl(279, 6%, 55%)'
        },4000)
        cNumber.value =""
    }
    if(eNum1.value < 1){
        console.log('date1 error')
        eNum1.style.border = '2px solid red'
        document.querySelector('.dateError').innerHTML ="Please Enter exp date Properly"
        setTimeout(()=>{
            document.querySelector('.dateError').innerHTML = " "
            eNum1.style.border = '1px solid hsl(279, 6%, 55%)'
        },4000)
    }
    if(eNum2.value < 1){
        console.log('date1 error')
        eNum2.style.border = '2px solid red'
        document.querySelector('.dateError').innerHTML ="Please Enter exp date Properly"
        setTimeout(()=>{
            document.querySelector('.dateError').innerHTML = " "
            eNum2.style.border = '1px solid hsl(279, 6%, 55%)'
        },4000)
    }
    if(CvcNum.value < 1){
        console.log('date1 error')
        CvcNum.style.border = '2px solid red'
        document.querySelector('.cvcError').innerHTML ="Please Enter CVC Number"
        setTimeout(()=>{
            document.querySelector('.cvcError').innerHTML = " "
            CvcNum.style.border = '1px solid hsl(279, 6%, 55%)'
        },4000)
    }
    else{
        console.log(naMe.value)
        document.querySelector('.showName').innerHTML=(naMe.value);
        document.querySelector('.cardNumber').innerHTML=(cNumber.value);
        document.querySelector('.mm').innerHTML=(eNum1.value);
        document.querySelector('.yy').innerHTML=(eNum2.value);
        document.querySelector('.cvc').innerHTML=(CvcNum.value);
        document.querySelector('.nameinput').style.display ="none"
        document.querySelector('.numberinput').style.display ="none"
        document.querySelector('.bottomData').style.display ="none"
        document.querySelector('.confirm').style.display ="none"
        document.querySelector('.AfterSection').style.display ="block"

    }
})

document.getElementById('confirmload').addEventListener('click',()=>{
    location.reload();
})
