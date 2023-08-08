function handleChangeTK(event) {
  const { value } = event.target;
  let errorMessage = "";

  // check no emptyt
  if (value === "") {
    errorMessage = "*Tên tài khoản không được để trống.";
    // SHOW ERROR
    document.querySelector("#tbTKNV").style.display = "block";
    document.querySelector("#tbTKNV").innerText = errorMessage;
    return;
  }

  //   check space
  let isWhiteSpace = /\s/;
  if (isWhiteSpace.test(value)) {
    errorMessage = "*Tên tài khoản không được chứa khoảng cách.";
    // SHOW ERROR
    document.querySelector("#tbTKNV").style.display = "block";
    document.querySelector("#tbTKNV").innerText = errorMessage;
    return;
  }
  //   CHECK AT LEAST 4 LETTERS
  if (value.length < 4 || value.length > 6) {
    errorMessage = "*Tên tài khoản phải chứa 4 - 6 ký tự.";
    // SHOW ERROR
    document.querySelector("#tbTKNV").style.display = "block";
    document.querySelector("#tbTKNV").innerText = errorMessage;
    return;
  }

  //   allow input
  errorMessage = "";
  document.querySelector("#tbTKNV").style.display = "none";
  document.querySelector("#tbTKNV").innerText = errorMessage;
}

function handleChangeTNV(event) {
  const { value } = event.target;
  let errorMessage = "";

  // check no emptyt
  if (value === "") {
    errorMessage = "*Tên nhân viên không được để trống.";
    // SHOW ERROR
    document.querySelector("#tbTen").style.display = "block";
    document.querySelector("#tbTen").innerText = errorMessage;
    return;
  }

  //   CHECK NOT ALLOW NUMBER
  const regexNumber = /[0-9]/;
  if (regexNumber.test(value)) {
    errorMessage = "*Tên nhân viên không được chứa số.";
    // SHOW ERROR
    document.querySelector("#tbTen").style.display = "block";
    document.querySelector("#tbTen").innerText = errorMessage;
    return;
  }

  //   CHECK NOT ALLOW SPECIAL CHARACTERS
  const regexSpecialCha = /^[A-Za-z0-9 ]+$/gm;
  if (!regexSpecialCha.test(value)) {
    errorMessage = "*Tên nhân viên không được ký tự đặc biệt.";
    // SHOW ERROR
    document.querySelector("#tbTen").style.display = "block";
    document.querySelector("#tbTen").innerText = errorMessage;
    return;
  }

  //   allow input
  errorMessage = "";
  document.querySelector("#tbTen").style.display = "none";
  document.querySelector("#tbTen").innerText = errorMessage;
}

function handleChangeEmail(event) {
  const { value } = event.target;
  let errorMessage = "";
  // CHECK EMPTY
  if (value === "") {
    errorMessage = "*Email không được để trống.";
    // SHOW ERROR
    document.querySelector("#tbEmail").style.display = "block";
    document.querySelector("#tbEmail").innerText = errorMessage;
    return;
  }
  // CORRECT EMAIL FORMAT
  const regexEmail =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!regexEmail.test(value)) {
    errorMessage = "*Email không đúng định dạng.";
    // SHOW ERROR
    document.querySelector("#tbEmail").style.display = "block";
    document.querySelector("#tbEmail").innerText = errorMessage;
    return;
  }

  //   allow input
  errorMessage = "";
  document.querySelector("#tbEmail").style.display = "none";
  document.querySelector("#tbEmail").innerText = errorMessage;
}

function handleChangePassword(event) {
  const { value } = event.target;
  let errorMessage = "";
  // CHECK EMPTY
  if (value === "") {
    errorMessage = "*Mật khẩu không được để trống.";
    // SHOW ERROR
    document.querySelector("#tbMatKhau").style.display = "block";
    document.querySelector("#tbMatKhau").innerText = errorMessage;
    return;
  }

  // CORRECT EMAIL FORMAT
  const regexPassword =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;
  if (!regexPassword.test(value)) {
    errorMessage =
      "*Mật Khẩu từ 6-10 ký tự (chứa ít nhất 1 ký tự số, 1 ký tự in hoa, 1 ký tự đặc biệt).";
    // SHOW ERROR
    document.querySelector("#tbMatKhau").style.display = "block";
    document.querySelector("#tbMatKhau").innerText = errorMessage;
    return;
  }

  //   allow input
  errorMessage = "";
  document.querySelector("#tbMatKhau").style.display = "none";
  document.querySelector("#tbMatKhau").innerText = errorMessage;
}

function handleChangeNgayLam(event) {
  const { value } = event.target;
  let errorMessage = "";
  // CHECK EMPTY
  if (value === "") {
    errorMessage = "*Ngày làm không được để trống.";
    // SHOW ERROR
    document.querySelector("#tbNgay").style.display = "block";
    document.querySelector("#tbNgay").innerText = errorMessage;
    return;
  }

  // CORRECT DATE FORMAT
  //   const regexDDMMYYY = /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])/;
  const regexDDMMYYY =
    /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  if (!regexDDMMYYY.test(value)) {
    errorMessage = "*Ngày làm phải đúng định dạng mm/dd/yyyy.";
    // SHOW ERROR
    document.querySelector("#tbNgay").style.display = "block";
    document.querySelector("#tbNgay").innerText = errorMessage;
    return;
  }

  //   allow input
  errorMessage = "";
  document.querySelector("#tbNgay").style.display = "none";
  document.querySelector("#tbNgay").innerText = errorMessage;
}

function handleChangeLuong(event) {
  const { value } = event.target;
  let errorMessage = "";
  // CHECK EMPTY
  if (value === "") {
    errorMessage = "*Lương cơ bản không được để trống.";
    // SHOW ERROR
    document.querySelector("#tbLuongCB").style.display = "block";
    document.querySelector("#tbLuongCB").innerText = errorMessage;
    return;
  }

  // CORRECT DATE FORMAT
  //   const regexDDMMYYY = /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])/;

  if (value * 1 < 1000000 || value * 1 > 20000000) {
    errorMessage = "*Lương cơ bản phải từ 1.000.000 đến 20.000.000.";
    // SHOW ERROR
    document.querySelector("#tbLuongCB").style.display = "block";
    document.querySelector("#tbLuongCB").innerText = errorMessage;
    return;
  }

  //   allow input
  errorMessage = "";
  document.querySelector("#tbLuongCB").style.display = "none";
  document.querySelector("#tbLuongCB").innerText = errorMessage;
}

function handleChangChucVu(event) {
  const { value } = event.target;
  let errorMessage = "";
  // CHECK EMPTY
  if (value === "") {
    errorMessage = "*Chức vụ không được để trống.";
    // SHOW ERROR
    document.querySelector("#tbChucVu").style.display = "block";
    document.querySelector("#tbChucVu").innerText = errorMessage;
    return;
  }
  //   allow input
  errorMessage = "";
  document.querySelector("#tbChucVu").style.display = "none";
  document.querySelector("#tbChucVu").innerText = errorMessage;
}

function handleChangeGioLam(event) {
  const { value } = event.target;
  let errorMessage = "";
  // CHECK EMPTY
  if (value === "") {
    errorMessage = "*Giờ làm không được để trống.";
    // SHOW ERROR
    document.querySelector("#tbGiolam").style.display = "block";
    document.querySelector("#tbGiolam").innerText = errorMessage;
    return;
  }

  // CORRECT DATE FORMAT
  //   const regexDDMMYYY = /^(0?[1-9]|1[0-2])[\/](0?[1-9]|[1-2][0-9]|3[01])/;

  if (value * 1 < 80 || value * 1 > 200) {
    errorMessage = "*Giờ làm phải từ 80 đến 200 giờ.";
    // SHOW ERROR
    document.querySelector("#tbGiolam").style.display = "block";
    document.querySelector("#tbGiolam").innerText = errorMessage;
    return;
  }

  //   allow input
  errorMessage = "";
  document.querySelector("#tbGiolam").style.display = "none";
  document.querySelector("#tbGiolam").innerText = errorMessage;
}
