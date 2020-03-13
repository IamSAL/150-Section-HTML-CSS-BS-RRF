//show or hide generated input fields of TBA table generation(step#1)  based user choice
const manual_TBA_Probability = document.querySelector('#manual_TBA_Probability');
const auto_TBA_Probability = document.querySelector('#auto_TBA_Probability');
const TBA_Generated_container = document.querySelector('.TBA_Generated_container');
const TBA_Generated_Fields = document.querySelector('#TBA_Generated_Fields');
var maxTBA = document.querySelector('#maxTBA');
const msgFieldTBA = document.querySelector('#msgTBA');

maxTBA.addEventListener('blur',function () {
    TBA_validator();
});
manual_TBA_Probability.addEventListener('click', function () {
    TBA_validator();
});

function TBA_validator() {
    if(manual_TBA_Probability.checked){


    if (maxTBA.value == "" || maxTBA.value == '0') {
        auto_TBA_Probability.click();
        if (maxTBA.value == '0') {
            msgFieldTBA.innerHTML = 'MaxTBA must be more than 0'
        } else if (maxTBA.value == "") {
            msgFieldTBA.innerHTML = 'Please enter Max TBA first';
        }
        msgFieldTBA.style.visibility = 'unset';
        setTimeout(() => msgFieldTBA.style.visibility = 'hidden', 3000);
        maxTBA.focus();
    }

    childrenDestroyer(TBA_Generated_Fields);
    if (maxTBA.value!='0'&&maxTBA.value!=""){
        TBA_Generated_container.classList.remove('disabled');
    }
    inputFieldGenerator(maxTBA.value, TBA_Generated_Fields, 'number', 'TBA', ['input-field-generated', 'p-2', 'm-2', 'TBA_probability']);
    }
}
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
        outputTBA_table_content.parentElement.style.transition = '0.4s';
        outputTBA_table_content.style.boxShadow = '-15px 15px 35px rgba(157, 218, 253, 0.12)';
        outputTBA_table_content.parentElement.style.backgroundColor = 'rgba(30,6,162,0.09)';
        setTimeout(function () {
            document.querySelector('.TBA_output_table').style.setProperty('background-color', 'unset', 'important');
            outputTBA_table_content.parentElement.style.setProperty('background-color', 'unset', 'important');

        }, 750);


        generateRows(maxTBA.value,outputTBA_table_content);
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
});


//show or hide generated input fields of ST table generation(step#2)  based user choice
const manual_ST_Probability = document.querySelector('#manual_ST_Probability');
const auto_ST_Probability = document.querySelector('#auto_ST_Probability');
const ST_Generated_container = document.querySelector('.ST_Generated_container')
const ST_Generated_Fields = document.querySelector('#ST_Generated_Fields')
var maxST = document.querySelector('#maxST');
const msgFieldST = document.querySelector('#msgST');

maxST.addEventListener('blur',function () {
    ST_validator()
});

manual_ST_Probability.addEventListener('click',function () {
ST_validator()
});

function ST_validator(){
if (manual_ST_Probability.checked){
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
    if (maxST.value!='0'&&maxST.value!=""){
        ST_Generated_container.classList.remove('disabled');
    }
    inputFieldGenerator(maxST.value, ST_Generated_Fields, 'number', 'ST ', ['input-field-generated', 'p-2', 'm-2', 'ST_probability']);
    }
}

auto_ST_Probability.addEventListener('click', () => {
    ST_Generated_container.classList.add('disabled');
    childrenDestroyer(ST_Generated_Fields)
});



const generateST_btn = document.querySelector("#generateST_btn");
const outputST_table_content = document.querySelector("#outputST_table_content");

generateST_btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputValidation(maxST, 'msgST', 'Empty Field: maxST not given ', manual_ST_Probability, ST_Generated_Fields)) {
        childrenDestroyer(outputST_table_content);
        outputST_table_content.parentElement.style.transition = '0.4s';
        outputST_table_content.style.boxShadow = '-15px 15px 35px rgba(157, 218, 253, 0.12)';
        outputST_table_content.parentElement.style.backgroundColor = 'rgba(30,6,162,0.09)';
        setTimeout(function () {
            document.querySelector('.ST_output_table').style.setProperty('background-color', 'unset', 'important');
            outputST_table_content.parentElement.style.setProperty('background-color', 'unset', 'important');

        }, 750);


        generateRows(maxST.value,outputST_table_content);
        // outputTBA_table_content.parentElement.classList.add('table-responsive-sm');


        if ($.fn.dataTable.isDataTable('#SQC-ST-output-table')) {

            table = $('#SQC-ST-output-table').DataTable();
        } else {
            table = $('#SQC-ST-output-table').DataTable({
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
});






//show or hide generated input fields of Simulation table generation(step#3)  based user choice
const manual_Simulation_Randoms = document.querySelector('#manual_Simulation_Randoms');
const auto_Simulation_Randoms = document.querySelector('#auto_Simulation_Randoms');
const Simulation_Generated_container = document.querySelector('.Simulation_Generated_container')
const Simulation_Generated_Fields = document.querySelector('#Simulation_Generated_Fields')
var customerNum = document.querySelector('#customerNum');
const msgFieldSimulation = document.querySelector('#msgSimulation');


customerNum.addEventListener('blur',function () {
    Simulation_validator();
})

manual_Simulation_Randoms.addEventListener('click', () => {
    Simulation_validator();
});



auto_Simulation_Randoms.addEventListener('click', () => {
    Simulation_Generated_container.classList.add('disabled');
    childrenDestroyer(Simulation_Generated_Fields)

});


function Simulation_validator() {
    if (manual_Simulation_Randoms.checked){

        if (customerNum.value == "" || customerNum.value == '0') {
            auto_Simulation_Randoms.click();
            if (customerNum.value == '0') {

                msgFieldSimulation.innerHTML = 'There should be ateast 1 customer!'
            } else if (customerNum.value == "") {

                msgFieldSimulation.innerHTML = 'Please enter customer number first'
            }

            msgFieldSimulation.style.visibility = 'unset';
            setTimeout(() => msgFieldSimulation.style.visibility = 'hidden', 3000)
            customerNum.focus();
        }
        console.log(customerNum.value);
        childrenDestroyer(Simulation_Generated_Fields);
        if (customerNum.value!='0'&&customerNum.value!=""){
            Simulation_Generated_container.classList.remove('disabled');
        }

        inputFieldGenerator(customerNum.value, Simulation_Generated_Fields, 'number', 'cus ', ['input-field-generated', 'p-2', 'm-2', 'simulation_Randoms']);
    }
}





const generateSimulation_btn = document.querySelector("#generateSimulation_btn");
const outputSimulation_table_content = document.querySelector("#outputSimulation_table_content");

generateSimulation_btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputValidation(customerNum, 'msgSimulation', 'Empty Field: Customer Number not given ', manual_Simulation_Randoms, Simulation_Generated_Fields)) {
        childrenDestroyer(outputSimulation_table_content);
        outputSimulation_table_content.parentElement.style.transition = '0.4s';
        outputSimulation_table_content.parentElement.style.backgroundColor = 'rgba(30,6,162,0.09)';
        setTimeout(function () {
            document.querySelector('.Simulation_output_table').style.setProperty('background-color', 'unset', 'important');
            outputSimulation_table_content.parentElement.style.setProperty('background-color', 'unset', 'important');

        }, 750);

        generateSimulationRows(customerNum.value,outputSimulation_table_content,'customer','tba','at','st','tsb','tcw','tce','tcs','is');

        // outputTBA_table_content.parentElement.classList.add('table-responsive-sm');


        if ($.fn.dataTable.isDataTable('#SQC-Simulation-output-table')) {

            table = $('#SQC-Simulation-output-table').DataTable();
        } else {
            table = $('#SQC-Simulation-output-table').DataTable({
                responsive: true,
                sort: false,
                searching: false,
                paginate: false,
                scrollY: 450,
                bInfo: false,
            });
        }
    }
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

function generateRows(maxVal,parentTable,firstVal,secondVal,thirdVal,fourthVal) {
    for (let i = 1; i <= maxVal; i++) {


        var row = document.createElement('tr');

        let firstValContainer = document.createElement('td');
        firstValContainer.innerHTML = `${firstVal}_${i}`;
        row.appendChild(firstValContainer);

        let secondValContainer = document.createElement('td');
        secondValContainer.innerHTML = `${secondVal}_${i}`;
        row.appendChild(secondValContainer);

        let thirdValContainer = document.createElement('td');
        thirdValContainer.innerHTML = `${thirdVal}_${i}`;
        row.appendChild(thirdValContainer);

        let fourthValContainer = document.createElement('td');
        fourthValContainer.innerHTML = `${fourthVal}_${i}`;
        row.appendChild(fourthValContainer);

        parentTable.appendChild(row)
    }
}


function generateSimulationRows(maxVal,parentTable,customer,TBA,AT,ST,TSB,TCW,TSE,TCS,IS) {
    for (let i = 1; i <= maxVal; i++) {

        var row = document.createElement('tr');

        let customerContainer = document.createElement('td');
        customerContainer.innerHTML = `${customer}_${i}`;
        row.appendChild(customerContainer);

        let TBAContainer = document.createElement('td');
        TBAContainer.innerHTML = `${TBA}_${i}`;
        row.appendChild(TBAContainer);

        let atContainer = document.createElement('td');
        atContainer.innerHTML = `${AT}_${i}`;
        row.appendChild(atContainer);

        let stContainer = document.createElement('td');
        stContainer.innerHTML = `${ST}_${i}`;
        row.appendChild(stContainer);

        let tsbContainer = document.createElement('td');
        tsbContainer.innerHTML = `${TSB}_${i}`;
        row.appendChild(tsbContainer);

        let tcwContainer = document.createElement('td');
        tcwContainer.innerHTML = `${TCW}_${i}`;
        row.appendChild(tcwContainer);

        let tseContainer = document.createElement('td');
        tseContainer.innerHTML = `${TSE}_${i}`;
        row.appendChild(tseContainer);

        let tcsContainer = document.createElement('td');
        tcsContainer.innerHTML = `${TCS}_${i}`;
        row.appendChild(tcsContainer);

        let isContainer = document.createElement('td');
        isContainer.innerHTML = `${IS}_${i}`;
        row.appendChild(isContainer);

        parentTable.appendChild(row)
    }
}