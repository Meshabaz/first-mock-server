let api = "https://first-mock-server.herokuapp.com/dummy";

const getApi = async (url) => {
  let res = await fetch(url);
  let data = await res.json();
  console.log(data);
  show(data);
};

getApi(api);

const show = (data) => {
  document.querySelector("tbody").innerHTML = null;
  data.map((e, i) => {
    // console.log(e);
    let row = document.createElement("tr");
    let slno = document.createElement("th");
    slno.innerHTML = i + 1;
    let name = document.createElement("th");
    name.innerHTML = e.name;
    let email = document.createElement("th");
    email.innerHTML = e.email;
    let gender = document.createElement("th");
    gender.innerHTML = e.gender;
    row.append(slno, name, email, gender);
    document.querySelector("tbody").append(row);
  });
};
