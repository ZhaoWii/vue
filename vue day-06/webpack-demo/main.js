import $ from 'jquery'

import './src/css/index.css'

$(function(){
    $('li:even').css('backgroundColor','skyblue')
    $('li:odd').css('backgroundColor','yellow')
})