let emberek = [
    {
        "nev": "Elemér",
        "kor": 10
    },
    {
        "nev": "János",
        "kor": 4
    }
]

function getAllEmberek() {
    return emberek;
}

function postEmber (ember) {
    emberek.push(ember);
}

function putEmber (id, ember) {
    if (emberek.length - 1 >= 0 || id >= 0) {
        emberek[id].nev = ember.nev;
        emberek[id].kor = ember.kor;
        return true;
    }

    else {
        return false;
    }
}

function deleteEmber (id) {
    if (emberek.length - 1 >= 0 || id >= 0) {
        emberek.splice(id, 1)
        return true;
    }
}

module.exports = {
    getAllEmberek,
    postEmber,
    putEmber,
    deleteEmber
}