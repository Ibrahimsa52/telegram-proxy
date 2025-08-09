const MTProxy = require('mtproto-proxy');

const proxy = new MTProxy({
  port: process.env.PORT || 443,
  secret: '1234567890abcdef1234567890abcdef'
});

proxy.listen(() => {
  console.log(`🚀 Proxy شغال على البورت ${proxy.port}`);
});
