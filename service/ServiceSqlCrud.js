class ServiceSqlCrud {
    static reads = 'select * from books ;'
    static read = 'select * from books where book_id = ? ;'
    static create = 'insert into books (book_name,book_price,book_sale) values(?,?,?) ;'
    static delete = 'delete from books where book_id = ? ;'
    static update = 'update bookstore.books set book_name = ? , book_price = ? , book_sale = ? where book_id = ? ;'
}

module.exports = ServiceSqlCrud
