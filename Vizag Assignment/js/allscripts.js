function Clear()
{
  document.getElementById("marks").value=" ";
  document.getElementById("demo").innerHTML ="";
}

function Grade()
{
 var marks=parseInt(document.getElementById("marks").value);
 if (!isNaN(marks)) 
 {
  if (marks >= 90)
  {
    document.getElementById("demo").innerHTML ="Total Points of "+marks+" gives you an  Grade A";
  } 
    else if (marks >= 80 && marks <90) 
     {
      document.getElementById("demo").innerHTML ="Total Points of "+marks+" gives you an Grade B";
     }  
    else if (marks >= 70 && marks <80) 
     {
      document.getElementById("demo").innerHTML ="Total Points of "+marks+" gives you an  Grade C";
     }

    else if (marks < 70) 
    {
      document.getElementById("demo").innerHTML ="Total Points are "+marks+" and You are Failed";

    }
  }
  else
  {
    document.getElementById("demo").innerHTML ="Please enter a numerical value";
  } 
  return false;
}

  function simplecal()
    {
                p = document.getElementById("p").value;
                n = document.getElementById("n").value;
                r = document.getElementById("r").value;
               document.getElementById("siInterest").value=parseInt(p) + parseInt(p*n*r/100);
   }
  function compoundcal()
   {
                 p = document.getElementById("p").value;
                n = document.getElementById("n").value;
                r = document.getElementById("r").value;

                var power = p*(Math.pow((1 + (r/ 100)), n));
              document.getElementById("amount").value=parseInt(power);
                document.getElementById("interest").value=power-p;

   }