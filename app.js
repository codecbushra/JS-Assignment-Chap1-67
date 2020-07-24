//CHAPTER # 38-42

//Question # 1 :

function power(a,b){
    var pow=Math.pow(a,b);
    alert("Ans : "+pow);
}
//Question # 2 :
function leap_Year(){
    var year=prompt("Enter any year:",'2020');
     switch(year%4) {
          
 case 0 :
   switch(year%100) {
    case 0 :
      switch(year%400) {
        case 0 :
    alert(year+" is a Leap Year.");
    break;

        default :
    alert(year+" is not a Leap Year.");
    
      }
    default :
 alert(year+" is a Leap Year.");
 
   }
   
 default :
 alert(year+" is not a Leap Year.");
     }
}
 //Question # 3 :
 function cal_area_triangle() {
     var a = +prompt("Enter the length of 1st side of a Triangle:", ),
     b = +prompt("Enter the length of 2nd side of a Triangle:", ),
     c = +prompt("Enter the length of 3rd side of a Triangle:", ),
     S=(a+b+c)/2;
     document.write("The circumference is "+S.toFixed(3));
   
     function calculateArea() {
     
       var Area=S*(S - a)*(S - b)*(S - c);
       document.write("<br/> Area of a Triange: "+Area.toFixed(3)); 
   }
   calculateArea();
  
   }
    //Question # 4 :
  
    function MarkSheet() {
        var total_marks, obtained_marks, per,
        
        total_marks_sub1 = 100,
        total_marks_sub2 = 100,
        total_marks_sub3 = 100,
        sub1_name = prompt("Enter Name of Subject 1 :", ),
 sub2_name = prompt("Enter Name of Subject 2 :", ),
 sub3_name = prompt("Enter Name of Subject 3 :", ),
         marks_obtained_sub1 = +prompt("Enter obtained marks od Subject 1 :", ),
         marks_obtained_sub2 = +prompt("Enter obtained marks od Subject 2 :", ),
         marks_obtained_sub3 = +prompt("Enter obtained marks od Subject 3 :", );
        function cal_obt_marks() {
            
         obtained_marks = marks_obtained_sub1+marks_obtained_sub2+marks_obtained_sub3;
        
        }
         function cal_Per() {
             cal_obt_marks();
            total_marks = 300;
            per=(obtained_marks/total_marks)*100;
         
         }
         cal_Per();
         document.write("<h1>MARK SHEET</h1>");
         document.write("<br/>");
       
        document.write("<table><tr><td>Subject</td> <td>Total Marks</td> <td>Obtained Marks</td><td>Percentage%</td></tr><tr><td> "+sub1_name+" </td> <td> "+total_marks_sub1+" </td> <td> "+marks_obtained_sub1+" </td></tr><tr><td> "+sub2_name+" </td> <td> "+total_marks_sub2+" </td> <td> "+marks_obtained_sub2+" </td></tr><tr><td> "+sub3_name+" </td> <td> "+total_marks_sub3+" </td> <td> "+marks_obtained_sub3+" </td></tr><b><tr><td></td> <td>"+total_marks+" </td> <td>"+obtained_marks+" </td><td> "+per+" % </td></tr></b></table>"); 
       
       }
           
      //Question # 5 :
      
      function IndexOf_functionality() {
        var str = "Hello world, welcome to the universe.";
        var i=0;
        while (i < str.length) {
             if (str.slice(i, i + 7) === "welcome") {
             alert("The specified value in the string occurs at the index "+i+" of the string.");
             break;
             }
             i++;
             
             }
            alert("Not found")
           }
        
      
      
      
      //Question # 6 :
      
      function Delete_vowels() {
        var sentence = "University of Karachi";
        document.write("<h1>Before deletion of vowels the text is:</h1> "+sentence);
       
               
               var vowels = ["a", "e", "i", "o", "u","A", "E", "I", "O", "U"];
               for (var i=0 ; i<sentence.length; i++){
                for (var j=0 ; j<vowels.length; j++){
                            if(sentence[i]===vowels[j]){
                                sentence=sentence.replace(sentence[i] ,"");
                            }
                        }
                      }
                      
        document.write("<h1>After deletion of vowels the text is:</h1> "+sentence);
       
      }
      
      //Question # 7 :
      
      function Find_twoVowels() {
        
        var sentence = "Pleases read this application and give me gratuity";
      
        document.write("<h1>The text is:</h1> "+sentence);
        document.write("Such occurances are: ");
               

               for (var i=0 ; i<sentence.length; i++){
                  if((sentence[i].toLowerCase()=="a" || sentence[i].toLowerCase()=="e" || sentence[i].toLowerCase()=="i" || sentence[i].toLowerCase()=="o" || sentence[i].toLowerCase()=="u") && (sentence[i+1].toLowerCase()=="a" || sentence[i+1].toLowerCase()=="e" || sentence[i+1].toLowerCase()=="i" || sentence[i+1].toLowerCase()=="o"|| sentence[i+1].toLowerCase()=="u")){
                    document.write(""+sentence[i]+""+sentence[i+1]);
                    document.write(", ");
                         
                        
                            }
                            
                        }
        
      }
      
      // //Question # 8 :
      
      // function c21_q8() {
      //   var message = "Ali and Sami are best friends. They play cricket and football together.";
        
      //   document.write("<h1>Before Replacement the text is:</h1> "+message);
       
      //   for (var i=0 ; i<message.length; i++){
      //       if(i===message.indexOf("and")){
      //           message=message.replace(/and/g ,"&");
      //       }
      //   }
       
        
      //   document.write("<h1>After Replacement the text is:</h1> "+message);
      
      // }
//       //Question # 9 :
      
//       function c21_q9() {
        
//         var str = "472",
//         number=parseInt(str);
//         document.write("Value :  "+str+"<br/> Type :  "+typeof(str));
//         document.write("<br/> Value :  "+number+"<br/> Type :  "+typeof(number));
        
        
        
      
//       }
//       //Question #10 :
      
//       function c21_q10() {
        
//         var user_input = prompt("Enter any word :", ) ,
//         capital_word=user_input.toUpperCase();
//         document.write("User input :  "+user_input);
//         document.write("<br/> Upper case:  "+capital_word);
        
        
      
//       }
      
      
    
    //CHAPTER # 43-48
    
    //Question # 1 :
    
    function Show_Alert() {
     alert("Hi! Welcome to my page"); 
      }
      
      //Question # 2 :
      
      function ShowalertOnImageClick() {
        alert("Thanks for purchasing a phone from us"); 
        
      }
      
      //Question # 3 :
      
      function deleteRow(r) {
        var i = r.parentNode.parentNode.rowIndex;
        document.getElementById("myTable").deleteRow(i);
      
        
      
       }
      
      //Question # 4 :
      
      function Change_image() {
        
         document.write("<img src='images/Before-pic.jpg' onMouseover=src='images/After-pic.jpg' onMouseout=src='images/Before-pic.jpg'>");
        
      
      
      }
      
      
      
     
      //CHAPTER # 31-34
    
    // //Question # 1 :
    
    // function c31_q1() {
    //   var currentDate = new Date();  
    //   alert("Current Date & Time: "+currentDate); 
      
    //   }
      
      //Question # 2 :
      
      function ShowHideDiv(x) {
        
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
      
        
          function expand_Paragraph() {
            var expandedParagraph = `Slow lorises are a group of several species of trepsirrhine primates which
            make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of
            distinctive coloration patterns that are species-dependent. The hands and feet of slow lorises have several
            adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time.
            Slow lorises have a toxic bite, a rare trait among mammals.`;
             document.getElementById("slowLoris").innerHTML=expandedParagraph;
             }
          
      
      
      //Question # 3 :
      var student = document.getElementById("studentTableBody");
      var fname = document.getElementById("firstName");
      var lname = document.getElementById("lastName");
      var bdate = document.getElementById("birthDate");
      var phoneNumber = document.getElementById("phoneNumber");
      var email = document.getElementById("email");
var no=0
      function fnSubmit(e) {
        e.preventDefault()
        student.innerHTML += `
        <tr>
            <th scope="row">${++no}</th>
            <td>${document.getElementById("firstName").value}</td>
            <td>${document.getElementById("lastName").value}</td>
            <td>${document.getElementById("email").value}</td>
            <td>${document.getElementById("birthDate").value}</td>
            <td>${document.getElementById("phoneNumber").value}</td>
            <td>${document.getElementById("address").value}</td>
            <td>${document.getElementById("city").value}</td>
            <td>${document.getElementById("state").value}</td>
            <td>${document.getElementById("zip").value}</td>
            <td>${document.getElementById("gender").value}</td>
            <td><a href="javascript:void(0);" onClick="deleteRow(this)"><em>Remove</em></a></td>
            <td><a href="javascript:void(0);" onClick="deleteRow(this)"><em>Edit</em></a></td>
          </tr>`

        console.log(fname.value)
        console.log(lname.value)
        console.log(bdate.value)
        console.log(phoneNumber.value)
        console.log(email.value)

      }
      
      function deleteRow(r) {
        var i = r.parentNode.parentNode.rowIndex;
        document.getElementById("studentTable").deleteRow(i);
      
        
      
       }
  