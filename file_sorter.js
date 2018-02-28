const test = require('./testing');

// File Sorter
// You have an array of filenames with extensions.
// Sort the files into arrays based on whether they're videos or images.

let image_exts = [
  "jpg",
  "gif",
  "jpeg",
  "png"
]

let video_exts = [
  "mov",
  "avi",
  "mpeg",
  "mp4",
  "mpg"
]

let filenames = [
  "pavans_first_birthday.mov",
  "owens_asleep_at_the_computer.jpg",
  "michael_fights_a_polar_bear.mp4",
  "nate_road_rage.avi",
  "ruby_skydiving.jpeg",
  "ken_getting_his_black_belt.png",
  "dan_winning_underground_street_race.mov",
  "its_hard_to_come_up_with_file_names.gif",
  "seriously_this_is_taking_too_long.mpg",
  "i_wonder_how_many_of_these_i_should_have.png",
  "probably_a_few_more.avi",
  "nutmeg_is_clawing_my_sneakers_again.mp4",
  "cat_i_will_destroy_you.gif",
  "i_wish_we_had_a_dog.jpeg",
  "stop_looking_at_me_like_that_nutmeg.mpeg",
  "aww_i_cant_hate_you.png",
  "omg_my_sneakers.avi",
  "cat_you_are_the_worst.mp4"
];

function splitByExt(filenames) {
  return filenames.reduce((acc_obj, filename) => {
    let [name, ...ext] = filename.split('.')
    if (image_exts.includes(ext[0])) return Object.assign(acc_obj, {images: [filename, ...acc_obj.images]})
    if (video_exts.includes(ext[0])) return Object.assign(acc_obj, {videos:[filename, ...acc_obj.videos]})
    return acc_obj
  },{images:[], videos:[]})
}

let files = splitByExt(filenames)
test.assert(10, files.videos.length, "10 video files in this list")
test.assert(8, files.images.length, " 8 image files in this list")