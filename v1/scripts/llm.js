const { createGoogleGenerativeAI } = require("@ai-sdk/google");
const { fetch, ProxyAgent } = require("undici");

const dispatcher = new ProxyAgent(process.env.http_proxy || "");

const google = createGoogleGenerativeAI({
  fetch: async (req, options) => {
    return fetch(req, {
      ...options,
      dispatcher,
    });
  },
});

module.exports = {
  google,
};
