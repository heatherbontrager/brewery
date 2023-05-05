document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  const url = `https://api.openbrewerydb.org/breweries?by_city=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        const list = document.createElement("ul")
        data.forEach(obj => {
          const websiteUrl = obj.website_url || ''
          const websiteLink = websiteUrl ? `<a href="${websiteUrl}" target="_blank">${websiteUrl}</a>` : ''

          const listItem = document.createElement("li")
          listItem.innerHTML = `<strong>Name:</strong> ${obj.name} <br><strong>Street:</strong> ${obj.street || 'N/A'} <br><strong>Website:</strong> ${websiteLink || 'N/A'}`
          list.appendChild(listItem)
          list.appendChild(document.createElement("br"))
        })

        document.querySelector("#name").innerHTML = ""
        document.querySelector("#name").appendChild(list)
      })
      .catch(err => {
          console.log(`error ${err}`)
      })
}

const form = document.querySelector('form')
form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  const choice = document.querySelector('input').value
  const url = `https://api.openbrewerydb.org/breweries?by_city=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        const list = document.createElement("ul")
        data.forEach(obj => {
          const websiteUrl = obj.website_url || ''
          const websiteLink = websiteUrl ? `<a href="${websiteUrl}" target="_blank">${websiteUrl}</a>` : ''

          const listItem = document.createElement("li")
          listItem.innerHTML = `<strong>Name:</strong> ${obj.name} <br><strong>Street:</strong> ${obj.street || 'N/A'} <br><strong>Website:</strong> ${websiteLink || 'N/A'}`
          list.appendChild(listItem)
          list.appendChild(document.createElement("br"))
        })

        const nameContainer = document.querySelector("#name")
        nameContainer.innerHTML = ""
        nameContainer.appendChild(list)
      })
      .catch(err => {
        console.log(`error ${err}`)
      })
}
