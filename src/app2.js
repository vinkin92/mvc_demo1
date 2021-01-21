import './app2.css'
import $ from 'jquery'
const $tabBar = $('#app2 .tab-bar')
$tabBar.on('click','li',(e)=>{
    const $li = $(e.currentTarget)
    const $index = $li.index()
    $li.addClass('selected')
        .siblings().removeClass('selected')
    $('#app2 .tab-content').children()
        .eq($index).addClass('active')
        .siblings().removeClass('active')
})

$tabBar.children().eq(0).trigger('click')