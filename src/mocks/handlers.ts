import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://api.example.com/user", () => {
    return HttpResponse.json({
      id: "abc-123",
      firstName: "John",
      lastName: "Maverick",
    });
  }),
  http.post("http://localhost:3001/singup", () => {
    return HttpResponse.text("ok");
  }),
  http.post("http://localhost:3001/singin", () => {
    return HttpResponse.json({
      token: "qwrwefzsdgfvtegasdvawefgzxdvxzxcverz",
    });
  }),
];
