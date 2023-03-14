import { URLSearchParams } from "url";

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function GET(request: Request) {
  const params = new URLSearchParams(request.url.split("?")[1]);
  const query = params.get("query");

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY!,
      "X-RapidAPI-Host": "crunchbase-crunchbase-v1.p.rapidapi.com",
    },
  };

  await sleep(1000);
  const response = await fetch(
    `https://crunchbase-crunchbase-v1.p.rapidapi.com/autocompletes?query=${query}`,
    options
  );

  const data = await response.json();
  return new Response(JSON.stringify(data));
}
