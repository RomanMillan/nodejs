const fs = require('node:fs');
const prompt = require('prompt');

prompt("Inserte el numero",)

let nameFile = prompt("Inserte el nombre del fichero.")

let table = "";
for(let i=0;i<=10;i++){
    table += `5 X ${i} = ${i*numMult} \n`;
}

fs.writeFile(nameFile,table,(err)=>{
    if(err) throw err;
    console.log("El fichero se ha creado correctamente");
})
