async function login(username, password) {
  const headers = {
    "content-type": "application/json; charset=utf-8",
    "x-api-key": "IuimuMneIKJd3tapno2Ag1c1WcAES97j",
  };

  const setup = await fetch("https://apijumboweb.smdigital.cl/user/api/v1/vtexid/pub/authentication/start", {
    headers,
    method: "GET",
  });

  setupResponse = await setup.json();
  authenticationToken = setupResponse.authenticationToken;

  const login = await fetch("https://apijumboweb.smdigital.cl/user/api/v1/vtexid/pub/authentication/classic/validate", {
    headers,
    body: JSON.stringify({ authenticationToken, login: username, password }),
    method: "POST",
  });

  loginResponse = await login.json();

  const {authStatus, token, user} = loginResponse;
  const {firstName, lastName, email} = user;

  console.log('status:', authStatus);
  console.log('userData:\n', {firstName, lastName, email});
  console.log('token:\n', token);

  return loginResponse;
}
