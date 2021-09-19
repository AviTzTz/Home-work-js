let burger = document.getElementById('hamburger');
let ulbar = document.getElementById('ulbar');
burger.addEventListener('click',(event) => {
    if(ulbar.style.display == 'none'){
        ulbar.style.display = "block";
    } else{
        ulbar.style.display = "none";
    }
})

let newScroll = 0;
document.addEventListener('scroll',(event) =>{
    let h2 = document.getElementsByTagName('h2')
    let scroll = window.scrollY;
    if (scroll > 500){
        newScroll = scroll;
        h2[0].style.color = "#000"
        h2[0].innerHTML = 'we are going down'
        document.body.append(h2[0])
    }else if (newScroll > 500 && scroll < 500){
        h2[0].style.color = "#000"
        h2[0].innerHTML = 'we are going up'
        document.body.append(h2[0])
    }   
})



