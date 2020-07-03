define(["jquery"], () => {
    return {
        baseUrl: "http://www.xiongmaoyouxuan.com/api/",
        //头部导航栏
        getNavList() {
            return new Promise((resolve, reject) => {
                $.get(`${this.baseUrl}tabs?sa=`,resolve);
            });
        },
        //商品列表页
        getListData(){
            return new Promise((resolve, reject) => {
                $.get(`${this.baseUrl}tab/2?start=0`,resolve);
            });
        }
    };
});
