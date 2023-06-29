import CryptoJS from "crypto-js"; // Import the crypto-js library

// Encryption function
export const encryptToken = (token) => {
    const encryptedToken = CryptoJS.AES.encrypt(token, "secret-key").toString();
    return encryptedToken;
};

// Decryption function
export const decryptToken = (encryptedToken) => {
    const bytes = CryptoJS.AES.decrypt(encryptedToken, "secret-key");
    const token = bytes.toString(CryptoJS.enc.Utf8);
    return token || null;
};
