import { api } from "encore.dev/api";
import log from "encore.dev/log";
import { getAuthData } from "~encore/auth";

interface Response {
	message: string;
}
export const get = api(
	{ method: "GET", path: "/hello", expose: true },
	async (): Promise<Response> => {
		await new Promise((resolve) => setTimeout(resolve, 9000));
		return { message: "Hello" };
	}
);

export const admin = api(
	{
		auth: true, // Require the user to be authenticated
		expose: true,
		method: "GET",
		path: "/admin"
	},
	async (): Promise<Response> => {
		const userID = getAuthData()!.userID;
		log.info("Data requested by user", { userID });

		return { message: "Secret message for admins" };
	}
);

interface PingParams {
	name: string;
}

// PingResponse is the response data for the Ping endpoint.
interface PingResponse {
	message: string;
}

// hello is an API endpoint that responds with a simple response.
export const ping = api(
	{ method: "POST", path: "/hello", expose: true },
	async (p: PingParams): Promise<PingResponse> => {
		return { message: `Hello ${p.name}!` };
	}
);
