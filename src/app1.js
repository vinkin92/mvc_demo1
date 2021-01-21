import './app1.css'
import $ from 'jquery'
const $number = $('#number')
let n = localStorage.getItem('number') ?? 100
$number.text(n)
$('#add').on('click',()=>{
    n = parseInt($number.text())
    n += 1
    $number.text(n)
})
$('#minus').on('click',()=>{
    n = parseInt($number.text())
    n -= 1
    $number.text(n)
})
$('#mul').on('click',()=>{
    n = parseInt($number.text())
    n *= 2
    $number.text(n)
})
$('#divide').on('click',()=>{
    n = parseInt($number.text())
    n /= 2
    $number.text(n)
})

window.onbeforeunload = () => {
    localStorage.setItem('number', n)
}
