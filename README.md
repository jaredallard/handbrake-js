[![Build Status](https://travis-ci.org/75lb/handbrake-js.png?branch=master)](https://travis-ci.org/75lb/handbrake-js)
handbrake-js
============
A cross-platform npm distribution for [HandbrakeCLI](https://trac.handbrake.fr/wiki/CLIGuide) designed for command line or library use.

Installation
------------
```sh
$ npm install handbrake-js
```
On **Windows** and **Mac OSX** the above command will install handbrake-js *and* the correct HandbrakeCLI binary for your platform. **Ubuntu** users should additionally run:
```sh
$ sudo npm -g run-script handbrake-js ubuntu-setup
```
Use as a library
--------------------
Handbrake-js has a single method: run.
### handbrake.run(handbrakeOptions)
There are two ways to invoke run(), the first returns an event emitter. This approach emits output as it happens. 
```javascript
var handbrake = require("handbrake-js");
    
var options = {
    input: "Eight Miles High.mov",
    output: "Eight Miles High.m4v",
    preset: "Normal"
};

handbrake.run(options)
    .on("output", console.log);
    .on("progress", function(encode){
        console.log(encode.percentComplete);
    })
    .on("complete", function(){ 
        console.log("Encode complete"); 
    });
```
### handbrake.run(handbrakeOptions, onComplete)
The second method is to pass an `onComplete` callback. It's more convenient for short duration tasks: 
```javascript
handbrake.run({ preset-list: true }, function(stdout, stderr){
    console.log(stdout);
});
```
Use from the command line
-----------------------------
If you installed `handbrake-js` globally, using:
```sh
$ sudo npm install -g handbrake-js
```

then you can encode from the command line using all the usual [Handbrake Options](https://trac.handbrake.fr/wiki/CLIGuide):
```sh
$ handbrake-js --input "Ballroom Bangra.avi" --output "Ballroom Bangra.mp4" --preset Normal
```
Help
----
See [here](https://trac.handbrake.fr/wiki/CLIGuide) for the full list of Handbrake options.
