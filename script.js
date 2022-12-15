function translateDate() {
    let date = document.getElementById("date").value;
    console.log(date);
    let hDate = new Hebcal.HDate(new Date(date + ':'));

    document.getElementById('hDateBloc').style.display = 'block';
    document.getElementById("hebrewDate").innerHTML = hDate.toString('h');
}