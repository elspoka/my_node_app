//dbPassword = 'mongodb+srv://YOUR_USERNAME_HERE:'+ encodeURIComponent('YOUR_PASSWORD_HERE') + '@CLUSTER_NAME_HERE.mongodb.net/test?retryWrites=true';
dbPassword = 'mongodb+srv://elspoka:akopsle@myfirstcluster-csesv.mongodb.net/test?retryWrites=true&w=majority';
//dbPassword = 'mongodb://localhost:27017/mydb';

module.exports = {
    mongoURI: dbPassword
};
