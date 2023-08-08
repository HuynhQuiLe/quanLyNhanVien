function renderNhanVien(nhanVienArray) {
  let innerHTML = "";
  nhanVienArray.map((nhanvien) => {
    innerHTML += `
       <tr>
        <td>${nhanvien.tknv}</td>
        <td>${nhanvien.name}</td>
        <td>${nhanvien.email}</td>
        <td>${nhanvien.datepicker}</td>
        <td>${nhanvien.chucvu}</td>
        <td>${nhanvien.luong}</td>
        <td>${nhanvien.xepLoai}</td>
        <td class="flex">
            <button class="btn btn-warning"><i class="fa fa-edit"></i></button>
            <button class="btn btn-danger" onclick="deleteNhanVien('${nhanvien._id}')"><i class="fa fa-trash"></i></button>
        </td>
       </tr>
       `;
  });
  document.querySelector("#tableDanhSach").innerHTML = innerHTML;
}

getAllEmployees();
