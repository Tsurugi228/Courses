//При нажатии кнопки запускается обратный отсчёт от 5 до 1, каждую секунду.
function countdown() {
    let count = 5;
    const interval = setInterval(() => {
        console.log(count--);
        if (count === 0) clearInterval(interval);
    }, 1000);
}

document.querySelector("button").addEventListener("click", countdown);

//Напишите функцию sayHello(name), которая возвращает промис и через 2 секунды выводит Привет, ${name}!
function sayHello(name) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Привет, ${name}!`);
            resolve();
        }, 2000);
    });
}

//Напишите функцию checkAge(age), которая возвращает Promise.
//Через 1 секунду:
//если age >= 18, resolve с сообщением "Доступ разрешён"
//иначе reject с "Доступ запрещён"
//Используйте setTimeout, resolve и reject.
function checkAge(age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve("Доступ разрешён");
            } else {
                reject("Доступ запрещён");
            }
        }, 1000);
    });
}

//Сделайте 3 блока. При клике на кнопку они последовательно меняют цвет с задержкой в 1 секунду между каждым.
async function changeColors() {
    const boxes = document.querySelectorAll('.box');
    for (let i = 0; i < boxes.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        boxes[i].style.background = 'green';
    }
}

//Напишите функцию collectItems(items), которая выводит в консоль элементы массива items, по одному в секунду, с помощью async/await.
async function collectItems(items) {
    for (let item of items) {
        console.log(item);
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
}

//Напишите три функции loadA, loadB, loadC, каждая возвращает Promise с разным временем задержки (например, 1с, 1.5с, 2с).
//Выведите, кто загрузился первым.
//Используйте Promise.race.
function loadA() {
    return new Promise(resolve => setTimeout(() => resolve("A"), 1000));
}

function loadB() {
    return new Promise(resolve => setTimeout(() => resolve("B"), 1500));
}

function loadC() {
    return new Promise(resolve => setTimeout(() => resolve("C"), 2000));
}

Promise.race([loadA(), loadB(), loadC()]).then(result => {
    console.log(`Первым загрузился: ${result}`);
});

//Создайте кнопку и счётчик (от 0). При нажатии запускается таймер, каждую секунду увеличивающий число на 1. Через 10 секунд — останавливается.

function startCounter() {
    let count = 0;
    const interval = setInterval(() => {
        count++;
        document.getElementById("counter").textContent = count;
        if (count === 10) clearInterval(interval);
    }, 1000);
}

//При нажатии на кнопку появляется слово "Загрузка...". Через 2 секунды заменяется на "Готово!". Ещё через 1 секунду — очищается.

    function load() {
    const status = document.getElementById("status");
    status.textContent = "Загрузка...";
    setTimeout(() => {
    status.textContent = "Готово!";
    setTimeout(() => {
    status.textContent = "";
}, 1000);
}, 2000);
}

//Напишите prompt()-функцию getName(), которая возвращает промис. Если пользователь ввёл имя, resolve с этим именем, иначе reject с сообщением "Имя не введено".
function getName() {
    return new Promise((resolve, reject) => {
        const name = prompt("Введите имя:");
        if (name) {
            resolve(name);
        } else {
            reject("Имя не введено");
        }
    });
}

//Напишите три async-функции step1(), step2(), step3() — каждая возвращает Promise, выводящий сообщение через 1 секунду.
    //Создайте функцию runAllSteps(), которая вызывает их по порядку с задержкой между шагами.
function step1() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Шаг 1 выполнен");
            resolve();
        }, 1000);
    });
}

function step2() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Шаг 2 выполнен");
            resolve();
        }, 1000);
    });
}

function step3() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Шаг 3 выполнен");
            resolve();
        }, 1000);
    });
}

async function runAllSteps() {
    await step1();
    await step2();
    await step3();
}
