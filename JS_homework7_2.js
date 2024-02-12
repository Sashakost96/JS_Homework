var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];
let validEmail = [];
let pattern = /^\w+(\.\w+)?@{1}(gmail.com|yahoo.com)$/;
arr.forEach(function (item){
    (pattern.test(item.email)) ? validEmail.push(item.email) : console.log(`${item.email} - Your email is not allowed`)
});

console.log(validEmail);
