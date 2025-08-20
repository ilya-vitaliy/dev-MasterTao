![version](https://img.shields.io/badge/version-1.0-red.svg?style=flat-square 'Version Frontend-kit') [![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/sinups/)

## Стартовий проект frontend-kit 🔥

🌏 Cайт : http://codbox.ru

👦 Автор : [ A K ](https://www.instagram.com/webtheory/ 'Instagram page')

## Стартовый репозиторій .

Установка: `npm i`.

Запуск: `npm start`.

Сборка - `<b>`Gulp 4`</b>`

Запуск конкретної задачі: `npm start имя_задачи` (список задач в `gulpfile.js`)

Зупинка: `<kbd>`Ctrl + C`</kbd>`

## Bисновок svg sprite

`<svg class="custom-class" width="14px" height="14px"><use xlink:href="img/sprite-svg.svg#img_name"></use></svg>`

Або можете зробити include у горі сайту нижче тега `Body`

`@@include('img/sprite-svg.svg')`

І виводити на странінці таким чином:

`<svg  width="28"  height="28"  class="custom_class"><use  xlink:href="#image_name"></use></svg>`

## Bисновок png sprite

Надані міксини призначені для використання зі змінними

` .icon-imagename {   @include sprite($image_name); }`

Приклад використання в HTML:

`display: block` sprite:

`<div class="icon-imagename"></div>`

Изменитe `display` ( `display: inline-block;`), ми пропонуємо використовувати загальний css клас:

CSS

`.icon {   display: inline-block; }`

HTML

`<i class="icon icon-home"></i>`

## Оновити залежності

Удаляем: node_modules package-lock.json package.json

Устанавливаем: npm install gulp gulp-sass sass gulp-rename gulp-sourcemaps gulp-postcss css-mqpacker gulp-replace del@3.0.0 browser-sync gulp-gh-pages gulp-newer gulp-uglify gulp-concat gulp-cheerio gulp-svgstore gulp-svgmin gulp-notify gulp-plumber gulp-cleancss gulp-file-include gulp-html-beautify gulp.spritesmith merge-stream vinyl-buffernpm install gulp gulp-sass sass gulp-rename gulp-sourcemaps gulp-postcss css-mqpacker gulp-replace del@3.0.0 browser-sync gulp-gh-pages gulp-newer gulp-uglify gulp-concat gulp-cheerio gulp-svgstore gulp-svgmin gulp-notify gulp-plumber gulp-cleancss gulp-file-include gulp-html-beautify gulp.spritesmith merge-stream vinyl-buffer
