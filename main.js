menu_list_array = [ "Veg Margarita Pizza",                  
                                          ]; //Agrega más nombres de pizzas

function getmenu()
{
    var htmldata="";
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    document.getElementById("mostrar_menú").innerHTML = htmldata;
}

function add_suggestion(){
	var item = document.getElementById("agregar_elemento").value;
    menu_list_array.push(item);
}

