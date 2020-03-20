// show or hide generated input fields of TBA table generation(step#1)  based user choice
const manual_TBA_Probability = document.querySelector('#manual_TBA_Probability');
const auto_TBA_Probability = document.querySelector('#auto_TBA_Probability');
const TBA_Generated_container = document.querySelector('.TBA_Generated_container');
const TBA_Generated_Fields = document.querySelector('#TBA_Generated_Fields');
var maxTBA = document.querySelector('#maxTBA');
const msgFieldTBA = document.querySelector('#msgTBA');
const digitTBAbtn = document.querySelector('#digitChangeTBA');
const digitTBAfield = document.querySelector('#digitChangeFieldTBA');
const digitTBAdisplay = document.getElementById('digitTBAdisplay');

const currentValueContainerTBA = document.getElementById('currentValueTBA');
const requiredValueContainerTBA = document.getElementById('requiredValueTBA');
var digitTBA = 3;

digitTBAbtn.addEventListener('click', function (e) {
    e.preventDefault();
    digitTBAfield.style.visibility = 'unset';
});
digitTBAfield.addEventListener('blur', function (e) {
    e.preventDefault();
    digitTBAsetter();

});

digitTBAfield.addEventListener('mouseout', function (e) {

    digitTBAsetter();

});

function digitTBAsetter() {
    digitTBA = digitTBAfield.value;
    digitTBAfield.style.visibility = 'hidden';
    digitTBAdisplay.innerHTML = digitTBA;
    if (digitTBA == 3) {
        document.getElementById("digitTBAExample").innerHTML = '(1000)';
    } else if (digitTBA == 4) {
        document.getElementById("digitTBAExample").innerHTML = '(10000)';
    } else if (digitTBA == 5) {
        document.getElementById("digitTBAExample").innerHTML = '(100000)';
    } else if (digitTBA == 6) {
        document.getElementById("digitTBAExample").innerHTML = '(1000000)';
    }
}

digitTBAdisplay.innerHTML = digitTBA;
document.getElementById("digitTBAExample").innerHTML = '(1000)';

maxTBA.addEventListener('blur', function () {
    TBA_validator();
});


maxTBA.addEventListener('input', function () {


    if (maxTBA.value.toString().length > 4) {
        if (maxTBA.value > 10000) {
            messageShower('msgTBA', 'Please see console to see faster output for larger inputs.');
            maxTBA.value = parseInt(maxTBA.value.toString().substring(0, 4));
        }
        maxTBA.value = parseInt(maxTBA.value.toString().substring(0, 5));
    }


    if (maxTBA.value == "") {
        setTimeout(function () {
            TBA_validator();

        }, 4000)
    } else {
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
        currentValueContainerTBA.innerHTML = `0`;
        requiredValueContainerTBA.innerHTML = `Required: +1`;
        childEventSetter(TBA_Generated_Fields, probabilityChecker.bind(this, TBA_Generated_Fields, currentValueContainerTBA, requiredValueContainerTBA));
    }
}

auto_TBA_Probability.addEventListener('click', () => {
    TBA_Generated_container.classList.add('disabled');
    childrenDestroyer(TBA_Generated_Fields)
});


function childEventSetter(parent, func) {

    var GeneratedChild = parent.firstElementChild;
    for (i = 0; i < parent.childElementCount; i++) {
        GeneratedChild.addEventListener('input', function () {
            if (this.value > 1) {
                this.style.transition = '0.2s';
                this.style.backgroundColor = 'rgba(255,54,44,0.58)';
                let that = this;
                setTimeout(function () {
                    that.style.backgroundColor = 'unset';
                }, 500);
                this.value = '';

            }
            func();

        });
        GeneratedChild = GeneratedChild.nextElementSibling;
    }
}


function probabilityChecker(Generated_Fields_parent, currentValueContainer, requiredValueContainer) {
    var GeneratedChild = parent.firstElementChild;
    for (i = 0; i < parent.childElementCount; i++) {
        GeneratedChild.addEventListener('input', function () {
            func();
        });
        GeneratedChild = GeneratedChild.nextElementSibling;
    }

    if (probabilityValidator(Generated_Fields_parent) == 'one') {
        currentValueContainer.innerHTML = 1;
        currentValueContainer.style.color = '52C265';

        if (emptyField(Generated_Fields_parent) == false) {
            requiredValueContainer.innerHTML = '<i class="fa fa-check-circle" aria-hidden="true"></i> Perfect!';
            requiredValueContainer.style.color = 'unset';
            requiredValueContainer.style.borderColor = 'unset'
        } else {
            requiredValueContainer.innerHTML = '<i class="fa fa-exclamation-triangle" style="color: #DC3027;" aria-hidden="true"></i> Empty fields!';
        }


    } else {

        probabilityValue = probabilityValidator(Generated_Fields_parent);
        currentValueContainer.innerHTML = probabilityValue;
        currentValueContainer.style.color = 'unset';
        var requiredValue = 1 - parseFloat(probabilityValue);
        if (probabilityValue < 1) {
            requiredValue = "+" + requiredValue;
        }

        requiredValueContainer.innerHTML = `Required: ${requiredValue.toString().substring(0, 7)}`;
        requiredValueContainer.style.backgroundColor = 'unset';
        requiredValueContainer.style.color = '#dc3027';

    }

}


const generateTBA_btn = document.querySelector("#generateTBA_btn");
const outputTBA_table_content = document.querySelector("#outputTBA_table_content");

generateTBA_btn.addEventListener('click', (e) => {
    if (maxTBA.value > 3000) {
        messageShower('msgTBA', 'Loading.....')
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


        var TBA_table=$('#outputTBA_table').DataTable({
            responsive: true,
            searching:true,
            paginate:false,
            scrollY:300,
            bInfo : false,

        });
        new $.fn.dataTable.FixedHeader(TBA_table);
    }
});


//show or hide generated input fields of ST table generation(step#2)  based user choice
const manual_ST_Probability = document.querySelector('#manual_ST_Probability');
const auto_ST_Probability = document.querySelector('#auto_ST_Probability');
const ST_Generated_container = document.querySelector('.ST_Generated_container')
const ST_Generated_Fields = document.querySelector('#ST_Generated_Fields')
var maxST = document.querySelector('#maxST');
const msgFieldST = document.querySelector('#msgST');
const currentValueContainerST = document.getElementById('currentValueST');
const requiredValueContainerST = document.getElementById('requiredValueST');


const digitSTbtn = document.querySelector('#digitChangeST');
const digitSTfield = document.querySelector('#digitChangeFieldST');
const digitSTdisplay = document.getElementById('digitSTdisplay');
var digitST = 2;

digitSTbtn.addEventListener('click', function (e) {
    e.preventDefault();
    digitSTfield.style.visibility = 'unset';
});
digitSTfield.addEventListener('blur', function (e) {
    e.preventDefault();
    digitSTsetter();
})


digitSTfield.addEventListener('mouseout', function (e) {
    e.preventDefault();
    digitSTsetter();
})


function digitSTsetter() {
    digitST = digitSTfield.value;
    digitSTfield.style.visibility = 'hidden';
    digitSTdisplay.innerHTML = digitST;
    if (digitST == 2) {
        document.getElementById("digitSTExample").innerHTML = '(100)';
    } else if (digitST == 3) {
        document.getElementById("digitSTExample").innerHTML = '(1000)';
    } else if (digitST == 4) {
        document.getElementById("digitSTExample").innerHTML = '(10000)';
    } else if (digitST == 5) {
        document.getElementById("digitSTExample").innerHTML = '(100000)';
    }


}

digitSTdisplay.innerHTML = digitST;
document.getElementById("digitSTExample").innerHTML = '(100)';


maxST.addEventListener('input', function () {


    if (maxST.value.toString().length > 4) {
        if (maxST.value > 10000) {
            messageShower('msgST', 'Please open console to see faster output for larger value.');
            maxST.value = parseInt(maxST.value.toString().substring(0, 4));
            setTimeout(function () {
                messageShower('msgST', 'open console to see output faster if value>5000');
            }, 2000)
        }
        maxST.value = parseInt(maxST.value.toString().substring(0, 5));
    }


    if (maxST.value == "") {
        setTimeout(function () {
            ST_validator();
        }, 4000)
    } else {
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

        childrenDestroyer(ST_Generated_Fields);
        if (maxST.value != '0' && maxST.value != "") {
            ST_Generated_container.classList.remove('disabled');
        }
        inputFieldGenerator(maxST.value, ST_Generated_Fields, 'number', 'ST ', ['input-field-generated', 'p-2', 'm-2', 'ST_probability']);
        currentValueContainerST.innerHTML = `0`;
        requiredValueContainerST.innerHTML = `Required: +1`;
        childEventSetter(ST_Generated_Fields, probabilityChecker.bind(this, ST_Generated_Fields, currentValueContainerST, requiredValueContainerST));
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
    if (maxST.value > 3000) {
        messageShower('msgTBA', 'Loading.....')
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


        var ST_table=$('#SQC-ST-output-table').DataTable({
            responsive: true,
            searching:true,
            paginate:false,
            scrollY:290,
            bInfo : false,

        });
        new $.fn.dataTable.FixedHeader(ST_table);

    }
});


//show or hide generated input fields of Simulation table generation(step#3)  based user choice
const manual_Simulation_Randoms = document.querySelector('#manual_Simulation_Randoms');
const auto_Simulation_Randoms = document.querySelector('#auto_Simulation_Randoms');
const manual_Simulation_Randoms_Service = document.querySelector('#manual_Simulation_Randoms_Service');
const auto_Simulation_Randoms_Service = document.querySelector('#auto_Simulation_Randoms_Service');
const Simulation_Generated_container = document.querySelector('.Simulation_Generated_container');
const Simulation_Generated_Fields = document.querySelector('#Simulation_Generated_Fields');
const Simulation_Generated_container_service = document.querySelector('.Simulation_Generated_container_service');
const Simulation_Generated_Fields_service = document.querySelector('#Simulation_Generated_Fields_service');
var customerNum = document.querySelector('#customerNum');
const msgFieldSimulation = document.querySelector('#msgSimulation');


customerNum.addEventListener('blur', function () {
    Simulation_validator();
})

customerNum.addEventListener('input', function () {

    if (customerNum.value == "") {
        setTimeout(function () {
            Simulation_validator();
        }, 3500)
    } else {
        Simulation_validator();
    }

})

manual_Simulation_Randoms.addEventListener('click', () => {
    Simulation_validator();
});

manual_Simulation_Randoms_Service.addEventListener('click', () => {
    Simulation_validator();
});


auto_Simulation_Randoms.addEventListener('click', () => {
    Simulation_Generated_container.classList.add('disabled');
    childrenDestroyer(Simulation_Generated_Fields)

});


auto_Simulation_Randoms_Service.addEventListener('click', () => {
    Simulation_Generated_container_service.classList.add('disabled');
    childrenDestroyer(Simulation_Generated_Fields_service)

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
            setTimeout(() => msgFieldSimulation.style.visibility = 'hidden', 3000);
            customerNum.focus();
        }

        childrenDestroyer(Simulation_Generated_Fields);
        if (customerNum.value != '0' && customerNum.value != "") {
            Simulation_Generated_container.classList.remove('disabled');
        }

        inputFieldGenerator(customerNum.value, Simulation_Generated_Fields, 'number', 'cus ', ['input-field-generated', 'p-2', 'm-2', 'simulation_Randoms']);
        Simulation_Generated_Fields.firstElementChild.value=0;
    }

    if (manual_Simulation_Randoms_Service.checked) {

        if (customerNum.value == "" || customerNum.value == '0') {
            auto_Simulation_Randoms_Service.click();
            if (customerNum.value == '0') {

                msgFieldSimulation.innerHTML = 'There should be ateast 1 customer!'
            } else if (customerNum.value == "") {

                msgFieldSimulation.innerHTML = 'Please enter customer number first'
            }

            msgFieldSimulation.style.visibility = 'unset';
            setTimeout(() => msgFieldSimulation.style.visibility = 'hidden', 3000)
            customerNum.focus();
        }

        childrenDestroyer(Simulation_Generated_Fields_service);
        if (customerNum.value != '0' && customerNum.value != "") {
            Simulation_Generated_container_service.classList.remove('disabled');
        }

        inputFieldGenerator(customerNum.value, Simulation_Generated_Fields_service, 'number', 'cus ', ['input-field-generated', 'p-2', 'm-2', 'simulation_Randoms_service']);
    }
}


const generateSimulation_btn = document.querySelector("#generateSimulation_btn");
const outputSimulation_table_content = document.querySelector("#outputSimulation_table_content");

generateSimulation_btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputValidation(customerNum, 'msgSimulation', 'Empty Field: Customer Number not given ', manual_Simulation_Randoms, Simulation_Generated_Fields) && inputValidation(customerNum, 'msgSimulation', 'Empty Field: Customer Number not given ', manual_Simulation_Randoms_Service, Simulation_Generated_Fields_service)) {
        childrenDestroyer(outputSimulation_table_content);
        outputSimulation_table_content.parentElement.style.transition = '0.4s';
        outputSimulation_table_content.parentElement.style.backgroundColor = 'rgba(30,6,162,0.09)';
        setTimeout(function () {
            document.querySelector('.Simulation_output_table').style.setProperty('background-color', 'unset', 'important');
            outputSimulation_table_content.parentElement.style.setProperty('background-color', 'unset', 'important');

        }, 750);

        simulation_Solver();
        // outputTBA_table_content.parentElement.classList.add('table-responsive-sm');

        var Simulation_table=$('#SQC-Simulation-output-table').DataTable({
            responsive: true,
            searching:true,
            pageLength:25,
            paginate:true,
            scrollY:400,
            scrollCollapse: true,
            bInfo : true,

        });
        new $.fn.dataTable.FixedHeader(Simulation_table);

        // if ($.fn.dataTable.isDataTable('#SQC-Simulation-output-table')) {
        //
        //     table = $('#SQC-Simulation-output-table').DataTable();
        // } else {
        //     table = $('#SQC-Simulation-output-table').DataTable({
        //         responsive: true,
        //         sort: false,
        //         searching: false,
        //         paginate: false,
        //         scrollY: 450,
        //         bInfo: false,
        //     });
        // }
    }
});


//Dom manipulation ends, here starts math solving..

//TBA solver
var TBA_range_list = [];

function TBA_solver() {

    var TBA_list = [];
    var TBA_probability_list = [];
    var TBA_cumu_list = [];
    TBA_range_list = [];
    var TBA_manual_probb_list = [];


    class TBA_range {
        constructor(TBA,probability,cumulative_probability,start, end) {
            this.TBA=TBA;
            this.probability=probability;
            this.cumulative_probability=cumulative_probability;
            this.start = start;
            this.end = end;
        }

        getStart() {
            return this.start;
        }

        getEnd() {
            return this.end;
        }
    }

    var multiplyTBA = 1000;
    if (digitTBA == 3) {
        multiplyTBA = 1000;
    } else if (digitTBA == 4) {
        multiplyTBA = 10000;
    } else if (digitTBA == 5) {
        multiplyTBA = 100000;
    } else if (digitTBA == 6) {
        multiplyTBA = 1000000;
    }

    for (i = 1; i <= maxTBA.value; i++) {
        TBA_list.push(i);
    }

    if (auto_TBA_Probability.checked) {

        for (i = 1; i <= TBA_list.length; i++) {
            TBA_probability_list.push(1 / TBA_list.length);
        }

    } else if (manual_TBA_Probability.checked) {

        let child = TBA_Generated_Fields.firstElementChild;
        for (let i = 1; i <= TBA_Generated_Fields.childElementCount; i++) {
            if (child.value != "") {
                TBA_manual_probb_list.push(parseFloat(child.value));
            }
            child = child.nextElementSibling;
        }
        TBA_probability_list = [...TBA_manual_probb_list]

    }
    let cumu = 0;
    for (i = 0; i < TBA_probability_list.length; i++) {
        cumu = cumu + TBA_probability_list[i];
        TBA_cumu_list.push(cumu);
    }
    TBA_cumu_list[TBA_cumu_list.length - 1] = Math.round(TBA_cumu_list[TBA_cumu_list.length - 1]);


    let start = 1;
    for (i = 0; i < TBA_cumu_list.length; i++) {

        let range = new TBA_range(i+1,TBA_probability_list[i],TBA_cumu_list[i],start, Math.floor(TBA_cumu_list[i] * multiplyTBA));

        start = Math.floor(TBA_cumu_list[i] * multiplyTBA) + 1;

        TBA_range_list.push(range);
    }
    console.table(TBA_range_list);

    // console.log(`TBA:${TBA_list} \n Probability:${TBA_probability_list} \n Manual probbs:${TBA_manual_probb_list} \n Cumulative Probability:${TBA_cumu_list}\n Random Range:${TBA_range_list}`)
    //
    // console.log(TBA_cumu_list[0].toString().substring(0, 7));
    var tbl = document.createElement('table');
    tbl.id = 'outputTBA_table';
    tbl.classList.add('table', 'table-striped', 'table-bordered', 'table-hover', 'TBA-info-Table', 'TBA_output_table');
    var thead = `<thead>
                                <tr>
                                    <th>Time Between Arrival</th>
                                    <th>Probability</th>
                                    <th>Cumulative Probability</th>
                                    <th>Random Range</th>
                                </tr>
                                </thead>`;

    tbl.innerHTML = thead;

    var tbody = document.createElement('tbody');
    for (let i = 0; i < maxTBA.value; i++) {
        tbody.appendChild(generateRows(TBA_list[i], TBA_probability_list[i].toString().substring(0, 7), TBA_cumu_list[i].toString().substring(0, 7), `${TBA_range_list[i].start}-${TBA_range_list[i].end}`));
    }
    tbl.appendChild(tbody);
    document.getElementById('tableContainerTBA').innerHTML = " ";
    document.getElementById('tableContainerTBA').appendChild(tbl);

}


//ST_solver


var ST_range_list = [];

function ST_solver() {

    var ST_list = [];
    var ST_probability_list = [];
    var ST_cumu_list = [];
    ST_range_list = [];
    var ST_manual_probb_list = [];


    class ST_range {
        constructor(serviceTime,probability,cumulative_probability,start, end) {
            this.serviceTime=serviceTime;
            this.probability=probability;
            this.cumulative_probability=cumulative_probability;
            this.start=start;
            this.end = end;
        }

        getStart() {
            return this.start;
        }

        getEnd() {
            return this.end;
        }
    }

    var multiplyST = 100;
    if (digitST == 3) {
        multiplyST = 1000;
    } else if (digitST == 4) {
        multiplyST = 10000;
    } else if (digitST == 5) {
        multiplyST = 100000;
    }

    for (i = 1; i <= maxST.value; i++) {
        ST_list.push(i);
    }

    if (auto_ST_Probability.checked) {

        for (i = 1; i <= ST_list.length; i++) {
            ST_probability_list.push(1 / ST_list.length);
        }

    } else if (manual_ST_Probability.checked) {
        let child = ST_Generated_Fields.firstElementChild;
        for (let i = 1; i <= ST_Generated_Fields.childElementCount; i++) {
            if (child.value != "") {
                ST_manual_probb_list.push(parseFloat(child.value));
            }
            child = child.nextElementSibling;
        }
        ST_probability_list = [...ST_manual_probb_list]

    }
    let cumu = 0;
    for (i = 0; i < ST_probability_list.length; i++) {
        cumu = cumu + ST_probability_list[i];
        ST_cumu_list.push(cumu);
    }
    ST_cumu_list[ST_cumu_list.length - 1] = Math.round(ST_cumu_list[ST_cumu_list.length - 1]);


    let start = 1;
    for (i = 0; i < ST_cumu_list.length; i++) {

        let range = new ST_range(i+1,ST_probability_list[i],ST_cumu_list[i],start, Math.floor(ST_cumu_list[i] * multiplyST));

        start = Math.floor(ST_cumu_list[i] * multiplyST) + 1;

        ST_range_list.push(range);
    }
    console.table(ST_range_list);
    var tbl = document.createElement('table');
    tbl.id = 'SQC-ST-output-table';
    tbl.classList.add('table', 'table-striped', 'table-bordered', 'table-hover', 'ST-info-Table', 'ST_output_table');
    var thead = `<thead>
                                <tr>
                                    <th>Service Time</th>
                                    <th>Probability</th>
                                    <th>Cumulative Probability</th>
                                    <th>Random Range</th>
                                </tr>
                                </thead>`;

    tbl.innerHTML = thead;

    var tbody = document.createElement('tbody');
    for (let i = 0; i < maxST.value; i++) {
        tbody.appendChild(generateRows(ST_list[i], ST_probability_list[i].toString().substring(0, 7), ST_cumu_list[i].toString().substring(0, 7), `${ST_range_list[i].start}-${ST_range_list[i].end}`));
    }
    tbl.appendChild(tbody);
    document.getElementById('tableContainerST').innerHTML = " ";
    document.getElementById('tableContainerST').appendChild(tbl);
}




var solved_customer_list=[];


function simulation_Solver() {

    class customer{
        constructor(customerNo,time_between_arrival,arrival_time,service_time,time_service_begins,idle_system) {
                this.customerNo=customerNo;
                this.time_between_arrival=time_between_arrival;
                this.arrival_time=arrival_time;
                this.service_time=service_time;
                this.time_service_begins=time_service_begins;
                this.setTCW();
                this.setTSE();
                this.setTCS();
                this.idle_system=idle_system;

        }

        setTCW(){
            if (this.customerNo==1){
                this.time_customer_waits=0;
            }else{
               this.time_customer_waits= this.time_service_begins-this.arrival_time;
            }
        }

        setTSE(){
            this.time_service_ends=this.time_service_begins+this.service_time;
        }

        setTCS(){
            this.time_customer_spends=this.time_service_ends-this.arrival_time;
        }
    }

    solved_customer_list=[];
    let customer_list=[];
    let random_list_tba=[];
    let random_list_service=[];
    let TBA_list=[];
    let AT_list=[];
    let service_list=[];
    let maxRange_tba;

    switch (parseInt(digitTBA)) {
        case 3:
            maxRange_tba=1000;
            break;
        case 4:
            maxRange_tba=10000;
            break;
        case 5:
            maxRange_tba=100000;
            break;
        case 6:
            maxRange_tba=1000000;
            break;
        default:
            maxRange_tba=1000;
    }

    let maxRange_service;
    switch (parseInt(digitST)) {
        case 2:
            maxRange_service=100;
            break;
        case 3:
            maxRange_service=1000;
            break;
        case 4:
            maxRange_service=10000;
            break;
        case 5:
            maxRange_service=100000;
            break;
        default:
            maxRange_service=100;
    }

    for(let i=1;i<=customerNum.value;i++){
        customer_list.push(i);
    }

    if (auto_Simulation_Randoms.checked){
        for (let i=0;i<customer_list.length;i++){
            if (i==0){
                random_list_tba.push(0);
            }else{
                let tbaRandom=RandomValueByRange(1,maxRange_tba);
                random_list_tba.push(tbaRandom);
            }
        }
    }else if (manual_Simulation_Randoms.checked){
        let child = Simulation_Generated_Fields.firstElementChild;
        for (let i = 0; i < Simulation_Generated_Fields.childElementCount; i++) {
            if (child.value != "") {
                random_list_tba.push(parseFloat(child.value));
            }
            child = child.nextElementSibling;
        }
    }


    if (auto_Simulation_Randoms_Service.checked){
        for (let i=0;i<customer_list.length;i++){
            let serviceRandom=RandomValueByRange(1,maxRange_service);
            random_list_service.push(serviceRandom);
        }
    }else if (manual_Simulation_Randoms_Service.checked){
        let child = Simulation_Generated_Fields_service.firstElementChild;
        for (let i = 0; i < Simulation_Generated_Fields_service.childElementCount; i++) {
            if (child.value != "") {
                random_list_service.push(parseFloat(child.value));
            }
            child = child.nextElementSibling;
        }
    }


    for (let i=0;i<customer_list.length;i++){
            if (random_list_tba[i]==0){
                TBA_list.push(0)
            }else{
                for (let j=0;j<TBA_range_list.length;j++){
                    if (random_list_tba[i]>=TBA_range_list[j].start&&random_list_tba[i]<=TBA_range_list[j].end){
                        TBA_list.push(TBA_range_list[j].TBA)
                    }
                }
            }

        for (let k=0;k<ST_range_list.length;k++){
            if (random_list_service[i]>=ST_range_list[k].start&&random_list_service[i]<=ST_range_list[k].end){
                service_list.push(ST_range_list[k].serviceTime)
            }
        }

    }

    let at = 0;
    for (let i = 0; i < TBA_list.length; i++) {
        at = at+ TBA_list[i];
        AT_list.push(at);
    }


    for (let i=0;i<customerNum.value;i++){
        if (i==0){
            let cust=new customer(i+1,TBA_list[i],AT_list[i],service_list[i],AT_list[i],0);

            solved_customer_list.push(cust);

        }else{
            let tsb=Math.max(solved_customer_list[i-1].time_service_ends,AT_list[i]);
            let cust=new customer(i+1,TBA_list[i],AT_list[i],service_list[i],tsb,tsb-solved_customer_list[i-1].time_service_ends);

           solved_customer_list.push(cust);
        }


    }


    var tbl = document.createElement('table');
    tbl.id = 'SQC-Simulation-output-table';
    tbl.classList.add('SQC-Simulation-output-table', 'table', 'table-striped', 'table-bordered', 'table-hover', 'Simulation-info-Table', 'Simulation_output_table');
    var thead = `<thead>
                            <tr>
                                <th>Customer</th>
                                <th>TBA</th>
                                <th>AT</th>
                                <th>ST</th>
                                <th>TSB</th>
                                <th>TCW</th>
                                <th>TSE</th>
                                <th>TCS</th>
                                <th>IS</th>
                            </tr>
                            </thead>`;

    tbl.innerHTML = thead;

    var tbody = document.createElement('tbody');
    for (let i = 0; i < customerNum.value; i++) {
        if (solved_customer_list[i].time_between_arrival==0){
            tbody.appendChild(generateSimulationRows(solved_customer_list[i].customerNo,'-',solved_customer_list[i].arrival_time,solved_customer_list[i].service_time,solved_customer_list[i].time_service_begins,solved_customer_list[i].time_customer_waits,solved_customer_list[i].time_service_ends,solved_customer_list[i].time_customer_spends,solved_customer_list[i].idle_system));
        }else{
            tbody.appendChild(generateSimulationRows(solved_customer_list[i].customerNo,solved_customer_list[i].time_between_arrival,solved_customer_list[i].arrival_time,solved_customer_list[i].service_time,solved_customer_list[i].time_service_begins,solved_customer_list[i].time_customer_waits,solved_customer_list[i].time_service_ends,solved_customer_list[i].time_customer_spends,solved_customer_list[i].idle_system));
        }

    }
    tbl.appendChild(tbody);
    document.getElementById('tableContainerSimulation').innerHTML = " ";
    document.getElementById('tableContainerSimulation').appendChild(tbl);





   console.table(solved_customer_list);




}
const RandomValueByRange=(Min,Max)=>randomValue=Math.floor(Math.random()*(Max-Min+1))+Min;
// simulation_Solver();




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
    } else if (manualProbabiityParent.checked && probabilityValidator(GeneratedFieldParent) != 'one') {

        if (GeneratedFieldParent != Simulation_Generated_Fields) {
            messageShower(msgSpan, `Sum of probabilities must be 1, current: ${probabilityValidator(GeneratedFieldParent)}`);
            GeneratedFieldParent.style.transition = '0.2s';
            GeneratedFieldParent.style.backgroundColor = 'rgba(221,21,34,0.16)';
            GeneratedFieldParent.style.borderRadius = '10px';

            setTimeout(function () {
                GeneratedFieldParent.style.backgroundColor = 'unset';
                GeneratedFieldParent.style.borderRadius = 'unset';

            }, 3000);

            return false
        }

    }

    return true
}


function probabilityValidator(parent) {
    var isOne = 0;
    var tempProbabilites = [];
    let child = parent.firstElementChild;
    for (let i = 1; i <= parent.childElementCount; i++) {
        if (child.value != "") {
            tempProbabilites.push(parseFloat(child.value));
        }
        child = child.nextElementSibling;
    }
    for (let i = 0; i < tempProbabilites.length; i++) {
        isOne = parseFloat(isOne) + parseFloat(tempProbabilites[i]);
    }


    if (isOne === 1) {
        return 'one';
    } else {
        return parseFloat(isOne);
    }
}


function generateRows(firstVal, secondVal, thirdVal, fourthVal) {

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

    return row;
}


function generateSimulationRows(customer, TBA, AT, ST, TSB, TCW, TSE, TCS, IS) {


        var row = document.createElement('tr');

        let customerContainer = document.createElement('td');
        customerContainer.innerHTML = customer;
        row.appendChild(customerContainer);

        let TBAContainer = document.createElement('td');
        TBAContainer.innerHTML = TBA;
        row.appendChild(TBAContainer);

        let atContainer = document.createElement('td');
        atContainer.innerHTML =AT;
        row.appendChild(atContainer);

        let stContainer = document.createElement('td');
        stContainer.innerHTML = ST;
        row.appendChild(stContainer);

        let tsbContainer = document.createElement('td');
        tsbContainer.innerHTML = TSB;
        row.appendChild(tsbContainer);

        let tcwContainer = document.createElement('td');
        tcwContainer.innerHTML = TCW;
        row.appendChild(tcwContainer);

        let tseContainer = document.createElement('td');
        tseContainer.innerHTML = TSE;
        row.appendChild(tseContainer);

        let tcsContainer = document.createElement('td');
        tcsContainer.innerHTML = TCS;
        row.appendChild(tcsContainer);

        let isContainer = document.createElement('td');
        isContainer.innerHTML = IS;
        row.appendChild(isContainer);

        return row;

}
