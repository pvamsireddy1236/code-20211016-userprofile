const {sortList} = require('./index');

test('Sorting array based on name', () => {
    let expected = [{"id":4,"name":"Fred","email":"Fred@123.com","password":"68651","role":"ADMIN"},{"id":1,"name":"James","email":"James@123.com","password":"1!23#4","role":"EMPLOYEE"},{"id":3,"name":"John","email":"John@123.com","password":"98!891","role":"ADMIN"},{"id":2,"name":"Peter","email":"Peter@123.com","password":"8^23!3","role":"EMPLOYEE"}];
    let recived = [{"id":1,"name":"James","email":"James@123.com","password":"1!23#4","role":"EMPLOYEE"},{"id":2,"name":"Peter","email":"Peter@123.com","password":"8^23!3","role":"EMPLOYEE"},{"id":4,"name":"Fred","email":"Fred@123.com","password":"68651","role":"ADMIN"},{"id":3,"name":"John","email":"John@123.com","password":"98!891","role":"ADMIN"}]
    expect(sortList(recived)).toStrictEqual(expected);
});