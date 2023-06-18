document.body.style.backgroundColor = `#429680`;


let countDownDate = new Date("June 20,2023 15:00:30");
let x = setInterval(function () {
  let sekarang = new Date().getTime();
  let jarak = countDownDate - sekarang;
  let hari = Math.floor(jarak / (1000 * 60 * 60 * 24));
  let jam = Math.floor(jarak % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 * 24));
  let menit = Math.floor((jarak % (1000 * 60 * 60)) / (1000 * 60));
  let detik = Math.floor((jarak % (1000 * 60)) / 1000);

  document.getElementById("hari").innerHTML = hari + ` hari`;
  document.getElementById("jam").innerHTML = jam + ` jam`;
  document.getElementById("menit").innerHTML = menit + ` menit`;
  document.getElementById("detik").innerHTML = detik + ` detik`;

  if (jarak < 0) {
    clearInterval(x);
    document.getElementById(`no`).innerHTML = `EXPIRED`;
  }
});

const btn = document.querySelector('#btn');
btn.style.backgroundColor = '#42c9b1';
btn.style.alignItem = `center`;

btn.addEventListener(`click`, function () {
  alert('tombol rusak')
})

