fetch(`https://restcountries.com/v3.1/all`).then(reponse => reponse.json())
    .then(data => {
        const continer = document.querySelector(".wrapper")

        const searchInp = document.getElementById("searchInput");
        const searchBtn = document.querySelector(".searchBtn");
            searchBtn.addEventListener("click" ,() => {
                const searchV = searchInp.value.toLocaleLowerCase()
                const filtData = data.filter(item => {
                    return item.name.common.toLocaleLowerCase().includes(searchV)
                })
                mydate(filtData)
            });

     
        function mydate(data){
            continer.innerHTML=""
            data.forEach(item => {
                const div = document.createElement("div");
                div.classList.add("div")
                const card = document.querySelector(".card")
                const comm = item.name.common
                const poytaxt = item.capital
                const poyImg = item.flags.svg
                const poytax = document.createElement("p")
                const img = document.createElement("img")
                const h2 = document.createElement("h3")
    
                h2.innerHTML = `<h2>Davlat nomi: ${comm}</h2>`
                poytax.innerHTML = `<p>Poytaxt:  ${poytaxt}</p>`
                img.src = `${poyImg}`
    
                div.appendChild(h2)
                div.appendChild(poytax)
                div.appendChild(img)
                continer.appendChild(div)
            })
            
        }
        mydate(data)


    });



