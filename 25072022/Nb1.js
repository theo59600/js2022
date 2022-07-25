var imput = 'New Number';

function testernbr() {
    input = Number(document.forms.user.value);
    estPrem = true;

    for (i=2;i <input;i++) {
        if (input % i==0) estPrem = false
    }

document.forms.result.value = estPrem;
if(estPrem===true) {
    document.getElementById("reponse").innerHTML = `Le nombre ${input} est un nombre premier`;
} else {
    document.getElementById("reponse").innerHTML = `Le nombre ${input} n'est pas un nombre premier`;
}

}