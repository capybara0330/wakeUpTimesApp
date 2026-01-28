function calcWakeUpTimes(){
    const fallAsleepTime = new Date();

    fallAsleepTime.setMinutes(
        fallAsleepTime.getMinutes() + 14
    );

    wakeUpHoursDiv.innerHTML = "";
    const wakeUpTime = new Date(fallAsleepTime);

    for(let i = 0; i < 6; i++){
        wakeUpTime.setMinutes(
            wakeUpTime.getMinutes() + 90
        );

        const wakeUpTimeString = wakeUpTime.toLocaleString("en-US", {
            timeStyle: "short"
        })

        const cycleDiv = document.createElement("div");
        cycleDiv.textContent = wakeUpTimeString;
        cycleDiv.setAttribute("id", `cycle-${i+1}`);
        wakeUpHoursDiv.appendChild(cycleDiv);
    }
}

const calcBtn = document.getElementById("calc-btn");
const wakeUpHoursDiv = document.getElementById("wakeup-hours-div");

calcBtn.onclick = calcWakeUpTimes;