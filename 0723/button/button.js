const isAgreed = document.querySelector('#check');
const btn = document.querySelector('#btn');

isAgreed.addEventListener('change',()=>{
    // if(isAgreed.checked){
    //     btn.disabled = false;
    // }
    // else{
    //     btn.disabled = true;
    // }
    btn.disabled = !isAgreed.checked;
});