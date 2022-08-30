let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let allMonths = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
let yearNum = document.getElementById("yearNum");

function renderMonths(){
    allMonths.forEach(function(month, i){
        let months = document.querySelector('.months')
        let monthSpan = document.createElement('span')
  
        monthSpan.className = 'each-month'
        monthSpan.id = i+1
        monthSpan.innerHTML =` ${month} `
        months.append(monthSpan)

        monthSpan.addEventListener('click', function(e){
            if(document.querySelector('.hidden-p')){
                let sel = document.querySelector('.selected')
                sel.className = "each-month"
            }
            e.target.className = 'selected'
            let newp = document.createElement('p')
            newp.className = 'hidden-p'
            newp.hidden = true
            monthSpan.append(newp)
        })

        document.addEventListener('click', function(e){
            if(e.target.className === 'selected'){
                e.preventDefault()
                currentMonth = e.target.id-1                
                currentYear = currentYear
                renderCalendar(currentMonth, currentYear)
                onlyValidDates(iDate, eDate)
            }
        })
    })
}

function renderCalendar(month, year) {
    let firstDayOfTheMonth = (new Date(year, month)).getDay();
    let daysInMonth = 32 - new Date(year, month, 32).getDate();

    let calendarTable = document.getElementById("calendar-body");
    calendarTable.innerHTML = "";
    yearNum.innerHTML = `${year}`;

    let date = 1;
    for (let i = 0; i < 6; i++) {
        let week = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDayOfTheMonth) {
                let day = document.createElement("td");
                let dateNum = document.createTextNode("");
                day.appendChild(dateNum);
                week.appendChild(day);
            } else if (date > daysInMonth) {
                break;
            } else {
                let day = document.createElement("td");
                let dateNum = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    day.title = "today";
                } 
                day.appendChild(dateNum);
                week.appendChild(day);
                date++;
                day.id = `${year}${String(month+1).padStart(2, '0')}${String(dateNum.textContent).padStart(2, '0')}`
                day.className = 'dates'                
            }
        }
        calendarTable.appendChild(week);
    }
    calendarTable.addEventListener('click', function(e){
        let hiddenTwo = document.querySelector('.hidden-p2')
        if(hiddenTwo){
            let sel = document.querySelector('.selected-day')
            sel.className = "dates"
        }
        e.target.className = 'selected-day'
        //sp.id = e.target.id
        let newpp = document.createElement('p')
        newpp.className = 'hidden-p2'
        newpp.hidden = true
        calendarTable.append(newpp)
    });
}

function nextYear() {
    document.addEventListener('click', function(e){
        if(e.target.className === 'triangle-right'){
            e.preventDefault()
            currentYear = currentYear+1
            currentMonth = currentMonth;
            renderCalendar(currentMonth, currentYear); 
            onlyValidDates(iDate, eDate)    
        } 
    })
}

function previousYear() {
    document.addEventListener('click', function(e){
        if(e.target.className === 'triangle-left'){
            e.preventDefault()
            currentYear = currentYear-1;
            currentMonth = currentMonth;
            renderCalendar(currentMonth, currentYear);
            onlyValidDates(iDate, eDate)
        }
    })
}

// *********

function onlyValidDates(start, end){
    let startDate = new Date(start)
    startDate.setMinutes(startDate.getMinutes() + startDate.getTimezoneOffset())    
    let sYear = startDate.getFullYear().toString()
    let sMonth
    if ((startDate.getMonth() + 1) > 9){
        sMonth = startDate.getMonth() + 1
    }else{
        sMonth = '0' + (startDate.getMonth() + 1).toString()
    }
    let sDay
    if (startDate.getDate() > 9){
        sDay = startDate.getDate().toString()
    }else{
        sDay = '0' + startDate.getDate().toString()
    }    
    let fixedStartDate = sYear + sMonth + sDay  
    // ----
    let endDate = new Date(end)
    endDate.setMinutes(endDate.getMinutes() + endDate.getTimezoneOffset())
    
    let eYear = startDate.getFullYear().toString()
    let eMonth
    if ((endDate.getMonth() + 1) > 9){
        eMonth = endDate.getMonth() + 1
    }else{
        eMonth = '0' + (endDate.getMonth() + 1).toString()
    }
    let eDay
    if (endDate.getDate() > 9){
        eDay = endDate.getDate().toString()
    }else{
        eDay = '0' + endDate.getDate().toString()
    }    
    let fixedEndtDate = eYear + eMonth + eDay   
    // ----

    let availableDates = []
    availableDates.push(fixedStartDate)
    while (endDate.getTime() > startDate.getTime()){
        startDate.setDate(startDate.getDate() + 1)
        let whileYear = startDate.getFullYear().toString()
        let whileMonth
        if ((startDate.getMonth() + 1) > 9){
            whileMonth = (startDate.getMonth() + 1).toString()
        }else{
            whileMonth = '0' + (startDate.getMonth() + 1).toString()
        }
        let whileDay
        if (startDate.getDate() > 9){
            whileDay = (startDate.getDate()).toString()
        }else{
            whileDay = '0' + (startDate.getDate()).toString()
        }
        availableDates.push(whileYear + whileMonth + whileDay)
    }    

    let dateOk
    let dateId
    const allItemsDate = document.querySelectorAll('.dates')
    for (let i = 0; i < allItemsDate.length; i++){
        dateId = (allItemsDate[i].getAttribute('id')).toString()
        dateOk = availableDates.indexOf(dateId)        
        if (dateOk < 0){
            allItemsDate[i].classList.add('noavailable-day')
        }
    }
}

renderMonths()
renderCalendar(currentMonth, currentYear);
nextYear()
previousYear()

let iDate = '2022-08-15'
let eDate = '2022-08-20'
onlyValidDates(iDate, eDate)