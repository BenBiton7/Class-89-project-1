var myData = []; 
var today = new Date()
var vip = new Date()
var noInsurance = new Date()
var extended = new Date()
var reguler = new Date()
var vipDate = vip.setDate(today.getDate()+7);
var noInsuranceTime = noInsurance.setDate(today.getDate()+30)
var extendedTime = extended.setDate(today.getDate()+14)
var regulerTime = reguler.setDate(today.getDate()+21)
function switchTimes (){
    var select = document.getElementById("isVip");
   var value = select.options[select.selectedIndex].value;
    var selectInsurance = document.getElementById("insurance")
    var insuranceValue = selectInsurance.options[selectInsurance.selectedIndex].value;
   if (value==="yesVip") {
    return new Date(vipDate);
   } else  { 
     if (insuranceValue==="noInsurance")
     return new Date(noInsuranceTime);
     if (insuranceValue==="regulerInsurance")
     return new Date(regulerTime);
     if (insuranceValue==="extendedInsurance")
     return new Date(extendedTime);
   } 
    
}

const handleData = () => {
    

var drones = new Object ();
drones.nameOfCostumer = document.getElementById("nameOfCostumer").value
drones.phone = +document.getElementById("phone").value
myData.push(drones);
maketable();
};



const maketable = () =>{
    var data = "" ; 
    myData.map((item) => {
     data+=`
     <tr>
     <td>${item.nameOfCostumer}</td>
     <td>${item.phone}</td>
     <td>${today.toDateString()}</td>
     <td>${switchTimes(item).toDateString()}</td>
     </tr>
     `;
    });
    document.getElementById("userData").innerHTML = data ;
};