let inputs = document.querySelectorAll('input');
let errorEmg = document.querySelectorAll('.error-img');
let emptySpan = document.querySelectorAll('.empty');
let submitBtn = document.getElementById('btn')
let email = document.getElementById('email')
let duration = 5000;
errorEmg.forEach((emg) => {
    emg.classList.add('hiden')
})

emptySpan.forEach(span => {
    span.style.display = 'none'
})

submitBtn.addEventListener('click', function () {
   
    inputs.forEach(input => {
        
        if(input.value == '') {
            input.setAttribute('placeholder',' ')
            input.style.border = '1px solid #ff7a7a '
            
            email.classList.add('emails')
            email.setAttribute('placeholder','email@example/com') 
            errorEmg.forEach((emg) => {
                emg.classList.remove('hiden')
            })
            emptySpan.forEach(span => {
                span.style.display = 'block'
            })
            
        }
    })
    setInterval(() => {
        location.reload()
    }, duration);

  

})

