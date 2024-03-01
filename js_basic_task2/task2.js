let car_cost = 10000
let car_year = 2020
let final_cost
let tax = 1
let mileage = 65000
let climate_control = true
let security_package = true
let car_electric = true
let message

if (car_year>2019 && car_year<=2022){
    final_cost = car_cost*(tax+0.1)
    message = 'final cost increases by 10%, cause it`s a new car'
} if (mileage>50000 || mileage<=100000){
    final_cost = car_cost*(tax-0.1)
    message = 'final cost decreases by 5%, cause high mileage in the car'
} if (climate_control=true){
    final_cost = car_cost*(tax+0.07)
    message = 'final cost increases by 7%, cause the car has climate control'
} if (security_package=true){
    final_cost = car_cost*(tax+0.08)
    message = 'final cost increases by 8%, cause car has security package'
} if (car_electric=true){
    final_cost = car_cost*(tax+0.15)
    message = 'final cost increases by 15%, cause it`s electric car and less damage to our ecology'
}
console.log(car_cost);
console.log(final_cost);
console.log(message)