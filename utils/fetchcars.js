
export const fetchCarsData = async () => {
    try {
        const data = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`, {
            method: "GET",
            headers: {
                'X-RapidAPI-Key': 'ae855f2276msh8e69c7e9e6d1a2fp14d8dejsnd25237569e9f',
                'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
              }
        })
        const result = await data.json()
        return result

    } catch (error) {
        console.log(error);
    }
}