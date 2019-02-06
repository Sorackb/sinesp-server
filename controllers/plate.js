const sinespApi = require('sinesp-api');

const search = async ({ params: { plate } }, res) => {
  try {
    res.send(await sinespApi.search(plate));
  } catch (e) {
    res.status(500).send(e.message);
  }
};

module.exports = {
  search,
};