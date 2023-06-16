import sql from 'mssql';
import config from '../data/config.js';
import { request } from 'express';

//get all posts
export const getPosts = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        const results = await pool.request()
        .query('select * from posts');
        return res.json(results);
    } catch (error) {
        res.json(error);

    } 
}

//create a post
export const createPosts = async (req, res) => {
    try {
        const { post_id, title,content,person_id } = req.body;
        let pool = await sql.connect(config.sql);
        await pool.request()
            .input('post_id', sql.Int, post_id)
            .input('title', sql.VarChar, title)
            .input('content', sql.VarChar, content)
            .input('person_id', sql.VarChar, person_id)
            .query("insert into posts (post_id,title,content,person_id) values(@post_id,@title,@content,@person_id)");
        res.status(200).json({ message: 'post was created successfully' })
    } catch (error) {
        res.status(400).json(error);
    } finally {
        sql.close();
    }
}

//get a person
export const getPost = async (req, res) => {
    try {
        const { post_id ,title} = req.params;
        let pool = await sql.connect(config.sql)
        const result = await pool.request()
            .input('post_id', sql.Int, post_id)
            .input('title', sql.VarChar, title)
            .query("select * from posts where post_id =@post_id")
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error);
    } finally {
        sql.close()
    }

}

// update a post details
export const updatePost = async (req, res) => {
    try {
        const { post_id, title } = req.params;
        let pool = await sql.connect(config.sql)
         await pool.request()
            .input('post_id', sql.Int, post_id)
            .input('title', sql.VarChar, title)
            .query("update posts set title=@title where post_id=@post_id")
        res.status(200).json({ message: 'post was update successfully' })
    } catch (error) {
        res.status(200).json(error);

    }finally{
        sql.close()
    }
}

//delete a post
export const deletePost = async (req, res) => {
    try {
        const {  post_id } = req.params;
        let pool = await sql.connect(config.sql)
        await pool.request()         
            .query(`delete from posts where post_id=${post_id}`)
        res.status(200).json({ message: 'post was deleted successfully' })
    } catch (error) {
        res.status(200).json(error);

    }finally{
        sql.close()
    }
}