const gulp = require("gulp"),
    htmlmin = require("gulp-htmlmin"),
    uglify = require("gulp-uglify"),
    babel = require("gulp-babel"),
    sass = require("gulp-sass"),
    cleanCss = require("gulp-clean-css"),
    connect = require("gulp-connect");

gulp.task("html", () => {
    gulp.src("src/html/**")
        .pipe(
            htmlmin({
                removeComments: true, //清除HTML注释

                collapseWhitespace: true, //压缩HTML

                collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input checked/>

                removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />

                removeScriptTypeAttributes: false, //删除<script>的type="text/javascript"

                removeStyleLinkTypeAttributes: false, //删除<style>和<link>的type="text/css"

                minifyJS: true, //压缩页面JS

                minifyCSS: true, //压缩页面CSS
            })
        )
        .pipe(gulp.dest("dist/html"))
        .pipe(connect.reload());
});

gulp.task("index", () => {
    gulp.src("src/index.html")
        .pipe(
            htmlmin({
                removeComments: true, //清除HTML注释

                collapseWhitespace: true, //压缩HTML

                collapseBooleanAttributes: true, //省略布尔属性的值 <input checked="true"/> ==> <input checked/>

                removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />

                removeScriptTypeAttributes: false, //删除<script>的type="text/javascript"

                removeStyleLinkTypeAttributes: false, //删除<style>和<link>的type="text/css"

                minifyJS: true, //压缩页面JS

                minifyCSS: true, //压缩页面CSS
            })
        )
        .pipe(gulp.dest("dist"))
        .pipe(connect.reload());
});

gulp.task("css1", () => {
    gulp.src("src/sass/**/*.scss")
        .pipe(sass()) // sass 转 CSS
        .pipe(cleanCss()) // 压缩 CSS 代码
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload());
});



gulp.task("js", () => {
    gulp.src("src/js/**/*.js")
        .pipe(
            babel({
                presets: ["@babel/env"],
            })
        )
        .pipe(uglify()) // 压缩 JS 代码
        .pipe(gulp.dest("dist/js"))
        .pipe(connect.reload());
});

gulp.task("img", () => {
    gulp.src("src/images/**").pipe(gulp.dest("dist/images"));
});

gulp.task("libs", () => {
    gulp.src("src/libs/**").pipe(gulp.dest("dist/libs"));
});

gulp.task("watch", () => {
    gulp.watch("src/sass/**", ["css1"]);
    gulp.watch("src/html/*.html", ["html"]);
    gulp.watch("src/index.html", ["index"]);
    gulp.watch("src/js/**", ["js"]);
    gulp.watch("src/libs/**", ["libs"]);
    gulp.watch("src/images/**", ["img"]);
});
gulp.task("server", function () {
    connect.server({
        livereload: true,
        port: 2003,
        root: "dist",
    });
});

gulp.task("default", ["html", "index", "css1", "libs", "js", "img", "watch", "server"]);
