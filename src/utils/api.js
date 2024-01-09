export async function sendMail(data) {
  await fetch("http://localhost:3000/api/message", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
}
