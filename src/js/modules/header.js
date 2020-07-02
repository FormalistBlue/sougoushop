define(["jquery", "url", "template"], ($, url,template) => {
    class Header {
        constructor() {
            this.load();
        }
        load() {
            $("header").load("/html/modules/header.html");
            this.getNav();
        }
        getNav() {
            // $.get(`${url.sgsc}/pc/setting.json?c=pc&s=10000&t=1593681327474&v=1.0`,res=>{
            //     console.log(res);
            // })
            $.ajax({
                type: "get",
                url: `${url.xmyx}tabs?sa=`,
                success: (res) => {
                    if (res.code === 200) {
                        const data = res.data.list.slice(1, 7);
                        console.log(data);
                        this.showNav(data);
                    }
                },
            });

            // $.getJSON(`${url.sgsc}/pc/setting.json?c=pc&s=10000&t=1593681327474&v=1.0?q=javascript&count=1&callback=?`, function(data){
            //     console.log(data);
            // 	alert("jsonp success!");
            // });
        }
        showNav(data) {
            $("#navList").html(template("navLi", { data }));
        }
    }
    return new Header();
});
