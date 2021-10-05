

const data = {
  firstName: "Post",
  lastName: "Man",
  address: {
      street: "Postaddress",
      additionalInfo: "is a place",
      cityInfoDTO: {
          zipcode: "3911",
          city: "Sisimiut"
      }
  },
  phones: [
      {
          number: 74921234,
          description: "Jeg har en nokia"
      }
  ],
  hobbies: [
      {
          name: "Bus spotting"
      }
  ]
}


fetch('https://manlyman69.rocks/CA1/api/person', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
})
.catch((error) => {
  console.error('Error:', error);
});