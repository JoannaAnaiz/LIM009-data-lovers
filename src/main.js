/* Manejo del DOM */

const boxPokemon = document.getElementById("container");
const poki = POKEMON.pokemon;

const paint = (data) => {
    let string = " ";
    for(let i= 0; i<data.length; i++){
        string += `<div class = "ancho"
        <div>
        <p> Number : ${data[i].num}</p>
        <img src = ${data[i].img} alt=${data[i].name}/>
        <p> Name : ${data[i].name}</p>
        <p> Type : ${data[i].type}</p>
        <p> Weight: ${data[i].weight}</p>
        </div>
        </div>`    
    };
    return boxPokemon.innerHTML = string;
};
paint(poki);
