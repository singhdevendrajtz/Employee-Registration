const btn=document.querySelector("#btn");
const name_=document.querySelector("#name");
const age_=document.querySelector("#age");
const err=document.querySelector("#error");
const profession_=document.querySelector("#profession");
let employees=[]
btn.addEventListener('click',function(e){
    let age=parseInt(age_.value,10)
    let name = name_.value.trim();
    let profession=profession_.value.trim()
    if(name=="" || isNaN(age) || profession=="")
    {
        err.textContent="Error: Please Make sure All the fields ar filled befor adding in an employee!";
        err.style.color="red";
    }
    else{
        err.textContent="Success : Employee Added!";
        err.style.color="Green";
    
let new_obj= {
    id:employees.length,
    name:name,
    profession:profession,
    age:age
}
employees.push(new_obj)
render()
    }
//console.log(employees)

})
const employee_list=document.querySelector("#employee_list")
function render(){
    employee_list.innerHTML="";
    if(employees.length==0)
    {
        employee_list.innerHTML="<p>You Have 0 Employees</p>"
    }
    else{
    employees.forEach((x,y)=>{
        // console.log(x)
        employee_list.innerHTML+=`<div><pre>${x.id}  Name:${x.name} Profession:${x.profession} Age:${x.age} <button type="button" onclick={employees.splice(${y},1);render()}>Delete User</button></pre><br><br>
        
        </div>`
        
        
    })    
    }
    
}
render()
function myFunction()
{
console.log()
}