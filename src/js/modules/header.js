define(["jquery"], ($) => {
    class Header {
        constructor() {
            this.load();
        }
        load() {
            $("header").load("html/header_.html");
        }
    }
    return new Header();
});
