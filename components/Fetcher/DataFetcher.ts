export default async function DataFetcher(path: string) {
  const endpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
  if (typeof endpoint === "string")
    throw new Error(
      "You should specify the value to NEXT_PUBLIC_API_ENDPOINT environment variable."
    );

  return fetch(`${endpoint}/${path}`);
}
