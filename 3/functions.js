//1- create a web page that  open existing small window and scroll it’s 
//content to the end .
//Then from console try the following:
//  a- check if the small window still opened, close it.
//  b- Try to write your name on the small window document  using 
//document.write (what is the problem) 

// ==> no problem ??
function openSmallWindow() {
  let smallWindow = open('', 'smallWindow', 'width=300,height=200');
  smallWindow.document.write('<!DOCTYPE html><html><head><title>smallwindow</title></head><body>');
  for (let i = 0; i < 20; i++) {
    smallWindow.document.write(`<p>${i}</p>`);
  }
  smallWindow.document.write(`
    <script>
      window.onload = function () {
        window.scrollTo(0, 1000);
      };
    </script>
  `);
  smallWindow.document.write('<h1> hello my name is mohamed mamdouh </h1> </body></html>');
  smallWindow.document.close();
}

//==================================================================================================
//2- Using document object method on the lecture’s HTML page
//  a- Find all images in page by two ways (document default 
// collection and document methods).

let docImgs = document.images;
console.log(docImgs);
let images = document.getElementsByTagName("img");
console.log(images);

//  b- Find all options for City drop down list.

let countries = document.getElementById("list");
let countries_options = countries.options;
for (let country of countries_options )
  console.log(country.value+"==>"+country.textContent);
  
//  c- Find all rows(tds) for second table in page.
let tables = document.getElementsByTagName("table")
let table2 = tables[1];
let tds =table2.getElementsByTagName("td");
for(let td of tds)
  console.log(td.textContent);

//  d- Find all elements that contain class name fontBlue and BGrey
let elemnt_color = document.querySelectorAll('.fontBlue, .BGrey')
for(let color of elemnt_color)
  console.log(color);

//==================================================================================================

//4- Display the date with time on the document title
//(document.title) which changed every second to show time with date.
//Note: use .toLocalString() method of the Date Object.
function convertTitleToDateTime() {
  let now = new Date();
  document.title = now.toLocaleString();
}
convertTitleToDateTime();
setInterval(convertTitleToDateTime, 1000);
//==================================================================================================
//Using location Object with simple HTML Form Page 
//With get method, after clicking submit button show the 
//Name and Age on page console as an object. 

let str = location.search;
let search = str.substring(1);
let arr = search.split("&");
let obj = {};
console.log(arr);
arr.forEach(elem => {
  let key_value = elem.split("=");
  obj[key_value[0]]=key_value[1];
}
)
console.log(obj);
//==================================================================================================
