const textInputBox = document.getElementById('text-input');
let sayac = 0;
const lists = document.getElementById('lists');
lists.style.display = 'none';

document.getElementById('clear').addEventListener('click', function(){
    textInputBox.value = "";
})

function add (){
    if(textInputBox.value.length <= 5)
        alert("Minimum karakter sayısı 5'tir. Lütfen 5 ve ya 5'den fazla karakter giriniz.");

    else{
        let li = document.createElement('li');
        lists.appendChild(li);
        
        let checkbox = document.createElement('input');
        checkbox.id = 'checked-' + sayac;
        checkbox.type = 'checkbox';
        checkbox.style.cursor = 'pointer';
        li.appendChild(checkbox);

        let label = document.createElement('label');
        label.setAttribute('for', 'checked-'+sayac);
        label.textContent = textInputBox.value
        label.style.cursor = 'pointer';
        li.appendChild(label);

        let deleteIcon = document.createElement('i');
        deleteIcon.id = 'i-'+sayac;
        deleteIcon.className = 'bi bi-trash3';
        deleteIcon.style.cursor = 'pointer';
        li.appendChild(deleteIcon);

        deleteIcon.addEventListener('click', function () {
            li.remove();
            if (lists.children.length === 0) {
            lists.style.display = 'none';
            }
        })

        const deleteAll = document.getElementById('delete-all');
            deleteAll.addEventListener('click', function(){
            li.remove();
            if (lists.children.length === 0) {
                lists.style.display = 'none';
            }
        })
    }
    

    textInputBox.value = "";
    lists.style.display = 'block';
    sayac++;
}

