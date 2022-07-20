/* GEt element*/ 
const students_form =document.getElementById('students_form');
const msg =document.querySelector('.msg');


students_form.onsubmit = (e) => {
    e.preventDefault();
    const form_data =new FormData(e.target);
    const {name,email,phone,uname,gender,course}=Object.fromEntries(form_data.entries());
    if(!name || !email || !phone || !uname || !gender || !course){
        msg.innerHTML= setAlert('All field are required');
    }else{
        msg.innerHTML= setAlert('Data stable', 'success');
        e.target.reset();
    };
};
