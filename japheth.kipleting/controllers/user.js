import sql from 'mssql';
import config from '../data/config.js';
import { request } from 'express';

//get all people
export const getPeople = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        const results = await pool.request()
        .query('select * from people');
        return res.json(results);
    } catch (error) {
        res.json(error);

    } 
}

//create a person
export const createPerson = async (req, res) => {
    try {
        const { person_id, username,email,password } = req.body;
        let pool = await sql.connect(config.sql);
        await pool.request()
            .input('person_id', sql.Int, person_id)
            .input('username', sql.VarChar, username)
            .input('email', sql.VarChar, email)
            .input('password', sql.VarChar, password)
            .query("insert into people (person_id,username,email,password) values(@person_id,@username,@email,@password)");
        res.status(200).json({ message: 'person was created successfully' })
    } catch (error) {
        res.status(400).json(error);
    } finally {
        sql.close();
    }
}

//get a person
export const getPerson = async (req, res) => {
    try {
        const { person_id ,username} = req.params;
        let pool = await sql.connect(config.sql)
        const result = await pool.request()
            .input('person_id', sql.Int, person_id)
            .input('username', sql.VarChar, username)
            .query("select * from people where person_id =@person_id")
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error);
    } finally {
        sql.close()
    }

}

// update a person details
export const updatePerson = async (req, res) => {
    try {
        const { person_id, username } = req.params;
        let pool = await sql.connect(config.sql)
         await pool.request()
            .input('person_id', sql.Int, person_id)
            .input('username', sql.VarChar, username)
            .query("update people set username=@username where person_id=@person_id")
        res.status(200).json({ message: 'person was update successfully' })
    } catch (error) {
        res.status(200).json(error);

    }finally{
        sql.close()
    }
}

//delete a person
export const deletePerson = async (req, res) => {
    try {
        const {  person_id } = req.params;
        let pool = await sql.connect(config.sql)
        await pool.request()         
            .query(`delete from people where person_id=${person_id}`)
        res.status(200).json({ message: 'person was deleted successfully' })
    } catch (error) {
        res.status(200).json(error);

    }finally{
        sql.close()
    }
}