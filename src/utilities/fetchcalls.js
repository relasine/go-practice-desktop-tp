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

export const callSignup = async payload => {
  const requestObject = {
    method: "POST",
    mode: "cors",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json"
    }
  };

  const response = await fetch(
    "http://localhost:3000/teachers/signup",
    requestObject
  );

  return await response.json();
};

export const callResetPassword = async payload => {
  console.log(payload);
  const requestObject = {
    method: "PATCH",
    mode: "cors",
    body: JSON.stringify({ email: payload }),
    headers: {
      "Content-Type": "application/json"
    }
  };

  const response = await fetch(
    "http://localhost:3000/api/v1/teachers/resetPassword",
    requestObject
  );

  return await response.json();
};
