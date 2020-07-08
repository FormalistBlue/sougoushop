require(["/js/config.js"], () => {
    require(["jquery", "template", "header", "footer"], ($, template) => {
        class Cart {
            constructor() {
                this.showData();
            }
            showData() {
                let info = JSON.parse(localStorage.getItem("info"));
                $("#tbody").html(template("showdata", { info }));
                this.deleteData(info);
                this.changeCount(info);
                this.countPrice(info);
                // this.smp=$(".smallPrice");
                // console.log(this.smp);
            }
            deleteData(info) {
                let _this = this;
                $(".goodlist").on("click", ".delete", function () {
                    let id = $(this).parents(".tr").attr("id");
                    info.map((item, index) => {
                        if (id == item.id) {
                            info.splice(index, 1);
                        }
                    });
                    localStorage.setItem("info", JSON.stringify(info));
                    _this.showData();
                });
            }
            changeCount(info) {
                let _this = this;
                $(".goodlist").on("input", ".inputCount", function () {
                    let id = $(this).parents(".tr").attr("id");
                    info.map((item, index) => {
                        if (id == item.id) {
                            let number = $(".inputCount")[index].value;
                            number <= 1 ? 1 : number;
                            item.count = number;
                        }
                    });
                    _this.countPrice(info);
                    localStorage.setItem("info", JSON.stringify(info));
                });
            }
            countPrice(info) {
                let bgcount = 0;
                info.map((item, index) => {
                    let smcount = (item.count * item.price).toFixed(2);
                    bgcount += +smcount;
                    let smp = $(".smallPrice").eq(index);
                    smp.text("￥" + smcount);
                });
                bgcount = bgcount.toFixed(2);
                $(".bigPrice").text("￥" + bgcount);
            }
        }
        return new Cart();
    });
});
