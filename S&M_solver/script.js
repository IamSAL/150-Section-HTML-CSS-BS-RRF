$(document).ready(function () {
    var tds=document.querySelectorAll('td');
    var nodes = Array.prototype.slice.call(tds,0);
    nodes.forEach(function(node){
        if(node.innerHTML='NA'){

            node.innerHTML=`<span style='opacity: 0.2;'>N/A</span>`
        }

    });
});