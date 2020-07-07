define(["jquery", "template", "request"], ($, template, req) => {
    class Header {
        constructor() {
            this.load();
        }
        load() {
            $("header").load("/html/modules/header.html", () => {
                this.getNav();
                this. getCounts();
            });
        }
        getNav() {
            req.getNavList().then((res) => {
                if (res.code === 200) {
                    const data = res.data.list.slice(1, 7);
                    this.showNav(data);
                }
            });
        }
        showNav(data) {
            $("#navList").html(template("navLi", { data }));
        }
        getCounts(){
            const info = JSON.parse(localStorage.getItem("info"))
            let count = 0
            if(info){
                info.forEach(function (item){
                    count += item.count
                })
                $('.cartcounts').text(count);
            }

        }
    }
    return new Header();
});
