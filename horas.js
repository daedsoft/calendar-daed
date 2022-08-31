horaIni = '08:00'
horaFin = '18:00'
tiempo = '60'
let agendaMins = parseInt(tiempo)

numHoraIni = parseInt(horaIni.substring(0, 2))
numHoraFin = parseInt(horaFin.substring(0, 2))


hours = []
for (let i = numHoraIni; i < numHoraFin + 1; i++){    
    hours.push(i)
}

hoursFixed = []
if (agendaMins == 10){
    for (let j = 0; j < hours.length; j++){
        hoursFixed.push(hours[j] + ':00')
        hoursFixed.push(hours[j] + ':' + agendaMins)
        hoursFixed.push(hours[j] + ':' + agendaMins * 2)
        hoursFixed.push(hours[j] + ':' + agendaMins * 3)
        hoursFixed.push(hours[j] + ':' + agendaMins * 4)
        hoursFixed.push(hours[j] + ':' + agendaMins * 5)
    }
}
if (agendaMins == 15){
    for (let j = 0; j < hours.length; j++){
        hoursFixed.push(hours[j] + ':00')
        hoursFixed.push(hours[j] + ':' + agendaMins)
        hoursFixed.push(hours[j] + ':' + agendaMins * 2)
        hoursFixed.push(hours[j] + ':' + agendaMins * 3)
    }
}
if (agendaMins == 20){
    for (let j = 0; j < hours.length; j++){
        hoursFixed.push(hours[j] + ':00')
        hoursFixed.push(hours[j] + ':' + agendaMins)
        hoursFixed.push(hours[j] + ':' + agendaMins * 2)
    }
}

if (agendaMins == 30){
    for (let j = 0; j < hours.length; j++){
        hoursFixed.push(hours[j] + ':00')
        hoursFixed.push(hours[j] + ':' + agendaMins)        
    }
}

if (agendaMins == 45){
    for (let j = 0; j < hours.length; j++){
        hoursFixed.push(hours[j] + ':00')
        hoursFixed.push(hours[j] + ':' + agendaMins)
    }
}

if (agendaMins == 60){
    for (let j = 0; j < hours.length; j++){
        hoursFixed.push(hours[j] + ':00')        
    }
}

console.log(hoursFixed)