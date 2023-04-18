let card = document.querySelector('.card'), 
    input = document.querySelector('input'),
    btn = document.querySelector('.btn');

    input.addEventListener('input', () =>{
        card.style.backgroundColor = input.value;
        card.style.borderRadius = input.value;
    });
    btn.addEventListener('click', () =>{
        window.location.reload();
    });