var Baby_Name_List = new String("David,John,Paul,Mark,James,Andrew,Scott,Steven,Robert,Stephen,William,Craig,Michael,Stuart");

var Baby_Name_Array = new Array;
Baby_Name_Array = Baby_Name_List.split(',');
var name_count = 0;

var table = document.getElementById("name_table");
table.setAttribute("border","1");
table.innerHTML += "<tr><td><b>Name</b></td></tr>";
for (var i =0;i < Baby_Name_Array.length;i++){
    var name_node = document.createTextNode(Baby_Name_Array[i]);
    var list_tr = document.createElement("tr");
    var list_td = document.createElement("td");
    list_td.appendChild(name_node);
    list_tr.appendChild(list_td);
    table.appendChild(list_tr);
    name_count += 1;
}
document.getElementById("count").innerHTML = name_count + " names in the table";

function addname(){
  var name = document.getElementById("input_name").value
  var name_array = name.split(" ");
  // console.log(name_array.length);
  
  if (name_array.length == 2){
    var name_table = document.getElementById("name_table");
    var list_tr = document.createElement("tr");
    var list_td = document.createElement("td");
    list_td.append(name_array[0]);
    list_tr.appendChild(list_td);
    name_table.appendChild(list_tr);
    // console.log(name_table);
    name_count += 1;
    document.getElementById("count").innerHTML = name_count + " names in the table";
    }
    else{
      alert("Wrong input!");
    }
  
  
}

var cells = (table.getElementsByTagName("td"));
for (let cell of cells) {
  cell.addEventListener('copy',copy);
}

function copy(){
  alert(this.innerText+" is copied!");
}