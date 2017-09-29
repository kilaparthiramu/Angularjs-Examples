 function simplecal()
    {
                p = document.getElementById("p").value;
                n = document.getElementById("n").value;
                r = document.getElementById("r").value;
                if((!isNaN(p)) && (!isNaN(n)) && (!isNaN(r)))
                {
                  document.getElementById("siInterest").value=parseInt(p) + parseInt(p*n*r/100);
                }
                else{
                  document.getElementById("demo").innerHTML="Please enter numerical values!!!";
                }
   }
  function compoundcal()
   {
                 p = document.getElementById("p").value;
                n = document.getElementById("n").value;
                r = document.getElementById("r").value;

                if((!isNaN(p)) && (!isNaN(n)) && (!isNaN(r)))
                {
                var power = p*(Math.pow((1 + (r/ 100)), n));
                document.getElementById("amount").value=parseInt(power);
                document.getElementById("interest").value=power-p;
                  }
                else{
                  document.getElementById("demo").innerHTML="Please enter numerical values!!!";
                }

   }
   function clear2()
{
  document.getElementById("p").value="";
  document.getElementById("r").value ="";
  document.getElementById("n").value ="";
  document.getElementById("siInterest").value ="";
  document.getElementById("amount").value ="";
  document.getElementById("interest").value ="";
}