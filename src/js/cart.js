require(['/js/config.js'],()=>{
    require(["template","header","footer"],(template)=>{
        class Cart{
            constructor(){
                console.log("sdasd");
            }
        }
        return new Cart();
    })
})