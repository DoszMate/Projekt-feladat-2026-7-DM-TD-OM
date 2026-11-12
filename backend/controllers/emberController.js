const emberemberModel = require("../emberModels/emberemberModel");

const getAllPerson = (req,res) => {
    return res.status(200).json(emberModel.getAllEmberek());
}

const postPerson = (req,res) => {
    const ember = req.body;

    if (!ember ||
        !ember.nev ||
        !ember.kor
    ) {
        return res.status(404).send("Hiányos adat");
    }
    
    emberModel.postEmber(ember);
    return res.status(201).send("Feltöltve");
}

const putPerson = (req,res) => {
    const azon = req.params.id;
    const ember = req.body;

    if (!ember ||
        !ember.nev ||
        !ember.kor
    ) {
        return res.status(404).send("Hiányos adat");
    }

    if (true == emberModel.putEmber(azon, ember)) {
        return res.status(200).send("Módosítva");
    }

    else {
        return res.status(500).send("Nincs ilyen ID");
    }
}

const deletePerson = (req,res) => {
    const azon = req.params.id;
   
    emberModel.deleteEmber(azon);
    return res.status(200).send("Törölve");
    
}

module.exports = {
    getAllPerson,
    postPerson,
    putPerson,
    deletePerson
}