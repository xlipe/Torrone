//função que o davi achou e eu dei uma beliscadinha nela

    window.onload = function() {
        countUpFromTime("August 1, 1963 12:00:00", 'countup1'); // ** Change this line!
    };
    
    function countUpFromTime(countFrom, id) {
        countFrom = new Date(countFrom).getTime();
        var now = new Date(),
            countFrom = new Date(countFrom),
            timeDifference = (now - countFrom);
    
        var secondsInADay = 60 * 60 * 1000 * 24,
            secondsInAHour = 60 * 60 * 1000;
    
        days = Math.floor(timeDifference / (secondsInADay) * 1);
        years = Math.floor(days / 365);
        if (years > 1) { days = days - (years * 365) }
        hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
        mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
        secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);
        daysperyear = Math.floor(years * 365);
        totaldays = (daysperyear + days);
    
        var idEl = document.getElementById(id);
        idEl.getElementsByClassName('totaldays')[0].innerHTML = totaldays;

        clearTimeout(countUpFromTime.interval);
        countUpFromTime.interval = setTimeout(function() { countUpFromTime(countFrom, id); }, 1000);
    }