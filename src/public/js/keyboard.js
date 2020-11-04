class Screen {
    static log = document.getElementById('log')
    static content = new Array()
    static write(character){
        Screen.content.push(character)
        Screen.print()
    }
    static print(){
        let text = ""
        this.content.forEach(c => {
            return text+=c
        })
        document.getElementById('log').innerHTML = text
    }
    static backSpace(){
        this.content.pop()
        Screen.print()
    }
}

class Keyboard {
    constructor(){
        this.keyboard = document.getElementById('keyboard')
        this.keyboard.addEventListener('click', function(event){
            switch (event.target.id) {
                case "Backspace":
                    Screen.backSpace()
                    break;
            
                default:
                    Screen.write(event.target.id)
                    break;
            }
        })
    }
}

const charCodes = {
    101: "e",
    105: "i",
    111: "o",
    112: "p",
    113: "q",    
    114: "r",
    116: "t",
    117: "u",
    119: "w",
    121: "y",
}

const keyCodes = {
    69: "e",
    73: "i",
    79: "o",
    80: "p",
    81: "q",    
    82: "r",
    84: "t",
    85: "u",
    87: "w",
    89: "y",
}

document.addEventListener('keydown', function(event) {
    switch (event.key) {
        case "Backspace":
            Screen.backSpace()
            break;
    
        default:
            Screen.write(keyCodes[event.keyCode])
            break;
    }
})