define(["jquery"], ($) => {
    class Header {
        constructor() {
            this.load();
        }
        load() {
            $("header").load("/html/modules/header.html");
        }
    }
    return new Header();
});
