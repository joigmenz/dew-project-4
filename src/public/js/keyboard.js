class Screen {
    static log = document.getElementById('log')
    static capsLock = false
    static shift = false
    static content = new Array()
    static string = ""
    static write(character){
        if(this.capsLock){
           character = character.toUpperCase()
        }
        Screen.content.push(character)
        Screen.print()
    }
    static print(){
        let text = ""
        this.content.forEach(character => {
            return text+=character
        })
        document.getElementById('log').innerHTML = text
    }
    static backSpace(){
        this.content.pop()
        Screen.print()
    }
    static space(){
        this.write(' ');
    }
    static changeCapsLock(){
        if(this.capsLock){
            this.capsLock = false
        }else{
            this.capsLock = true
        }
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
    16: "shift",
    59: "ñ",
    65: "a",
    66: "b",
    67: "c",
    68: "d",
    69: "e",
    70: "f",
    71: "g",
    72: "h",
    73: "i",
    74: "j",
    75: "k",
    76: "l",
    77: "m",
    78: "n",
    79: "o",
    80: "p",
    81: "q",    
    82: "r",
    83: "s",
    84: "t",
    85: "u",
    87: "w",
    88: "x",
    89: "y",
    90: "z",
    188: ",",
    190: ".",
}

document.addEventListener('keydown', function(event) {
    console.log(event)
    switch (event.key) {
        case "CapsLock":
            Screen.changeCapsLock()
            break;
        case " ":
            Screen.space()
            break;
        case "Tab":
            Screen.write(event.key)
            break;
        case "Backspace":
            Screen.backSpace()
            break;    
        default:
            Screen.write(keyCodes[event.keyCode])
            break;
    }   
})