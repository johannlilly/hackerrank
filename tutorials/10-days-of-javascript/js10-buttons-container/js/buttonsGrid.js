let values=[1,2,3,6,9,8,7,4];
const ids=[1,2,3,6,9,8,7,4];

let btn5=document.getElementById('btn5');

btn5.onclick = () => {
    values.unshift(values.pop());
    for (i=0; i<=7; i++) {
        document.getElementById('btn'+ids[i]).innerHTML=values[i];
    }
}