function getNumber (num: any){
    (document.getElementById('myNumber') as HTMLInputElement).value = (document.getElementById('myNumber') as HTMLInputElement).value + num
}

function solution() {
    let operation = (document.getElementById('myNumber') as HTMLInputElement).value
    if (operation != ''){
        (document.getElementById('myNumber') as HTMLInputElement).value = eval(operation)
        var ul = document.getElementById("history");
        var li= document.createElement("li");
        li.appendChild(document.createTextNode( operation+"="+eval(operation)))
        ul?.appendChild(li);
        (document.getElementById('myNumber') as HTMLInputElement).value = ''
    }
    else{
        alert("No Input!");
    }
}
