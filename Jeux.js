let cible = Math.floor(Math.random()*100);

ask();
function ask(arg = "devine le nombre entre 0 et 100"){
    let valeur = prompt(arg);
}
function check(val){
    if(val < cible){
        ask("C'est plus grand!"");
    }
    else if (val> cible){
        ask("C'est plus petit!");
    }
    else{
        alert("Tu as gagné !")
    }
}

Let compteur = 0;
compteur++;
compteur = 10;