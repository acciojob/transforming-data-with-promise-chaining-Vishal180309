//your JS code here. If required.
const btn = document.getElementById("btn");
const output = document.getElementById("output");

btn.addEventListener("click", () => {
    const num = parseInt(document.getElementById("ip").value);
    transformNumber(num);
});

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

function transformNumber(num) {
    delay(2000).then(() => {
        output.innerText = `Result: ${num}`;
        return num;
    }).then((num) => {
        return delay(2000).then(() => {
            const result = num * 2;
            output.innerText = `Result: ${result}`;
            return result;
        });
    }).then((num) => {
        return delay(1000).then(() => {
            const result = num - 3;
            output.innerText = `Result: ${result}`;
            return result;
        });
    }).then((num) => {
        return delay(1000).then(() => {
            const result = num / 2;
            output.innerText = `Result: ${result}`;
            return result;
        });
    }).then((num) => {
        return delay(1000).then(() => {
            const result = num + 10;
            output.innerText = `Final Result: ${result}`;
        });
    });
}
