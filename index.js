function getButtonValue (CustomizePC,Price){
 
  const CustomizeCost = document.getElementById(CustomizePC)
  const totalCost  = Price
  CustomizeCost.innerHTML=totalCost 
}

// calculation

function calculation(){
  
}


document.getElementById('memory8GB').addEventListener('click',function(){
     getButtonValue ("memory-cost",00)

})
 document.getElementById("memory16GB").addEventListener('click',function(){
      getButtonValue ("memory-cost", 100)

 })
 document.getElementById("Storage-256GB").addEventListener('click',function(){
     getButtonValue ("storage-cost", 00)

})
 document.getElementById("storage-512GB").addEventListener('click',function(){
     getButtonValue ("storage-cost", 200)

})
 document.getElementById("storage-1TB").addEventListener('click',function(){
     getButtonValue ("storage-cost", 300)

})
 document.getElementById("Free-delivary").addEventListener('click',function(){
     getButtonValue ("Delivery-Charge", 0)

})

 document.getElementById("const-delivary").addEventListener('click',function(){
     getButtonValue ("Delivery-Charge", 20)

})





