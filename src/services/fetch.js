const END_POINT = 'http://localhost:3000/servers';

export default async function getServers() {
  try {
    const request = await fetch(END_POINT);
    const results = request.json();
    return results;
  } catch (error) {
    console.log(error);
  }
}