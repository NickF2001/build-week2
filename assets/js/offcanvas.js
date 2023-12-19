/* let main = document.getElementById('main') */
let footerPlayer = document.querySelector('.player')

let main = document.querySelector('.containerCenterMain')

function expandOffcanvasHome(){
    main.style.marginRight = '345px';
    console.log(footerPlayer);
    console.log(main);
    footerPlayer.style.width = 'calc(100% - 350px);'
}

function hiddenOffcanvasHome(){
    main.style.marginRight = '0px';
    footerPlayer.style.width = '100%'
}