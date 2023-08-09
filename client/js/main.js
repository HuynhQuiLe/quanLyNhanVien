function btnThemOnlick() {
  document.querySelector("#header-title").innerText = "Thêm Nhân Viên";

  document.querySelector("#btnThemNV").style.display = "block";
  document.querySelector("#btnCapNhat").style.display = "none";
  document.querySelector("#tknv").removeAttribute("disabled");
  document.querySelector("#btnCapNhat").removeAttribute("data-value");
}

let updateID = 0;

const btnUpdateOnlick = async (id) => {
  // xu ly modal
  document.querySelector("#btnCapNhat").style.display = "block";
  document.querySelector("#btnThemNV").style.display = "none";
  document.querySelector("#myModal").classList.add("show");
  document.querySelector("#myModal").style.display = "block";
  document.querySelector("body").classList.add("modal-open");
  document.querySelector("#header-title").innerText = "Cập Nhật Nhân Viên";
  const fade = document.body.appendChild(document.createElement("div"));
  fade.classList.add("modal-backdrop");
  fade.classList.add("fade");
  fade.classList.add("show");

  // FILL THONG TIN NHAN VIEN
  // lay Thong Tin Nhan Vien
  const responese = await axios.get(`${BASE_URL}/${id}`);
  const nhanVien = responese.data;
  console.log(nhanVien);
  //open model and filll value
  document.querySelector("#tknv").value = nhanVien.tknv;
  document.querySelector("#name").value = nhanVien.name;
  document.querySelector("#email").value = nhanVien.email;
  document.querySelector("#password").value = nhanVien.password;
  document.querySelector("#datepicker").value = nhanVien.datepicker;
  document.querySelector("#luongCB").value = nhanVien.luongCB;
  document.querySelector("#chucvu").value = nhanVien.chucvu;
  document.querySelector("#gioLam").value = nhanVien.gioLam;

  // disable nhan vien chinh sua ten tK
  document.querySelector("#tknv").setAttribute("disabled", true);
  document.querySelector("#btnCapNhat").setAttribute("data-value", id);
};

function handleClose() {
  document.querySelector("#myModal").classList.remove("show");
  document.querySelector("#myModal").style.display = "none";
  document.querySelector("body").classList.remove("modal-open");
  document.querySelector(".modal-backdrop").remove();

  document.querySelectorAll(".sp-thongbao").forEach((span) => {
    span.innerText = "";
  });
  document.querySelectorAll(".input-form").forEach((input) => {
    input.value = "";
  });
  document.querySelector("#btnCapNhat").removeAttribute("data-value");
}

function renderNhanVien(nhanVienArray) {
  let innerHTML = "";
  if (nhanVienArray.length) {
    nhanVienArray.map((nhanvien) => {
      innerHTML += `
         <tr>
          <td>${nhanvien.tknv}</td>
          <td>${nhanvien.name}</td>
          <td>${nhanvien.email}</td>
          <td>${nhanvien.datepicker}</td>
          <td>${nhanvien.chucvu}</td>
          <td>${nhanvien.luong.toLocaleString()}</td>
          <td>${nhanvien.xepLoai}</td>
          <td class="flex">
              <button class="btn btn-warning" onclick="btnUpdateOnlick('${
                nhanvien._id
              }')"><i class="fa fa-edit"></i></button>
              <button class="btn btn-danger" onclick="deleteNhanVien('${
                nhanvien._id
              }')"><i class="fa fa-trash"></i></button>
          </td>
         </tr>
         `;
    });
  } else {
    innerHTML = `<tr>
      <td colspan="8" class="text-center">Không có dữ liệu.</td>
    </tr>`;
  }
  document.querySelector("#tableDanhSach").innerHTML = innerHTML;
}

function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

const handleSearch = (event) => {
  const key = removeAccents(event.target.value)
    .toUpperCase()
    .replace(/\s/g, "");
  const allEmployees = JSON.parse(localStorage.getItem("allNhanVien"));
  const array = allEmployees.filter((em) => {
    console.log(removeAccents(em.xepLoai).toUpperCase().replace(/\s/g, ""));
    return removeAccents(em.xepLoai)
      .toUpperCase()
      .replace(/\s/g, "")
      .includes(key);
  });
  renderNhanVien(array);
};

getAllEmployees();
