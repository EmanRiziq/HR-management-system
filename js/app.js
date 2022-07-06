'use stict';
const AllEmp=[];
function Emp(EmployeeId,FullName,Department,Level,ImageURL)
{
   this.EmployeeId=EmployeeId;
   this.FullName=FullName;
   this.Department=Department;
   this.Level=Level;
   this.ImageURL=ImageURL;
   this.CalcSal(); 
   AllEmp.push(this);
   
};

Emp.prototype.CalcSal=function()
{
  this .Salary=1;
    switch (this.Level) {
        case "Junior":
            this.Salary=(500+Math.floor(Math.random()*500));
          break;
        case "Mid-Senior":
            this.Salary=(1000+Math.floor(Math.random()*500));
          break;
        case "Senior":
            this.Salary=(1500+Math.floor(Math.random()*500));
            break;
    }
}


Emp.prototype.RenderEmp=function()
{
   document.write(this.EmployeeId  +`&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp`+this.FullName +` &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp`
  + this.Department +`&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp`+this.Level+`&nbsp &nbsp &nbsp &nbs &nbsp &nbspp`+this.Salary+`</br>`);  
}
const Emp1000=new Emp(1000,"Ghazi Samer",	"Administration","Senior" ,"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcJxa5bFhTfZRfWDp8gYOzQ7Ir-7MgprWLQw&usqp=CAU"	);
const Emp1001=new Emp(1001,"Lana Ali",	"Finance",	"Senior","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpZUjcMsPDlh_suSuzLLP-fwHU3cdx_jypHg&usqp=CAU");
const Emp1002=new Emp(1002,"Tamara Ayoub",	"Marketing",	"Senior","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu4e9WSwmb2TTacfnr1JO1JRpWfOtrkm47PQ&usqp=CAU");
const Emp1003=new Emp(1003,"Safi Walid",	"Administration",	"Mid-Senior","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-FI5Evhx7ZBcj_PFrc9IOwTTVfdm1qNqcvQ&usqp=CAU");
const Emp1004=new Emp(1004,	"Omar Zaid",	"Development","Senior","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCiqBlvYpMS5qPsMBAik6q_HBZZkDj96LRwg&usqp=CAU");
const Emp1005=new Emp(1005,	"Rana Saleh",	"Development",	"Junior","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS674umpR1H27ljjkYompOIEXfNMK_BPTySZQ&usqp=CAU");
const Emp1006=new Emp(1006,	"Hadi Ahmad",	"Finance",	"Mid-Senior","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPTQQawZ0zT1GV8k241qq7ZfafIylf8dyWoA&usqp=CAU");
console.log(Emp1000);
console.log(Emp1001);
console.log(Emp1002);
console.log(Emp1003);
console.log(Emp1004);
console.log(Emp1005);
console.log(Emp1006);

function PrintEmp(  Employee )
{
  document.write(`Employee Id &nbsp &nbsp  Employee Name &nbsp &nbsp Department &nbsp &nbsp  Level &nbsp &nbsp Net Salary </br>`)

  for(let i=0;i<Employee.length;i++)
  {
    Employee[i].RenderEmp();
  }
}

PrintEmp(AllEmp);