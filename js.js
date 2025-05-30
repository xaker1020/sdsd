let mahsulotlar=[
    {
        nomi:"Mars rug",
        coin:"100",
        nechta:"24",
        rasmi:"./img/marsrug.png"
    },
     {
        nomi:"Keyboard sticker",
        coin:"49",
        nechta:"11",
        rasmi:"./img/Keyboardsticker.png"
    },
     {
        nomi:"Smart watch",
        coin:"889",
        nechta:"4",
        rasmi:"./img/Smartwatch.png"
    },
     {
        nomi:"Wireless keyboard",
        coin:"350",
        nechta:"0",
        rasmi:"./img/Wirelesskeyboard.png"
    },
     {
        nomi:"Mouse",
        coin:"359",
        nechta:"24",
        rasmi:"./img/Mouse.png"
    },
    {
        nomi:"AirPods",
        coin:"499",
        nechta:"11",
        rasmi:"./img/AirPods.png"
    },
     {
        nomi:"Powerbank",
        coin:"899",
        nechta:"5",
        rasmi:"./img/Powerbank.png"
    },
     {
        nomi:"USB flash drive",
        coin:"299",
        nechta:"21",
        rasmi:"./img/USBflashdrive.png"
    },
     {
        nomi:"Smartphone",
        coin:"3699",
        nechta:"2",
        rasmi:"./img/Smartphone.png"
    },
     {
        nomi:"Playstation 5",
        coin:"7449",
        nechta:"4",
        rasmi:"./img/Playstation5.png"
    },
    {
        nomi:"YandexStation",
        coin:"1999",
        nechta:"4",
        rasmi:"./img/YandexStation.png"
    },
     {
        nomi:"Planshet Samsung",
        coin:"4999",
        nechta:"24",
        rasmi:"./img/PlanshetSamsung.png"
    },
]

      



        // const ota=document.getElementById("ota");
        // const input=document.getElementById("input");

        // function chizish(malumot) {
        //     malumot.map((m,i) =>{
        //       div.classList.add("card");
        //         card.innerHTML = `
        //             <img src="${m.rasmi}" alt="">
        //             <h3 class="play">${m.nomi}</h3>
        //             <p><img src="./img/Coin 5.png" alt="" class="img"> ${m.coin} coins</p>
        //             <span class="span">${m.nechta} dona mavjud</span>
        //         `;
        //         ota.appendChild(card);
        //     })
        // }
        // chizish(mahsulotlar);
        // input.addEventListener("input",()=>{
        //     const yangimahsulotlar =mahsulotlar.filter(p=> p.nomi.toLowerCase().includes(input.value.toLowerCase()));
        //     chizish(yangimahsulot)
        // })
        const ota=document.getElementById("ota")
const input=document.getElementById("input")
function chizish(malumot){
    ota.innerHTML=""
    malumot.map((m,i)=>{
        const div=document.createElement("div")
        div.classList.add("card")
        div.innerHTML=`
         <img src="${m.rasmi}" alt="">
                     <h3 class="play">${m.nomi}</h3>
                     <p><img src="./img/Coin 5.png" alt="" class="img"> ${m.coin} coins</p>
                   <span class="span">${m.nechta} dona mavjud</span>
            `;
            ota.appendChild(div)
    })
}
chizish(mahsulotlar)
input.addEventListener("input",()=>{
    const yangimalumot=mahsulotlar.filter(p=> p.nomi.toLowerCase().includes(input.value.toLowerCase()))
    chizish(yangimalumot)
})