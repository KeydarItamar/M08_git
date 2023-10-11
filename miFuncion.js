function convertirCF() {
    let CF = prompt("A què vols convertir C/F?");
    let temp = parseFloat(prompt("Temperatura:"));
    if( CF.toUpperCase() == "F" ){
<<<<<<< HEAD
        let cent = (temp-32)/(9/5);
=======
        let cent = (temp-32)/(9/5);
>>>>>>> 4b98be77f24fbb50d02658e465ea20c08e3ecd94
        console.log(`${temp}F -> ${cent}C`);
    }else if (CF.toUpperCase() == "C"){
        let fh = (9/5) * temp + 32;
        console.log(`${temp}C -> ${fh}F`);
    }else {
        console.log("Només es pot C ó F");
    }
}
