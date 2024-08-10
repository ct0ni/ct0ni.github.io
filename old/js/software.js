// $('.child').toggle()
$('.hide').removeClass('hide').addClass('child')
const networksecurity = document.querySelector('#networksecurity');
const spider = document.querySelector('#spider');
const gui = document.querySelector('#gui');
const web = document.querySelector('#web');
const game = document.querySelector('#game');
const auto = document.querySelector('#auto');
const input = document.querySelector('input')
const li = document.querySelectorAll('li[class=child] > ul >li')
const sb = document.querySelector(".sb")
// const networksecurityli = document.querySelector('#networksecurityli');
// console.log(networksecurity);
// networksecurity.addEventListener('click',function () {
//     if(networksecurityli.className == 'child'){
//         networksecurityli.className = 'show';
//     }else {
//         networksecurityli.className = 'child';
//     }
// });
networksecurity.addEventListener('click', show_hide);
spider.addEventListener('click', show_hide);
gui.addEventListener('click', show_hide);
web.addEventListener('click', show_hide);
game.addEventListener('click', show_hide);
auto.addEventListener('click', show_hide)
input.addEventListener("keypress", keydown)
sb.addEventListener("click", search)

function show_hide() {
    const liID = this.attributes["id"].value + 'li';
    const li = document.getElementById(liID);
    // if (li.className == 'child') {
    //     $("#" + liID).slideDown(200)
    // } else {
    //     // $("#" + liID).hide()
    //     li.className = 'child';
    // }
    $("#" + liID).toggle(300)
}



function keydown(event) {
    if (event.which == 13) {
        if (input.value != "") {
            for (i = 0; i < li.length; i++) {
                li[i].style.backgroundColor = "white";
                const id = "#" + li[i].parentElement.parentElement.id
                $(id).hide()
            }
            for (i = 0; i < li.length; i++) {
                v = li[i].innerText.toLowerCase()
                if (v.indexOf(input.value.toLowerCase()) != -1) {
                    // li[i].parentElement.parentElement.className = 'show'
                    const id = "#" + li[i].parentElement.parentElement.id
                    $(id).hide().slideDown(200)
                    li[i].style.backgroundColor = "yellow";
                }
            }
        }
    }
    else {
        for (i = 0; i < li.length; i++) {
            li[i].style.backgroundColor = "white";
            const id = "#" + li[i].parentElement.parentElement.id
            $(id).hide()
        }
    }
}

function search() {
    if (input.value != "") {
        for (i = 0; i < li.length; i++) {
            li[i].style.backgroundColor = "white";
            const id = "#" + li[i].parentElement.parentElement.id
            $(id).hide()
        }
        for (i = 0; i < li.length; i++) {
            v = li[i].innerText.toLowerCase()
            if (v.indexOf(input.value.toLowerCase()) != -1) {
                // li[i].parentElement.parentElement.className = 'show'
                const id = "#" + li[i].parentElement.parentElement.id
                $(id).hide().slideDown(200)
                li[i].style.backgroundColor = "yellow";
            }
        }
    }
    else {
        for (i = 0; i < li.length; i++) {
            li[i].style.backgroundColor = "white";
            const id = "#" + li[i].parentElement.parentElement.id
            $(id).hide()
        }
    }
}