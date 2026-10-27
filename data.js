const MyName = "Rendi";
let MyAge = 1;

let biodata = document.getElementById('biodata');
console.log(biodata);

function generateBiodata() {
    let generation;

    if(MyAge > 10 && MyAge < 18) {
        generation = "teenager";
    }   
    else if (MyAge > 18 && MyAge < 30) {
        generation = "adult";
    }
    else if (MyAge >= 30) {
        generation = "middle age";
    }
    else if (MyAge > 2 && MyAge < 10) {
        generation = "child";
    }
    else {
        generation = "baby";
    }

    return biodata.innerHTML = generation;
}

console.log(MyName);
console.log(MyAge );

generateBiodata();