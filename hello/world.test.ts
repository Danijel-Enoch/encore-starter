import { describe, expect, test } from "vitest";
import { world } from "./world";

describe("greeting", () => {
	test("should combine string with parameter value", async () => {
		// Call the greeting endpoint like an ordinary function
		const resp = await world();

		expect(resp.message).toBe("Hello world!");
	});
});
