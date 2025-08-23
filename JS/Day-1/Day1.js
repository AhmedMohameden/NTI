// console.log("Hello World");
// document.getElementById("show").innerHTML="Hello World from Dom"
// window.alert("Hello from Alert");
// document.write("HEllo from write");



/*==============================================================*/
// premitive types
    /*(_)           ($) */
/* يمكن المتابة عند تعريف */

/*===============Primitive Data Types =========*/
// String
// number
// Boolean
// undifend
// null

/* ============ Non primitive Types================== */
/*
    1(array) [    ];   start 0
    var color["red" ,"blue"] ;
    console.log(color[0])



    2(object) {key:index,
                key:index,
                key:index,
            
            };

    var person{fName:"Ahmed" ,
                     age: 25
                     }
            console([person.age]);


/*==================Get Data From User================*/
/*1(window.prompt(" رسالة اوبشن للمستخدم عشان يعرف هيكتب اي "))
>> var fName=window.prompt("")


*/ 

/*====================Concatenation==================*/

// console.log(10+20+"30"+40+50);  //30304050
// console.log((10+20)+"30"+(40+50));//303090



/*===================OPERATORS=================================*/
/*  (+   -    /    *    %     **)     */



/*=================================================================*/

  
// function sayHello(){
//     console.log("HEllo" + " "+ document.getElementById("A").value )
    
// };
// sayHello();




  
// function sayHello(){
//    var fName= document.getElementById("A").value ;
//    console.log("Hello User" +""+fName);
   
// };
// // sayHello();

// var yourName=prompt("what is your name ?")

    



  
function fun(){
    var name=document.getElementById("name").value;
    var price=document.getElementById("price").value;
    var des=document.getElementById("des").value;
    var pro=`Your product is: ${name} | Price: ${price} | Description: ${des}`; 

    document.getElementById("www").innerHTML+= pro +"<br>";
    console.log(`${pro}`);
    
     name=document.getElementById("name").value="";
     price=document.getElementById("price").value="";
     des=document.getElementById("des").value="";
   
};


