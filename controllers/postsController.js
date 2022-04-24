const Post = require('../model/PostModel')

async function getPosts(req, res) {
    const posts = await Post.find()
    res.status(200).json({
        statue: 200,
        data: posts
    })
}

async function addPost(req, res) {
    const {name, content, image} = req.body
    if (content && name) {
        const post = await Post.create({
            name,
            content,
            image,
            createdAt: Date.now()
        })
        res.status(200).json({
            statue: 'success',
            data: post
        })
    } else {
        res.status(404).send("content or name欄位未填寫正確")
    }
}


async function delAllPosts(req, res) {
    await Post.deleteMany({})
    await getPosts(req, res)
}

async function delPost(req, res) {
    const id = req.url.split("/").pop()
    if (await Post.findByIdAndDelete(id)) {
        await getPosts(req, res)
    } else {
        res.status(404).send("刪除失敗：Post找不到該id")
    }
}

async function updatePost(req, res) {
    try {
        const { content } = req.body
        const id = req.url.split("/").pop()
        if (await Post.findByIdAndUpdate(id, {
            content
        })) {
            await getPosts(req, res)
        } else {
            res.status(404).send("更新失敗：Post找不到該id")
        }
    } catch (err) {
        res.status(404).send("更新失敗")
    }
}

module.exports = {
    getPosts,
    addPost,
    delPost,
    delAllPosts,
    updatePost
}
