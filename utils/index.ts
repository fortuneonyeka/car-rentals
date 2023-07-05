
export  async function fetchCars() {
  const headers = {
      'X-RapidAPI-Key': '6cfb82ef08mshd7f023c8b58253bp1f32edjsnd34416fe0d41',
      'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
    headers: headers,
  });

  const result = await response.json();

  return result
}


