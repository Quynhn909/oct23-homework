let btnAction2 = document.getElementById("btn-action-2");


btnAction2.addEventListener("click", () => {
    let a = parseInt(document.getElementById("number-a").value);
    let b = parseInt(document.getElementById("number-b").value);

    if (a > b){
    alert(` Số lớn nhất là: ${a}`  );

    }else{
        alert( `Số lớn nhất là: ${b}`);
    }
});