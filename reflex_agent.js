function reflex_agent(location, state){
    if (state=="DIRTY") return "CLEAN";
    else if (location=="A") return "RIGHT";
    else if (location=="B") return "LEFT";
}

function test(states){

       var location = states[0];		
       var state = states[0] == "A" ? states[1] : states[2];
       var action_result = reflex_agent(location, state);
       actualEstado[estado-1] = true 
       document.getElementById("log").innerHTML+=`<br><strong>Estado: ${estado}  A: ${states[1]} B: ${states[2]} </strong><br>Location: `.concat(location).concat(" | Action: ").concat(action_result);
       if (action_result == "CLEAN"){
        if (location == "A")  states[1] = "CLEAN";
        else if (location == "B") states[2] = "CLEAN"
       }
    
       else if (action_result == "RIGHT") states[0] = "B"
       else if (action_result == "LEFT") states[0] = "A"
      

      vistos = EstadosVistos()
      if(vistos == 1){
          setTimeout(function(){
            if(estado == 5) states = ['B','DIRTY','DIRTY']
            estado = Estados(states)  
            test(states);
          }, 2000);

      }else{
        document.getElementById("log").innerHTML+=`<br><br><p style="color:#FF0000">Se han visitado todos los estados!!! </p>  `;
      }   
}

var actualEstado = [false,false,false,false,false,false,false,false]
var vistos;
var estado = 1;
var states = ["A","DIRTY","DIRTY"];
test(states);


function EstadosVistos(){
  for(var i = 0; i <= actualEstado.length ; i++){
    if(actualEstado[i] == false){
      return 1;
    }
  }
  return 2; 
}


function Estados(states){
   
     if(states[0]== 'A' && states[1] == 'DIRTY' && states[2]=='DIRTY' ) return 1;
     else if( states[0]== 'A' && states[1] == 'CLEAN' && states[2]=='DIRTY' ) return 2;  
     else if( states[0]== 'B' && states[1] == 'CLEAN' && states[2]=='DIRTY' ) return 3; 
     else if( states[0]== 'B' && states[1] == 'CLEAN' && states[2]=='CLEAN' ) return 4;
     else if( states[0]== 'A' && states[1] == 'CLEAN' && states[2]=='CLEAN' ) return 5;
     else if( states[0]== 'A' && states[1] == 'DIRTY' && states[2]=='CLEAN' ) return 6;
     else if( states[0]== 'B' && states[1] == 'DIRTY' && states[2]=='CLEAN' ) return 7;
     else if( states[0]== 'B' && states[1] == 'DIRTY' && states[2]=='DIRTY' ) return 8;
}