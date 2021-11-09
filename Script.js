console.log("Script is running..");



function test(){
    const card = document.querySelector(".pCcard");
    
    for(let i = 0; i < 14; i++){
        const array = []; 
        let newCard = card.cloneNode(true);
        card.after(newCard);
        array.push(newCard);  
    }
}
test();

const pCcards = document.querySelectorAll(".pCcard");
for (let i = 0; i < pCcards.length; i++) {
  pCcards[i].querySelector("h3").innerText = `new value ${i}`;
  pCcards[i].querySelector("small").innerText = `new value ${i}`;
  pCcards[i].querySelector("p").innerText = `new value ${i}`;
  pCcards[i].querySelector("button").innerText = `new value ${i}`;
};