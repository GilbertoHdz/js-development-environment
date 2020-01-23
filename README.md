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
 * config demo script script by
  - npm start
  - npm run share
