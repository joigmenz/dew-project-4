/*setInterval( function cursor() {
    if(document.getElementById('cursor').className == 'hidden'){
        document.getElementById('cursor').classList.remove('hidden')
    }else{
        document.getElementById('cursor').classList.add('hidden')
    }
}, 500)*/

class Log {
    static screen = document.getElementById('log') 
    static logContent = new Array()
    static write(character){
        Log.logContent.push(character)
        Log.print()
    }
    static print(){
        Log.screen.innerHTML = ""
        Log.logContent.forEach(content => {
            return Log.screen.innerHTML += content
        });
    }
}

class Screen {
    static log = document.getElementById('log')
    static tagCursor = `<span id="cursor" class="hidden">|</span>`
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
        text += this.tagCursor
        document.getElementById('log').innerHTML = text
    }
    static backSpace(){
        this.content.pop()
        Screen.print()
    }
    static space(){
        this.write('&nbsp;');
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
            const obj = KeysCode.checkEvent(event)  
            if(obj.showScreen){
                obj.showScreen(obj.key)
            }    
            if(obj.functions){
                obj.functions(obj)
            } 
        })
    }
}

class KeysCode {
    static posCursor = 0;
    static keys = {
        "backquote": {
            code: "Backquote",
            key: "º"
        },
        "digit0": {
            code: "Digit0",
            key: "0"
        },
        "digit1": {
            code: "Digit1",
            key: "1"
        },
        "digit2": {
            code: "Digit2",
            key: "2"
        },
        "digit3": {
            code: "Digit3",
            key: "3"
        },
        "digit4": {
            code: "Digit4",
            key: "4"
        },
        "digit5": {
            code: "Digit5",
            key: "5"
        },
        "digit6": {
            code: "Digit6",
            key: "6"
        },
        "digit7": {
            code: "Digit7",
            key: "7"
        },
        "digit8": {
            code: "Digit8",
            key: "8"
        },
        "digit9": {
            code: "Digit9",
            key: "9"
        },
        "minus": {
            code: "Minus",
            key: "'"
        },
        "equal": {
            code: "Equal",
            key: "¡"
        },
        "space": {
            code: "Space",
            key: "&nbsp;"
        },
        "keyq": {
            code: "KeyQ",
            key: "q",
            tag: keyq,
            itsAlphabet: true,
            showScreen: Log.write,
        },
        "keyw": {
            code: "KeyW",
            key: "w",
            tag: keyw,
            itsAlphabet: true,
            showScreen: Log.write,
        },
        "keye": {
            code: "KeyE",
            key: "e",
            withQuote: "é",
            tag: keye,
            itsAlphabet: true,
            showScreen: Log.write,
            functions: KeysCode.checkPressedCuote
        },
        "keyr": {
            code: "KeyR",
            key: "r",
            tag: keyr,
            itsAlphabet: true,
            showScreen: Log.write,
        },
        "keyt": {
            code: "KeyT",
            key: "t",
            tag: keyt,
            itsAlphabet: true,
            showScreen: Log.write,
        },
        "keyy": {
            code: "KeyY",
            key: "y",
            tag: keyy,
            itsAlphabet: true,
            showScreen: Log.write,
        },
        "keyu": {
            code: "KeyU",
            key: "u",
            withQuote: "ú",
            tag: keyu,
            itsAlphabet: true,
            showScreen: Log.write,
            functions: KeysCode.checkPressedCuote
        },
        "keyi": {
            code: "KeyI",
            key: "i",
            withQuote: "í",
            tag: keyi,
            itsAlphabet: true,
            showScreen: Log.write,
            functions: KeysCode.checkPressedCuote
        },
        "keyo": {
            code: "KeyO",
            key: "o",
            withQuote: "ó",
            tag: keyo,
            itsAlphabet: true,
            showScreen: Log.write,
            functions: KeysCode.checkPressedCuote
        },
        "keyp": {
            code: "KeyP",
            key: "p",
            tag: keyp,
            itsAlphabet: true,
            showScreen: Log.write,
        },
        "tab": {
            code: "Tab",
            key: "&nbsp;&nbsp;&nbsp;&nbsp;",
            showScreen: Log.write,
        },
        "bracketleft": {
            status: false,
            code: "BracketLeft",
            key: "`",
            tag: bracketleft,
        },
        "bracketright": {
            status: false,
            code: "BracketRight",
            key: "+",
            tag: bracketright,
        },
        "enter": {
            code: "Enter",
            key: "<br/>",
        },    
        "capslock": {
            status: false,
            code: "capslock",
            key: "",
            functions: KeysCode.capslock,
            tag: capslock
            
        }, 
        "keya": {
            code: "KeyA",
            key: "a",
            withQuote: "á",
            tag: keya,
            itsAlphabet: true,
            showScreen: Log.write,
            functions: KeysCode.checkPressedCuote
        },
        "keys": {
            code: "KeyS",
            key: "s",
            tag: keys,
            itsAlphabet: true,
            showScreen: Log.write,
        }, 
        "keyd": {
            code: "KeyD",
            key: "d",
            tag: keyd,
            itsAlphabet: true,
            showScreen: Log.write,
        }, 
        "keyf": {
            code: "KeyF",
            key: "f",
            tag: keyf,
            itsAlphabet: true,
            showScreen: Log.write,
        },  
        "keyg": {
            code: "KeyG",
            key: "g",
            tag: keyg,
            itsAlphabet: true,
            showScreen: Log.write,
        },  
        "keyh": {
            code: "KeyH",
            key: "h",
            tag: keyh,
            itsAlphabet: true,
            showScreen: Log.write,
        },  
        "keyj": {
            code: "KeyJ",
            key: "j",
            tag: keyj,
            itsAlphabet: true,
            showScreen: Log.write,
        },  
        "keyk": {
            code: "KeyK",
            key: "k",
            tag: keyk,
            itsAlphabet: true,
            showScreen: Log.write,
        }, 
        "keyl": {
            code: "KeyL",
            key: "l",
            tag: keyl,
            itsAlphabet: true,
            showScreen: Log.write,
        },
        "semicolon": {
            code: "Semicolon",
            key: "ñ",
            tag: keyñ,
            itsAlphabet: true,
            showScreen: Log.write,
        },       
        "quote": {
            status: false,
            code: "Quote",
            key: "´",
            tag: quote,
            itsAlphabet: true,
            showScreen: Log.write,
            functions: KeysCode.pressedCuote
        }, 
        "backslash": {
            status: false,
            code: "Backslash",
            key: "ç",
            tag: backslash,
            itsAlphabet: true,
            showScreen: Log.write,
        }, 
        "intlbackslash": {
            code: "IntlBackslash",
            key: "<",
            tag: intlbackslash,
            showScreen: Log.write,
        },   
        "keyz": {
            code: "KeyZ",
            key: "z",
            tag: keyz,
            showScreen: Log.write,
        },   
        "keyz": {
            code: "KeyZ",
            key: "z",
            tag: keyz,
            itsAlphabet: true,
            showScreen: Log.write,
        },    
        "keyx": {
            code: "KeyX",
            key: "x",
            tag: keyx,
            itsAlphabet: true,
            showScreen: Log.write,
        },       
        "keyc": {
            code: "KeyC",
            key: "c",
            tag: keyc,
            itsAlphabet: true,
            showScreen: Log.write,
        },     
        "keyv": {
            code: "KeyV",
            key: "v",
            tag: keyv,
            itsAlphabet: true,
            showScreen: Log.write,
        },  
        "keyb": {
            code: "KeyB",
            key: "b",
            tag: keyb,
            itsAlphabet: true,
            showScreen: Log.write,
        }, 
        "keyn": {
            code: "KeyN",
            key: "n",
            tag: keyn,
            itsAlphabet: true,
            showScreen: Log.write,
        }, 
        "keym": {
            code: "KeyM",
            key: "m",
            tag: keym,
            itsAlphabet: true,
            showScreen: Log.write,
        },                          
    }
    static capslock(obj){
        if(!obj.status){
            obj.status = true
            obj.tag.classList.add('pressed')
            KeysCode.allUpperCase()
        }else{
            obj.status = false
            obj.tag.classList.remove('pressed')
            KeysCode.allLowerCase()
        }
    }
    static allUpperCase(){
        for(let key in this.keys){
            if(this.keys[key].itsAlphabet){
                this.keys[key].key = this.keys[key].key.toUpperCase()
                this.keys[key].tag.classList.add('upperCase')
            }
        }
    }
    static allLowerCase(){
        for(let key in this.keys){
            if(this.keys[key].itsAlphabet){
                this.keys[key].key = this.keys[key].key.toLowerCase()
                this.keys[key].tag.classList.remove('upperCase')
            }
        }
    }
    static checkEvent(event) {        
        if(event instanceof MouseEvent){
            const code = event.target.parentNode.id.toLowerCase()            
            return KeysCode.keys[code]
        }
        const code = event.code.toLowerCase()
        return KeysCode.keys[code]
    }
    static pressedCuote(obj){
        if(!obj.status){
            obj.status = true
            obj.tag.classList.add('pressed')
            delete obj.showScreen
            KeysCode.allVowelsWithAccent()
        }else{
            obj.status = false
            obj.tag.classList.remove('pressed')
            obj.showScreen = Log.write
            KeysCode.allVowelsOutAccent()
        }
    }
    static checkPressedCuote(){
        if(KeysCode.keys['quote'].status){
            KeysCode.pressedCuote(KeysCode.keys['quote'])
        }        
    }
    static allVowelsWithAccent(){
        for(let key in this.keys){
            if(this.keys[key].withQuote){
                const vowel = this.keys[key].key
                this.keys[key].key = this.keys[key].withQuote
                this.keys[key].withQuote = vowel
            }
        }
    }
    static allVowelsOutAccent(){
        for(let key in this.keys){
            if(this.keys[key].withQuote){
                const withQuote = this.keys[key].key
                this.keys[key].key = this.keys[key].withQuote
                this.keys[key].withQuote = withQuote
            }
        }
    }
}
document.addEventListener('keydown', function(event) {
    event.preventDefault()
    console.log(event)
    const obj = KeysCode.checkEvent(event)   
    if(obj.functions){
        obj.functions(obj)
    }     
    if(obj.showScreen){
        obj.showScreen(obj.key)
    }
})