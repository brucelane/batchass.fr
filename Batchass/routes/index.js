
/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', { title: 'Batchass', year: new Date().getFullYear() });
};

exports.about = function (req, res) {
    res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'Adapted from cabbi.bo.' });
};

exports.contact = function (req, res) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Batchass is available for AV performances.' });
};
