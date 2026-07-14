//Index.js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!--Font Awesome CDN-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />

    <title>JavaScript CURD</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    
    <div class="container">

        <header>

            <div class="filterEntries">
                <div class="entries">
                    Show <select name="" id="table_size">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select> entries
                </div>

                <div class="filter">
                    <label for="search">Search:</label>
                    <input type="search" name="" id="search" placeholder="Enter name/city/post">
                </div>
            </div>

            <div class="addMemberBtn">
                <button>New member</button>
            </div>

        </header>


        <table>

            <thead>
                <tr class="heading">
                    <th>SL No</th>
                    <th>Picture</th>
                    <th>Full Name</th>
                    <th>Age</th>
                    <th>City</th>
                    <th>Position</th>
                    <th>Salary</th>
                    <th>Start Date</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Action</th>
                </tr>
            </thead>


            <tbody class="userInfo">
                <!-- <tr><td class="empty" colspan="11" align="center">No data available in table</td></tr> -->
                <!-- <tr>
                    <td>1</td>
                    <td><img src="./img/pic1.png" alt="" width="40" height="40"></td>
                    <td>John Doe</td>
                    <td>30</td>
                    <td>New York</td>
                    <td>Front-End Developer</td>
                    <td>$25000</td>
                    <td>03-08-2010</td>
                    <td>jhondoe.net111@gmail.com</td>
                    <td>924157812</td>
                    <td>
                        <button><i class="fa-regular fa-eye"></i></button>
                        <button><i class="fa-regular fa-pen-to-square"></i></button>
                        <button><i class="fa-regular fa-trash-can"></i></button>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td><img src="./img/pic1.png" alt="" width="40" height="40"></td>
                    <td>John Doe</td>
                    <td>30</td>
                    <td>New York</td>
                    <td>Front-End Developer</td>
                    <td>$25000</td>
                    <td>03-08-2010</td>
                    <td>jhondoe.net111@gmail.com</td>
                    <td>924157812</td>
                    <td>
                        <button><i class="fa-regular fa-eye"></i></button>
                        <button><i class="fa-regular fa-pen-to-square"></i></button>
                        <button><i class="fa-regular fa-trash-can"></i></button>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td><img src="./img/pic1.png" alt="" width="40" height="40"></td>
                    <td>John Doe</td>
                    <td>30</td>
                    <td>New York</td>
                    <td>Front-End Developer</td>
                    <td>$25000</td>
                    <td>03-08-2010</td>
                    <td>jhondoe.net111@gmail.com</td>
                    <td>924157812</td>
                    <td>
                        <button><i class="fa-regular fa-eye"></i></button>
                        <button><i class="fa-regular fa-pen-to-square"></i></button>
                        <button><i class="fa-regular fa-trash-can"></i></button>
                    </td>
                </tr>
                <tr>
                    <td>1</td>
                    <td><img src="./img/pic1.png" alt="" width="40" height="40"></td>
                    <td>John Doe</td>
                    <td>30</td>
                    <td>New York</td>
                    <td>Front-End Developer</td>
                    <td>$25000</td>
                    <td>03-08-2010</td>
                    <td>jhondoe.net111@gmail.com</td>
                    <td>924157812</td>
                    <td>
                        <button><i class="fa-regular fa-eye"></i></button>
                        <button><i class="fa-regular fa-pen-to-square"></i></button>
                        <button><i class="fa-regular fa-trash-can"></i></button>
                    </td>
                </tr> -->
            </tbody>

        </table>


        <footer>
            <span class="showEntries">Showing 1 to 10 of 50 entries</span>
            <div class="pagination">
                <!-- <button>Prev</button>
                <button class="active">1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>Next</button> -->
            </div>
        </footer>
    </div>


    <!--Popup Form-->

    <div class="dark_bg">

        <div class="popup">
             <header>
                <h2 class="modalTitle">Fill the Form</h2>
                <button class="closeBtn">&times;</button>
             </header>

             <div class="body">
                <form action="#" id="myForm">
                    <div class="imgholder">
                        <label for="uploadimg" class="upload">
                            <input type="file" name="" id="uploadimg" class="picture">
                            <i class="fa-solid fa-plus"></i>
                        </label>
                        <img src="./img/pic1.png" alt="" width="150" height="150" class="img">
                    </div>

                    <div class="inputFieldContainer">

                        <div class="nameField">
                            <div class="form_control">
                                <label for="fName">First Name:</label>
                                <input type="text" name="" id="fName" required>
                            </div>

                            <div class="form_control">
                                <label for="lName">Last Name:</label>
                                <input type="text" name="" id="lName" required>
                            </div>
                        </div>

                        <div class="ageCityField">
                            <div class="form_control">
                                <label for="age">Age:</label>
                                <input type="number" name="" id="age" required>
                            </div>

                            <div class="form_control">
                                <label for="city">City:</label>
                                <input type="text" name="" id="city" required>
                            </div>
                        </div>

                        <div class="postSalary">
                            <div class="form_control">
                                <label for="position">Position:</label>
                                <input type="text" name="" id="position" required>
                            </div>

                            <div class="form_control">
                                <label for="salary">Salary:</label>
                                <input type="text" name="" id="salary" required>
                            </div>
                        </div>

                        <div class="form_control">
                            <label for="sDate">Start Date:</label>
                            <input type="date" name="" id="sDate" required>
                        </div>

                        <div class="form_control">
                            <label for="email">Email:</label>
                            <input type="email" name="" id="email" required>
                        </div>

                        <div class="form_control">
                            <label for="phone">Phone:</label>
                            <input type="number" name="" id="phone" required>
                        </div>
                    </div>
                </form>
             </div>

             <footer class="popupFooter">
                <button form="myForm" class="submitBtn">Submit</button>
             </footer>
        </div>

    </div>
  

    <script src="app.js"></script>
</body>
</html>
//app.js
var newMemberAddBtn = document.querySelector('.addMemberBtn'),
darkBg = document.querySelector('.dark_bg'),
popupForm = document.querySelector('.popup'),
crossBtn = document.querySelector('.closeBtn'),
submitBtn = document.querySelector('.submitBtn'),
 modalTitle = document.querySelector('.modalTitle'),
 popupFooter = document.querySelector('.popupFooter'),
 imgInput = document.querySelector('.img'),
 imgHolder = document.querySelector('.imgholder')
 form = document.querySelector('form'),
 formInputFields = document.querySelectorAll('form input'),
  uploadimg = document.querySelector("#uploadimg"),
  fName = document.getElementById("fName"),
  lName = document.getElementById("lName"),
  age = document.getElementById("age"),
  city = document.getElementById("city"),
  position = document.getElementById("position"),
  salary = document.getElementById("salary"),
  sDate = document.getElementById("sDate"),
  email = document.getElementById("email"),
  phone = document.getElementById("phone"),
  entries = document.querySelector(".showEntries"),
  tabSize = document.getElementById("table_size"),
  userInfo = document.querySelector(".userInfo"),
  table = document.querySelector("table"),
  filterData = document.getElementById("search")

let originalData = localStorage.getItem('userProfile') ? JSON.parse(localStorage.getItem('userProfile')) : []
let getData = [...originalData]


let isEdit = false, editId

var arrayLength = 0
var tableSize = 10
var startIndex = 1
var endIndex = 0
var currentIndex = 1
var maxIndex = 0

showInfo()


newMemberAddBtn.addEventListener('click', ()=> {
    isEdit = false
    submitBtn.innerHTML = "Submit"
    modalTitle.innerHTML = "Fill the Form"
    popupFooter.style.display = "block"
    imgInput.src = "./img/pic1.png"
    darkBg.classList.add('active')
    popupForm.classList.add('active')
})

crossBtn.addEventListener('click', ()=>{
    darkBg.classList.remove('active')
    popupForm.classList.remove('active')
    form.reset()
})

uploadimg.onchange = function(){
    if(uploadimg.files[0].size < 1000000){   // 1MB = 1000000
        var fileReader = new FileReader()

        fileReader.onload = function(e){
            var imgUrl = e.target.result
            imgInput.src = imgUrl
        }

        fileReader.readAsDataURL(uploadimg.files[0])
    }

    else{
        alert("This file is too large!")
    }

}

function preLoadCalculations(){
    array = getData
    arrayLength = array.length
    maxIndex = arrayLength / tableSize

    if((arrayLength % tableSize) > 0){
        maxIndex++
    }
}



function displayIndexBtn(){
    preLoadCalculations()

    const pagination = document.querySelector('.pagination')

    pagination.innerHTML = ""

    pagination.innerHTML = '<button onclick="prev()" class="prev">Previous</button>'

    for(let i=1; i<=maxIndex; i++){
        pagination.innerHTML += '<button onclick= "paginationBtn('+i+')" index="'+i+'">'+i+'</button>'
    }

    pagination.innerHTML += '<button onclick="next()" class="next">Next</button>'

    highlightIndexBtn()
}


function highlightIndexBtn(){
    startIndex = ((currentIndex - 1) * tableSize) + 1
    endIndex = (startIndex + tableSize) - 1

    if(endIndex > arrayLength){
        endIndex = arrayLength
    }

    if(maxIndex >= 2){
        var nextBtn = document.querySelector(".next")
        nextBtn.classList.add("act")
    }


    entries.textContent = `Showing ${startIndex} to ${endIndex} of ${arrayLength} entries`

    var paginationBtns = document.querySelectorAll('.pagination button')
    paginationBtns.forEach(btn => {
        btn.classList.remove('active')
        if(btn.getAttribute('index') === currentIndex.toString()){
            btn.classList.add('active')
        }
    })


    showInfo()
}




function showInfo(){
    document.querySelectorAll(".employeeDetails").forEach(info => info.remove())

    var tab_start = startIndex - 1
    var tab_end = endIndex

    if(getData.length > 0){
        for(var i=tab_start; i<tab_end; i++){
            var staff = getData[i]


            if(staff){
                let createElement = `<tr class = "employeeDetails">
                <td>${i+1}</td>
                <td><img src="${staff.picture}" alt="" width="40" height="40"></td>
                <td>${staff.fName + " " + staff.lName}</td>
                <td>${staff.ageVal}</td>
                <td>${staff.cityVal}</td>
                <td>${staff.positionVal}</td>
                <td>${staff.salaryVal}</td>
                <td>${staff.sDateVal}</td>
                <td>${staff.emailVal}</td>
                <td>${staff.phoneVal}</td>
                <td>
                    <button onclick="readInfo('${staff.picture}', '${staff.fName}', '${staff.lName}', '${staff.ageVal}', '${staff.cityVal}', '${staff.positionVal}', '${staff.salaryVal}', '${staff.sDateVal}', '${staff.emailVal}', '${staff.phoneVal}')"><i class="fa-regular fa-eye"></i></button>

                    <button onclick="editInfo('${i}', '${staff.picture}', '${staff.fName}', '${staff.lName}', '${staff.ageVal}', '${staff.cityVal}', '${staff.positionVal}', '${staff.salaryVal}', '${staff.sDateVal}', '${staff.emailVal}', '${staff.phoneVal}')"><i class="fa-regular fa-pen-to-square"></i></button>


                    <button onclick = "deleteInfo(${i})"><i class="fa-regular fa-trash-can"></i></button>
                </td>
            </tr>`

                userInfo.innerHTML += createElement
                table.style.minWidth = "1400px"
            }
        }
    }


    else{
        userInfo.innerHTML = `<tr class="employeeDetails"><td class="empty" colspan="11" align="center">No data available in table</td></tr>`
        table.style.minWidth = "1400px"
    }
}

showInfo()


function readInfo(pic, fname, lname, Age, City, Position, Salary, SDate, Email, Phone){
    imgInput.src = pic
    fName.value = fname
    lName.value = lname
    age.value = Age
    city.value = City
    position.value = Position
    salary.value = Salary
    sDate.value = SDate
    email.value = Email
    phone.value = Phone

    darkBg.classList.add('active')
    popupForm.classList.add('active')
    popupFooter.style.display = "none"
    modalTitle.innerHTML = "Profile"
    formInputFields.forEach(input => {
        input.disabled = true
    })


    imgHolder.style.pointerEvents = "none"
}

function editInfo(id, pic, fname, lname, Age, City, Position, Salary, SDate, Email, Phone){
    isEdit = true
    editId = id

    // Find the index of the item to edit in the original data based on id
    const originalIndex = originalData.findIndex(item => item.id === id)

    // Update the original data
    originalData[originalIndex] = {
        id: id,
        picture: pic,
        fName: fname,
        lName: lname,
        ageVal: Age,
        cityVal: City,
        positionVal: Position,
        salaryVal: Salary,
        sDateVal: SDate,
        emailVal: Email,
        phoneVal: Phone
    }

    imgInput.src = pic
    fName.value = fname
    lName.value = lname
    age.value = Age
    city.value = City
    position.value = Position
    salary.value = Salary
    sDate.value = SDate
    email.value = Email
    phone.value = Phone


    darkBg.classList.add('active')
    popupForm.classList.add('active')
    popupFooter.style.display = "block"
    modalTitle.innerHTML = "Update the Form"
    submitBtn.innerHTML = "Update"
    formInputFields.forEach(input => {
        input.disabled = false
    })


    imgHolder.style.pointerEvents = "auto"
}

function deleteInfo(index){
    if(confirm("Aer you sure want to delete?")){
        originalData.splice(index, 1);
        localStorage.setItem("userProfile", JSON.stringify(originalData));
        
        // Update getData after deleting the record
        getData = [...originalData];

        preLoadCalculations()

        if(getData.length === 0){
            currentIndex = 1
            startIndex = 1
            endIndex = 0
        }
        else if(currentIndex > maxIndex){
            currentIndex = maxIndex
        }

        showInfo()
        highlightIndexBtn()
        displayIndexBtn()

        var nextBtn = document.querySelector('.next')
        var prevBtn = document.querySelector('.prev')

        if(Math.floor(maxIndex) > currentIndex){
            nextBtn.classList.add("act")
        }
        else{
            nextBtn.classList.remove("act")
        }


        if(currentIndex > 1){
            prevBtn.classList.add('act')
        }
    }
}


form.addEventListener('submit', (e)=> {
    e.preventDefault()

    const information = {
        id: Date.now(),
        picture: imgInput.src == undefined ? "./img/pic1.png" :imgInput.src,
        fName: fName.value,
        lName: lName.value,
        ageVal: age.value,
        cityVal: city.value,
        positionVal: position.value,
        salaryVal: salary.value,
        sDateVal: sDate.value,
        emailVal: email.value,
        phoneVal: phone.value
    }

    if(!isEdit){
        originalData.unshift(information)
    }
    else{
        originalData[editId] = information
    }
    getData = [...originalData]
    localStorage.setItem('userProfile', JSON.stringify(originalData))

    submitBtn.innerHTML = "Submit"
    modalTitle.innerHTML = "Fill the Form"

    darkBg.classList.remove('active')
    popupForm.classList.remove('active')
    form.reset()


    highlightIndexBtn()
    displayIndexBtn()
    showInfo()

    var nextBtn = document.querySelector(".next")
    var prevBtn = document.querySelector(".prev")
    if(Math.floor(maxIndex) > currentIndex){
        nextBtn.classList.add("act")
    }
    else{
        nextBtn.classList.remove("act")
    }


    if(currentIndex > 1){
        prevBtn.classList.add("act")
    }
})


function next(){
    var prevBtn = document.querySelector('.prev')
    var nextBtn = document.querySelector('.next')

    if(currentIndex <= maxIndex - 1){
        currentIndex++
        prevBtn.classList.add("act")

        highlightIndexBtn()
    }

    if(currentIndex > maxIndex - 1){
        nextBtn.classList.remove("act")
    }
}


function prev(){
    var prevBtn = document.querySelector('.prev')

    if(currentIndex > 1){
        currentIndex--
        prevBtn.classList.add("act")
        highlightIndexBtn()
    }

    if(currentIndex < 2){
        prevBtn.classList.remove("act")
    }
}


function paginationBtn(i){
    currentIndex = i

    var prevBtn = document.querySelector('.prev')
    var nextBtn = document.querySelector('.next')

    highlightIndexBtn()

    if(currentIndex > maxIndex - 1){
        nextBtn.classList.remove('act')
    }
    else{
        nextBtn.classList.add("act")
    }


    if(currentIndex > 1){
        prevBtn.classList.add("act")
    }

    if(currentIndex < 2){
        prevBtn.classList.remove("act")
    }
}



tabSize.addEventListener('change', ()=>{
    var selectedValue = parseInt(tabSize.value)
    tableSize = selectedValue
    currentIndex = 1
    startIndex = 1
    displayIndexBtn()
})



filterData.addEventListener("input", ()=> {
    const searchTerm = filterData.value.toLowerCase().trim()

    if(searchTerm !== ""){

        const filteredData = originalData.filter((item) => {
            const fullName = (item.fName + " " + item.lName).toLowerCase()
            const city = item.cityVal.toLowerCase()
            const position = item.positionVal.toLowerCase()

            return(
                fullName.includes(searchTerm) ||
                city.includes(searchTerm) ||
                position.includes(searchTerm)
            )
        })

        // Update the current data with filtered data
        getData = filteredData
    }

    else{
        getData = JSON.parse(localStorage.getItem('userProfile')) || []
    }


    currentIndex = 1
    startIndex = 1
    displayIndexBtn()
})


displayIndexBtn()
