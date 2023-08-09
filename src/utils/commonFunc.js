export const type = (method, body, auth = null) => {
  let data = {
    method,
  };
  if (auth) {
    data.headers = {
      authorization: `bearer ${auth}`,
    };
  }
  if (body.type === "str") {
    data.headers = {
      ...data.headers,
      "content-type": "application/json",
    };
    data.body = JSON.stringify(body.data);
  }
  if (body.type === "form") {
    let formData = new FormData();
    for (const i in body.data) {
      const element = body.data[i];
      formData.append(`${i}`, element);
    }
    data.body = formData;
  }

  return data;
};
export const getDataFor = async (url, type) => {
  try {
    const res = await fetch(url, type);
    const resData = await res.json();
    if (res.ok) {
      return resData;
    }
  } catch (error) {
    console.log(error);
  }

  return null;
};
export const baseUrl = {
  url: "https://api.vitcash.com/api",
};

export const saveInCookie = (name, value) => {
  document.cookie = name + "=" + value;
};
export const saveInLocal = (name, value) => {
  localStorage.setItem(`${name}`, JSON.stringify(value));
};
