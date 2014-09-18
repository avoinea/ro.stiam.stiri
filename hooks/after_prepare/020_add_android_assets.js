#!/usr/bin/env node

//
// This hook copies various resource files
// from our version control system directories
// into the appropriate platform specific location
//


// configure all the files to copy.
// Key of object is the source file,
// value is the destination location.
// It's fine to put all platforms' icons
// and splash screen files here, even if
// we don't build for all platforms
// on each developer's box.
var cleanup = [
    "platforms/android/res/drawable-land-hdpi",
    "platforms/android/res/drawable-land-ldpi",
    "platforms/android/res/drawable-land-mdpi",
    "platforms/android/res/drawable-land-xhdpi",
    "platforms/android/res/drawable-port-hdpi",
    "platforms/android/res/drawable-port-ldpi",
    "platforms/android/res/drawable-port-mdpi",
    "platforms/android/res/drawable-port-xhdpi",
]

var filestocopy = [{
    "config/android/res/drawable/icon.png":
    "platforms/android/res/drawable/icon.png"
}, {
    "config/android/res/drawable-hdpi/icon.png":
    "platforms/android/res/drawable-hdpi/icon.png"
}, {
    "config/android/res/drawable-ldpi/icon.png":
    "platforms/android/res/drawable-ldpi/icon.png"
}, {
    "config/android/res/drawable-mdpi/icon.png":
    "platforms/android/res/drawable-mdpi/icon.png"
}, {
    "config/android/res/drawable-xhdpi/icon.png":
    "platforms/android/res/drawable-xhdpi/icon.png"
}, {
    "config/android/res/drawable-xxhdpi/icon.png":
    "platforms/android/res/drawable-xxhdpi/icon.png"
}, {
    "config/android/res/drawable/splash.9.png":
    "platforms/android/res/drawable/splash.9.png"
}, {
    "config/android/res/drawable-hdpi/splash.9.png":
    "platforms/android/res/drawable-hdpi/splash.9.png"
}, {
    "config/android/res/drawable-ldpi/splash.9.png":
    "platforms/android/res/drawable-ldpi/splash.9.png"
}, {
    "config/android/res/drawable-mdpi/splash.9.png":
    "platforms/android/res/drawable-mdpi/splash.9.png"
}, {
    "config/android/res/drawable-xhdpi/splash.9.png":
    "platforms/android/res/drawable-xhdpi/splash.9.png"
}, {
    "config/android/res/drawable-xxhdpi/splash.9.png":
    "platforms/android/res/drawable-xxhdpi/splash.9.png"
}
];

var fs = require('fs');
var path = require('path');

// no need to configure below
var rootdir = process.argv[2];

cleanup.forEach(function(key){
   var destdir = path.join(rootdir, key);
   if(fs.existsSync(destdir)){
       var files = fs.readdirSync(destdir);
       files.forEach(function (filepath) {
          var del_file = path.join(destdir, filepath);
          console.log("Deleting " + del_file);
          fs.unlinkSync(del_file);
       });
       console.log("Deleting " + destdir);
       fs.rmdirSync(destdir);
   }
});

filestocopy.forEach(function(obj) {
    Object.keys(obj).forEach(function(key) {
        var val = obj[key];
        var srcfile = path.join(rootdir, key);
        var destfile = path.join(rootdir, val);
        var destdir = path.dirname(destfile);
        if(!fs.existsSync(destdir)){
            console.log('Adding dir: ' + destdir);
            fs.mkdirSync(destdir);
        }

        if ( fs.existsSync(srcfile) ) {
            console.log("copying " + srcfile + " to " + destfile);
            fs.createReadStream(srcfile).pipe(
               fs.createWriteStream(destfile));
        }
    });
});