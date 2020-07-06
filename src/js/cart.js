require(['/js/config.js'],()=>{
    require(["jquery","template","header","footer"],($,template)=>{
        class Cart{
            constructor(){
                console.log(123);
            }
        }
        return new Cart();
    })
})