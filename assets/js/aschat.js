
class Message{
    constructor(content, from){
        this.content = content;
        this.from = from
    }
    
    
    getMessage() {
        return this.content
    }

    getOrigin(){
        return this.from
    }
}


const sendButton = document.getElementById("sendButton");
const inputArea = document.getElementById("input");
let chatHistorial = [];
const chatFragment = document.createDocumentFragment();
const chatHistorialContainer = document.getElementById("chatHistorial")

let input = ""

initUi();
main();

document.body.addEventListener("keypress", (e)=>{
    console.log(e)
})




function initUi(){
    initSendButton()
}

function initSendButton(){
    document.body.addEventListener("keypress", (e)=>{
        if(e.key == "Enter"){
            showMessage()
        }
    })
    sendButton.addEventListener("click", ()=>{
        showMessage()
        
    })
}

function addMessageItem(message, from) {
    const item = document.createElement("li");
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat");

    const chatContent = document.createElement("p");
    chatContent.textContent = message;

    if (from === "user") {
        chatLi.classList.add("outgoing");
    } else {
        chatLi.classList.add("incoming");
        const chatSymbol = document.createElement("span");
        chatSymbol.classList.add("material-symbols-outlined");
        chatSymbol.textContent = "smart_toy";
        chatLi.appendChild(chatSymbol);
    }

    chatLi.appendChild(chatContent);
    item.appendChild(chatLi);
    chatHistorialContainer.appendChild(item);
}


function showMessage(){
    input = inputArea.value.toString();
        inputArea.value = ""
        if(input.length != 0){
            let message = new Message(input, "user")
            chatHistorial.push(message)
            addMessageItem(message.content, message.from)
            console.log(chatHistorial)
            callGPT()
        }
}

function callGPT(){
    setTimeout(()=>{

        

        addMessageItem("hola soy gpt", "gpt")
    }, 1000)
    
}




