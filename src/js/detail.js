require(["/js/config.js"], () => {
    require(["template", "request", "header", "footer", "zoom"], (template, req, head) => {
        class Detail {
            constructor() {
                this.getDetail();
            }
            getDetail() {
                const id = window.location.search.slice(4);
                req.getDetailData(id).then((res) => {
                    if (res.code === 200) {
                        let list = res.data.detail;
                        let photo = res.data.detail.photo;
                        let descPhoto = res.data.detail.descContentList;
                        this.showDetail(list, photo, descPhoto);
                    }
                });
            }
            showDetail(list, photo, descPhoto) {
                $("#showHere").html(template("goodDetail", { list, photo, descPhoto }));
                $(".zoom-image").elevateZoom({
                    gallery: "gal1",
                });
                this.addToCart(list.id, list.title, list.price, photo[0].url);
            }
            addToCart(id, title, price, imgurl) {
                $(".buyBox").on("click", ".addcart", () => {
                    let info = null;
                    if (localStorage.getItem("info")) {
                        info = JSON.parse(localStorage.getItem("info"));
                        info.forEach(function (item) {
                            if (id == item.id) {
                                item.count++;
                            } else {
                                const obj = { id, title, price, imgurl, count: 1 };
                                info.push(obj);
                            }
                        });
                    } else {
                        info = [{ id, title, price, imgurl, count: 1 }];
                    }
                    localStorage.setItem("info", JSON.stringify(info));
                    head.getCounts();
                });
            }
        }
        return new Detail();
    });
});
