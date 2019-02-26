export const callLogin = async payload => {
  const requestObject = {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json"
    }
  };

  const response = await fetch(
    "http://localhost:3000/teachers/login",
    requestObject
  );

  return await response.json();
};
