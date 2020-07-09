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
                        console.log(res);
                        let list = res.data.detail;
                        let photo = res.data.detail.photo;
                        let descPhoto = res.data.detail.descContentList;
                        let checked = "checked";
                        this.showDetail(list, photo, descPhoto, checked);
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
                            const obj = { id, title, price, imgurl, count: 1, checked: true };
                            info.push(obj);
                        }
                    } else {
                        info = [{ id, title, price, imgurl, count: 1, checked: true }];
                    }
                    localStorage.setItem("info", JSON.stringify(info));
                    $(".warning").animate({ opacity: 1 }, 500, 'linear', () => {
                        setTimeout(() => {
                            $(".warning").animate({ opacity: 0 }, 500, 'linear')
                        }, 500)
                    })
                    head.getCounts();
                });
            }
        }
        return new Detail();
    });
});
