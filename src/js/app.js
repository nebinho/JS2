const news = [
    {
        "headline": "Regeringen skjuter på publiklättnader",
        "author": "Erik Wikén",
        "href": "https://www.svt.se/nyheter/inrikes/regeringen-skjuter-pa-publiklattnader",
        "summary": "Det blir inga lättnader i publikrestriktioner som planerat – åtminstone inte nu. Det beskedet gav regeringen i dag. Orsaken är den återigen ökade smittspridningen i samhället."
    },
    {
        "headline": "Graffitin – så kom den till Sverige genom Public service",
        "author": "",
        "href": "https://www.svt.se/nyheter/lokalt/ost/graffitin-sa-kom-den-till-sverige-genom-public-service",
        "summary": "Det går faktiskt nästan att fastställa på minuten när graffitin kom till Sverige. Se hur det gick till och hur subkulturen har utvecklats sedan dess i videon."
    },
    {
        "headline": "Louise Glück får Nobelpriset i litteratur",
        "author": ["Jakob Runevad Kjellmer", "Lydia Farran-Lee", "Sebastian Folcker"],
        "href": "https://www.svt.se/kultur/nobelpriset-i-litteratur-2020",
        "summary": "Den amerikanska poeten Louise Glück mottar Nobelpriset i litteratur 2020. Hon debuterade med Firstborn 1968 och anses vara en av de mest tongivande samtida amerikanska poeterna."
    },
]

/** 
 * 
 * This is where you add code that will manipulate index.html!
 * 
 * When you open index.html in your browser, this javascript file will be run once. This javascript file is loaded via the script tag in index.html.
 * 
 * Most of what you need is in the lecture slides! For the stuff that isn't, there are very strong hints in the lecture slides at least. 
 * 
 * You can also figure most things out with the MDN docs. 
 * 
 * Or, by using chrome devtools and debugger statements. 
 * 
 * 
 * Good luck :) 
 */

 console.log('js loaded!')

 //EX01
const ex01 = document.querySelector('#ex01').textContent = 'done!'

//EX02
const ex02 = document.querySelector('.ex02')
ex02.classList.add('red')

//EX03
const ex03 = document.querySelector('blockquote').textContent = 'An apple a day makes the doctor go away'

//EX04
const ex04 = document.querySelector('#shopping-list')
let li = document.createElement('li')
li.appendChild(document.createTextNode('Milk'))
ex04.appendChild(li)

//EX05
const ex05 = document.querySelector('#news')
ex05.appendChild(document.createElement('ul'))
let id = 1
news.forEach(
    n => {
            const li = document.createElement('li')
            const header = document.createElement('h1')
            const author = document.createElement('h2')
            const a = document.createElement('a')
            const p = document.createElement('p')
            const t1 = document.createTextNode(n.headline)
            const t2 = document.createTextNode(n.author)
            const t3 = document.createTextNode(n.href)
            const t4 = document.createTextNode(n.summary)
            header.appendChild(t1)
            header.className = `header-${id++}`
            author.appendChild(t2)
            a.appendChild(a.href = t3)
            p.appendChild(t4)
            li.appendChild(header)
            li.appendChild(author)
            li.appendChild(a)
            li.appendChild(p)
            ex05.appendChild(li)
    }
)
const header1 = document.querySelector('.header-1')
header1.classList.add('headerstyle')


//EX06
let counter = 1
const ex06 = document.addEventListener('click', () => {document.querySelector('#click-counter').innerHTML = counter++})

//EX07
const btn = document.querySelector('button')
btn.addEventListener('click', () => {btn.disabled = true})

//EX08
const link = document.querySelector('#link-to-svt')
link.addEventListener('click', (event) => {event.preventDefault()})

//EX09
const img = document.querySelector('img')
img.src = 'https://images.unsplash.com/photo-1544982503-9f984c14501a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80'