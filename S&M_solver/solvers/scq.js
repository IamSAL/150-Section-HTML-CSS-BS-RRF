// show or hide generated input fields of TBA table generation(step#1)  based user choice
const manual_TBA_Probability = document.querySelector('#manual_TBA_Probability');
const auto_TBA_Probability = document.querySelector('#auto_TBA_Probability');
const TBA_Generated_container = document.querySelector('.TBA_Generated_container');
const TBA_Generated_Fields = document.querySelector('#TBA_Generated_Fields');
var maxTBA = document.querySelector('#maxTBA');
const msgFieldTBA = document.querySelector('#msgTBA');
const digitTBAbtn=document.querySelector('#digitChangeTBA');
const digitTBAfield=document.querySelector('#digitChangeFieldTBA');
const digitTBAdisplay=document.getElementById('digitTBAdisplay');
var digitTBA=3;

digitTBAbtn.addEventListener('click',function (e) {
    e.preventDefault()
   digitTBAfield.style.visibility='unset';
});
digitTBAfield.addEventListener('blur',function (e) {
    e.preventDefault();
   digitTBAsetter();

});

digitTBAfield.addEventListener('mouseout',function (e) {

    digitTBAsetter();

});

function digitTBAsetter(){
    digitTBA=digitTBAfield.value;
    digitTBAfield.style.visibility='hidden';
    digitTBAdisplay.innerHTML=digitTBA;
    if (digitTBA==3){
        document.getElementById("digitTBAExample").innerHTML='(1000)';
    }else if(digitTBA==4) {
        document.getElementById("digitTBAExample").innerHTML = '(10000)';
    }else if(digitTBA==5) {
        document.getElementById("digitTBAExample").innerHTML = '(100000)';
    }else if(digitTBA==6) {
        document.getElementById("digitTBAExample").innerHTML = '(1000000)';
    }
}

digitTBAdisplay.innerHTML=digitTBA;
document.getElementById("digitTBAExample").innerHTML='(1000)';

maxTBA.addEventListener('blur', function () {
    TBA_validator();
});


maxTBA.addEventListener('keyup', function () {

    if(maxTBA.value.toString().length>4){
        if (maxTBA.value>10000){
            messageShower('msgTBA','sorry,more than 10000 will hang up your pc!');
            maxTBA.value=parseInt(maxTBA.value.toString().substring(0,4));
            setTimeout(function () {
                messageShower('msgTBA','open console to see output faster if value>5000');
            },2000)
        }
        maxTBA.value=parseInt(maxTBA.value.toString().substring(0,5));
    }


    if (maxTBA.value==""){
        setTimeout(function () {
            TBA_validator();
        },4000)
    }else {
        TBA_validator();
    }

});


maxTBA.addEventListener('keydown', function () {



    if(maxTBA.value.toString().length>4){
        if (maxTBA.value>10000){
            messageShower('msgTBA','sorry,more than 10000 will hang up your pc!');
            maxTBA.value=parseInt(maxTBA.value.toString().substring(0,4));
            setTimeout(function () {
                messageShower('msgTBA','open console to see output faster if value>5000');
            },2000)
        }
        maxTBA.value=parseInt(maxTBA.value.toString().substring(0,5));
    }


    if (maxTBA.value==""){
        setTimeout(function () {
            TBA_validator();
        },4000)
    }else {
        TBA_validator();
    }

});

manual_TBA_Probability.addEventListener('click', function () {
    TBA_validator();
});

function TBA_validator() {
    if (manual_TBA_Probability.checked) {


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
        if (maxTBA.value != '0' && maxTBA.value != "") {
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
    if(maxTBA.value>3000){
        messageShower('msgTBA','Loading.....')
    }
    if (inputValidation(maxTBA, 'msgTBA', 'Empty Field: maxTBA not given ', manual_TBA_Probability, TBA_Generated_Fields)) {

        childrenDestroyer(outputTBA_table_content);
        outputTBA_table_content.parentElement.style.transition = '0.4s';
        outputTBA_table_content.style.boxShadow = '-15px 15px 35px rgba(157, 218, 253, 0.12)';
        outputTBA_table_content.parentElement.style.backgroundColor = 'rgba(30,6,162,0.09)';
        setTimeout(function () {
            document.querySelector('.TBA_output_table').style.setProperty('background-color', 'unset', 'important');
            outputTBA_table_content.parentElement.style.setProperty('background-color', 'unset', 'important');

        }, 750);

        //Here we GO!!


        TBA_solver();

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




const digitSTbtn=document.querySelector('#digitChangeST');
const digitSTfield=document.querySelector('#digitChangeFieldST');
const digitSTdisplay=document.getElementById('digitSTdisplay');
var digitST=2;

digitSTbtn.addEventListener('click',function (e) {
    e.preventDefault();
    digitSTfield.style.visibility='unset';
});
digitSTfield.addEventListener('blur',function (e) {
    e.preventDefault();
    digitSTsetter();
})

digitSTfield.addEventListener('mouseout',function (e) {
    e.preventDefault();
    digitSTsetter();
})


function digitSTsetter(){
    digitST=digitSTfield.value;
    digitSTfield.style.visibility='hidden';
    digitSTdisplay.innerHTML=digitST;
    if (digitST==2){
        document.getElementById("digitSTExample").innerHTML='(100)';
    }else if(digitST==3) {
        document.getElementById("digitSTExample").innerHTML = '(1000)';
    }else if(digitST==4) {
        document.getElementById("digitSTExample").innerHTML = '(10000)';
    }else if(digitST==5) {
        document.getElementById("digitSTExample").innerHTML = '(100000)';
    }


}

digitSTdisplay.innerHTML=digitST;
document.getElementById("digitSTExample").innerHTML='(100)';


maxST.addEventListener('keydown', function () {


    if(maxST.value.toString().length>4){
        if (maxST.value>10000){
            messageShower('msgST','sorry,more than 10000 will hang up your pc!');
            maxST.value=parseInt(maxST.value.toString().substring(0,4));
            setTimeout(function () {
                messageShower('msgST','open console to see output faster if value>5000');
            },2000)
        }
        maxST.value=parseInt(maxST.value.toString().substring(0,5));
    }



    if (maxST.value==""){
        setTimeout(function () {
            ST_validator();
        },4000)
    }else {
        ST_validator();
    }

});


maxST.addEventListener('keyup', function () {

    if(maxST.value.toString().length>4){
        if (maxST.value>10000){
            messageShower('msgST','sorry,more than 10000 will hang up your pc!');
            maxST.value=parseInt(maxST.value.toString().substring(0,4));
            setTimeout(function () {
                messageShower('msgST','open console to see output faster if value>5000');
            },2000)
        }
        maxST.value=parseInt(maxST.value.toString().substring(0,5));
    }

    if (maxST.value==""){
        setTimeout(function () {
            ST_validator();
        },4000)
    }else {
        ST_validator();
    }
});

maxST.addEventListener('blur', function () {
    ST_validator()
});

manual_ST_Probability.addEventListener('click', function () {
    ST_validator()
});

function ST_validator() {
    if (manual_ST_Probability.checked) {
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
        if (maxST.value != '0' && maxST.value != "") {
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
    if(maxST.value>3000){
        messageShower('msgTBA','Loading.....')
    }
    if (inputValidation(maxST, 'msgST', 'Empty Field: maxST not given ', manual_ST_Probability, ST_Generated_Fields)) {
        childrenDestroyer(outputST_table_content);
        outputST_table_content.parentElement.style.transition = '0.4s';
        outputST_table_content.style.boxShadow = '-15px 15px 35px rgba(157, 218, 253, 0.12)';
        outputST_table_content.parentElement.style.backgroundColor = 'rgba(30,6,162,0.09)';
        setTimeout(function () {
            document.querySelector('.ST_output_table').style.setProperty('background-color', 'unset', 'important');
            outputST_table_content.parentElement.style.setProperty('background-color', 'unset', 'important');

        }, 750);


         ST_solver();
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


customerNum.addEventListener('blur', function () {
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
    if (manual_Simulation_Randoms.checked) {

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
        if (customerNum.value != '0' && customerNum.value != "") {
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

        generateSimulationRows(customerNum.value, outputSimulation_table_content, 'customer', 'tba', 'at', 'st', 'tsb', 'tcw', 'tce', 'tcs', 'is');

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


//Dom manipulation ends, here starts math solving..

//TBA solver
var TBA_range_list=[];
function  TBA_solver() {

    var TBA_list=[];
    var TBA_probability_list=[];
    var TBA_cumu_list=[];
    TBA_range_list=[];
    var TBA_manual_probb_list=[];


    class TBA_range{
        constructor(start,end) {
            this.start=start;
            this.end=end;
        }
        getStart(){
            return this.start;
        }
        getEnd(){
            return this.end;
        }
    }

    var multiplyTBA=1000;
    if (digitTBA==3){
        multiplyTBA=1000;
    }else if(digitTBA==4){
        multiplyTBA=10000;
    }else if(digitTBA==5){
        multiplyTBA=100000;
    }else if(digitTBA==6){
        multiplyTBA=1000000;
    }

    for (i=1;i<=maxTBA.value;i++){
        TBA_list.push(i);
    }

    if (auto_TBA_Probability.checked){

        for (i=1;i<=TBA_list.length;i++){
            TBA_probability_list.push(1/TBA_list.length);
        }

    }else if(manual_TBA_Probability.checked){
        console.log('manual selected');
        let child = TBA_Generated_Fields.firstElementChild;
        for (let i = 1; i <= TBA_Generated_Fields.childElementCount; i++) {
            if (child.value != "") {
                TBA_manual_probb_list.push(parseFloat(child.value));
            }
            child = child.nextElementSibling;
        }
            TBA_probability_list=[...TBA_manual_probb_list]

    }
        let cumu=0;
        for (i=0;i<TBA_probability_list.length;i++){
            cumu=cumu+TBA_probability_list[i];
            TBA_cumu_list.push(cumu);
        }
        TBA_cumu_list[TBA_cumu_list.length-1]=Math.round(TBA_cumu_list[TBA_cumu_list.length-1]);


        let start=1;
        for (i=0;i<TBA_cumu_list.length;i++){

            let range= new TBA_range(start,Math.floor(TBA_cumu_list[i]*multiplyTBA));

            start=Math.floor(TBA_cumu_list[i]*multiplyTBA)+1;

            TBA_range_list.push(range);
        }

        console.log(`TBA:${TBA_list} \n Probability:${TBA_probability_list} \n Manual probbs:${TBA_manual_probb_list} \n Cumulative Probability:${TBA_cumu_list}\n Random Range:${TBA_range_list}`)

        console.log(TBA_cumu_list[0].toString().substring(0,7));

        for (let i=0;i<maxTBA.value;i++){
            generateRows(outputTBA_table_content,TBA_list[i],TBA_probability_list[i].toString().substring(0,7),TBA_cumu_list[i].toString().substring(0,7),`${TBA_range_list[i].start}-${TBA_range_list[i].end}`);
        }

}


//ST_solver


var ST_range_list=[];
function  ST_solver() {

    var ST_list=[];
    var ST_probability_list=[];
    var ST_cumu_list=[];
    ST_range_list=[];
    var ST_manual_probb_list=[];


    class ST_range{
        constructor(start,end) {
            this.start=start;
            this.end=end;
        }
        getStart(){
            return this.start;
        }
        getEnd(){
            return this.end;
        }
    }

    var multiplyST=100;
    if (digitTBA==3){
        multiplyST=1000;
    }else if(digitTBA==4){
        multiplyST=10000;
    }else if(digitTBA==5){
        multiplyST=100000;
    }

    for (i=1;i<=maxST.value;i++){
        ST_list.push(i);
    }

    if (auto_ST_Probability.checked){

        for (i=1; i<=ST_list.length; i++){
            ST_probability_list.push(1/ST_list.length);
        }

    }else if(manual_ST_Probability.checked){
        let child = ST_Generated_Fields.firstElementChild;
        for (let i = 1; i <= ST_Generated_Fields.childElementCount; i++) {
            if (child.value != "") {
                ST_manual_probb_list.push(parseFloat(child.value));
            }
            child = child.nextElementSibling;
        }
        ST_probability_list=[...ST_manual_probb_list]

    }
    let cumu=0;
    for (i=0; i<ST_probability_list.length; i++){
        cumu=cumu+ST_probability_list[i];
        ST_cumu_list.push(cumu);
    }
    ST_cumu_list[ST_cumu_list.length-1]=Math.round(ST_cumu_list[ST_cumu_list.length-1]);


    let start=1;
    for (i=0; i<ST_cumu_list.length; i++){

        let range= new ST_range(start,Math.floor(ST_cumu_list[i]*multiplyST));

        start=Math.floor(ST_cumu_list[i]*multiplyST)+1;

        ST_range_list.push(range);
    }

    // console.log(`TBA:${ST_list} \n Probability:${ST_probability_list} \n Manual probbs:${ST_manual_probb_list} \n Cumulative Probability:${ST_cumu_list}\n Random Range:${ST_range_list}`)
    //
    // console.log(ST_cumu_list[0].toString().substring(0,7));

    for (let i=0;i<maxST.value;i++){
        generateRows(outputST_table_content,ST_list[i],ST_probability_list[i].toString().substring(0,7),ST_cumu_list[i].toString().substring(0,7),`${ST_range_list[i].start}-${ST_range_list[i].end}`);
    }

}




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
    }else if(manualProbabiityParent.checked && probabilityValidator(GeneratedFieldParent)!='one'){

        if(GeneratedFieldParent !=Simulation_Generated_Fields){
            messageShower(msgSpan, `Sum of probabilities must be 1, current: ${probabilityValidator(GeneratedFieldParent)}`);
            GeneratedFieldParent.style.transition = '0.2s';
            GeneratedFieldParent.style.backgroundColor = 'rgba(221,21,34,0.16)';
            GeneratedFieldParent.style.borderRadius = '10px';

            setTimeout(function () {
                GeneratedFieldParent.style.backgroundColor = 'unset';
                GeneratedFieldParent.style.borderRadius = 'unset';

            }, 3000);

            return false
        }else{
            console.log('success')
        }

    }

    return true
}


function probabilityValidator(parent) {
    var isOne=0;
    var tempProbabilites=[];
    let child = parent.firstElementChild;
    for (let i = 1; i <= parent.childElementCount; i++) {
        if (child.value != "") {
            tempProbabilites.push(parseFloat(child.value));
        }
        child = child.nextElementSibling;
    }
    for (let i=0;i<tempProbabilites.length;i++){
        isOne=parseFloat(isOne)+parseFloat(tempProbabilites[i]);
    }

    console.log(tempProbabilites);
    if(isOne==1){
        return 'one';
    }else{
        return isOne;
    }
}

function generateRows(parentTable, firstVal, secondVal, thirdVal, fourthVal) {

        var row = document.createElement('tr');

        let firstValContainer = document.createElement('td');
        firstValContainer.innerHTML = firstVal;
        row.appendChild(firstValContainer);

        let secondValContainer = document.createElement('td');
        secondValContainer.innerHTML = secondVal;
        row.appendChild(secondValContainer);

        let thirdValContainer = document.createElement('td');
        thirdValContainer.innerHTML = thirdVal;
        row.appendChild(thirdValContainer);

        let fourthValContainer = document.createElement('td');
        fourthValContainer.innerHTML = fourthVal;
        row.appendChild(fourthValContainer);

        parentTable.appendChild(row)
}


function generateSimulationRows(maxVal, parentTable, customer, TBA, AT, ST, TSB, TCW, TSE, TCS, IS) {
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
