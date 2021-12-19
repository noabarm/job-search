exports.get404 =(req,res,next)=>{
    //res.status(404).sendFile(path.join(__dirname,'views','page404.html'));
    res.status(404).render('page404', {pageTitle: 'Page Not Found'});
}