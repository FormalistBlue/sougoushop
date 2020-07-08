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
            // const arr = info
            //   .map((item, index) => {
            //     if (item.id == id) return index;
            //   })
            //   .filter((item) => item !== undefined);
            // console.log(arr);
            // if (arr.length === 0)
            //   info.push({ id, imgUrl, title, originPrice, price, count: 1 });
            // else info[arr[0]].count++;

            // let existIndex = -1
            // info.map((item,index) => {
            //   if(item.id == id) {
            //     existIndex = index
            //   }
            // })
            // if(existIndex === -1) {
            //   const obj = {id,imgUrl,title, originPrice, price, count:1}
            //   info.push(obj)
            // } else {
            //   console.log(222, existIndex)
            //   info[existIndex].count++
            // }

            addToCart(id, title, price, imgurl) {
                $(".buyBox").on("click", ".addcart", () => {
                    let info = null;
                    let flag = true;
                    if (localStorage.getItem("info")) {
                        info = JSON.parse(localStorage.getItem("info"));
                        info.forEach(function (item) {
                            if (id == item.id) {
                                item.count++;
                                flag = false;
                            }
                        });
                        if (flag) {
                            const obj = { id, title, price, imgurl, count: 1 };
                            info.push(obj);
                        }
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
