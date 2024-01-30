// var request = new XMLHttpRequest();

// request.open("GET","https://restcountries.com/v3.1/all")

// Follow the below steps:

// step 01 : Create a XML -HTTP Object
  var request = new XMLHttpRequest();

 // step 02: Open a Request
 request.open("GET", "https://restcountries.com/v3.1/all")

 // step 03 : kickstart a request
 request.send();

 // step 04:
 // once the data successfully received from the server 
 // server status code is 200
 // data coming from the server is if type string
 // we are converting string to object 

  request.onload = function (){
  var res = JSON.parse(request.response);
  console.log(res);
  // print all 25 countries common name in console
  // print the capital name, as well as area for countries
  for( var i=0;i<res.length;i++){
    if (res[i].capital){
      console.log(res[i].capital[0]);
    }
    else{
      console.log("Invalid capital");
    }
  }
   // print the capital name, as well as area for countries
  }
s