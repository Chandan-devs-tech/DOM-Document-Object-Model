const para=document.createElement("p");
// para.textContent="This para is created using DOM-API.";
//        another way of adding em tag inside it
para.innerHTML="This para is created using <em>DOM-API</em>.";
document.body.appendChild(para)

// -----------------------------------------------------

const span= document.createElement("span");
span.id='span-id';
span.className='blue red';
span.textContent=" This span tag is created using DOM-API with id and class....";
span.style.backgroundColor="yellow";

para.appendChild(span);

// this whole process changing the element editing,adding,deleting the attributes in it is called as Dom Manipulation.

// ----------------------------------------------------

// Another way also get and set the attributes to the element is:-

para.setAttribute("id","js-para");
console.log(para.getAttribute("id"));
para.classList.add("one","second");       
// para.classList.add("second");     
// para.classList.remove("second");
// para.setAttribute("class","third");

// we can use add and remove function to add a class or remove a class.

// -----------------------------------------------------------
// 
// WHAT WE HAVE LEARNT A QUICK SUMMARY OF THAT:-

// 1. we can create a element,enter a text content in it and using var name we are appending child in the DOM tree ex:-
// createElement
// const name
// appendChild

// 2. inner.HTML is used in place of text content because we have to add a span or any other tag in the paragraph tag to be discoverable in the existing element or for inner element ex:-
// const name.innerHTML="something is happening there in the <em>poll</em><span>NOTHING.</span>"

// 3. create a element within existing element tag giving a id,className,textContent,style.backgroundColor,appendChild.

// 4. Another way to get and set atttribute to the element ex:-
// var-name.setAttribute("id","id-name")
// console.log(var-name.getAttribute("id"))
// using function name are:-
// var-name.classList.add("class-name")
// var-name.classList.remove("class-name")

// ---------------------------------------------------------------
// span is an inline element
// paragragh is a block level Element

const hobbies=["coding","swimmming","jogging"];
const list = document.createElement("ul");
for(let hobby of hobbies){
  list.innerHTML += "<li class ='green'>"+hobby+"</li>"
}
document.body.appendChild(list);

const languages=["HTML","CSS","JAVASCRIPT"]
const list1=document.createElement("ol");
for (let language of languages){
  list1.innerHTML+="<li class ='blue'>"+language+"</li>"
}
document.body.appendChild(list1);

// ------------------------------------------------------
//                  BASIC RULES

// we can retrive elements by using document.getElementById or className

console.log(document.getElementById("js-para").textContent);
console.log(document.getElementById("first-para"));
console.log(document.getElementsByClassName("blue"));

// -------------------------------------------------------------------

//  USING document.querySelector
console.log(document.querySelector("p"));
console.log(document.querySelectorAll("p"));
console.log(document.querySelector("#first-para")); /*This line is same as line no.76 we can see the ID,class or tag by using both the process  */
console.log(document.querySelector(".green"));

// --------------------------------------------------------------------










