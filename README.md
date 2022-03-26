# Gulp (modules)
## What is included
- PUG
- HTML
- SCSS
- JavaScript
- Images optimization
- Image lazy load
- Svg Sprites for mono color icons
- Svg Sprites for multi color icons
- Fonts conversion(from ttf to woff2, woff)
- Connect fonts to stylesheets
- Stylelint
- Eslint
- Pre-commit hooks 
- Copy assets into your `dist` directory
- Watch for all files changes and automatically recompile build using BrowserSync
- Starter template

## Start Guide
You should install:
- [Node.js](http://nodejs.org)
- Gulp CLI `npm install gulp-cli -g`

After:
1. [Download ](https://github.com/NPavliuk/gulp-modules/archive/master.zip) from GitHub
2. Unzip archive and in command line make `cd` into project folder
3. Run `npm install`
4. When it's done installing, run `npm run dev`

## Documentation

### Structure

`/src/` - here your source code.

`/dist/` - here compiled code. Do not edit this folder.

### Tasks
`npm run dev` - run development mode

`npm run buld` - run production mode

`npm run sprites` - to create SVG sprites

`npm run lint:scss` - for linting `SCSS` files

`npm run lint:js` - for linting `JavaScript` files

### PUG

Pug files are located in the `src/views/` directory.

New pages should be here `src/views/pages/`.

Partials, like footer or header should be here `src/views/parts/`.

Different layouts for page should be here `src/views/layouts`

Pages will be converted into `dist` directory.

### SASS

Sass files are located in the `src/stylesheets/` directory.

We use BEM methodology and structure the files into the blocks `src/stylesheets/blocks/`.

All blocks and other styles should be imported in the `src/stylesheets/application.sass` manifest file.

It will be compiled in to `application.css` & `application.min.css` files on directory `dist/css/`.

### Javascript

Put your JavaScript files in the `src/javascript` directory.

All js files should be imported in the manifest file `src/javascript/application.js`.

For importing use `import` statement. For example:

```js
import 'bootstrap/js/dist/dropdown.js'
import './blocks/block-name.js'
```

`node_modules` path is included for importing vendor files.

### SVG sprites

We use 2 types of svg sprites:
1. SVG sprite for simple mono colored icons
2. SVG sprite for multi colored icons

#### Mono colored sprite 

Put your simple icons in `src/images/icons/mono/` directory.
In terminal run command  `npm run sprites`. Gulp create `sprite-mono.svg` in directory `src/images/icons/sprites`.
This sprite will be without superfluous attributes and therefore it's simple to edit each icon by means of styles.

#### Multi colored sprite

Put your simple icons in `src/images/icons/multi/` directory.
In terminal run command  `npm run sprites`. Gulp create `sprite-multi.svg` in directory `src/images/icons/sprites`.
This sprite will include all icon styles and their attributes.

### Fonts conversion

For covertation fonts into the web formats put your `ttf` fonts in the `src/fonts/` directory. It will be converted into `woff2` & `woff` formats in the `dist/fonts/` directory.
convertible fonts automatically connect to `src/stylesheets/base/fonts.scss` file.
If you added new fonts and want the Gulp to reconnect them yourself you need to delete the existing file `fonts.scss`.

### Linters

#### [Stylelint](https://stylelint.io/)

Linter launch when creating a commit or manually by commands `npm run lint:scss`.
An example of correct style writing:

```scss
// Example 1
.example {
  display: flex;
  
  &_item {
    display: block;
    width: 100px;
    height: 100px;
    
    &::before {
      display: block;
      color: #888;
      content: 'test';
    }
  }
}

.example2 {
  &_item {
    display: block;
    width: 100px;
    height: 100px;
    
    &::before {
      display: block;
      color: #888;
      content: 'test';
    }

    // Example active class
    &.active {
      color: #75b;
    }
  }
}
```

We use plugin `stylelint-config-rational-order` for a single order of writing styles:

```scss
.declaration-order {
  /* Positioning */
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;

  /* Box Model */
  display: block;
  float: right;
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 10px;

  /* Typography */
  color: #888;
  font: normal 16px Helvetica, sans-serif;
  line-height: 1.3;
  text-align: center;

  /* Visual */
  background-color: #eee;
  border: 1px solid #888;
  border-radius: 4px;
  opacity: 1;

  /* Animation */
  transition: all 1s;

  /* Misc */
  user-select: none;
}
```

2. [ESlint](https://eslint.org/)

Linter are launched when creating a commit or manually by command  `npm run lint:js`.




