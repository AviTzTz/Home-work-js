
let btn = document.getElementById('btn');
let tbl = document.getElementById('tbl');
let img = document.getElementById('img');
let inp1 = document.getElementById('inp1');
let inp2 = document.getElementById('inp2');
let inp3 = document.getElementById('inp3');
let inp4 = document.getElementById('inp4');
    btn.addEventListener('click',(event) =>{
        event.preventDefault();
        let fullname = inp1.value;
        let mail = inp2.value;
        let age = inp3.value;
        let phone = inp4.value;
        let row = tbl.insertRow(-1);
        let cell1 = row.insertCell(0);
        cell1.style.textAlign = "center";
        let cell2 = row.insertCell(1);
        cell2.style.textAlign = "center";
        let cell3 = row.insertCell(2);
        cell3.style.textAlign = "center";
        let cell4 = row.insertCell(3);
        cell4.style.textAlign = "center";
        cell1.innerHTML = fullname;
        cell2.innerHTML = mail;
        cell3.innerHTML = age;
        cell4.innerHTML = phone;
        if (fullname == 0 || mail == 0 || age == 0 || phone == 0){
            row.remove();
            alert("Some details are missing")
        }
        else if (age < 18){
            img.style.display = "none"
            alert("Cant show img to under 18")
        }else{
            img.style.display = "block"
        }
    })