export const feedback = [
  {
    id: 1,
    message: "Food is very testy!",
  },
  {
    id: 2,
    message: "waiters behaviour so good!",
  },
];

export async function GET(request) {
  return Response.json({
    status: 200,
    message: "API is working fine",
  });
}
