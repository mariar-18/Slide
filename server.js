const express = require("express");
const multer = require("multer");

const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },

    filename: (req, file, cb) => {
        cb(null, Date.now() + ".pdf");
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 20 * 1024 * 1024
    }
});

app.use(express.static("public"));

app.use(
    "/uploads",
    express.static("uploads")
);

app.use(
    "/pdfjs",
    express.static("node_modules/pdfjs-dist")
);

app.post(
    "/upload",
    upload.single("presentation"),
    (req, res) => {

        console.log(
            "PDF uploaded:",
            req.file.originalname
        );

        res.redirect(
            "/ready.html?file=" +
            encodeURIComponent(req.file.filename) +
            "&name=" +
            encodeURIComponent(req.file.originalname)
        );
    }
);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(
        "SLIDE server running on port " + PORT
    );
});