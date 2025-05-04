
    const menuBar =document.getElementById("menubar")
    const BTN = document.getElementById("btn")
    const BTN2 = document.getElementById("btn2")
    const Close = document.getElementById("close")
    const sub = document.getElementById("Sub")
    const Whats = document.getElementById("whats")
    const Whatss = document.getElementById("whatss")
    const Sobre = document.getElementById("Sobre")
    const Ajuda = document.getElementById("Ajuda")
    


        function toggleMenu(){
            const navLink = document.getElementById("nav-links")
            navLink.classList.toggle('bar')
        }
        

        Whats.addEventListener("click", function(){
            const phone ="993100592"
            const message = "Ola tenho interesse nos seus serviços"
            window.open(`https://wa.me/${phone}?text=${message}`)
        })
        Whatss.addEventListener("click", function(){
            const phone ="993100592"
            const message = `Ola tenho interesse nos \n  seus serviços`
            window.open(`https://wa.me/${phone}?text=${message}`)
        })
        
        
        
        function clickAlert(){
            
            Sobre=alert("Ainda em desenvolvimento")
            Ajuda=alert("Ainda em desenvolvimento")
        }
            

            
            

            function Show(){
                const menuBar = document.getElementById("menubar")
                
                if(menuBar.classList.contains('menubar')){
                    menuBar.classList.remove('menubar')
                }else{
                    menuBar.classList.add('menuopen')
                }
            }
            Close.addEventListener("click" , function(Show){
                if(menuBar.classList.contains('menuopen')){
                    menuBar.classList.remove('menuopen')
                }else{
                    menuBar.classList.add('menubar')
                }
            })

          
    //if(menubar.classList.contains('menu')){
   // menubar.classList.remove('menu')
    //menubar.classList.add('open')}
