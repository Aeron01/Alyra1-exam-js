const information = (firstname, lastname, age) => {
  if (age => 18) {
    return `vous êtes majeur depuis ${age - 18} ans`
  } else {
    return `vous serez majeur dans ${age - 18} ans`
  }
}

console.log(information('Roger', 'Willco', 38))