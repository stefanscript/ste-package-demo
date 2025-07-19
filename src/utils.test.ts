import { getCurrentTimestamp } from "./utils.js";
import { test, expect } from "vitest";

test("getCurrentTimestamp returns a number", () => {
    const timestamp = getCurrentTimestamp();
    expect(typeof timestamp).toBe("number");
});
