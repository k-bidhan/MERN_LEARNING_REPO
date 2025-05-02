const { Sequelize, DataTypes } = require("sequelize");


const sequelize = new Sequelize(
  "postgresql://postgres.vlqovvvvfskgibljdkkw:3rZtYagQcHInISTb@aws-0-us-east-2.pooler.supabase.com:6543/postgres"
);

sequelize.authenticate()
.then(
    ()=>{
        console.log('Authenticated!');
    }
)
.catch(
    (err)=>{
        console.log('Error',err);
    }
)
const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.books = require('./models/bookModel')(sequelize, DataTypes)
db.users = require("./models/userModel")(sequelize,DataTypes)

sequelize.sync({force : false}).then(()=>{
    console.log('Migrate vayo!');
})

module.exports = db;
 