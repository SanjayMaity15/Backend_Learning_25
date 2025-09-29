const os = require("os");

console.log("User Info:", os.userInfo());
console.log("Home Dir:", os.homedir());
console.log("Host Name:", os.hostname());
console.log("OS Type:", os.type());
console.log("Platform:", os.platform());
console.log("Arch:", os.arch());
console.log("CPU Info:", os.cpus().length + " cores");
console.log("Total Mem:", (os.totalmem() / 1024 / 1024).toFixed(2), "MB");
console.log("Free Mem:", (os.freemem() / 1024 / 1024).toFixed(2), "MB");
console.log("System Uptime:", (os.uptime() / 60).toFixed(2), "minutes");
