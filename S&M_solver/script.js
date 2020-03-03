$(document).ready(function () {
var TBA_table=$('#SQC-TBA-output-table').DataTable({
    responsive: true,
    ordering:true,
    pageLength:5,
    searching:true,
    paginate:false,
    scrollY:300,
    bInfo : false,

});
    new $.fn.dataTable.FixedHeader(TBA_table);
});