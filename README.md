Grunt & Gulp <- Automation
webpack, browserify <- bundling
Babel, Typescript <- Transpiling
JSlint, Lint <- Linting
Jest, Mock, Travis, Jenkins <- test & continuous integrations

Step 1:
https://editorconfig.org

Step 2:
Install Node and Npm
get package.json in bit.ly/jsdevpackagejson
Set up Node Security Platform <- DEPRECATED, not use more, npm now has security check built in
  1) npm i -g nsp
  2) check in terminal project: nps check

Step 3:
Set up webserver with express
Config: localtunnel
  npm i localtunnel -g
  start [app]
  lt --port 3000
ngrock <- Secure tunnel
  sign up
  install ngrock
  install authtoken
  start [app]
  ./ngrock http:80
now <- quick deploy nodeJs to the cloud
  npm i -g now
  create start script
  now
surge <- quickly host static files to publick URL
  npm i -g surge
  surge

Step 4: Config build script with automation npm scripts.
 see: https://www.freecodecamp.org/news/why-i-left-gulp-and-grunt-for-npm-scripts-3d6853dd22b8/
 * config script process with:
  - npm start
  - npm run share

Step 5: Config transpiling - Babel

Step 6: Bundling configuration with webpack
  1) webpack file: bit.ly/2dSZwea
  2) webpack with express
  3) create app entry point
  4) webpack devtool demo: https://webpack.js.org/configuration/devtool/ Mod: 8 with debugger

Step 7: Config Linter ESLint
  1) Config lint -> http://bit.ly/jsdeveslint
    use lint:watch for watch working development
    --parallel watch many watching configurations in development mode

Step 8: Testing configuration
  1)

Step 9: CI Travis
  Create account in travis / travis-ci.com
  Config AppVeyor auto deployment
    crete account in appveyor.com and import proyect

Step 10: HTTP Call approaches
  1) config userApi
  2)  - JSON Schema Faker
      - generate random data with faker, chance, randex.js and
      - config server data via API with JSON Server typicode
      - typeSchema: http://bit.ly/ps-mock-data-schema
      - Generate mock data from package.json -> npm run generate-mock-data
