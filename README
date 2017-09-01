# Serverless URL Shortener (UI)

[![Build Status](https://travis-ci.org/michaelmcallister/serverless-url-shortener-ui.svg?branch=master)](https://travis-ci.org/michaelmcallister/serverless-url-shortener-ui)

[]![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is the Web App UI component for the [Serverless URL Shortener](https://github.com/michaelmcallister/serverless-url-shortener) that I also built.

![UI](https://s3-ap-southeast-2.amazonaws.com/sknk.ws/assets/phone.png)


It's currently running on [sknk.ws](https://sknk.ws) and provides a nice clean interface to submit requests to shorten URLs.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Initial prerequisites are Bower and Gulp (see example below)

Once these are installed Gulp will install the rest of build dependencies defined in `package.json` and `bower.json`

```
# npm install -g bower
# npm install -D gulp gulp-install gulp-load-plugins
```

### Building

Once the prerequisites are installed it's as simple as typing the command `gulp`
(or `./node_modules/gulp/bin/gulp.js` if installed locally)

Once this command is executed successfully you should have a `build` directory

```
# ./node_modules/gulp/bin/gulp.js                     
[18:57:30] Using gulpfile ~/git/serverless-url-shortener-ui/gulpfile.js
[18:57:30] Starting 'install'...
[18:57:30] Starting 'favicon'...
[18:57:30] Finished 'favicon' after 28 ms
[18:57:33] Finished 'install' after 3.76 s
[18:57:33] Starting 'css'...
[18:57:34] Starting 'themes'...
[18:57:34] Starting 'js'...
[18:57:34] Starting 'html'...
[18:57:36] Finished 'html' after 2.53 s
[18:57:39] Finished 'css' after 5.67 s
[18:57:39] Finished 'js' after 5.52 s
[18:57:39] Finished 'themes' after 5.54 s
[18:57:39] Starting 'default'...
[18:57:39] Finished 'default' after 6.28 μs
```

## Deployment

Deployment is done automatically with [travis-ci](https://travis-ci.org/michaelmcallister/serverless-url-shortener-ui) upon a new major release.

travis-ci will run through the build and upload the result to an S3 bucket that hosts https://sknk.ws/

If you'd like to use travis-ci for your clone, keep in mind you'll need to substitute the AWS credentials and bucket name.


## Built With

* [Gulp](https://gulpjs.com/) - A nodeJS framework for automating painful or time-consuming tasks
* [Semantic-UI](https://semantic-ui.com/) - Web UI Framework

## Versioning

I use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Michael McAllister** - *Initial work* - [Blog](http://blog.skunkw0rks.io/)

See also the list of [contributors](https://github.com/michaelmcallister/serverless-url-shortener-ui/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [travis-ci](https://travis-ci.org/) for their awesome (free!) build framework
