
    const menuBar =document.getElementById('menubar')
    const BTN = document.getElementById("btn")
    const Close = document.getElementById("close")
    const sub = document.getElementById("Sub")
    const Whats = document.getElementById("whats")
    


        BTN.addEventListener("click" , function(){
                menuBar.style.display ="flex"
            }
        )
        
        
        menuBar.addEventListener("click", function(event){
            if(event.target === Close){
                menuBar.style.display="none"
            }if(event.target === menuBar){
                menuBar.style.display="none"
                
            }
        })

        Whats.addEventListener("click", function(){
            const phone ="993100592"
            const message = "Ola tenho interesse"
            window.open(`https://wa.me/${phone}?text=${message}`)
        })
        
        
            const Sobre = document.getElementById("sobre")
            const Ajuda = document.getElementById("ajuda")

            Sobre.addEventListener("click", function(){
                alert("Ainda em desenvolvimento")
            })
            Ajuda.addEventListener("click", function(){
                alert("Ainda em desenvolvimento")
            })

          
    //if(menubar.classList.contains('menu')){
   // menubar.classList.remove('menu')
    //menubar.classList.add('open')}
