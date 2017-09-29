function Clear()
{
 
 
  document.getElementById("result").value="";
}
function Grade()
{
 var marks=parseInt(document.getElementById("marks").value);
if (marks >= 90)
 {
   
  window.alert("Total Points of "+marks+" gives you an  Grade A");
 } 
    else if (marks >= 80 && marks <90) 
     {
   
      window.alert("Total Points of "+marks+" gives you an Grade B");
     }  
    else if (marks >= 70 && marks <80) 
     {
      
      window.alert("Total Points of "+marks+" gives you an  Grade C");
     }

    else if (marks < 70) 
    {
     window.alert("Total Points are "+marks+" and You are Failed");

    } 
}