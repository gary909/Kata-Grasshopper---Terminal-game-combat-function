function combat(health, damage) {
    if (health - damage < 0) {
        return 0;
    } else {
        return health - damage;
    }
}

console.log(combat(100, 5)); // 95
console.log(combat(92, 8)); // 84
console.log(combat(20, 30)); // 0