
async function myfunc(){
    const response = await fetch("http://localhost:8080/seller/search/jalandhar");
    const jsonData = await response.json();
    console.log(jsonData);

    let detail=document.getElementById('parent');
    jsonData.map((element)=>{
        
        detail.innerHTML+=` <div class="card col-10">
         <img class="" src="../images/property-2.jpg" alt=""> 
        <div id="detail" class="details text-center col-5"><h2>Property Type : ${element.propertyType}</h2>
        <h4>Owner Name :  ${element.name}</h4>
        <h4>Phone No :  ${element.phone}</h4>
        </div>
        </div>`;
    })

   
    
}




// let detail=document.getElementById('detail');

// detail.innerHTML=`<h2>Property Type : ${jsonData.propertyType}</h2>
//     <h4>Owner Name :  ${jsonData.name}</h4>
//     <h4>Phone No :  ${jsonData.phone}</h4>`
