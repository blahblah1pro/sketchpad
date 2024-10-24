const container1=document.createElement("div");
container1.id="container1";
const container2=document.createElement("div");
container2.id="container2";
const Button1=document.createElement("button");
Button1.id="button1";
Button1.textContent="new";
const Button2=document.createElement("button");
Button2.id="button2";
Button2.textContent="reset";
document.body.appendChild(container1);
document.body.appendChild(container2);
let opacity=0.0;
for(let i=0;i<16;i++){
    for(let j=0;j<16;j++){
    const content=document.createElement("div");
    content.classList.add("content");
    container1.appendChild(content);
    content.addEventListener('mouseover', () => {
        if(opacity<=1)
        opacity+=0.1;
        content.style.opacity=opacity;
        const colors = [];
for (let i = 0; i < 10; i++) {
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  colors.push(randomColor);
  content.style.backgroundColor = randomColor;
}
        
      });
    }
}
function reset(){
    while (container1.hasChildNodes())
        container1.removeChild(container1.firstChild)
}
function input(){       
rownum=parseInt(prompt("Enter the number of rows(1-100)"));
if(rownum>100 || rownum<1){
    prompt("Wrong input");
}else{
    let side=0;
    opacity=0.0;
    side=(320/rownum-2)+"px";
    while (container1.hasChildNodes())
        container1.removeChild(container1.firstChild)
    for(let i=0;i<rownum;i++){
        for(let j=0;j<rownum;j++){
    const content=document.createElement("div");
    content.style.width=side;
    content.style.height=side;
    content.classList.add("content");
    container1.appendChild(content);
    
    content.addEventListener('mouseover', () => {
        if(opacity<=1)
        opacity+=0.1;
        content.style.opacity=opacity;
        const colors = [];
        for (let i = 0; i < 10; i++) {
          const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
          colors.push(randomColor);
          content.style.backgroundColor = randomColor;
        }
      });
    
}
    }
}
}
container2.appendChild(Button1);
container2.appendChild(Button2);
Button1.onclick=input;
Button2.onclick=reset;