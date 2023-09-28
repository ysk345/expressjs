const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('index', {title: "Home"});
});
router.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});
router.get('/project', (req, res) => {
    res.render('project', {title: 'Projects'});
});
router.get('/service', (req, res) => {
    res.render('service', {title: 'Services'});
});
router.get('/contact', (req, res) => {
    res.render('contact', {title: 'Contact'});
});
router.get('/download', (req, res) => {
    res.download('./public/docs/resume.pdf');
});
router.post('/', (req, res) => {
    res.redirect('/');
});

module.exports = router;