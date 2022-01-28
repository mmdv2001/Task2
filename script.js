      function ok(){
             let result = parseInt(input1.value);
            result=result%10;
  
           switch (result){
               case 1:{
                   daysofweek.innerHTML += "<li>Bazar Ertəsi </li>";
                   break;
               }
               case 2 :{
                    daysofweek.innerHTML += "<li>Çərşənbə Axşamı </li>";
                    break;
               }
               case 3 :{
                daysofweek.innerHTML += "<li>Çərşənbə</li>" ;
                break;
               }
               case 4 :{
                daysofweek.innerHTML += "<li>Cümə Axşamı</li>" ;
                break; 
               }

               case 5 :{
               daysofweek.innerHTML += "<li>Cümə</li>"  ;
               break;
               }

               case 6 :{
               daysofweek.innerHTML += "<li>Şənbə</li>"  ;
               break;
               }
               
               case 7 :{
               daysofweek.innerHTML += "<li>Bazar</li>"  ;
               break;
               }
               default :
               daysofweek.innerHTML += "<li>Təyin edilməyib</li>" ;
               break; 


           }



        }
