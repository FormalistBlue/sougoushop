define(["jquery", "url", "template", "request"], ($, url, template, req) => {
    class Header {
        constructor() {
            this.load();
        }
        load() {
            $("header").load("/html/modules/header.html");
            this.getNav();
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
    }
    return new Header();
});
