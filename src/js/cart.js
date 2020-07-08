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
                this.smallCount(info);
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
                    _this.smallCount(info);
                    localStorage.setItem("info", JSON.stringify(info));
                });
            }
            smallCount(info) {
                info.map((item, index) => {
                    let smcount = (item.count * item.price).toFixed(2);
                    let smp = $(".smallPrice").eq(index);
                    console.log(index);
                    console.log(smp);
                    console.log(smcount);
                    smp.text(smcount);
                    // console.log( $(".smallPrice")[index]);
                });
            }
        }
        return new Cart();
    });
});
