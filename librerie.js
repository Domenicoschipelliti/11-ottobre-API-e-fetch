fetch(" https://striveschool-api.herokuapp.com/books")

.then((res) => {
  if (res.ok) {
    return res.json()
  }else{
    if(res.status===404){
       throw new Error("not found")
      }else{
        console.log(" general error")
      }
  }
})
.then((data)=>{
   console.log("api restituito",data);

    const cardImg=document.getElementById("imagine");
    const immaagine=document.createElement("img");
    cardImg.src=data[0].img;
    cardImg.appendChild(immaagine);

   
  

   const cardTitle=document.getElementById("title")
   const title=document.createElement('h5')
    cardTitle.innerText=data[0].title
    cardTitle.appendChild(title) 
    
    
    const preZzo=document.getElementById("prezzo")
    preZzo.innerText=data[0].price + "$"

    
    const card=document.getElementById("im");
    const ima=document.createElement("img");
    card.src=data[1].img;
    card.appendChild(ima);



    const caTitle=document.getElementById("ti")
    const tit=document.createElement('h5')
    caTitle.innerText=data[1].title
    caTitle.appendChild(tit)

    const price=document.getElementById("price")
    price.innerText=data[1].price + "$"

    const car=document.getElementById("ima");
    const im=document.createElement("img");
    car.src=data[2].img;
    car.appendChild(im);
    
    const cTitle=document.getElementById("tita")
    const titLe=document.createElement('h5')
    cTitle.innerText=data[2].title
    cTitle.appendChild(titLe)

    const pric=document.getElementById("pri")
    pric.innerText=data[2].price + "$"


    const caR=document.getElementById("immgine");
    const iM=document.createElement("img");
    caR.src=data[3].img;
    caR.appendChild(iM);

    const cariTitle=document.getElementById("h")
    const tiTle=document.createElement('h5')
    cariTitle.innerText=data[3].title
    cariTitle.appendChild(tiTle)

    const pri=document.getElementById("pr")
    pri.innerText=data[3].price + "$"

    

})

.catch((error)=>{
    console.log(" general error",error)
})


const deleteButtons = document.querySelectorAll('.card-body');

deleteButtons.forEach(button => {
  button.addEventListener('click', () => {
      
      const card = button.parentElement;
      card.remove();
  });
});