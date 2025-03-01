// function compleaedButtonAlart(e){
//     // alert('Borad ubdate succesfull')
//     const taskAssigned=document.getElementById('task-assigned').innerText
//     const taskAssigned2=parseInt(taskAssigned);

// }

const btnClassSeleat = document.getElementsByClassName('completed')
let count = 5
let number=25;

for (const btn of btnClassSeleat) {
    btn.addEventListener('click', (e) => {
        // alert('atahoye gece')
        count = count - 1;
     setinnerText('task-assigned',count);
         number=number + 1;
        setinnerText('score-count', number) 
    })
}
