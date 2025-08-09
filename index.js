const { MTProxy } = require('mtproton');
const port = process.env.PORT || 8080;

const proxy = new MTProxy({
    port: port,
    secret: '0123456789abcdef0123456789abcdef' // حط سيكرت من 32 حرف/رقم عشوائي
});

proxy.run();
console.log(`MTProxy is running on port ${port}`);
