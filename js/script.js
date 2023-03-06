console.log('hola')
const gallery = document.querySelectorAll(".gallery .image");
previewBox = document.querySelector(".preview-box");
previewImg = previewBox.querySelector("img");
closeicon = previewBox.querySelector(".fa-solid");

currentimg=previewBox.querySelector(".current-img");
totalimg=previewBox.querySelector(".total-img");
shadow= document.querySelector(".shadow");



window.onload =()=>{
    for(let i= 0; i< gallery.length; i++){

        totalimg.textContent= gallery.length

        let newindex= i;
        let clickimgindex;
        gallery[i].onclick =()=>{
            
            clickimgindex= newindex;
            console.log(i);
          

            function preview(){
                currentimg.textContent=newindex +1;
                let selectimgurl=gallery[newindex].querySelector("img").src; //seleccion url de imagen
                previewImg.src=selectimgurl;
                console.log(selectimgurl);
            }

            ///     BOTON PREVIOUS AND NEXT
            const prevBtn = document.querySelector(".prev")
            const nextBtn = document.querySelector(".next")

            if(newindex==0){
                prevBtn.style.display="none";
            }

            if(newindex>= gallery.length-1){
                nextBtn.style.display="none";
            }

            prevBtn.onclick=()=>{
                newindex--;

                if(newindex==0){
                    preview();
                    prevBtn.style.display="none";
                
                }else{
                    preview();
                    nextBtn.style.display ="block"

                }
            }

            nextBtn.onclick=()=>{
                newindex++;

                if(newindex>= gallery.length-1){
                    preview();
                    nextBtn.style.display="none";
                
                }else{
                    preview();
                    prevBtn.style.display ="block"

                }
            }



            preview(); ///LLAMAR A LA FUNCION

            previewBox.classList.add("show");
            shadow.style.display="block";

            closeicon.onclick =()=>{
                newindex=clickimgindex;
                prevBtn.style.display ="block"
                nextBtn.style.display ="block"
                previewBox.classList.remove("show")
                shadow.style.display="none";
            }
        }


    }
}