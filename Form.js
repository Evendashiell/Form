const btn = document.querySelector("button"); 
btn.addEventListener("submit", saveToLocalStorage);
function saveToLocalStorage(event){
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
    const date = event.target.date.value;
    const time = event.target.time.value;
    
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('date', date);
    localStorage.setItem('time', time);

}
