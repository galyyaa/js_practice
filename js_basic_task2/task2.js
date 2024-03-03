let car_cost = 10000
let car_year = 2020
let tax = 0
let mileage = 70000
let climate_control = false
let security_package = false
let car_electric = true
let message = ""
let final_cost = car_cost

if (car_year > 2019 && car_year <= 2022){
    tax += 0.1
    final_cost += car_cost * 0.1
    message += '\nfinal cost increases by 10%, cause it`s a new car'
} if (mileage >50000 && mileage <= 100000){
    tax -= 0.05
    final_cost += car_cost * 0.05
    message += '\nfinal cost decreases by 5%, cause high mileage in the car'
} if (climate_control == true){
    tax += 0.07
    final_cost += car_cost * 0.07
    message += '\nfinal cost increases by 7%, cause the car has climate control'
} if (security_package == true){
    tax += 0.08
    final_cost += car_cost * 0.08
    message += '\nfinal cost increases by 8%, cause car has security package'
} if (car_electric == true){
    tax += 0.15
    final_cost += car_cost * 0.15
    message += '\nfinal cost increases by 15%, cause it`s electric car and less damage to our ecology'
}
final_cost = car_cost * (tax + 1)
console.log(car_cost);
console.log(message)
console.log(final_cost);