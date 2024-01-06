let carousel = document.getElementsByClassName('carousel'); //active-car
let navi = document.getElementsByClassName('li-car'); //active-li

for(let n = 0; n < navi.length; n++){
    navi[n].addEventListener('click',(e)=>{
        let activeCar = document.getElementsByClassName('active-car')[0];
        let activeLi = document.getElementsByClassName('active-li')[0];


        activeCar.classList.remove('active-car');
        activeLi.classList.remove('active-li');

        navi[n].classList.add('active-li');
        carousel[n].classList.add('active-car');
    })
}

function autoPlay(){
    let activeCar = document.getElementsByClassName('active-car')[0];
    let activeLi = document.getElementsByClassName('active-li')[0];

    activeCar.classList.remove('active-car');
    activeLi.classList.remove('active-li');
    let n = parseInt(activeCar.getAttribute('urut'));
    console.log(n)
    n++;
    navi[n].classList.add('active-li');
    carousel[n].classList.add('active-car');
}

let y = setInterval(autoPlay, 5000);

let salin = document.getElementsByClassName('salin');

for(let n = 0; n < salin.length; n++){
    salin[n].addEventListener('click',(e)=>{
        let rek = document.createElement('input');
        let isi = document.getElementsByClassName('norek')[n];
        console.log(isi.textContent);
        rek.value = isi.textContent;
        rek.select();
        rek.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(rek.value);
        document.body.style.setProperty('--salin','"Disalin : ' + rek.value + '"');
        salin[n].textContent = "Disalin";
    })
}

let koord = [-6.46033,107.49689];
var map = L.map('peta',{
    dragging : false,
}).setView(koord, 15);

googleStreets = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

googleStreets.addTo(map);

var marker = L.marker(koord).addTo(map);
marker.bindPopup("<a class='cont-link' href='https://maps.app.goo.gl/C8Fd6RKNbvaxWhcH8' target='_blank'><p class='link-gmap'>Klik di sini untuk melihat <b>lokasi</b> di Gmaps</p></a>").openPopup();
