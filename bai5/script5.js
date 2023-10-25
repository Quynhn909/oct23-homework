let btnAction5 = document.getElementById("btn-action-5");

btnAction5.addEventListener("click", () => {
    let n1 = parseInt(document.getElementById("n1").value);
    let n2 = parseInt(document.getElementById("n2").value);
    let n3 = parseInt(document.getElementById("n3").value);

    if (n1 >= n2 && n1 >= n3){
        alert(`Số lớn nhất là ${n1}`);
    }else if(n2 >= n1 && n2 >= n3){
        alert(`Số lớn nhất là ${n2}`);
    }else {
        alert(`Số lớn nhất là ${n3}`);
    }
});