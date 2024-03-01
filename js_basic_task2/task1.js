let base_income = 70000
let tax = 0.05
let result

if(base_income<10000){
    result = base_income * (1-tax)
    tax = 5
} else if(base_income>10000 && base_income<=50000){
    result = base_income * (1-(tax + 0.05))
    tax = 10
} else if(base_income>50001 && base_income<=100000){
    result = base_income * (1-(tax + 0.1))
    tax = 15
} else if(base_income>100001 && base_income<=200000){
    result = base_income * (1-(tax + 0.15))
    tax = 20
} else if(base_income>200000){
    result = base_income * (1-(tax + 0.2))
    tax = 25
}
console.log(base_income)
console.log(tax)
console.log(result)