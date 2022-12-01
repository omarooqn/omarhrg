document.addEventListener("click", One);

function One(event){
    clk=event.target;
    section=event.target.parentElement.parentElement;
    let i=0;
    if(clk.tagName==="BUTTON"){
        i=clk.innerText;
        i--;
        clk.innerText=i;
        if(i===0){
            section.style.display="none";
        }
    } 

}