//show or hide generated input fields of TBA table generation(step#1)  based user choice
const manual_TBA_Probability = document.querySelector('#manual_TBA_Probability');
const auto_TBA_Probability = document.querySelector('#auto_TBA_Probability');
const TBA_Generated_container = document.querySelector('.TBA_Generated_container')
const TBA_Generated_Fields = document.querySelector('#TBA_Generated_Fields')
var maxTBA = document.querySelector('#maxTBA');
const msgFieldTBA = document.querySelector('#msgTBA');

manual_TBA_Probability.addEventListener('click', () => {

    if (maxTBA.value == "" || maxTBA.value == '0') {
        auto_TBA_Probability.click();
        if (maxTBA.value == '0') {
            msgFieldTBA.innerHTML = 'MaxTBA must be more than 0'
        } else if (maxTBA.value == "") {
            msgFieldTBA.innerHTML = 'Please enter Max TBA first'
        }
        msgFieldTBA.style.visibility = 'unset'
        setTimeout(() => msgFieldTBA.style.visibility = 'hidden', 3000)
        maxTBA.focus();
    }
    console.log(maxTBA.value);
    childrenDestroyer(TBA_Generated_Fields);
    TBA_Generated_container.classList.remove('disabled');
    inputFieldGenerator(maxTBA.value, TBA_Generated_Fields, 'number', 'TBA', ['input-field-generated', 'p-2', 'm-2', 'TBA_probability']);
});

auto_TBA_Probability.addEventListener('click', () => {
    TBA_Generated_container.classList.add('disabled');
    childrenDestroyer(TBA_Generated_Fields)
});


//show or hide generated input fields of ST table generation(step#2)  based user choice
const manual_ST_Probability = document.querySelector('#manual_ST_Probability');
const auto_ST_Probability = document.querySelector('#auto_ST_Probability');
const ST_Generated_container = document.querySelector('.ST_Generated_container')
const ST_Generated_Fields = document.querySelector('#ST_Generated_Fields')
var maxST = document.querySelector('#maxST');
const msgFieldST = document.querySelector('#msgST');

manual_ST_Probability.addEventListener('click', () => {

    if (maxST.value == "" || maxST.value == '0') {
        auto_ST_Probability.click();
        if (maxST.value == '0') {
            msgFieldST.innerHTML = 'MaxST must be more than 0'
        } else if (maxST.value == "") {
            msgFieldST.innerHTML = 'Please enter Max ST first'
        }
        msgFieldST.style.visibility = 'unset'
        setTimeout(() => msgFieldST.style.visibility = 'hidden', 3000)
        maxST.focus();
    }
    console.log(maxST.value);
    childrenDestroyer(ST_Generated_Fields);
    ST_Generated_container.classList.remove('disabled');
    inputFieldGenerator(maxST.value, ST_Generated_Fields, 'number', 'ST ', ['input-field-generated', 'p-2', 'm-2', 'ST_probability']);
});

auto_ST_Probability.addEventListener('click', () => {
    ST_Generated_container.classList.add('disabled');
    childrenDestroyer(ST_Generated_Fields)
});


//show or hide generated input fields of Simulation table generation(step#3)  based user choice
const manual_Simulation_Randoms = document.querySelector('#manual_Simulation_Randoms');
const auto_Simulation_Randoms = document.querySelector('#auto_Simulation_Randoms');
const Simulation_Generated_container = document.querySelector('.Simulation_Generated_container')
const Simulation_Generated_Fields = document.querySelector('#Simulation_Generated_Fields')
var customerNum = document.querySelector('#customerNum');
const msgFieldSimulation = document.querySelector('#msgSimulation');

manual_Simulation_Randoms.addEventListener('click', () => {

    if (customerNum.value == "" || customerNum.value == '0') {
        auto_Simulation_Randoms.click();
        if (customerNum.value == '0') {
            msgFieldSimulation.innerHTML = 'There should be ateast 1 customer!'
        } else if (customerNum.value == "") {
            msgFieldSimulation.innerHTML = 'Please enter customer number first'
        }
        msgFieldSimulation.style.visibility = 'unset'
        setTimeout(() => msgFieldSimulation.style.visibility = 'hidden', 3000)
        customerNum.focus();
    }
    console.log(customerNum.value);
    childrenDestroyer(Simulation_Generated_Fields);
    Simulation_Generated_container.classList.remove('disabled');
    inputFieldGenerator(customerNum.value, Simulation_Generated_Fields, 'number', 'cus ', ['input-field-generated', 'p-2', 'm-2', 'simulation_Randoms']);
});

auto_Simulation_Randoms.addEventListener('click', () => {
    Simulation_Generated_container.classList.add('disabled');
    childrenDestroyer(Simulation_Generated_Fields)
});


function inputFieldGenerator(howMany, parent, type, placeholder, classArray) {

    for (let i = 1; i <= howMany; i++) {
        let child = document.createElement('input');
        child.type = type;
        child.placeholder = `${placeholder}#${i}`;
        child.classList.add(...classArray);
        parent.appendChild(child)
    }
}

function childrenDestroyer(parent) {
    let child = parent.lastElementChild;
    while (child != null) {
        parent.removeChild(child);
        child = parent.lastElementChild;
    }
}

