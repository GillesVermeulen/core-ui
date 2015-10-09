# Moovly Style Package

## CSS components based on
- Home
- MyMoovs
- Gallery
- FAQ

## Package features
- Gulp
- SASS
- Bower
- JShint
- Handlebars
- Components page with a list of styled components (index.html)
- HTML split into separate partials
- SCSS split into separate components

## Notes
- The rendered CSS files for the style package, along with the necessary plugins and images are available in the /dist folder. It's not necesary to do any pre-building to reuse the style. The simple inclusion of the CSS files should be enough.
- The page featuring the list of components is rendered based on Handlebars partials.
- Any further development in this specific package will require build.

#Build Notes

## Requirements
- [nodejs](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

## Install
Install the dependencies with `npm install` or `sudo npm install`. Then just run `gulp`.

## Adding packages to the build
The package is setup so you can easily add external packages to your project, while making it easier to manage dependencies. Doing
`bower install <package-name>` will add the package to the src/vendor folder. You can browse for available bower packages through [bower search page](http://bower.io/search/), and general documentation on bower in [bower.io](http://bower.io/).
After adding the package, you need to include it into the build process and into your index.html file.

## Gulp tasks
- **gulp** will build the files inside the /dist folder and perform a watch. You are ready to start developing
- **gulp clean** will clean the dist folder
- **gulp build** will build the files inside the /dist folder without triggering a watch
- **gulp release** will do the same build but with a js uglify in the end

