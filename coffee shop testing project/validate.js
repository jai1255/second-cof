    function finalprice()
    {
    var x1=document.getElementById("item1").value;
   	var x2=document.getElementById("item2").value;
   	var x3=document.getElementById("item3").value;
   	var x4=document.getElementById("item4").value;
   	var x5=document.getElementById("item5").value;
   	var x6=document.getElementById("item6").value
    var jb=(3.19*x1 + 2.89*x2 + 3.89*x3 + 4.19*x4 + 3.99*x5 + 2.69*x6);
     document.getElementById("jai").innerHTML=jb.toFixed(2);
	}
