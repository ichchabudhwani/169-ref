AFRAME.registerComponent("markerHandler",{
  init:async function () {
    this.el.addEventListener("markerFound",()=>{
        console.log("marker is found")
        this.handleMarkerFound();
    });
    this.el.addEventListener("markerLost",()=>{
        console.log("marker is lost")
        this.handleMarkerLost();
    })
  },
  handleMarkerFound:function () {
    var buttondiv =document.getElementById("button-div");
    buttondiv.style.display="flex";

    var ratingButton=document.getElementById("rating-button");
    var orderButton=document.getElementById("order-button")

    ratingButton.addEventListener("click",function () {
     swal ({
        icon:"warning",
        title:"Rate Dish",
        text:"work in progress"
    });
     
    });
    orderButton.addEventListener("click",function (){
        swal({
            icon:"https://i.imgur.com/4NZ6uLY.jpg",
            title:"Thanks for order",
            text:"Your order will be served soon at your table!"
        });
    });


  },
  handleMarkerLost:function () {
    var buttondiv =document.getElementById("button-div");
    buttondiv.style.display="none";
    
  }
})