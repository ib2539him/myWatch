
const myTime = () => {
    let myDate = new Date()
    let hr,min = (myDate.getMinutes < 10) ? '0' + myDate.getMinutes() : myDate.getMinutes();

    let second = (myDate.getSeconds() < 10) ? '0' + myDate.getSeconds() : myDate.getSeconds();

    let M = (myDate.getHours() >= 12) ? 'PM' : 'AM';

    if (myDate.getHours() == 0) {
        hr = 12;
    }
    else if (myDate.getHours() > 12) {
        hr = myDate.getHours() - 12;
    }
    else {
       hr= myDate.getHours()
    }

    let currentTime = hr + ":" + min + ":" + second ;

    document.querySelector(".H").innerHTML = currentTime;
    document.querySelector(".M").innerHTML = M;
}

myTime()