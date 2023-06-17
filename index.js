async function fetchData(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }
  
const url = 'https://api.example.com/data';
try {
    const data = await fetchData(url);
    console.log(data);
    }catch (error) {
    console.error('Error:', error);
}
  