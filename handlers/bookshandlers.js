const books = require("../data/books")

const booksHandlers ={};


booksHandlers.byCategory = (req, res, next)=>{
    const category = req.query.category;
    if (category){
        let _books =bppks.filter((b)=>b.category == category);
        return res.status(200).json({success:true, data:_books})
    }
    next()
};

booksHandlers.byAuthor = (req, res, next)=>{
    const author = req.query.author;
    if (author){
        let _author =books.filter((b)=>b.author == author);
        return res.status(200).json({success:true, data:_author})
    }
    next()
};
