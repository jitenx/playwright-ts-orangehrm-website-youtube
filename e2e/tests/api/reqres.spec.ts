import { test, expect } from "@playwright/test";
import { request } from "http";

test("GET /api/users/2", async ({ request }) => {
  const response = await request.get("https:reqres.in/api/users/2");
  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.data.id).toBe(2);
});

test.only("Post Request",async ({request}) =>{
  const response =await request.get("https:reqres.in/api/users/3");
  expect(response.status()).toBe(200);
  const body=await response.json();
}
)