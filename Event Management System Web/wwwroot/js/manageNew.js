const boldButton = document.querySelector('.bi-type-bold')
const italicButton = document.querySelector('.bi-type-italic')
const underlineButton = document.querySelector('.bi-type-underline')


const textarea = document.querySelector('.new-details-input')

const applyBoldStyle = () => {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;

    console.log(start, end);
    const selectedText = text.slice(start, end)
    console.log(selectedText);
    const boldText = `<b>${selectedText}</b>`;

    const updatedText = text.slice(0,start) + boldText + text.slice(end)
    
    textarea.value = updatedText
    textarea.setSelectionRange(start, start + boldText.length);

}

const applyUnderlineStyle = () => {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;

    console.log(start, end);
    const selectedText = text.slice(start, end)
    console.log(selectedText);
    const underlinedText = `<span style="text-decoration:underline"> ${selectedText} </span>`;

    const updatedText = text.slice(0,start) + underlinedText + text.slice(end)
    
    textarea.value = updatedText
    textarea.setSelectionRange(start, start + underlinedText.length);

}

const applyitalicStyle = () => {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;

    console.log(start, end);
    const selectedText = text.slice(start, end)
    console.log(selectedText);
    const italicText = `<i> ${selectedText} </i>`;

    const updatedText = text.slice(0,start) + italicText + text.slice(end)
    
    textarea.value = updatedText
    textarea.setSelectionRange(start, start + italicText.length);

}
