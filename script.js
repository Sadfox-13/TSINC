
    const menuBar =document.getElementById('menubar')
    const BTN = document.getElementById("btn")
    const BTN2 = document.getElementById("btn2")
    const Close = document.getElementById("close")
    const sub = document.getElementById("Sub")
    const Whats = document.getElementById("whats")
    const Whatss = document.getElementById("whatss")
    


        BTN.addEventListener("click" , function(){
                menuBar.style.display ="flex"
            }
        )
        BTN2.addEventListener("click" , function(){
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
            const message = "Ola tenho interesse nos seus serviços"
            window.open(`https://wa.me/${phone}?text=${message}`)
        })
        Whatss.addEventListener("click", function(){
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

            function Show(){
                let menubat = document.querySelector('.closebar1')
                if(menubat.classList.contains('open')){
                    menubat.classList.remove('open')
                }else{menubat.classList.add('open')}
            }

          
    //if(menubar.classList.contains('menu')){
   // menubar.classList.remove('menu')
    //menubar.classList.add('open')}
