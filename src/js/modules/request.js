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
        getListData(id){
            return new Promise((resolve, reject) => {
                $.get(`${this.baseUrl}tab/${id}?start=0`,resolve);
            });
        },
        getDetailData(id){
            return new Promise((resolve, reject) => {
                $.get(`${this.baseUrl}detail?id=${id}&normal=1&sa=`,resolve);
            });
        }
    };
});
