const groceries = document.getElementsByClassName("groceries")[0];
const pencil = document.getElementById('pencil');
const allItems = document.getElementById('allItems');
const userInput = document.getElementById("userInput");

pencil.addEventListener("click", function()
{
    allItems.innerHTML=""
});
userInput.addEventListener("keydown",function(event)
{
if(event.key == "Enter")
{
    addItem()
}
});

function addItem()
{
    var h2 = document.createElement("h2");
    h2.innerHTML = "- " +  userInput.value;
    h2.addEventListener("click",function()
    {
        h2.style.textDecoration = "line-through";
    })
    allItems.insertAdjacentElement("beforeend",h2) //insertAdjacentHTML() metoda z Element interfejsu analizuje specyficzny tekst jak HTML albo XML, wstawia wynik w drzewo DOM w określonej pozycji. to nie naprawia elementu jest użyty na a zatem nie jest zepsuty istniejący element w środku elementu. To unika ekstra kroków z serializacją, zrobienie tego jest wiele szybsze niż bezpośredni innerHTML manipulation
    userInput.value ="";
}