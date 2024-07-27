// Enkripsi data
const codes = CryptoJS.AES.encrypt(
  JSON.stringify({
    "/kuli/sd.html": "sd",
    "/kuli/smp.html": "smp",
    "/kuli/sma.html": "sma",
    "/kuli/tdu.html": "tdu",
  }),
  'your-secret-key'
).toString();

console.log("Encrypted Permissions:", codes);

// Dekripsi data
const bytes = CryptoJS.AES.decrypt(codes, 'your-secret-key');
const accessPermissions = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

console.log("Decrypted Permissions:", accessPermissions);

