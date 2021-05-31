function ghar()
{
    const dish_name = document.getElementById('dish_name_').value;
    const Price = document.getElementById('Price_name').value;
    const City = document.getElementById('city').value;
    
    localStorage.setItem("dish_name_", dish_name);
    localStorage.setItem("Price_name", Price);
    localStorage.setItem("city", City);

}

function bakery()
{
    const dish_name = document.getElementById('dish_name_').value;
    const Price = document.getElementById('Price_name').value;
    const City = document.getElementById('city').value;
    
    localStorage.setItem("dish_name_", dish_name);
    localStorage.setItem("Price_name", Price);
    localStorage.setItem("city", City);

    
}
function ok()
{
    window.location = "ok.html";
}