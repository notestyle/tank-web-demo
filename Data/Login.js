export const fetchLogin = async (body) => {
  const response = await fetch(`${process.env.API_URL}/api/hackateen/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  return response
}
