const btnClassSeleat = document.getElementsByClassName('completed')
let count = 6
let number = 24;

for (const btn of btnClassSeleat) {
    btn.addEventListener('click', (e) => {
        alert('Board updates successfully')
        e.target.setAttribute('disabled', false)
        //    time zone
        const addToTimeLine = e.target.parentNode.parentNode.childNodes[3].innerText;
        const d = new Date();
        let hour = d.getHours();
        let min = d.getMinutes();
        let sec = d.getSeconds();
        let time = hour + ':' + min + ":" + sec
        const lootTime = document.getElementById("time-to-meet").innerHTML = time;
        // appanet child
        const seleatContainerSet = document.getElementById('clear');
        const div = document.createElement('div');
        const p = document.createElement('p')
        p.innerHTML = `<h1 class="mt-2 bg-[#F4F7FF] p-2 rounded-md">You have Complete ${addToTimeLine} at Time ${lootTime}</h1>`
        div.prepend(p);
        seleatContainerSet.prepend(div)
        // ----
        count = count - 1;
        const firsttime = setinnerText('task-assigned', count);
        // ----
        number = number + 1;
        const chackBorad = setinnerText('score-count', number)
        if (count <= 0) {
            alert('congreates!! you have completed all the current task');
        }

    })
}
//

