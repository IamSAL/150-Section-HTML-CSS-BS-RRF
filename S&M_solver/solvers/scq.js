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

    childrenDestroyer(TBA_Generated_Fields);
    TBA_Generated_container.classList.remove('disabled');
    inputFieldGenerator(maxTBA.value, TBA_Generated_Fields, 'number', 'TBA', ['input-field-generated', 'p-2', 'm-2', 'TBA_probability']);
});

auto_TBA_Probability.addEventListener('click', () => {
    TBA_Generated_container.classList.add('disabled');
    childrenDestroyer(TBA_Generated_Fields)
});


const generateTBA_btn = document.querySelector("#generateTBA_btn");
const outputTBA_table_content = document.querySelector("#outputTBA_table_content");

generateTBA_btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputValidation(maxTBA, 'msgTBA', 'Empty Field: maxTBA not given ', manual_TBA_Probability, TBA_Generated_Fields)) {
        childrenDestroyer(outputTBA_table_content);
        outputTBA_table_content.parentElement.style.transition = '0.1s';
        outputTBA_table_content.parentElement.style.backgroundColor = 'rgba(157, 218, 253, 0.12)';
        setTimeout(function () {

            outputTBA_table_content.parentElement.style.backgroundColor = 'unset';
            outputTBA_table_content.style.boxShadow = '-15px 15px 35px rgba(157, 218, 253, 0.12)';
        }, 1000)


        for (let i = 1; i <= maxTBA.value; i++) {


            var TBA_row = document.createElement('tr');

            let TBA_value = document.createElement('td');
            TBA_value.innerHTML = `TBA_${i}`;
            TBA_row.appendChild(TBA_value);

            let TBA_probability_value = document.createElement('td');
            TBA_probability_value.innerHTML = `probb_${i}`;
            TBA_row.appendChild(TBA_probability_value);

            let TBA_cum_probability_value = document.createElement('td');
            TBA_cum_probability_value.innerHTML = `cumu_probb_${i}`;
            TBA_row.appendChild(TBA_cum_probability_value);

            let TBA_range_value = document.createElement('td');
            TBA_range_value.innerHTML = `range_${i}`;
            TBA_row.appendChild(TBA_range_value);

            outputTBA_table_content.appendChild(TBA_row)
        }
        // outputTBA_table_content.parentElement.classList.add('table-responsive-sm');


        if ($.fn.dataTable.isDataTable('#outputTBA_table')) {

            table = $('#outputTBA_table').DataTable();
        } else {
            table = $('#outputTBA_table').DataTable({
                responsive: true,
                pageLength: 5,
                sort: false,
                searching: false,
                paginate: false,
                scrollY: 300,
                bInfo: false,
            });
        }
    }
})


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
        msgFieldST.style.visibility = 'unset';
        setTimeout(() => msgFieldST.style.visibility = 'hidden', 3000);
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

function messageShower(spanID, content) {

    let msgField = document.getElementById(spanID);
    let goto = msgField.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    msgField.innerHTML = content;
    msgField.style.visibility = 'unset';
    goto.scrollIntoView();
    setTimeout(() => msgField.style.visibility = 'hidden', 3000)

}

function emptyField(parent) {
    let status = false;
    let child = parent.firstElementChild;
    for (let i = 1; i <= parent.childElementCount; i++) {
        if (child.value == "") {
            status = true;
        }
        child = child.nextElementSibling;
    }
    return status;
}

function inputValidation(maxVal, msgSpan, msgContent, manualProbabiityParent, GeneratedFieldParent) {
    if (maxVal.value == "" || maxVal.value == '0') {
        if (maxVal.value == '0') {
            msgContent = msgContent + "or 0";
        }
        messageShower(msgSpan, msgContent);
        maxVal.focus();
        return false
    } else if (manualProbabiityParent.checked && emptyField(GeneratedFieldParent)) {
        messageShower(msgSpan, 'Please input all manual values');
        GeneratedFieldParent.style.transition = '0.2s';
        GeneratedFieldParent.style.backgroundColor = 'rgba(221,21,34,0.16)';
        GeneratedFieldParent.style.borderRadius = '10px';

        setTimeout(function () {
            GeneratedFieldParent.style.backgroundColor = 'unset';
            GeneratedFieldParent.style.borderRadius = 'unset';

        }, 3000);
        return false
    }

    return true
}

