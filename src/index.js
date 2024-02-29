let myLeads = []

const deleteBtn = document.getElementById("delete-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const tabBtn = document.getElementById('tab-Btn')
//localStorage.setItem("myLeads", "www.cooks.com")
let leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))
console.log(leadsFromLocalStorage)

//tabBTN
// const tab = [{ url: "https://www.linkedin.com" }]
tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWidow: true }, function (tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
        //console.log(tab[0].url)
    })

})

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)

}
)


function render(leads) {
    let listItems = ""

    for (let i = 0; i < leads.length; i++) {
        //  listItems += "<li> <a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "    </a>   </li>"
        listItems += `
      <li style = 'text-decoration:underline'> 
      <a style = 'color:#5f9341' target = '_blank' href='${leads[i]}'>
      ${leads[i]} </a>
      </li>
      `
        console.log(listItems)
        // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
    }

    ulEl.innerHTML = listItems
}

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage

    render(myLeads)
}
const inputBtn = document.getElementById("input-btn")
inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    //  console.log(localStorage.getItem("myLeads"))
})


