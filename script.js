window.addEventListener("keypress", check)

// ctrl + backslash
function check(e) {
    if (e.which === 28) {
        replaceText(document.body)
    } else {
        return
    }
}

const textTemps = {
    "--voicemail": "Hi __. We have tried reaching you...",
    "--caveman": "ooga booga",
    "--surprise": "Here comes the monkey!!!"
}

console.log(Object.keys(textTemps))

function replaceText(element) {
    if (element.hasChildNodes()) {
        element.childNodes.forEach(replaceText)
    } else if (element.nodeType === Text.TEXT_NODE || element.nodeName === "INPUT" || element.nodeName === "TEXTAREA") {
        let temps = Object.keys(textTemps)
        for (let text of temps){
            let example = new RegExp(text, 'g')
            if (element.textContent.match(example)) {
                console.log("found")
                element.textContent = element.textContent.replace(example, textTemps[text])
            } else if (example.test(element.value)) {
                console.log("found input")
                element.value = element.value.replace(example, textTemps[text])
            }
        }
    }
}
