$(document).ready(function(){
    $.getJSON("http://localhost:3000/flight/cities", function(data){
        // alert(JSON.stringify(data))
        // console.log(data.result[0].cid)
        data.result.map((i)=>{
            $("#scity").append($("<option>").text(i.cname).val(i.cid))
            $("#dcity").append($("<option>").text(i.cname).val(i.cid))
        })
    })

    // $("#scity").change(function(){
    //     $("#dcity").map((i)=>{
    //         if($("#dcity").val()==$("#scity").val()) {
    //             $("#dcity").remove(i)
    //         }
    //     })
    // })
})

