

const data = { firstName: 'KRIST', lastName: "Larsen", phone:"3333333" };


fetch('http://localhost:8080/PersonExe_war_exploded/api/person', {
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