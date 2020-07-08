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
                this.changeChecked(info);
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
                            if ($(".inputCount")[index].value <= 0) {
                                $(".inputCount")[index].value = 1;
                            }
                            let number = $(".inputCount")[index].value;
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
                    if (item.checked) {
                        bgcount += +smcount;
                    }
                    let smp = $(".smallPrice").eq(index);
                    smp.text("￥" + smcount);
                });
                bgcount = bgcount.toFixed(2);
                $(".bigPrice").text("￥" + bgcount);
            }
            changeChecked(info) {
                let _this = this;

                info.map((item, index) => {
                    if (item.checked) {
                        $(".checkit").eq(index).attr("checked", true);
                    }
                });

                $(".goodlist").on("input", ".checkit", function () {
                    let id = $(this).parents(".tr").attr("id");
                    info.map((item, index) => {
                        if (id == item.id) {
                            item.checked = !item.checked;
                        }
                    });
                    console.log(info);
                    localStorage.setItem("info", JSON.stringify(info));
                    _this.showData();
                });
            }
        }
        return new Cart();
    });
});
