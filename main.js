// let h1 = document.getElementsByTagName('h1')

// console.log(h1)
// console.log(h1[0])

// h1[0].style.color = 'red'

// let p = document.getElementsByTagName('p')
// console.log(p)

// p[2].innerText = 'CodeCamp Academy 01'

// for(let i=o; i<=p.length; i++){
//     p[i].innerText = `CodeCamp Academy 0${i+1}`
// }

// let i=1
// for(let el of p){
//     el.innerText = `CodeCamp Academy 0${i++}`
// }

// let ctn = document.getElementsByClassName('container')
// console.log(ctn[0])
// cnt[0].style.background = 'skyblue'

// let para1 = document.getElementById('para1')
// console.log(para1)

// para1.innerText = new Date()

// let p3 = document.querySelector('.item03')
// console.log(p3)
// p3.innerText = 'Good bye'

// let allp = document.querySelectorAll('.item')
// console.log(allp)

// allp.forEach((el,i) => {
//     el.innerText = `CodeCamp Academy 0${i}`
// })

// let qpara1 = document.querySelector('#para1')
// console.log(para1)
// qpara1.style.color = 'blue'

// let qa_para1 = document.querySelectorAll('#para1')
// console.log(qa_para1[0])

// let item = document.querySelectorAll('.item')
// console.log(item)

//*******การ matched */

// let p = document.querySelectorAll('p')
// console.log(p)

// console.log(p[0].matches('#para1'))
// console.log(p[1].matches('#para1'))


//***** closet */

// let item03 = document.querySelector('.item03')
// console.log(item03)

// let ctn = item03.closest('.container')
// console.log(ctn)

//******contains  */
// let container = document.querySelector('.container')
// let para1 = document.querySelector('#para1')

// console.log(container.contains(para1))
// console.log(document.body.contains(para1))
// console.log(para1.contains(container))

//******node type */

// let ctn = document.querySelector('.container')
// console.log(ctn.childNodes)
// console.log(ctn.childNodes[0].nodeType)
// console.log(ctn.childNodes[1].nodeType)

//*******Contents */
// let para1 = document.querySelector('#para1')
// para1.innerHTML = 'CodeCamp<br><em>Academy</em>'
// para1.innerText = 'CodeCamp<br><em>Academy</em>'
// para1.textContent = 'CodeCamp<br><em>Academy</em>'

// console.log(para1.outerHTML)
// para1.outerHTML = '<img src= "https://picsum.photos/100">'

//*********Attributes */
let para1 = document.querySelector('#para1')
// console.log(para1.attributes)
// console.log(typeof para1.attributes)
// console.log(Array.isArray(para1.attributes))
// console.log(para1.attributes[1].value)
// console.log(para1.hasAttribute('id'))
// console.log(para1.hasAttribute('idx'))
// console.log(para2.getAttribute('class'))
// para1.setAttribute('name','first-line')
// console.log(para1)
// para1.removeAttribute('name')
// console.log(para1)

// console.log(para1.dataset)
// console.log(para1.dataset.orderId)
// console.log(para1.dataset.title)

//*******create */
// const newDiv = document.createElement('div')
// newDiv.setAttribute('class','weapper')
// console.log(newDiv.outerHTML)

// const newItem = document.createElement('p')
// newItem.setAttribute('class','item item01')
// newItem.textContent = 'NEW ITEM'
// console.log(newItem.outerHTML)

// const ctn = document.querySelector('.container')
// ctn.after(newDiv)
// newDiv.append(newItem)
// const newItem2 = newItem.cloneNode(true)
// newItem2.setAttribute('class','item item02')
// // newItem2.textContent= 'NEW ITEM'
// console.log(newItem2.outerHTML)
// newDiv.append(newItem2)

// const newItem3 = newItem.cloneNode(true)
// // newItem3.setAttribute('class','item item03')
// newItem3.classList.add('item03')
// newItem3.classList.remove('item01')
// newDiv.append(newItem3)

//Dry Code = Don't Repeat Yourself
// please don't DRY :
// สร้าง Element ที่มี <p> 4 เป็น children ด้วย createElement

{/* <div class="wrapper">
    <p class="item item01">NEW ITEM</p>
    <p class="item item02">NEW ITEM</p>
    <p class="item item03">NEW ITEM</p>
    <p class="item item04">NEW ITEM</p>
</div>; */}

// const ctn = document.querySelector(".container")
// const newDiv = document.createElement("div")
// newDiv.setAttribute("class","wrapper")

// for (let i = 1; i <= 4; i++) {
//     const newItem = document.createElement("p");
//     newItem.setAttribute("class", `item item0${i}`);
//     newItem.textContent = `NEW ITEM ${i}`;
//     newDiv.append(newItem);
// }

// ctn.append(newDiv);
// ctn.before(newDiv);

// function makeElement(tag,atrname,atrValue,content) {
//     let output = document.createElement(tag)
//     output.setAttribute(atrname,atrValue)
//     output.textContent= content
//     return output
// }

// let wrapper = makeElement('div','class','wrapper','')
// for (let i =1; i<=4; i++){
//     let newItem = makeElement('p','class',`item item0${i}`,`NEW ITEM${i}`)
//     wrapper.append(newItem)
// }
// const ctn = document.querySelector('.container')
// ctn.before(wrapper)

//*******style */
const h1 = document.querySelector('h1')
h1.style.borderTopStyle= 'Dashed'
h1.style.color='red'

// setTimeout(()=>{
//     h1.style.accentColor('border-Top-Style')
// },1500)

console.log(getComputedStyle(h1).margintop)
console.log(getComputedStyle(h1).color)
console.log(getComputedStyle(h1).borderTop)
console.log(getComputedStyle(h1).width)
console.log(getComputedStyle(h1).height)
