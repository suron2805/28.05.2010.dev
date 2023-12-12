var random_links_array = [
  "home/HLongData_Pic_Suc_1.png",
  "home/HLongData_Pic_Suc_2.png",
  "home/HLongData_Pic_Suc_3.png",
  "home/HLongData_Pic_Suc_4.png"
];

var num = Math.floor(Math.random() * random_links_array.length);
var imgLink = random_links_array[num];
var imgStr = '<img src="' + imgLink + '" alt="HLong" style="position:fixed; bottom:-3px; height: 200px; right:20px; z-index:9999;">>';

document.write(imgStr);
document.close();
