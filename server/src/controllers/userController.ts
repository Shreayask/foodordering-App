
import {Response, Request} from 'express';

const { knex } = require('../config/db/index');

const jwt = require('jsonwebtoken')
// Register user
const USER_TABLE_NAME : string= "users";

/**
 * controller to register user
 * 
 * @param {*} req - request user information from the body  
 * @param {*} res - response user by success statuscode by inserting user information in the database
 */

interface User {
    id: string
    name: string,
    email: string,
    password:string

}

exports.registerUser = async (req:Request, res:Response):Promise<void> => {
    const { name, email, password } = req.body as {
        name: string
        email :string,
        password:string
    }

    interface User {
        id: string
        name: string,
        email: string,
        password:string

    }

    try {
        const user: User[]= await knex(USER_TABLE_NAME)
            .where({ email });

        if (user) {
            const insertedUser: User[] = await knex(USER_TABLE_NAME)
                .insert({ name, email, password })
                .returning("*");
            res.status(201).json(insertedUser);
        }

    } catch (error) {
        res.status(400).json({
            success: false,
            message: error
        })
    }
}


const secret = "test"
/**
 * controller for login
 * 
 * @param {*} req - request user email and password from the database
 * @param {*} res - response with success or failure statuscode
 */
exports.userLogin = async (req:Request, res:Response): Promise<void> => {

    const { email, password } = req.body as {
        email :string,
        password:string
    };
    try {
        const user: User[] = await knex(USER_TABLE_NAME)
            .where({ email, password })

        if (password === user[0].password) {
            const token:string= jwt.sign({ username: user[0].email }, secret);
            interface userType {
                success: boolean,
                token: string,
                user: any
            }
            const currentUser: userType = {
                success: true,
                token: token,
                user
            }
            // console.log('token', currentUser)
            res.status(200).send(currentUser);
        } else {
            res.status(400).json({
                message: 'Login Failed'
            })
        }
    } catch (error) {
        res.status(404).json({
            message: error
        })

    }
}
/**
 * contoller to get all users -- by admin
 * 
 * @param {*} req 
 * @param {*} res -response success status code by providing every user data form database
 */
exports.getAllUsers = async (req: Request, res: Response): Promise<void> => {

    try {
        //selects every data from user table in the database
        const Users: User[] = await knex('users')
            .select(`${USER_TABLE_NAME}.*`)
        res.status(200).send(Users);
    } catch (error) {
        res.status(404).json({ message: error.stack });
    }

}