describe("throws error for non-exisiting endpoint", () => {
    it("checks if error for non-existent route", async () => {
      const response = await request.get("/notaroute");
      expect(response.status).toBe(404);
    });
  });

describe("check if server is running", () => {
    it("checks if server is running", async () => {
      const response = await request.get("/");
      expect(response.status).toBe(200);
    });
  })

describe("check api endpoint", () => {
    it("checks if api endpoint is working", async () => {
      const response = await request.get("/generate-trivia");
      expect(response.status).toBe(200);
    });
  })

describe ("Check test route", () => {
    it("checks if test route is working", async () => {
        const response = await request.get("/test");
        expect(response.status).toBe(200);
    })
})
