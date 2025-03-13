const fInp = document.getElementById('firstInput');
const sInp = document.getElementById('secondInput');
const result = document.getElementById('resultArea');
const result2 = document.getElementById('resultArea2');
const calcBtn = document.getElementById('calculateBtn');

function salaryCalc() {
   let salaryTax = ((fInp.value * sInp.value) + 2200) * 15;
   let salary = ((fInp.value * sInp.value) + 2200) * 15 / 100 * 87;
   result.textContent = `Итого: ${salaryTax} ₽ до вычета налога;\n${salary} ₽ после вычета налога`;
   const advance = 2200 * 15 / 100 * 87 / 2;
   result2.innerHTML = `<div id="resultArea2">Аванс ${advance} ₽<br>Зарплата ${salary - advance} ₽</div>`;
};

// calcBtn.addEventListener('click', () => {
//    let salaryTax = ((fInp.value * sInp.value) + 2200) * 15;
//    let salary = ((fInp.value * sInp.value) + 2200) * 15 / 100 * 87;
//    result.textContent = `Итого: ${salaryTax} ₽ до вычета налога;\n${salary} ₽ после вычета налога`;
//    // console.log(salary);
//    const advance = 2200 * 15 / 100 * 87 / 2;
//    result2.innerHTML = `<div id="resultArea2">Аванс ${advance} ₽<br>Зарплата ${salary - advance} ₽</div>`;
// });

calcBtn.addEventListener('click', salaryCalc);

fInp.addEventListener('keypress', function (e) {
   if (e.key === 'Enter') {
      salaryCalc();
   }
});

sInp.addEventListener('keypress', function (e) {
   if (e.key === 'Enter') {
      salaryCalc();
   }
});