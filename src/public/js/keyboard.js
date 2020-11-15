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
    static delete(){
        Log.logContent.pop()
        Log.print()
    }
}

class KeysCode {
    static keys = {
        "backquote": {
            key: "º",
            shift: "ª",
            altGraph: "\\",
            tag: backquote,            
            logPrint: true
        },
        "digit0": {
            key: "0",
            shift: "=",            
            tag: digit0,
            logPrint: true
        },
        "digit1": {
            key: "1",  
            altGraph: "|",          
            shift: "!",
            tag: digit1,
            logPrint: true
        },
        "digit2": {
            key: "2",
            tag: digit2,
            altGraph: "@",
            shift: "\"",
            logPrint: true
        },
        "digit3": {
            key: "3",            
            altGraph: "#",
            shift: "·",
            tag: digit3,
            logPrint: true
        },
        "digit4": {
            key: "4", 
            altGraph: "~",           
            shift: "$",
            tag: digit4,
            logPrint: true
        },
        "digit5": {
            key: "5",
            shift: "%",
            tag: digit5,
            logPrint: true
        },
        "digit6": {
            key: "6",
            altGraph: "¬",             
            shift: "&",
            tag: digit6,
            logPrint: true
        },
        "digit7": {
            key: "7",
            tag: digit7,
            shift: "/",
            logPrint: true
        },
        "digit8": {
            key: "8",
            tag: digit8,
            shift: "(",
            logPrint: true
        },
        "digit9": {
            key: "9",
            tag: digit9,
            shift: ")",
            logPrint: true
        },
        "minus": {
            key: "'",
            tag: minus,
            shift: "?",
            logPrint: true
        },
        "equal": {
            key: "¡",
            tag: equal,
            shift: "¿",
            logPrint: true
        },
        "backspace": {
            key: "",
            tag: backspace,  
            action: Log.delete,
            logPrint: false
        },
        "space": {
            key: "&nbsp;",
            tag: space,
            logPrint: true
        },
        "keyq": {
            key: "q",
            tag: keyq,
            itsAlphabet: true,
            logPrint: true
        },
        "keyw": {
            key: "w",
            tag: keyw,
            itsAlphabet: true,
            logPrint: true
        },
        "keye": {
            key: "e",
            altGraph: "€",       
            accent: "é",
            tag: keye,
            itsAlphabet: true,
            logPrint: true
        },
        "keyr": {
            key: "r",
            tag: keyr,
            itsAlphabet: true,
            logPrint: true
        },
        "keyt": {
            key: "t",
            tag: keyt,
            itsAlphabet: true,
            logPrint: true
        },
        "keyy": {
            key: "y",
            tag: keyy,
            itsAlphabet: true,
            logPrint: true
        },
        "keyu": {
            key: "u",
            accent: "ú",
            tag: keyu,
            itsAlphabet: true,
            logPrint: true
        },
        "keyi": {
            key: "i",
            accent: "í",
            tag: keyi,
            itsAlphabet: true,
            logPrint: true
        },
        "keyo": {
            key: "o",
            accent: "ó",
            tag: keyo,
            itsAlphabet: true,
            logPrint: true
        },
        "keyp": {
            key: "p",
            tag: keyp,
            itsAlphabet: true,
            logPrint: true
        },
        "tab": {
            key: "&nbsp;&nbsp;&nbsp;&nbsp;",
            tag: tab,
            logPrint: true
        },
        "bracketleft": {
            status: false,
            key: "`",
            altGraph: "[",    
            shift: "^",   
            tag: bracketleft,
            logPrint: true
        },
        "bracketright": {
            status: false,
            key: "+",
            altGraph: "]",       
            shift: "*",
            tag: bracketright,
            logPrint: true
        },
        "enter": {
            key: "<br/>",
            tag: enter,
            logPrint: true
        },    
        "capslock": {
            status: false,
            tag: capslock,
            method: KeysCode.pressed,
            action: KeysCode.capslock     
        }, 
        "keya": {
            key: "a",
            accent: "á",
            tag: keya,
            itsAlphabet: true,
            logPrint: true
        },
        "keys": {
            key: "s",
            tag: keys,
            itsAlphabet: true,
            logPrint: true
        }, 
        "keyd": {
            key: "d",
            tag: keyd,
            itsAlphabet: true,
            logPrint: true
        }, 
        "keyf": {
            key: "f",
            tag: keyf,
            itsAlphabet: true,
            logPrint: true
        },  
        "keyg": {
            key: "g",
            tag: keyg,
            itsAlphabet: true,
            logPrint: true
        },  
        "keyh": {
            key: "h",
            tag: keyh,
            itsAlphabet: true,
            logPrint: true
        },  
        "keyj": {
            key: "j",
            tag: keyj,
            itsAlphabet: true,
            logPrint: true
        },  
        "keyk": {
            key: "k",
            tag: keyk,
            itsAlphabet: true,
            logPrint: true
        }, 
        "keyl": {
            key: "l",
            tag: keyl,
            itsAlphabet: true,
            logPrint: true
        },
        "semicolon": {
            key: "ñ",
            tag: semicolon,
            itsAlphabet: true,
            logPrint: true
        },       
        "quote": {
            status: false,
            key: "´",
            altGraph: "{",       
            shift: "¨",
            tag: quote,
            method: KeysCode.pressed,
            logPrint: false
        }, 
        "backslash": {
            status: false,
            key: "ç",
            altGraph: "}",       
            tag: backslash,
            itsAlphabet: true,
            logPrint: true
        }, 
        "intlbackslash": {
            key: "<",
            shift: ">",
            tag: intlbackslash,
            logPrint: true
        },  
        "shiftleft": {
            status: false,
            tag: shiftleft,
            method: KeysCode.pressed,
            action: KeysCode.capslock
        }, 
        "keyz": {
            key: "z",
            tag: keyz,
            logPrint: true
        }, 
        "keyx": {
            key: "x",
            tag: keyx,
            itsAlphabet: true,
            logPrint: true
        },       
        "keyc": {
            key: "c",
            tag: keyc,
            itsAlphabet: true,
            logPrint: true
        },     
        "keyv": {
            key: "v",
            tag: keyv,
            itsAlphabet: true,
            logPrint: true
        },  
        "keyb": {
            key: "b",
            tag: keyb,
            itsAlphabet: true,
            logPrint: true
        }, 
        "keyn": {
            key: "n",
            tag: keyn,
            itsAlphabet: true,
            logPrint: true
        }, 
        "keym": {
            key: "m",
            tag: keym,
            itsAlphabet: true,
            logPrint: true
        },  
        "comma": {
            key: ",",
            shift: ";",
            tag: comma,
            logPrint: true
        },         
        "period": {
            key: ".",
            shift: ":",
            tag: period,
            logPrint: true
        },  
        "slash": {
            key: "-",
            shift: "_",
            tag: slash,
            logPrint: true
        }, 
        "shiftright": {
            status: false,
            tag: shiftright,
            method: KeysCode.pressed,
            action: KeysCode.capslock
        }, 
        "altgraph": {
            status: false,
            key: "",
            tag: altgraph,
            method: KeysCode.pressed,
            logPrint: false
        }, 
        
    }
    static control = {
        capslock: KeysCode.keys['capslock'],
        shiftleft: KeysCode.keys['shiftleft'],
        shiftright: KeysCode.keys['shiftright'],
        quote: KeysCode.keys['quote'],
        altgraph: KeysCode.keys['altgraph']        
    }
    static capslock(obj){
        if(obj.status){
            KeysCode.allUpperCase()
        }else{
            KeysCode.allLowerCase()
        }
    }
    static allUpperCase(){
        for(let key in KeysCode.keys){
            if(KeysCode.keys[key].itsAlphabet){
                KeysCode.keys[key].key = KeysCode.keys[key].key.toUpperCase()
                KeysCode.keys[key].tag.classList.add('upperCase')
            }
        }
    }
    static allLowerCase(){
        for(let key in KeysCode.keys){
            if(KeysCode.keys[key].itsAlphabet){
                KeysCode.keys[key].key = KeysCode.keys[key].key.toLowerCase()
                KeysCode.keys[key].tag.classList.remove('upperCase')
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
        if(obj.status){
            obj.status = false            
        }else{
            obj.status = true
        }
    }
    static checkPressedCuote(){
        if(KeysCode.keys['quote'].status){
            KeysCode.pressedCuote(KeysCode.keys['quote'])
        }        
    }
    static pressed(key){
        key.status = !key.status
        if(key.status){
            KeysCode.keyPressed(key)
        }else{
            KeysCode.keyUp(key)
        }
    }
    static keyPressed(key){
        key.tag.classList.add('pressed')
    }
    static keyUp(key){
        key.tag.classList.remove('pressed')
    }
    static run(){
        const obj = KeysCode.checkEvent(event) 
        KeysCode.keyPressed(obj) 
        if(KeysCode.control.altgraph.status){
            KeysCode.control.altgraph.status = false
            if(obj.altGraph){
                Log.write(obj.altGraph)
            }
            KeysCode.keyUp(obj)
            KeysCode.keyUp(KeysCode.control.altgraph)
            return
        }
        if(KeysCode.control.shiftleft.status || KeysCode.control.shiftright.status){
            KeysCode.control.shiftleft.status = false
            KeysCode.control.shiftright.status = false           
            if(obj.shift){
                Log.write(obj.shift)
            }
            if(obj.itsAlphabet){
                Log.write(obj.key)
            }
            KeysCode.allLowerCase()
            KeysCode.keyUp(obj)
            KeysCode.keyUp(KeysCode.control.shiftleft)
            KeysCode.keyUp(KeysCode.control.shiftright)
            return
        }
        if(KeysCode.control.quote.status){
            if(obj.accent){
                Log.write(obj.accent)
            }   
            if(obj === KeysCode.control.quote){
                Log.write(obj.key)
            }     
            KeysCode.control.quote.status = false
            KeysCode.keyUp(obj)
            KeysCode.keyUp(KeysCode.control.quote)
            return
        }
        if(obj.method){
            obj.method(obj)
        } 
        if(obj.action){
            obj.action(obj)
        }       
        if(obj.logPrint){
            Log.write(obj.key)
            KeysCode.keyUp(obj)
        }
    }
}

document.getElementById('keyboard').addEventListener('click', function(event){
    KeysCode.run()
})

document.addEventListener('keydown', function(event) {
    event.preventDefault()   
    KeysCode.run()
})

document.addEventListener('keyup', function(event) {
    event.preventDefault()
    const obj = KeysCode.checkEvent(event) 
    if(obj.logPrint){
        KeysCode.keyUp(obj)
    }
})