var Baby_Name_List = new String("David,John,Paul,Mark,James,Andrew,Scott,Steven,Robert,Stephen,William,Craig,Michael,Stuart,Christopher,Alan,Colin,Brian,Kevin,Gary,Richard,Derek,Martin,Thomas,Neil,Barry,Ian,Jason,Iain,Gordon,Alexander,Graeme,Peter,Darren,Graham,George,Kenneth,Allan,Simon,Douglas,Keith,Lee,Anthony,Grant,Ross,Jonathan,Gavin,Nicholas,Joseph,Stewart,Daniel,Edward,Matthew,Donald,Fraser,Garry,Malcolm,Charles,Duncan,Alistair,Raymond,Philip,Ronald,Ewan,Ryan,Francis,Bruce,Patrick,Alastair,Bryan,Marc,Jamie,Hugh,Euan,Gerard,Sean,Wayne,Adam,Calum,Alasdair,Robin,Greig,Angus,Russell,Cameron,Roderick,Norman,Murray,Gareth,Dean,Eric,Adrian,Gregor,Samuel,Gerald,Henry,Justin,Benjamin,Shaun,Callum,Campbell,Frank,Roy,Timothy,Greg,Liam,Niall,Rory,Martyn,Wesley,Barrie,Antony,Kris,Lewis,Jon,Aaron,Blair,Dale,Jordan,Mohammed,Ben,Kieran,Kyle,Kristopher,Jack,Luke,Sam,Joshua,Nathan,Daryl,Robbie,Connor,Conor,Declan,Owen,Dylan,Aidan,Josh,Jake,Rhys,Reece,Keiran,Harry,Bradley,Ciaran,Brandon,Hamish,Taylor,Jay,Calvin,Joe,Conner,Dominic,Finlay,Ethan,Ronan,Aiden,Charlie,Jacob,Max,Morgan,Logan,Louis,Marcus,Mitchell,Arran,Oliver,Keir,Leon,Tyler,Kai,Lucas,Evan,Kian,Alex,Finn,Leo,Archie,Harris,Mackenzie,Cole,Noah,Lennon,Harvey,Corey,Brodie,Kenzie,Luca,Alfie,Bailey,Jayden,Zak,Hayden,Caleb,Mason,Harrison,Riley,Kayden,Muhammad,Oscar,Isaac,Ollie,Kaiden,Cody,Jude,Ruaridh,Cooper,Jackson,Zac,Olly,Blake,Shay,Callan,Reuben,Theo,Freddie,Jaxon,Carson,Brody,Zachary,Lachlan,Elliot,Sonny,Carter,Arthur,Arlo,Hunter,Jax,Innes,Ruairidh,Struan");
//var Baby_Name_List = new String("David,John,Paul,Mark,James,Andrew,Scott,Steven,Robert,Stephen,William,Craig,Michael,Stuart");
var Baby_Name_Array = new Array;
Baby_Name_Array = Baby_Name_List.split(',');

var option_html = "<option>{{i}}.{{name}}</option>";
for (var i=0;i<Baby_Name_Array.length;i++){
  var current_option_html = 
      option_html.replace("{{i}}",i+1)
                 .replace("{{name}}",Baby_Name_Array[i]);
  document.getElementById("baby").innerHTML += current_option_html;
}

function show(){
  var pickchoice = document.getElementById("baby").value;
  var indexcomma = pickchoice.indexOf(".");
  var pickname = pickchoice.substr(indexcomma+1,pickchoice.length-indexcomma-1);
  console.log(pickname);
  
  
  var content_html = "<table width='800px'><tr>";

  var rows=0;
  var i=0;
  
  for(var j=0;(1+j+1)*(j+1)/2<(Baby_Name_Array.length+1);j++){
    content_html +="<tr>";
    for (var k = 0;k<j+1;k++){      
      var name_html = "<td id='{{id}}'>{{name}}</td>";
      if (Baby_Name_Array[i]==pickname){
        name_html = name_html.replace("<td id='{{id}}'>","<td id='{{id}}' bgcolor='yellow'>");
      }
      content_html += name_html.replace("{{name}}",Baby_Name_Array[i])
                               .replace("{{id}}",Baby_Name_Array[i]);
      i=i+1;
    }
    content_html +="</tr>";
  }
  content_html +="</tr></table>";
  document.getElementById("contenttable").innerHTML = content_html;
  document.getElementById("nowtime").innerHTML = new Date().toLocaleString();
}

function random(){
  
  var tdelem = document.getElementById("contenttable").getElementsByTagName("td");
  for(var i=0;i<tdelem.length;i++){
    tdelem[i].setAttribute("bgcolor","");
  }
  var randomName = Baby_Name_Array[Math.floor(Math.random() * (Baby_Name_Array.length-1))];
  var rnameHTML = document.getElementById(randomName).outerHTML;
  
  rnameHTML = rnameHTML.replace("<td","<td bgcolor='yellow'");
  document.getElementById(randomName).outerHTML = rnameHTML;
  document.getElementById("nowtime").innerHTML = new Date().toLocaleString();

}
var stop_flag = true;
function animation(){
  random();
  if(stop_flag)
    setTimeout(animation, 1000);
}

function disco(){
  if (document.getElementById("disco").innerHTML=="Let's Disco!"){
    document.getElementById("disco").innerHTML = "Stop the music!";
    stop_flag=true;
    animation();
  }else{
    document.getElementById("disco").innerHTML = "Let's Disco!";
    stop_flag=false;
  }
  
}

