let btn=document.querySelector('button')
let input=document.querySelector('input');
let boxes=document.querySelectorAll('.box')
let errormsg=document.querySelector('.error-msg')
let num=0;
btn.addEventListener('click', ()=>{
    if(input.value)num=input.value;
    if(num>=1 && num<=9){
        boxes.forEach((box)=>{
             box.classList.remove('highlight')
             if(box.id===num)box.classList.add('highlight')
        })
    }
    else{
        errormsg.style.display='block'
        setTimeout(() => {
            errormsg.style.display='none'
        }, 4000);
        
    }

})
    
