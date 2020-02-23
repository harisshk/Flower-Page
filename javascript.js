function validateCardNumber(event)
{
var x = event.which || event.keyCode;
if((x >= 48 && x <= 57 )|| (x == 8 ))
{
return true;
}
return false;
}
/////
function CheckBlankSpace()
{
   if(document.getElementById("cardNumber").value == "")
   {
   
      card.innerHTML = "*Please enter Card Number";
              
   }
//    else{
//       card.innerHTML = "";
//    }
   
//    if(document.getElementById('Please Select').value == "")
//    {
      
//        time.innerHTML = "*Please enter expire date";
       
//    }
   

   
   if(document.getElementById('securitycode').value == "")
   {
      
       security.innerHTML = "*Please enter security code";

      
   }
   if(document.getElementById("cardHolderName").value == "")
   {
     
       holderName.innerHTML = "*Please enter cardholderName";
       
   }
   if(document.getElementById('address1input').value == "")
   {
    
       address1.innerHTML = "*Please enter Address1";
      
   }
   
   if(document.getElementById('City').value == "")
   {
   
       city.innerHTML = "*Please enter Town/City";
       
   }
  
  
   if(document.getElementById('Zipcode').value == "")
   {
       
       zipcode.innerHTML = "*Please enter PostalCode";
      
   }
   if(document.getElementById('Email').value == "")
   {
      
       email.innerHTML = "*Please enter EmailAddress";
      
   }
   
   
}
//////
function CheckCardNumber()
        {
   

         var number = document.getElementById("cardNumber").value;
         if(number.length !=16) {
             card.innerHTML = "*Please Enter 16 digit number";
         
         } 
         else {
            card.innerHTML = "";   
         
         }
    
        }
        //////////
 function CheckSecurityCode()
        {
        var number = document.getElementById("securitycode").value;
        if(number.length!=4)
        {
     
            security.innerHTML = "*Please 4 digits security code";

        
        }
        else {
          security.innerHTML = "";   
       }
    }
       //////////////
       
       ///////////
function validateCardHoldername(event)
{
var x = event.which || event.keyCode;
if((x >= 65 && x <= 90 )|| (x==8))
{
return true;
}
else if((x >= 97 && x <= 122 )|| (x==8) )
{
return true;
}
return false;
}
////////////////////
function ValidateTelephone()
            {
               var number = document.getElementById("Telephone").value;
             if(number.length !=10)
             {
                 
                 telephone.innerHTML = "*Please enter Telephone number with 10 digits";
                
             }
             else{
                telephone.innerHTML = "";
             }
             
            }
 function validateZipCode()
            {
               var number = document.getElementById("Zipcode").value.length;

             if(number !=6)
             {
               
                zipcode.innerHTML = "*Please enter valid PostalCode";
                 
             }
             else{
                zipcode.innerHTML = "";
             }
             
            }
            ///////
            function validateFax()
            {
               var number = document.getElementById("Fax").value;

             if(number.length !=10)
             {
                 //alert('please enter your Fax ');
                 //document.getElementById('Fax').style.borderColor="red";
                 fax.innerHTML = "*Please enter  valid Fax";
                
             }
             else{
                fax.innerHTML = "";
             }
            }
//////
function ValidateEmail()
{
   var EmailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

 if (EmailPattern.test("EmailAddress"))
{
email.innerHTML = "*Please enter valid EmailId";
}
else{

email.innerHTML = "";
}

}