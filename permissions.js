// Enkripsi data
const encryptedPermissions = CryptoJS.AES.encrypt(
  JSON.stringify({
    "/kuli/sd.html": "sd",
    "/kuli/smp.html": "smp",
    "/kuli/sma.html": "sma",
    "/kuli/tdu.html": "tdu",
  }),
  'your-secret-key'
).toString();

console.log("Encrypted Permissions:", encryptedPermissions);

// Dekripsi data
const bytes = CryptoJS.AES.decrypt(encryptedPermissions, 'your-secret-key');
const accessPermissions = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

console.log("Decrypted Permissions:", accessPermissions);

