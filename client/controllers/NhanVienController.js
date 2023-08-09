const BASE_URL = "http://localhost:3000/employee";

// lay DSNNV
const getAllEmployees = async () => {
  try {
    const response = await axios.get(BASE_URL);

    const employees = response.data;
    console.log("🥕❤️🐇 ~ employees:", employees);
    localStorage.setItem("allNhanVien", JSON.stringify(employees));
    renderNhanVien(employees);
    return employees;
  } catch (errors) {
    console.error(errors);
  }
};

// const getEmployee =

// THEM NV
const addNV = async () => {
  //PRVENT EMPTY INPUT
  const tknv = document.querySelector("#tknv").value;
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const datepicker = document.querySelector("#datepicker").value;
  const luongCB = document.querySelector("#luongCB").value;
  const chucvu = document.querySelector("#chucvu").value;
  const gioLam = document.querySelector("#gioLam").value;
  if (
    !tknv ||
    !name ||
    !email ||
    !password ||
    !datepicker ||
    !luongCB ||
    !chucvu ||
    !gioLam
  ) {
    const arrayInput = document.querySelectorAll(".input-form");
    arrayInput.forEach((input) => {
      if (input.value === "") {
        const parent = input.parentElement;
        parent.nextElementSibling.style.display = "block";
        parent.nextElementSibling.innerText =
          "*Trường này không được để trống.";
      }
    });
    return;
  }

  //   ALL VALIDATIONS ARE PASSED
  const errorMessages = document.querySelectorAll(".sp-thongbao");
  for (var i = 0; i < errorMessages.length; i++) {
    if (errorMessages[i].innerText !== "") {
      return;
    }
  }

  let nhanVien = new NhanVien(
    tknv,
    name,
    email,
    password,
    datepicker,
    luongCB,
    chucvu,
    gioLam
  );

  // tinh luong

  let luong = 0;
  switch (chucvu) {
    case "Sếp":
      luong = luongCB * 3;
      break;

    case "Trưởng phòng":
      luong = luongCB * 2;
      break;
    default:
      luong = luongCB;
      break;
  }
  // xep loai
  let xepLoai = "";
  if (gioLam >= 192) {
    xepLoai = "Nhân viên xuất sắc";
  } else if (gioLam >= 176) {
    xepLoai = "Nhân viên giỏi";
  } else if (gioLam >= 160) {
    xepLoai = "Nhân viên khá";
  } else {
    xepLoai = "Nhân viên  trung bình";
  }
  nhanVien = { ...nhanVien, luong, xepLoai };
  const newNhanVien = await axios.post(BASE_URL, nhanVien);
  getAllEmployees();
  handleClose();
};

// delete  han vien

const deleteNhanVien = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    console.log(`Deleted Todo ID: `, id);
    getAllEmployees();
    return response.data;
  } catch (errors) {
    console.error(errors);
  }
};

// update nhan vien

const updateNhanVien = async () => {
  const id = document.querySelector("#btnCapNhat").getAttribute("data-value");
  //PRVENT EMPTY INPUT
  const tknv = document.querySelector("#tknv").value;
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const datepicker = document.querySelector("#datepicker").value;
  const luongCB = document.querySelector("#luongCB").value;
  const chucvu = document.querySelector("#chucvu").value;
  const gioLam = document.querySelector("#gioLam").value;
  if (
    !tknv ||
    !name ||
    !email ||
    !password ||
    !datepicker ||
    !luongCB ||
    !chucvu ||
    !gioLam
  ) {
    const arrayInput = document.querySelectorAll(".input-form");
    arrayInput.forEach((input) => {
      if (input.value === "") {
        const parent = input.parentElement;
        parent.nextElementSibling.style.display = "block";
        parent.nextElementSibling.innerText =
          "*Trường này không được để trống.";
      }
    });
    return;
  }

  //   ALL VALIDATIONS ARE PASSED
  const errorMessages = document.querySelectorAll(".sp-thongbao");
  for (var i = 0; i < errorMessages.length; i++) {
    if (errorMessages[i].innerText !== "") {
      return;
    }
  }

  let nhanVien = new NhanVien(
    tknv,
    name,
    email,
    password,
    datepicker,
    luongCB,
    chucvu,
    gioLam
  );

  // tinh luong

  let luong = 0;
  switch (chucvu) {
    case "Sếp":
      luong = luongCB * 3;
      break;

    case "Trưởng phòng":
      luong = luongCB * 2;
      break;
    default:
      luong = luongCB;
      break;
  }
  // xep loai
  let xepLoai = "";
  if (gioLam >= 192) {
    xepLoai = "Nhân viên xuất sắc";
  } else if (gioLam >= 176) {
    xepLoai = "Nhân viên giỏi";
  } else if (gioLam >= 160) {
    xepLoai = "Nhân viên khá";
  } else {
    xepLoai = "Nhân viên  trung bình";
  }
  nhanVien = { ...nhanVien, luong, xepLoai };
  const newNhanVien = await axios.put(`${BASE_URL}/${id}`, nhanVien);
  getAllEmployees();
  handleClose();
};
