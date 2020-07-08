require(["/js/config.js"], () => {
    require(["template", "header", "footer"], (template) => {
        class Cart {
            constructor() {
                this.showData();
            }
            showData() {
                let info = JSON.parse(localStorage.getItem("info"));
                $("#tbody").html(template("showdata", { info }));
                this.deleteData(info);
            }
            deleteData(info) {
                let _this=this;
                $(".goodlist").on("click", ".delete", function () {
                    let id = $(this).parents(".tr").attr("id");
                    info.map((item, index) => {
                        if (id == item.id) {
                            info.splice(index, 1);
                            console.log(info);
                        }
                    });
                    localStorage.setItem("info", JSON.stringify(info));
                    console.log(this);
                    _this.showData();
                });
            }
        }
        return new Cart();
    });
});
