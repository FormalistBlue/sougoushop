define(["jquery"], ($) => {
    class OtherHeader {
        constructor() {
            this.load();
        }
        load() {
            $("header").load("modules/header.html");
        }
    }
    return new OtherHeader();
});
