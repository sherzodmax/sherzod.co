// check for new images in the folder, if new is added image then post on website. Order them by date added

var dirname = '/images/feed/';

fs.readdir(moveFrom, function (err, files) {
    if (err) {
      console.error("Could not list the directory.", err);
      process.exit(1);
    }






// var dirname = '/images/feed/';
// console.log("Going to get file info!");
// fs.stat(dirname, function (err, stats) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log(stats);
//     console.log("Got file info successfully!");

//     // Check file type
//     console.log("isFile ? " + stats.isFile());
//     console.log("isDirectory ? " + stats.isDirectory());
// });
