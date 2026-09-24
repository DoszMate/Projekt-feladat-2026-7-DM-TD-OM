const express = require("express");
const router = express.Router();

let adatok = [
    {
        id: "0",
        tevekenyseg: "Takarítás",
        hatarido: "2025.01.01.",
        allapot: "teljesítve"
    }
];

router.get("/", (req, res) => {
    res.send(adatok);
});


router.post("/", (req, res) => {
    const { id, tevekenyseg, hatarido, allapot } = req.body;

    if (!id || !tevekenyseg || !hatarido || !allapot) {
        return res.status(400).json({ uzenet: "Hiányos adat" });
    }

    let adat = { id, tevekenyseg, hatarido, allapot };
    adatok.push(adat);

    res.json({ uzenet: "Feltöltve", adat });
});


router.put("/:id", (req, res) => {
    const id = req.params.id;

    const { tevekenyseg, hatarido, allapot } = req.body;

    let found = false;
    adatok.forEach(element => {
        if (element.id == id) {
            element.tevekenyseg = tevekenyseg;
            element.hatarido = hatarido;
            element.allapot = allapot;
            found = true;
        }
    });

    if (!found) {
        return res.status(404).json({ uzenet: "Nincs ilyen ID" });
    }

    res.json({ uzenet: "Módosítva." });
});


router.delete("/:id", (req, res) => {
    const id = req.params.id;
    let index = adatok.findIndex(e => e.id == id);

    if (index === -1) {
        return res.status(404).json({ uzenet: "Nincs ilyen ID" });
    }

    adatok.splice(index, 1);
    res.json({ uzenet: "Törölve." });
});

module.exports = router;