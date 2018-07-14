const add = (request, response) => {
    let num1= parseInt(request.query.num1);
    let num2=parseInt(request.query.num2)
    let answer= num1+num2;
    response.json({  answer });

}

const subtract = (request, response) => {
    let num1= parseInt(request.query.num1);
    let num2=parseInt(request.query.num2)
    let answer= num1-num2;
    response.json({ answer });
}

const divide = (request, response) => {
    let num1= parseInt(request.query.num1);
    let num2=parseInt(request.query.num2)
    let answer= num1/num2;
    response.json({ answer });

}

const multiply = (request, response) => {
    let num1= parseInt(request.query.num1);
    let num2=parseInt(request.query.num2)
    let answer= num1*num2;
    response.json({ answer });
}

const modulus = (request, response) => {
    let num1= parseInt(request.query.num1);
    let num2=parseInt(request.query.num2)
    let answer= num1%num2;
    response.json({ answer });
}

module.exports={
    add,
    subtract,
    multiply,
    divide,
    modulus
}