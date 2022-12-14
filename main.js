const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

function newItem(){
    const myItem = input.value;
    input.value = '';
    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');
    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'Delete';
    list.appendChild(listItem);
    
    listBtn.addEventListener('click', () => {
        list.removeChild(listItem);
    });
    
    input.focus();
};

function addWithEnter(event) {
    const myItem = input.value;
    if (myItem.length > 0 && event.which ===13) {
        newItem();
    };
};

function noSpaces() {
    const myItem = input.value;
    if (myItem.length > 0){
        newItem();
    };
};


button.addEventListener('click', noSpaces);

input.addEventListener("keypress", addWithEnter);