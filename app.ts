import { Say } from './shared/say.service';
import { Dialog } from './shared/dialog';




class Module {
  say = new Say();
  select = 'Dialog';
  addTask():void
  {
    console.log("hi");
    
  const ul = document.getElementsByTagName('ul')[0] as HTMLUListElement;
  // let title = document.getElementById('title-input')?.innerHTML as string;
  console.log("object " ,ul);
  // console.log("text - ",title);
    let li = document.createElement('li');
    //get all the data
    let titleObj = document.getElementById('title-input') as HTMLInputElement;
    let title = titleObj.value; 
    let textObj = document.getElementById('text-input') as HTMLInputElement;
    let text= textObj.value; 
    let amountObj = document.getElementById('amount-input') as HTMLInputElement;
    let amount = amountObj.value; 
    //create spans
    let titleSpan = document.createElement('span');
    titleSpan.innerHTML=title;
    titleSpan.className='title-span';
    let textSpan = document.createElement('span');
    textSpan.innerHTML=text;
    textSpan.className='text-span';
    let amountSpan = document.createElement('span');
    amountSpan.innerHTML="x"+amount;
    amountSpan.className='amount-span';
    let checkBox = document.createElement('input');
    checkBox.type="checkbox";
    checkBox.className='checkbox';
    li.append(titleSpan);
    li.append(textSpan);
    li.append(amountSpan);
    li.append(checkBox);
    
  // // let text = document.getElementById('text-input') as HTMLInputElement;
  // // let amount = document.getElementById('amount-input') as HTMLInputElement;
  // //let newTask:string = title; //+text.innerText+amount.innerText;
  ul.appendChild(li);
  }
  updateSelect(): void {
    const select = document.getElementById('select') as HTMLSelectElement;
    this.select = select.value;
  }

  updateDisplay(msg: string): void {
    const display = document.getElementById('display') as HTMLDivElement;
    display.innerText = msg;
  }

  shout(): void {
    const input = document.getElementById('msg') as HTMLInputElement;
    switch (this.select) {
      case 'Alert': this.say.alert(input.value); break;
      case 'Console': this.say.console(input.value); break;
      case 'UI': this.updateDisplay(input.value); break;
      case 'Dialog': dialog.open(input.value); break;
    }
  }
}
export const module = new Module();
export const dialog = new Dialog();
