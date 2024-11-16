
const Dogapi="https://dog.ceo/api/breeds/image/random";


function displayDogImages(data){
    
        const DogImages=document.getElementById("RandomImg")
        DogImages.innerHTML="";
        const img=document.createElement("img")
        img.src=data.message
        img.alt="A Random dog image"
        DogImages.appendChild(img)
    
}

function fetchImages(){
 fetch(Dogapi).then((response)=>{
    return response.json()
 }).then((data)=>{
    displayDogImages(data)
 }).catch((error)=>{
    console.log("Error Fetching Image",error);
    DogImages.innerHTML="<p class=text-danger>Error loading image</p>"
    
 })
}


