document.getElementById('res').onclick = ress;

function ress() {
    var gbo_price = document.getElementById('gbo_price').value;
    var benz_price = document.getElementById('benz_price').value;
    var gaz_price = document.getElementById('gaz_price').value;
    var rashod_benz = document.getElementById('rashod').value;
    var probeg_mes = document.getElementById('probeg_mes').value;
    var year = 12;

    if (gbo_price == 0 || benz_price == 0 || gaz_price == 0 || rashod_benz == 0 || probeg_mes == 0) {
        alert('Не хватает данных для выполнения расчета!');
        return false;
    } else {
        // Расход газа на 100км.
        var rashod_gaz = rashod_benz * 1.2;

        // Затраты на приобретения бензина на 100км., грн.:
        var b = rashod_benz * benz_price;

        // Затраты на приобретения газа на 100км.:
        var g = rashod_gaz * gaz_price;

        // Разница затраченных денег на топливо на 100км., грн.:
        var r = b - g;

        // Затраты на 1км., при использовании газа, составляет, грн.:
        var km = r / 100;

        // Экономия на газу за месяц, грн.:
        var mes = km * probeg_mes;

        // Экономия на газу за год, грн.:
        var god = mes * year;

        // Время окупаемости ГБО, месяцев, грн.:

        var gbo_res_mes = (gbo_price / km) / probeg_mes;

        console.log(gbo_price);
        console.log(rashod_gaz);
        console.log(b);
        console.log(g);
        console.log(r);
        console.log(km);
        console.log(mes);
        console.log(god);
        console.log(gbo_res_mes);


        document.getElementById('res_gbo').innerHTML = gbo_res_mes;

        document.getElementById('eco_month').innerHTML = mes;

        document.getElementById('eco_year').innerHTML = god;
    }
}