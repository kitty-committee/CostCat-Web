import { goto } from "$app/navigation";

export async function cat(fetch: typeof globalThis.fetch, input: RequestInfo | URL, init?: RequestInit) {
	const response = await fetch(input, { redirect: "manual", credentials: "include", ...init });
	if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
	if (response.status === 302)
		goto(`https://data.nathcat.net/sso/?return-page=${encodeURIComponent(input.toString())}`);

	const json = await response.json();
	if ("status" in json && json.status !== "success")
		throw new Error(`API request failed with message: ${json.message}`);
	return json;
}
