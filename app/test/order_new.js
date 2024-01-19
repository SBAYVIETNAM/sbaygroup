const x = [
    {
        "FirstName": "a",
        "LastName": "a",
        "Type": "CHD",
        "Gender": "1",
        "Birthday": "2024-01-19",
        "Phone": "",
        "Email": "",
        "BaggageDeparture": "",
        "BaggageReturn": ""
    },
    {
        "FirstName": "b",
        "LastName": "c",
        "Type": "CHD",
        "Gender": "1",
        "Birthday": "2024-01-20",
        "Phone": "",
        "Email": "",
        "BaggageDeparture": "",
        "BaggageReturn": ""
    },
    {
        "FirstName": "a",
        "LastName": "d",
        "Type": "INF",
        "Gender": "1",
        "Birthday": "2024-01-19",
        "Phone": "",
        "Email": "",
        "BaggageDeparture": "",
        "BaggageReturn": ""
    }
]

var newa = []

x.forEach(e=>{
    const newob = Object.assign({}, e, {
        Birthday: '10/1/2024'
    })
    newa.push(newob)

})
console.log('newa', newa);