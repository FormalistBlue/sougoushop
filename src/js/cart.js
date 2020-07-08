require(['/js/config.js'],()=>{
    require(["template","header","footer"],(template)=>{
        class Cart{
            constructor(){
                this.getLocalStorage();
            }
            getLocalStorage(){
                let info= JSON.parse(localStorage.getItem("info"));
                this.showData(info);
            }
            showData(info){
                console.log(info);
                $("#tbody").html(template("showdata",{info}));
            }
        }
        return new Cart();
    })
})