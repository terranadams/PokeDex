export async function getDataByNumber() {

    const pokemonData = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 932) + 1}/`)
    let res = await pokemonData.json()
    console.log(res)
    let thePhoto = res.sprites.front_default
    document.getElementById('photoArea').innerHTML = `
                    <img src="${thePhoto}" width="300px" height="300px">
                    `;

    let name = res.name
    document.getElementById('name').innerHTML = `Name: ${name.charAt(0).toUpperCase() + name.slice(1)}`

    let types = res.types.map(x => x.type.name)
    let typesHTML = `Type(s): `
    types.forEach(x => {
        typesHTML += `${x.charAt(0).toUpperCase() + x.slice(1)}, `
    })
    document.getElementById('type').innerHTML = typesHTML

    let abilities = res.abilities.map(abi => abi.ability.name)
    let abilitiesHTML = `Abilities: `
    abilities.map(a => abilitiesHTML += ` ${a.charAt(0).toUpperCase() + a.slice(1)}, `)
    document.getElementById('abilities').innerHTML = abilitiesHTML

}