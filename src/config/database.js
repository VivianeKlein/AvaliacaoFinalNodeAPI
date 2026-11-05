import { Sequelize } from 'Sequelize'

class database {
    constructor() {
        this.init() 
    }

    init() {
        this.db = new Sequelize({
            database: 'exemplorenan',
            dialect: 'postgres',
            username: 'exemplorenan_user',
            password: 'f9HJZe99xPIJQ97yOnEG3QpdrH5cr8W7',
            host: 'dpg-dbh7fdu7bikc73ffqeng-a.oregon-postgres.render.com',
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false
                }
            }
        })
    }

}

export default new database()
