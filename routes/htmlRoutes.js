// DEPENDENCIES
const path = require('path');

// ROUTING
module.exports = (app) => {

    // route to display the notes page
    app.get('/mywork', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/work.html'));
    });    

    // route to display the about me page
    app.get('/aboutme', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/about.html'));
    });

    // route to display the contact me page
    app.get('/contactme', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/contact.html'));
    });
    
    // default route to home
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
}