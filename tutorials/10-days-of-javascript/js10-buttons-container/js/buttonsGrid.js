// get buttons as array
let container = document.getElementById('btns');
let buttons = [...document.getElementsByTagName('button')];

// add (x,y) and function properties to each element
for (btn of buttons) {
  btn._id = Number(btn.id[3]);
  btn.setAttribute('attr-order', buttons.indexOf(btn)+1)
  btn.order = buttons.indexOf(btn)+1;

  // add x
       if (btn._id % 3 == 0) { btn.x = 3; }
  else if (btn._id % 2 == 0 & btn._id != 4) { btn.x = 2; }
  else if (btn._id == 5) {
    btn.x = 2;
    btn.onclick = () => {
      rotate();
    }
  }
  else { btn.x = 1; }

  // add y
       if (btn._id < 4) { btn.y = 1; }
  else if (btn._id < 7) { btn.y = 2; }
  else { btn.y = 3; }
}

// update (x,y) from event
let rotate = () => {
  for (btn of buttons) {
         if (btn.x==1 && btn.y==1) {btn.x++;btn.order=2}
    else if (btn.x==2 && btn.y==1) {btn.x++;btn.order=3}
    else if (btn.x==3 && btn.y==1) {btn.y++;btn.order=6}

    else if (btn.x==1 && btn.y==2) {btn.y--;btn.order=1}
    else if (btn.x==2 && btn.y==2) {}
    else if (btn.x==3 && btn.y==2) {btn.y++;btn.order=9}

    else if (btn.x==1 && btn.y==3) {btn.y--;btn.order=4}
    else if (btn.x==2 && btn.y==3) {btn.x--;btn.order=7}
    else if (btn.x==3 && btn.y==3) {btn.x--;btn.order=8}
  }
  render();
}


let render = () => {
  // update order attribute
  for (btn of buttons) {
    btn.setAttribute('attr-order', btn.order);
    // btn.setAttribute('id', btn.order);
  }

  // sort by order attribute
  buttons.sort((a,b) => a.getAttribute('attr-order')-b.getAttribute('attr-order'));
  
  // display
  container.innerHTML = '';
  for (btn of buttons) {
    container.appendChild(btn);
  }
}
