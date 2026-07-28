const multer = require("multer")

const storage = multer.memoryStorage() //Iska matlab hai file ko temporary RAM (Buffer memory) me rakho.
/**
 Pehle Disk Storage (Hard drive) me photo save karna padta tha, par memoryStorage() best hota hai agar aap photo ko sidhe Cloudinary ya kisi AI Model / Face Detection API par bhejna chahte ho.
 */


const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 10 // 10MB
    }
})


module.exports = upload

//Yeh code Multer ka use karke ek File Uploading Tool (Middleware) bana raha hai.

// Jab user aapke backend par koi Image, Video, ya PDF bhejta hai (jaise Face Expression Detection ke liye photo upload karna), to yeh code:

// Us photo ko temporary RAM (Memory) me hold karke rakhta hai.

// File size ko check karta hai ki wo 10MB se badi na ho.