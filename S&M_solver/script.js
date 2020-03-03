$(document).ready(function () {
var TBA_table=$('#SQC-TBA-output-table').DataTable({
    responsive: true,
    pageLength:5,
    searching:true,
    paginate:false,
    scrollY:300,
    bInfo : false,

});
    new $.fn.dataTable.FixedHeader(TBA_table);


    var ST_table=$('#SQC-ST-output-table').DataTable({
        responsive: true,
        pageLength:5,
        searching:true,
        paginate:false,
        scrollY:290,
        bInfo : false,

    });
    new $.fn.dataTable.FixedHeader(ST_table);


    var Simulation_table=$('#SQC-Simulation-output-table').DataTable({
        responsive: true,
        searching:true,
        paginate:true,
        scrollY:400,
        scrollCollapse: true,
        bInfo : false,

    });
    new $.fn.dataTable.FixedHeader(Simulation_table);
});