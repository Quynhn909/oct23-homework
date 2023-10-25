document.getElementById("btn-action-3").addEventListener("click", ()  => {
     let n =parseInt(document.getElementById("n").value);

    //  5 -> 5, -5 -> 5
    if (n >= 0){
        alert(`Giá trị tuyệt đối của ${n} là  ${n} `)
    }else{
        alert(`Giá trị tuyệt đối của ${n} là  ${-n} `)
    }

});