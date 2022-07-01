function setValue(key, value){
    return localStorage.setItem(key, value)
}

let getValue = key => localStorage.getItem(key)

if (JSON.parse(getValue('intro')) === null) setValue('intro', true)