require(["/js/config.js"], () => {
    require(["jquery", "template", "request", "header", "footer", "zoom"], ($, template, req) => {
        class Detail {
            constructor() {
                this.getDetail();
            }
            getDetail() {
                const id = window.location.search.slice(4);
                req.getDetailData(id).then((res) => {
                    if (res.code === 200) {
                        console.log(res);
                        let list = res.data.detail;
                        let photo = res. data.detail.photo;
                        let descPhoto=res.data.detail.descContentList
                        this.showDetail(list,photo,descPhoto);
                    }
                });
            }
            showDetail(list,photo,descPhoto) {
                $("#showHere").html(template("goodDetail", { list,photo,descPhoto }));
            }
        }
        return new Detail();
    });
});
