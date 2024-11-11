let calcInterest = (event) => {
    event.preventDefault();

    let amount = document.querySelector("#amount").value;
    let rate = document.querySelector("#rate").value;
    let years = document.querySelector("#years").value;

    let countInterest = (+amount * rate * years) / 100;
    showData(amount, countInterest, years);

};

let showData = (deposit, interest, years) => {
    document.querySelector("#deposit").innerHTML = deposit;
    document.querySelector("#result").innerHTML = interest;
    document.querySelector("#yourYear").innerHTML = +years + 2024;
};

document.querySelector("#calcForm").addEventListener("submit", calcInterest);