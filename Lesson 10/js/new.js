let age = document.getElementById('age');

function showUser(surname, name, age) {
    alert(`Пользователь ${surname} ${name}, его возраст ${this.value}`);
}

showUser.call(age);