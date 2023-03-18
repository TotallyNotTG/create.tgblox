setTimeout(() => {
    mainspin()
}, 1000)

function mainspin() {
   const maindata = document.querySelector('.main')

   maindata.innerHTML = "<div class='option-nav'><h1 class='creation-text'>Creations</h1><a href='creations?games'><button class='option'>Games</button></a><a href='develop-items?models'><button class='option'>Development Items</button></a></div><div class='selections'><button class='sections on-tab'>Models</button><button class='sections off-tab'>Plugins</button><button class='sections off-tab'>Audios</button><button class='sections off-tab'>Decals</button></div></script><div class='model-section modelspinner'></div><div class='footer'><img src='l/img/text-1669918561590.png' class='main-logo'><p class='copyright'>© 2023 OllieBlox Corp. All Rights Reserved.</p></div><div class='model-bundle'><div class='model-ids'><img src='https://tr.rbxcdn.com/46189d920590cd0646ccc0546820939e/150/150/Model/Png' class='model-img'><h3>Lobby</h3><p>Created on 1/6/2023</p><p>On Market</p></div><div class='model-ids'><img src='https://tr.rbxcdn.com/97a195c9d45424534eec03323830aa65/150/150/Model/Png' class='model-img'><h3>TG Bit</h3><p>Created on 1/6/2023</p><p>On Market</p></div></div>"
   maindata.classList.remove('mainspinner')
}

setTimeout(() => {
    modeldata()
}, 700)

function modeldata() {
   const modelload = document.querySelector('.model-section')

   modelload.innerHTML = ""
   modelload.classList.remove('modelspinner')
}