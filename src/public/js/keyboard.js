// Class Static Log
class Log {
    static screen = document.getElementById('log') 
    static cursor = `<span id="cursor" class="hidden">|</span>`; 
    // Array containing the screen
    static logContent = new Array()
    // Method that stores the content in the array
    static write(character){        
        Log.logContent.push(character)
        // Call the print method
        Log.print()
    }
    // Method print
    static print(){
        // The screen empties
        Log.screen.innerHTML = ""
        // Go throgth the content of the array
        Log.logContent.forEach(content => {
            // Store each content of the array
            return Log.screen.innerHTML += content 
        });
        Log.screen.innerHTML += Log.cursor
    }
    // remove the content of the array
    static delete(){
        Log.logContent.pop()
        // Call the print method
        Log.print()
    }
}
// Intervalizes the cursor by adding and removing the hidden class
setInterval(cursorStatus => {
    if(document.getElementById('cursor').className === 'hidden'){
        document.getElementById('cursor').classList.remove('hidden')
    }else{
        document.getElementById('cursor').classList.add('hidden')
    }
}, 500);

// Class Static Keyboard
class Keyboard {
    /* Code of all keyboard keys. 
     * note: in this case the configuration 
     * is for keyboards in Spanish version.
     */
    static codes = {
        "backquote": { key: "º", shift: "ª", altGraph: "\\", tag: backquote, logPrint: true },
        "digit0": { key: "0", shift: "=", tag: digit0, logPrint: true },
        "digit1": { key: "1", altGraph: "|", shift: "!", tag: digit1, logPrint: true },
        "digit2": { key: "2", tag: digit2, altGraph: "@", shift: "\"", logPrint: true },
        "digit3": { key: "3", altGraph: "#", shift: "·", tag: digit3, logPrint: true },
        "digit4": { key: "4", altGraph: "~", shift: "$", tag: digit4, logPrint: true },
        "digit5": { key: "5", shift: "%", tag: digit5, logPrint: true },
        "digit6": { key: "6", altGraph: "¬", shift: "&", tag: digit6, logPrint: true },
        "digit7": { key: "7", tag: digit7, shift: "/", logPrint: true },
        "digit8": { key: "8", tag: digit8, shift: "(", logPrint: true },
        "digit9": { key: "9", tag: digit9, shift: ")", logPrint: true },
        "minus": { key: "'", tag: minus, shift: "?", logPrint: true },
        "equal": { key: "¡", tag: equal, shift: "¿", logPrint: true },
        // backspace uses the delete action, the delete method of the Log is called.
        "backspace": { key: "", tag: backspace, action: Log.delete, logPrint: false },
        "space": { key: "&nbsp;", tag: space, logPrint: true },
        "keyq": { key: "q", tag: keyq, itsAlphabet: true, logPrint: true },
        "keyw": { key: "w", tag: keyw, itsAlphabet: true, logPrint: true },
        "keye": { key: "e", altGraph: "€", accent: "é", tag: keye, itsAlphabet: true, logPrint: true },
        "keyr": { key: "r", tag: keyr, itsAlphabet: true, logPrint: true },
        "keyt": { key: "t", tag: keyt, itsAlphabet: true, logPrint: true },
        "keyy": { key: "y", tag: keyy, itsAlphabet: true, logPrint: true },
        "keyu": { key: "u", accent: "ú", tag: keyu, itsAlphabet: true, logPrint: true },
        "keyi": { key: "i", accent: "í", tag: keyi, itsAlphabet: true, logPrint: true },
        "keyo": { key: "o", accent: "ó",  tag: keyo, itsAlphabet: true, logPrint: true },
        "keyp": { key: "p", tag: keyp, itsAlphabet: true, logPrint: true },
        "tab": { key: "&nbsp;&nbsp;&nbsp;&nbsp;", tag: tab, logPrint: true },
        "bracketleft": { status: false, key: "`", altGraph: "[",   shift: "^", tag: bracketleft, logPrint: true },
        "bracketright": { status: false, key: "+", altGraph: "]", shift: "*", tag: bracketright, logPrint: true },
        "enter": { key: "<br/>", tag: enter, logPrint: true },    
        // capslock uses the pressed method for state change and capslock action.
        "capslock": { status: false, tag: capslock, method: Keyboard.pressed, action: Keyboard.capslock }, 
        "keya": { key: "a", accent: "á", tag: keya, itsAlphabet: true, logPrint: true },
        "keys": { key: "s", tag: keys, itsAlphabet: true, logPrint: true }, 
        "keyd": { key: "d", tag: keyd, itsAlphabet: true, logPrint: true }, 
        "keyf": { key: "f", tag: keyf, itsAlphabet: true, logPrint: true },  
        "keyg": { key: "g", tag: keyg, itsAlphabet: true, logPrint: true },  
        "keyh": { key: "h", tag: keyh, itsAlphabet: true, logPrint: true },  
        "keyj": { key: "j", tag: keyj, itsAlphabet: true, logPrint: true },  
        "keyk": { key: "k", tag: keyk, itsAlphabet: true, logPrint: true }, 
        "keyl": { key: "l", tag: keyl, itsAlphabet: true, logPrint: true },
        "semicolon": { key: "ñ", tag: semicolon, itsAlphabet: true, logPrint: true }, 
        // quote uses the pressed method for state change   
        "quote": { status: false, key: "´", altGraph: "{", shift: "¨", tag: quote, method: Keyboard.pressed, logPrint: false }, 
        "backslash": { status: false, key: "ç", altGraph: "}", tag: backslash, itsAlphabet: true, logPrint: true }, 
        "intlbackslash": { key: "<", shift: ">", tag: intlbackslash, logPrint: true },  
        // shiftleft uses the pressed method for state change and capslock action.
        "shiftleft": { status: false, tag: shiftleft, method: Keyboard.pressed, action: Keyboard.capslock }, 
        "keyz": { key: "z", tag: keyz, logPrint: true }, 
        "keyx": { key: "x", tag: keyx, itsAlphabet: true, logPrint: true },       
        "keyc": { key: "c", tag: keyc, itsAlphabet: true, logPrint: true },     
        "keyv": { key: "v", tag: keyv, itsAlphabet: true, logPrint: true },  
        "keyb": { key: "b", tag: keyb, itsAlphabet: true, logPrint: true }, 
        "keyn": { key: "n", tag: keyn, itsAlphabet: true, logPrint: true }, 
        "keym": { key: "m", tag: keym, itsAlphabet: true, logPrint: true },  
        "comma": { key: ",", shift: ";", tag: comma, logPrint: true },         
        "period": { key: ".", shift: ":", tag: period, logPrint: true },  
        "slash": { key: "-", shift: "_", tag: slash, logPrint: true }, 
        // shiftright uses the pressed method for state change and capslock action.
        "shiftright": { status: false, tag: shiftright, method: Keyboard.pressed, action: Keyboard.capslock }, 
        // altright uses the pressed method for state change
        "altright": { status: false, key: "", tag: altright, method: Keyboard.pressed, logPrint: false }, 
    }
    static control = {
        // keys that have actions or methods
        capslock: Keyboard.codes['capslock'],
        shiftleft: Keyboard.codes['shiftleft'],
        shiftright: Keyboard.codes['shiftright'],
        quote: Keyboard.codes['quote'],
        altgraph: Keyboard.codes['altright']        
    }
    /* Check the state of the object using the method and change 
     * the letters to uppercase or lowercase on the keyboard     
     */
    static capslock(obj){
        if(obj.status){
            // Call the allUpperCase method
            Keyboard.allUpperCase()
        }else{
            // Call the allLowerCase method
            Keyboard.allLowerCase()
        }
    }
    // Method that changes the keys to uppercase
    static allUpperCase(){
        // go through all the keys in the dictionary
        for(let key in Keyboard.codes){
            // Verify that each letter is part of the alphabet
            if(Keyboard.codes[key].itsAlphabet){
                // Modify the value (key) of the letter
                Keyboard.codes[key].key = Keyboard.codes[key].key.toUpperCase()
                if(Keyboard.codes[key].accent){
                    Keyboard.codes[key].accent = Keyboard.codes[key].accent.toUpperCase()
                }                
                // Add the upperCase class
                Keyboard.codes[key].tag.classList.add('upperCase')
            }
        }
    }
    // Method that changes the keys to allLowerCase
    static allLowerCase(){
        // go through all the keys in the dictionary
        for(let key in Keyboard.codes){
            // Verify that each letter is part of the alphabet
            if(Keyboard.codes[key].itsAlphabet){
                // Modify the value (key) of the letter
                Keyboard.codes[key].key = Keyboard.codes[key].key.toLowerCase()
                if(Keyboard.codes[key].accent){
                    Keyboard.codes[key].accent = Keyboard.codes[key].accent.toLowerCase()
                }             
                // Add the remove class
                Keyboard.codes[key].tag.classList.remove('upperCase')
            }
        }
    }
    // Method that checks the object that comes from some event
    static checkEvent(event) {      
        // if the event comes from mouse
        if(event instanceof MouseEvent){
            const code = event.target.parentNode.id.toLowerCase()            
            return Keyboard.codes[code]
        }
        // the event comes from keyboard
        const code = event.code.toLowerCase()
        return Keyboard.codes[code]
    }
    // Method that changes the state of the object that calls it
    static pressed(key){
        // Changed status
        key.status = !key.status
        if(key.status){
            // Call the keyPressed method
            Keyboard.keyPressed(key)
        }else{
            // Call the keyUp method
            Keyboard.keyUp(key)
        }
    }
    // Method that changes the shape of the key pressed itself
    static keyPressed(key){
        key.tag.classList.add('pressed')
    }
    // Method that changes the shape of the key up itself
    static keyUp(key){
        key.tag.classList.remove('pressed')
    }
    // Method that checks the entire keyboard environment
    static run(event){
        // Object is the key as taken from the dictionary
        const obj = Keyboard.checkEvent(event) 
        // Change the state of the letter
        Keyboard.keyPressed(obj) 
        // verify that the altright key is on
        if(Keyboard.control.altgraph.status){
            // Change altright key state
            Keyboard.control.altgraph.status = false
            // If the (obj) key has the altright attribute
            if(obj.altGraph){
                Log.write(obj.altGraph)
            }
            // Call the keyUp method
            Keyboard.keyUp(obj)
            // Call the keyUp method
            Keyboard.keyUp(Keyboard.control.altgraph)
            return
        }
        // Check if the shiftleft or shiftright keys are active
        if(Keyboard.control.shiftleft.status || Keyboard.control.shiftright.status){
            // Change shiftleft key state
            Keyboard.control.shiftleft.status = false
            // Change shiftright key state
            Keyboard.control.shiftright.status = false     
            // If the (obj) key has the shift attribute 
            if(obj.shift){
                Log.write(obj.shift)
            }
            // If the (obj) key has the itsAlphabet attribute 
            if(obj.itsAlphabet){
                Log.write(obj.key)
            }
            // Call the allLowerCase method
            Keyboard.allLowerCase()
            // Call the keyUp method
            Keyboard.keyUp(obj)
            Keyboard.keyUp(Keyboard.control.shiftleft)
            Keyboard.keyUp(Keyboard.control.shiftright)
            return
        }
        // verify that the quote key is on
        if(Keyboard.control.quote.status){
            // Change quote key state
            Keyboard.control.quote.status = false
            // If the (obj) key has the accent attribute 
            if(obj.accent){
                Log.write(obj.accent)
            }   
            /* If the object is active and it is the same, 
             * it will write the value of the key
             */
            if(obj === Keyboard.control.quote){
                Log.write(obj.key)
            }    
            // Call the keyUp method
            Keyboard.keyUp(obj)
            Keyboard.keyUp(Keyboard.control.quote)
            return
        }
        // check if an object has a method
        if(obj.method){
            // The method is called sending the object itself
            obj.method(obj)
        } 
        // check if an object has an action
        if(obj.action){
            // The method is called sending the object itself
            obj.action(obj)
        }       
        // The method is called sending the object itself
        if(obj.logPrint){
            // The method is called sending the object itself
            Log.write(obj.key)
            // Call the keyUp method
            Keyboard.keyUp(obj)
        }
    }
}

document.getElementById('keyboard').addEventListener('click', function(event){
    // Call the run method
    Keyboard.run(event)
})

document.addEventListener('keydown', function(event) {
    // Stop the events
    event.preventDefault()
    // Call the run method
    Keyboard.run(event)
})