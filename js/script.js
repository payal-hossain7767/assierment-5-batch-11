const btnClassSeleat = document.getElementsByClassName('completed')
let count = 6
let number = 25;

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
        const cleartimeline = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[5].childNodes[13].childNodes[1].innerText;

        const seleatContaineclear = document.getElementById('clear');
        const div = document.createElement('div');

        const p = document.createElement('p')
        p.innerHTML = `<h1 class="mt-2 bg-[#E6B2BA] p-2 rounded-md">You have Complete ${addToTimeLine} at Time ${lootTime}</h1>`
        div.appendChild(p);
        seleatContaineclear.appendChild(div)


        count = count - 1;
        const firsttime = setinnerText('task-assigned', count);

        number = number + 1;
        const chackBorad = setinnerText('score-count', number)

    })
}
//

