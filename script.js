const menuItems = ['Html', "Python", "CSS", "Cp Software Company", "Javascript", "PHP", "C++", "Qt Creator", "C#", "Arduino", "AppInventor", "Flash", "Assembly", "Typescript", "Julia", "JPL"]
let menu = document.getElementById("menu")

insertresult(menuItems)

function insertresult(searchResult) {
    for (Item of searchResult) {
        let menuItem = document.createElement("li")
        let link = document.createElement("a")
        link.innerHTML = Item
        if (link.innerHTML === "Cp Software Company") {
            link.setAttribute("href", "http://cpsoftwarecompany.epizy.com")
        }
        menuItem.appendChild(link)
        menu.appendChild(menuItem)
    }
}

function pesquisar(searchbar) {
    let input = searchbar.value.toUpperCase()
    menu.innerHTML = ""
    searchResult = result(input)
    insertresult(searchResult)
}

function result(input) {
    let accept = []
    for (item of menuItems) {
        if (item.toUpperCase().includes(input)) {
            let bolded = item.replace(input, input.bold()).replace(input.toLowerCase(), input.toLowerCase().bold())
            accept.push(bolded)
        }
    }
    return accept
}