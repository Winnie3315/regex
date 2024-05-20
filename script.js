const users = [
    { id: "1234", name: "Ivan", surname: "Ivanov", email: "ivan.ivanov@example.com", phone: "+71234567890" },
    { id: "2345", name: "Maria", surname: "Petrova", email: "maria.petrova@example.com", phone: "+71234567891" },
    { id: "3456", name: "Alexey", surname: "Sidorov", email: "alexey.sidorov@example.com", phone: "+71234567892" },
    { id: "4567", name: "Olga", surname: "Smirnova", email: "olga.smirnova@example.com", phone: "+71234567893" },
    { id: "5678", name: "Dmitry", surname: "Volkov", email: "dmitry.volkov@example.com", phone: "+71234567894" },
    { id: "6789", name: "Elena", surname: "Kozlova", email: "elena.kozlova@example.com", phone: "+71234567895" },
    { id: "7890", name: "Sergey", surname: "Morozov", email: "sergey.morozov@example.com", phone: "+71234567896" },
    { id: "8901", name: "Anna", surname: "Pavlova", email: "anna.pavlova@example.com", phone: "+71234567897" },
    { id: "9012", name: "Pavel", surname: "Lebedev", email: "pavel.lebedev@example.com", phone: "+71234567898" },
    { id: "1023", name: "Tatiana", surname: "Romanova", email: "tatiana.romanova@example.com", phone: "+71234567899" }
  ];
  
  const idRegex = /^\d{4}$/
  const nameRegex = /^[A-Za-zА-Яа-я]+$/
  const surnameRegex = /^[A-Za-zА-Яа-я]+$/
  const phoneRegex = /^\+7\d{10}$/
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  
  const id = []
  const name = []
  const surname = []
  const phone = []
  const email = []
  
  users.forEach(item => {
    if (
      idRegex.test(item.id) &&
      nameRegex.test(item.name) &&
      surnameRegex.test(item.surname) &&
      phoneRegex.test(item.phone) &&
      emailRegex.test(item.email)
    ) {
      id.push(item.id);
      name.push(item.name);
      surname.push(item.surname);
      phone.push(item.phone);
      email.push(item.email);
    }
  })
  
  console.log("id:", id)
  console.log("name:", name)
  console.log("surname:", surname)
  console.log("phone:", phone)
  console.log("email:", email)
  