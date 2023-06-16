import sql from 'mssql';
import config from '../data/config.js';


//get all Comments
export const getComments = async (req, res) => {
    try {
        let pool = await sql.connect(config.sql);
        const results = await pool.request()
        .query('select * from comments');
        return res.json(results);
    } catch (error) {
        res.json(error);

    } 
}

//create a comment
export const createComment = async (req, res) => {
    try {
        const { comment_id, content,person_id,post_id } = req.body;
        let pool = await sql.connect(config.sql);
        await pool.request()
            .input('comment_id', sql.Int, comment_id)
            .input('content', sql.VarChar, content)
            .input('person_id', sql.VarChar, person_id)
            .input('post_id', sql.VarChar, post_id)
            .query("insert into comments (comment_id,content,person_id,post_id) values(@comment_id,@content,@person_id,@post_id)");
        res.status(200).json({ message: 'person was created successfully' })
    } catch (error) {
        res.status(400).json(error);
    } finally {
        sql.close();
    }
}

//get a comment
export const getComment = async (req, res) => {
    try {
        const { comment_id ,content} = req.params;
        let pool = await sql.connect(config.sql)
        const result = await pool.request()
            .input('comment_id', sql.Int, comment_id)
            .input('content', sql.VarChar, content)
            .query("select * from comments where comment_id =@comment_id")
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error);
    } finally {
        sql.close()
    }

}

// update a comment details
export const updateComment = async (req, res) => {
    try {
        const { comment_id, content } = req.params;
        let pool = await sql.connect(config.sql)
         await pool.request()
            .input('comment_id', sql.Int, comment_id)
            .input('content', sql.VarChar, content)
            .query("update comments set content=@content where comment_id=@comment_id")
        res.status(200).json({ message: 'comment was update successfully' })
    } catch (error) {
        res.status(200).json(error);

    }finally{
        sql.close()
    }
}

//delete a comment
export const deleteComment = async (req, res) => {
    try {
        const {  comment_id } = req.params;
        let pool = await sql.connect(config.sql)
        await pool.request()         
            .query(`delete from comments where comment_id=${comment_id}`)
        res.status(200).json({ message: 'comment was deleted successfully' })
    } catch (error) {
        res.status(200).json(error);

    }finally{
        sql.close()
    }
}