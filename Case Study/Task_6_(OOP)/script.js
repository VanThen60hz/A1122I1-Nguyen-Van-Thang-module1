class Student {
    constructor(id, name, studentClass, email, birthday, module) {
        this._id = id;
        this._name = name;
        this._studentClass = studentClass;
        this._email = email;
        this._birthday = birthday;
        this._module = module;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get studentClass() {
        return this._studentClass;
    }

    set studentClass(value) {
        this._studentClass = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get birthday() {
        return this._birthday;
    }

    set birthday(value) {
        this._birthday = value;
    }

    get module() {
        return this._module;
    }

    set module(value) {
        this._module = value;
    }
}

let student1 = new Student("HV-0001","Nguyễn Văn A","C1022G1", "nguyenvana@gmail.com","22/10/2004","Module 2");
let student2 = new Student("HV-0002","Nguyễn Văn B","C1022G1", "nguyenvanb@gmail.com","22/10/2004","Module 2");
let student3 = new Student("HV-0003","Nguyễn Văn C","C1022G1", "nguyenvanc@gmail.com","22/10/2004","Module 2");

let studentList = [student1,student2,student3];

function display(studentList) {
    let bang = '<table>'+
        '<tr>'+
            '<th>Mã học viên</th>'+
            '<th>Tên</th>'+
            '<th>Lớp</th>'+
            '<th>Email</th>'+
            '<th>Ngày sinh</th>'+
            '<th>Module</th>'+
        '</tr>'
    for (let i = 0; i < studentList.length; i++) {
        bang += '<tr>'+
            '<td>'+studentList[i].id+'</td>'+
            '<td>'+studentList[i].name+'</td>'+
            '<td>'+studentList[i].studentClass+'</td>'+
            '<td>'+studentList[i].email+'</td>'+
            '<td>'+studentList[i].birthday+'</td>'+
            '<td>'+studentList[i].module+'</td>'+
            '<td>'+'<input type="button" value="Edit" onclick="edit(this)">' +
            '<input type="button" value="Delete" onclick="deleteThis(this)">'+'</td>'+

        '</tr>'
    }
    bang += '</table>'

    document.getElementById('displayTable').innerHTML = bang;
}

display(studentList);
function add() {
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value
    let studentClass = document.getElementById('studentClass').value;
    let email = document.getElementById('email').value
    let birthday = document.getElementById('birthday').value;
    let module = document.getElementById('module').value

    let newStudent = new Student(id,name,studentClass,email,birthday,module);
    studentList.push(newStudent);
    display(studentList);
}
function edit(editButton) {
    let row = editButton.parentNode.parentNode;

    document.getElementById('id').value = row.cells[0].innerHTML;
    document.getElementById('name').value = row.cells[1].innerHTML;
    document.getElementById('studentClass').value = row.cells[2].innerHTML;
    document.getElementById('email').value = row.cells[3].innerHTML;
    document.getElementById('birthday').value = row.cells[4].innerHTML;
    document.getElementById('module').value = row.cells[5].innerHTML;
    document.getElementById('add').style.display = 'none';
    document.getElementById('save').style.display = 'block';

}

function save() {
    let id = document.getElementById('id').value;
    let name = document.getElementById('name').value
    let studentClass = document.getElementById('studentClass').value;
    let email = document.getElementById('email').value
    let birthday = document.getElementById('birthday').value;
    let module = document.getElementById('module').value;

    // Tìm kiếm học viên trong danh sách
    let found = false;
    for (let i = 0; i < studentList.length; i++) {
        if (studentList[i].id === id) {
            found = true;
            studentList[i].name = name;
            studentList[i].studentClass = studentClass;
            studentList[i].email = email;
            studentList[i].birthday = birthday;
            studentList[i].module = module;
            break;
        }
    }

    // Nếu không tìm thấy học viên
    if (!found) {
        alert("Không tìm thấy học viên có mã " + id);
    }

    // Đặt lại các giá trị input và hiển thị lại danh sách học viên
    document.getElementById('id').value = "";
    document.getElementById('name').value = "";
    document.getElementById('studentClass').value = "";
    document.getElementById('email').value = "";
    document.getElementById('birthday').value = "";
    document.getElementById('module').value = "";
    document.getElementById('add').style.display = 'block';
    document.getElementById('save').style.display = 'none';
    display(studentList);
}






