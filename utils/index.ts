export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "0045aa8909msh37096a513028432p12567djsn58d9352c4c10",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  }

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      headers: headers,
    }
  )

  const result = await response.json();

  return result;
}
