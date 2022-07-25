const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hora = dateToday.getHours();
    let minuto = dateToday.getMinutes();

    if(hora < 10)  hora = '0' + hora;
    if(minuto < 10)  minuto = '0' + minuto;

    horas.textContent = hora;
    minutos.textContent = minuto;

    const onoff = document.querySelector('.status')
    const fcio = document.querySelector('.funcionamento')

    if (hora >= 10 && 15 <= hora) {
        onoff.textContent = "Estamos atendendo!"
        fcio.textContent = "Aberto até as 15 horas"  
    }
    if(hora >= 15 && 10 <= hora){
        onoff.textContent = "Estamos Fechado"
        fcio.textContent = "Aberto as 10 horas"
    }
    function hors(params) {
        
    }


})