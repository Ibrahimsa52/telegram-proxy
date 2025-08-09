const MTProtoProxy = require('mtproton');

const proxy = new MTProtoProxy({
  port: process.env.PORT || 443,
  secret: '1234567890abcdef1234567890abcdef' // غيّرها بالسر بتاعك
});

proxy.listen(() => {
  console.log(`🚀 MTProto Proxy شغال على البورت ${proxy.port}`);
  console.log(`🔑 Secret: ${proxy.secret}`);
});
