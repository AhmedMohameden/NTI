


  
function fun(){
    var name=document.getElementById("name").value;
    var price=document.getElementById("price").value;
    var des=document.getElementById("des").value;
    var pro=`Your product is: ${name} | Price: ${price} | Description: ${des}`; 

    document.getElementById("www").innerHTML+= pro +"<br>";
    console.log(`${pro}`);
     window.alert(pro);
     name=document.getElementById("name").value="";
     price=document.getElementById("price").value="";
     des=document.getElementById("des").value="";
   
};


