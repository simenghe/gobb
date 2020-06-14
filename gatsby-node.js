/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const axios = require('axios');


console.log(hltvdata.data);
exports.createPages = async ({ actions: { createPage } }) => {
    const hltvdata = await axios.get(`localhost:5000/gethltvdata`);
    // Create a page that lists all Pokémon.
    createPage({
        path: `/`,
        component: require.resolve('./src/pages/index.js'),
        context: { hltvdata }
    });

};