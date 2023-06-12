let select = document.querySelector('#holiday');
let userName = document.querySelector('#name');
let userSurname = document.querySelector('#surname');

userName.addEventListener('input', () => {
    setOk(userName);
})

userSurname.addEventListener('input', () => {
    setOk(userSurname);
})

let submit = document.querySelector('.submit');

submit.addEventListener('click', () => {
    console.log('hi');
})

let sections = document.querySelectorAll('section');
let buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        let flag = true;
        let index = +btn.dataset.part;
        
        if (index === 0) {
            flag = select.value === 'no' ? false : true;
        } else {
            let user = userName.value !== '' && userSurname.value !== '';
            flag = user ? true : false;
        }

        if (flag) {
            hideChoose(index);
        } else {
            showMistake(index);
            setTimeout(() => hideMistake(index), 2000);
        }

        if (sections[0].dataset.clicked === 'yes' && sections[1].dataset.clicked === 'yes') {
            submit.style.display = 'block';
        } else {
            submit.style.display = 'none';
        }
    })
})

let edits = document.querySelectorAll('.edit');

edits.forEach(edit => {
    edit.addEventListener('click', () => {
        let index = +edit.dataset.part;
        showChoose(index);
        submit.style.display = 'none';
    })
})


function setOk(element) {
    let parent = element.parentElement;
    let ok = parent.querySelector('.green');
    if (element.value !== '') {
        ok.style.display = 'flex'
    } else {
        ok.style.display = 'none'
    }
}



function hideChoose(index) {
    sections[index].dataset.clicked = 'yes';

    let choose = sections[index].querySelector('.choose');
    choose.style.display = 'none';

    let result = sections[index].querySelector('.result');
    result.style.display = 'flex';

    let text = result.querySelector('.result-text');

    if (index === 1) {
        let box = sections[index].querySelector('.button-right');
        box.style.display = 'none';

        let age = document.querySelector('#age');

        let ageValue = 'менее 14 лет';
        if (+age.value === 2) {
            ageValue = '14-30 лет';
        } else if (+age.value === 3) {
            ageValue = '30-50 лет';
        } else if (+age.value === 4) {
            ageValue = 'старше 50 лет';
        }

        let form = document.querySelector("form");

        text.textContent = `${userName.value} ${userSurname.value} 
                            ${form.elements["sex"].value} ${ageValue}`;
    } else {
        text.textContent = select.value;
    }
}

function showChoose(index) {
    sections[index].dataset.clicked = 'no';

    let choose = sections[index].querySelector('.choose');
    choose.style.display = 'flex';

    let result = sections[index].querySelector('.result');
    result.style.display = 'none';

    if (index === 1) {
        let box = sections[index].querySelector('.button-right');
        box.style.display = 'flex';
    }
}

function showMistake(index) {
    let mistake = sections[index].querySelector('.mistake');
    mistake.style.display = 'block';
}

function hideMistake(index) {
    let mistake = sections[index].querySelector('.mistake');
    mistake.style.display = 'none';
}
