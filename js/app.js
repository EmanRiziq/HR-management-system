'use strict';


let mainel=document.getElementsByTagName("main");

//Administration
let DivAdministration=document.createElement("div");
DivAdministration.className="card";
mainel[0].appendChild(DivAdministration);
let HAdministration=document.createElement("h2");
HAdministration.textContent="Administration";
HAdministration.textAlign="center";
DivAdministration.appendChild(HAdministration);

//Finance
let DivFinance=document.createElement("div");
DivFinance.className="card";
mainel[0].appendChild(DivFinance);
let HFinance=document.createElement("h2");
HFinance.textContent="Finance";
HFinance.textAlign="center";
DivFinance.appendChild(HFinance);

//Marketing
let DivMarketing=document.createElement("div");
DivMarketing.className="card";
mainel[0].appendChild(DivMarketing);
let HMarketing=document.createElement("h2");
HMarketing.textContent="Marketing";
HMarketing.textAlign="center";
DivMarketing.appendChild(HMarketing);

//Development
let DivDevelopment=document.createElement("div");
DivDevelopment.className="card";
mainel[0].appendChild(DivDevelopment);
let HDevelopment=document.createElement("h2");
HDevelopment.textContent="Development";
HDevelopment.textAlign="center";
DivDevelopment.appendChild(HDevelopment);




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
    this.CalcNetSal();
}

Emp.prototype.CalcNetSal=function()
{
  this.NetSal=this.Salary-(this.Salary*0.075);
}

Emp.prototype.RenderEmp=function()
{
  let EmpText="Name : "+this.FullName + " -ID: " +this.EmployeeId +'\n' +"Department: "+this.Department + " -Level: "+this.Level +'\n' + this.NetSal;
  console.log(this);
  if (this.Department=="Administration"){RenderAdministration(EmpText ,this.ImageURL);}
  else if (this.Department=="Finance"){RenderFinance(EmpText,this.ImageURL);}
  else if (this.Department=="Marketing"){RenderMarketing(EmpText,this.ImageURL);}
  else if (this.Department=="Development"){RenderDevelopment(EmpText,this.ImageURL);}
  //  document.write(this.EmployeeId  +`&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp`+this.FullName +` &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp` + this.Department +`&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp`+this.Level+`&nbsp &nbsp &nbsp &nbsp &nbsp &nbsp`+this.Salary+`</br>`);  
}
function RenderAdministration(EmpText,ImageURL)
{
  let ImgEl=document.createElement("img");
ImgEl.src= ImageURL	;
ImgEl.alt=ImageURL;
let DivEl2=document.createElement("div");
DivEl2.className="container";
let EmpName =document.createElement("h4");
EmpName.textContent=EmpText;
 DivEl2.appendChild(EmpName);
 DivAdministration.appendChild(ImgEl);
 DivAdministration.appendChild(DivEl2);
};


function RenderFinance(EmpText,ImageURL)
{
  let ImgEl=document.createElement("img");
ImgEl.src= ImageURL	;
ImgEl.alt=ImageURL;
let DivEl2=document.createElement("div");
DivEl2.className="container";
let EmpName =document.createElement("h4");
EmpName.textContent=EmpText;
 DivEl2.appendChild(EmpName);
 DivFinance.appendChild(ImgEl);
 DivFinance.appendChild(DivEl2);
};


function RenderMarketing(EmpText,ImageURL)
{
  let ImgEl=document.createElement("img");
  ImgEl.src= ImageURL	;
  ImgEl.alt=ImageURL;
  let DivEl2=document.createElement("div");
  DivEl2.className="container";
  let EmpName =document.createElement("h4");
  EmpName.textContent=EmpText;
   DivEl2.appendChild(EmpName);
   DivMarketing.appendChild(ImgEl);
   DivMarketing.appendChild(DivEl2);
};


function RenderDevelopment(EmpText,ImageURL)
{
  let ImgEl=document.createElement("img");
  ImgEl.src= ImageURL	;
  ImgEl.alt=ImageURL;
  let DivEl2=document.createElement("div");
  DivEl2.className="container";
  let EmpName =document.createElement("h4");
  EmpName.textContent=EmpText;
   DivEl2.appendChild(EmpName);
   DivDevelopment.appendChild(ImgEl);
   DivDevelopment.appendChild(DivEl2);
};
const Emp1000=new Emp(1000,"Ghazi Samer",	"Administration","Senior" ,"./assets/Ghazi.jpg"	);
const Emp1001=new Emp(1001,"Lana Ali",	"Finance",	"Senior","./assets/Lana.jpg");
const Emp1002=new Emp(1002,"Tamara Ayoub",	"Marketing",	"Senior","./assets/Tamara.jpg");
const Emp1003=new Emp(1003,"Safi Walid",	"Administration",	"Mid-Senior","./assets/Safi.jpg");
const Emp1004=new Emp(1004,	"Omar Zaid",	"Development","Senior","./assets/Omar.jpg");
const Emp1005=new Emp(1005,	"Rana Saleh",	"Development",	"Junior","./assets/Rana.jpg");
const Emp1006=new Emp(1006,	"Hadi Ahmad",	"Finance",	"Mid-Senior","./assets/Hadi.jpg");


function PrintEmp(  Employee )
{
  for(let i=0;i<Employee.length;i++)
  {
    Employee[i].RenderEmp();
  }
}

PrintEmp(AllEmp);






// let ImgEl=document.createElement("img");
// ImgEl.src="./assets/Ghazi.jpg"	;
// ImgEl.alt="Ghazi img";

// let DivEl2=document.createElement("div");
// DivEl2.className="container";
// let EmpName =document.createElement("h4");

// EmpName.textContent="Gazi";
//  DivEl2.appendChild(EmpName);

//  DivAdministration.appendChild(ImgEl);
//  DivAdministration.appendChild(DivEl2);











// let DivEl=document.createElement("div");
// DivEl.className="card";


// mainel[0].appendChild(DivEl);

// let ImgEl=document.createElement("img");
// ImgEl.src="./assets/Ghazi.jpg";
// ImgEl.alt="Ghazi img";
// // ImgEl.width="250";

// let DivEl2=document.createElement("div");
// DivEl2.className="container";
// let EmpName =document.createElement("h4");

// EmpName.innerHTML="Gazi";
//  DivEl2.appendChild(EmpName);

// DivEl.appendChild(ImgEl);
// DivEl.appendChild(DivEl2);
