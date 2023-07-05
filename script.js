
// Burada DOM etiketlerine erişimi sağladık

let task = localStorage.getItem('task');

let inputDOM = document.getElementById('task');

const btnDOM = document.querySelector('.button');

const listDOM = document.querySelector('#list')






btnDOM.addEventListener('click', gonder);




function listCheck() { 
    const listCheck = document.querySelector('ul');
    list.addEventListener('click', function(c) {
    if(c.target.tagName === 'LI') {
        c.target.classList.toggle('checked');
}
}, false);
}



function gonder() {


    if(inputDOM.value != "") {
        let liDOM = document.createElement('li')

        let deleteBtn = document.createElement('span');

        deleteBtn.classList.add('close')

        deleteBtn.innerHTML = '&times;'

        deleteBtn.addEventListener('click',  () =>{
            removeElement(liDOM)
        })

        

        liDOM.innerHTML = inputDOM.value;

        listDOM.append(liDOM);

        

        liDOM.append(deleteBtn);


        listCheck();

        $('#liveToast').toast('show')

        localStorage.setItem('task', task);

        listDOM.value = "";
        
    }else{
        $('#liveToastError').toast('show')
    }

    



}





function removeElement(liDOM) {
    liDOM.remove();

}



 