require(["/js/config.js"], () => {
    require(["jquery", "url", "template", "request", "header", "footer"], (
        $,
        url,
        template,
        req
    ) => {
        class GOodList {
            constructor() {
                this.getlist();
            }
            getlist() {
                req.getListData().then((res) => {
                    if (res.code === 200) {
                        console.log(res);
                        console.log(res.data.category);
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
        return new GOodList();
    });
});
