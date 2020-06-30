const gulp = require("gulp"),
    htmlmin = require("gulp-htmlmin"),
    uglify = require("gulp-uglify"),
    babel = require("gulp-babel"),
    sass = require("gulp-sass"),
    cleanCss = require("gulp-clean-css"),
    connect = require("gulp-connect");

gulp.task('html', () => {
    gulp.src("html/*.html")
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
        .pipe(gulp.dest("dist"));
});
