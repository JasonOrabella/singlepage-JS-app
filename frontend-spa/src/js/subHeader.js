export{ createSubHeader }

const createSubHeader = (artist) => {
    const subHeader = document.createElement("header");
    subHeader.classList.add('sub-header')
    subHeader.innerHTML = `<h1> History's greatest OP database</h1>` 
    
    return subHeader;
}