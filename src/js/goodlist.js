require(["/js/config.js"], () => {
    require(["jquery", "url", "template", "request", "header", "footer"], (
        $,
        url,
        template,
        req
    ) => {
        class GoodList {
            constructor() {
                this.getlist();
            }
            getlist() {
                const id = window.location.search.slice(1).split("=")[1];
                req.getListData(id).then((res) => {
                    if (res.code === 200) {
                        let list = res.data.items.list;
                        let cname = res.data.category.cname;
                        let categoriesTitle = res.data.categoriesTitle;
                        this.showgoods(list, cname, categoriesTitle);
                    }
                });
            }
            showgoods(list, cname, categoriesTitle) {
                $("#goodsBox").html(template("goodList", { list, cname, categoriesTitle }));
            }
        }
        return new GoodList();
    });
});
