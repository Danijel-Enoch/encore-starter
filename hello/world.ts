import { api } from "encore.dev/api";

interface Response {
	message: string;
}
export const world = api(
	{ method: "GET", path: "/world", expose: true, auth: true },
	async (): Promise<Response> => {
		return { message: "World" };
	}
);

export const daniel = "Daniel";
