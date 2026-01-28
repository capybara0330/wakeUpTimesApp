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
        cycleDiv.setAttribute("class", `cycle`);
        wakeUpHoursDiv.appendChild(cycleDiv);
    }

    promptSection.classList.add("hidden");
    resultSection.classList.remove("hidden");
}

function goBack(){
    promptSection.classList.remove("hidden");
    resultSection.classList.add("hidden");
}

const calcBtn = document.getElementById("calc-btn");
const refreshBtn = document.getElementById("refresh-btn");
const returnBtn = document.getElementById("return-btn");
const wakeUpHoursDiv = document.getElementById("wakeup-hours-div");
const resultSection = document.getElementById("result-section");
const promptSection = document.getElementById("prompt-section");

calcBtn.onclick = calcWakeUpTimes;
returnBtn.onclick = goBack;
refreshBtn.onclick = calcWakeUpTimes;