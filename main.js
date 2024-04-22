class Fixed {
    nav
    constructor (option) {
        this.nav = document.querySelector(option.el)
        this.nav.style.position = "fixed"
        this.nav.style.top = "600px"
        window.addEventListener('scroll', ()=> this.scrollCalc())
        window.addEventListener('resize', () => this.scrollCalc())
    }

    scrollCalc(){
        if(window.innerHeight - this.nav.offsetHeight - window.scrollY >0){
            this.nav.style.top = window.innerHeight - this.nav.offsetHeight - window.scrollY+"px"
        }else{
            this.nav.style.top = 0
        }
    }
}