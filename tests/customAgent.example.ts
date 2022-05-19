import superagent from "superagent";

function appendHeader(req) {
  req.set({
    "x-origin-method": req.method,
    "x-origin-url": req.url
  })
  return req;
}

export function onResponse(res) {
  return res.body;
}

export const onError = error => {
  if (error.status === 403) {
    console.log(error)
  }
  throw error
};

const agent = superagent.agent().use(appendHeader);
export default agent;
