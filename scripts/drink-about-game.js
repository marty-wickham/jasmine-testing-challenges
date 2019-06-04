function whatCanIDrink(age) {
    if (age < 1) {
        return "Sorry. I can’t tell what to drink because that age is incorrect!";
    } else if (age < 14) {
        return "Drink Toddy";
    } else if (age < 18) {
        return "Drink coke";
    } else if (age < 21) {
        return "Drink beer";
    } else if (age < 130) {
        return "Drink whiskey";
    } else {
        return "Sorry. I can’t tell what drink because that age is incorrect!";
    }
}