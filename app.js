 let images=["./img/image2.jpeg","./img/image3.jpeg","./img/image4.jpeg"]
let img=document.getElementById("myimg");
let count=0;
setInterval(()=>{
 if(count==3){
    img.src="./img/image1.jpeg"
    count=0
 }
 else{
    img.src=images[count]
    count++;
 }
},1000)