let x1;
let x2;
let resultados = 0;

console.log("Digite 2 números que deseja calcular o seu MMC e MDC:");
process.stdin.on("data", function (data) {
    let input = +data.toString().trim(); // Convertendo a entrada para número

    if (!x1) {
        x1 = input;
    } else {
        x2 = input;
        let i;
        let maior;

        if (x1 > x2) {
            i = x1;
            maior = x1;
        } else {
            i = x2;
            maior = x2;
        }

        // Calcular MMC
        for (i; i <= x1 * x2; i += maior) {
            if (i % x1 === 0 && i % x2 === 0) {
                console.log("MMC: " + i);
                break;
            }
        }

        // Função para calcular o MDC usando o algoritmo de Euclides
        function calcularMDC(a, b) {
            while (b !== 0) {
                let temp = b;
                b = a % b;
                a = temp;
            }
            return a;
        }

        // Calcular MDC
        let mdc = calcularMDC(x1, x2);
        console.log("MDC: " + mdc);

        process.exit();
    }
});

