const addElement = (e, node, txt, attr, value)=>{
    e.preventDefault();
    const element = document.createElement(node)
    
    if(txt)
    { 
        const text = document.createTextNode(txt);
        element.appendChild(text);
    }
   if(attr){
    element.setAttribute(attr,value)
   }
    
    document.querySelector('.content').appendChild(element);

    //console.log(e);
    //console.log('click');
}

const searchElements = (e) =>{
    e.preventDefault();
    const infoElement = document.querySelector('.result');
    infoElement.textContent = '';
    const searchValue = searchForm.elements.search.value;
    const elements = document.querySelectorAll(searchValue);
    //console.log(elements);
    if(elements.length){
        infoElement.innerHTML = `<p class="result__info">In this page I found ${elements.length} elements <strong>${searchValue}</strong></p>`
        showInfo(elements, infoElement);
    }
    else{
        infoElement.innerHTML = `<p class="result__info">No result</p>`
        return;
    }
    
}

const showInfo = (elements, infoElement) => { 
    //console.log(elements, infoElement)
    elements.forEach((element)=>{
        const item = document.createElement('div');
        item.className = 'result__element-description';
        item.innerHTML =`
        <div>${element.nodeName}</div>
        <div>class: ${element.className}</div>
        <div>offsetHeight: ${element.offsetHeight}</div>
        <div>offsetWidth: ${element.offsetWidth}</div>
        <div>childElementCount: ${element.childElementCount}</div>
        `;
        infoElement.appendChild(item);        
    })
};


const addForm =document.querySelector('.form--add');
addForm.addEventListener('submit', (e) => addElement(
    e,
    addForm.elements.node.value,
    addForm.elements.text.value,
    addForm.elements.attr.value,
    addForm.elements.value.value,
))

const searchForm = document.querySelector('.form--search');
searchForm.addEventListener('submit', searchElements);