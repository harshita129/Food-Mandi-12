window.addEventListener('load', () => {
    const dish_name = localStorage.getItem('dish_name_');
    const Price = localStorage.getItem('Price_name');
    const City = localStorage.getItem('city');
    const name = localStorage.getItem('user_name_first'); 
    const com = localStorage.getItem('company_name'); 
    const phone = localStorage.getItem('phone_number');
        
    document.getElementById('d_name').innerHTML = dish_name;
    document.getElementById('p_name').innerHTML = Price;
    document.getElementById('c_name').innerHTML = City;
    document.getElementById('user_name_1').innerHTML = name;
    document.getElementById('cm_name').innerHTML = com;
    document.getElementById('ph_name').innerHTML = com;
    

    
    
})
function call()
{
window.location ="call.html";
}