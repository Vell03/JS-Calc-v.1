const input = document.querySelector('.result'),
      btns = document.querySelectorAll('.calc__button'),
      history = document.querySelector('.history'),
      end = document.querySelector('.end');

let a = 0,
    b = 0;

input.value = '';

btns.forEach(element => {
    element.addEventListener(('click'), event => {
        // console.log(event.target.lastChild.textContent);
        if(event.target.lastChild.textContent === '-' || event.target.lastChild.textContent === '+') {
           if(event.target.lastChild.textContent === '+'){
                if(a != 0 && b == 0) {
                    b = +input.value;
                    
                    hist = document.createElement('p');
                    hist.innerHTML = `${a} + ${b} = ${a + b}`;
                    console.log(hist)
                    history.insertAdjacentElement('beforeend', hist)
                    
                    console.log(`b: ${b}`)
                    input.value = a + b;
                    console.log(`result ${input.value}`);
                    a = 0;
                    b = 0;
                } else {
                    a = +input.value;
                    console.log(`a: ${a}`);
                    input.value = '';
                }
           } else {
                if(a != 0 && b == 0) {
                    b = +input.value;
                    
                    hist = document.createElement('p');
                    hist.innerHTML = `${a} - ${b} = ${a - b}`;
                    console.log(hist)
                    history.insertAdjacentElement('beforeend', hist)
                    
                    console.log(`b: ${b}`)
                    input.value = a - b;
                    console.log(`result ${input.value}`);
                    a = 0;
                    b = 0;
                } else {
                    a = +input.value;
                    console.log(`a: ${a}`);
                    input.value = '';
                }
           }

        } else if(event.target.lastChild.textContent === 'C') {
            input.value = '';
            a = '';
            b = '';
        } else {
            input.value += event.target.lastChild.textContent;
        }
    })
} )