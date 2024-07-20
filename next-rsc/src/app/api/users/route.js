export async function GET() {
  return Response.json({
    users: {
      id: 1,
      name: "John Doe",
    },
  });
}

export async function POST() {
  return Response.json({
    ok: true,
  });
}