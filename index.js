$(document).ready(function(){
   var t = "\t\t\t\t\t\t\t\t\t\t\t\t"
   var userNavigate;
   var userOrderInput;
   var userOrderQuantity;
   var userOrder = [];
   var orderInput

   var menu = [
      {
         item: "Pizza",
         price: 500
      },
      {
         item: "Burger",
         price: 250
      },
      {
         item: "Roll",
         price: 200
      },
      {
         item: "daal",
         price: 100
      },
      {
         item: "biryani",
         price: 250
      },
      {
         item: "biryani",
         price: 250
      },
      {
         item: "palao",
         price: 350
      },
      {
         item: "manchorian",
         price: 650
      },
      {
         item: "kabab",
         price: 180
      },
      {
         item: "kharai",
         price: 750
      },
      {
         item: "korma",
         price: 200
      },
      {
         item: "halwa",
         price: 50
      },
      {
         item: "sabzi",
         price: 120
      },
      {
         item: "ice cream",
         price: 70
      },
      {
         item: "juice",
         price: 50
      }
   ]

   var cart = [

   ]

   $(".itemNo").on("input", function(){
      $(".status").html("");
   })

   $(".menuBut").on("click", function(){
      $(".welcome").addClass("hide");
      $(".menu").removeClass("hide");
      $(".order").addClass("hide");
      $(".checkout").addClass("hide");
  });
  
  $(".orderBut").on("click", function(){
      // $(".menu").addClass("hide");
      $(".welcome").addClass("hide");
      $(".checkout").addClass("hide");
      $(".menu").removeClass("hide");
      $(".order").removeClass("hide");
      order()
  });


  $(".checkBut").on("click", function(){
      var total = 0;
      $(".checkout p").remove();
      $(".checkout h2").remove();
      for(let anas=0; anas<cart.length; anas++){
         $(".checkout").append("<p> ⭕ "+cart[anas].item+" - "+cart[anas].price+"</p>");
         total  = parseInt(total)+parseInt(cart[anas].price);
     }
     $(".checkout").append("<h2>Your total bill is "+total+"</h2>")
      $(".welcome").addClass("hide");
      $(".menu").addClass("hide");
      $(".order").addClass("hide");
      $(".checkout").removeClass("hide");
  });



  function displayMenu(){
   //   $(".menu").
   console.log(menu.length);
   for(let i=0; i<menu.length; i++){
      console.log(i);
      $(".menu .items").append("<h3 style='text-align:left' class='list'>"+(i+1)+". "+menu[i].item+" - Rs."+menu[i].price+"</h3>")
   }
  }

  displayMenu();
  function order(){
     $(".orderSub").on("click", function(){
        var itemNo = $(".itemNo").val();
        $(".itemNo").val("");
      //   alert(itemNo);
      if(itemNo>menu.length){
         $(".status").html("<span style='color: red;'>PLease selecr a valid number</span>");
      }
      else{
         var c = {
            item: menu[itemNo-1].item,
            price: menu[itemNo-1].price
         }
         cart.push(c);
         console.log(cart);
         $(".status").html("<span style='color: green;'>Item added in cart</span>");
      }
     })
  }
})