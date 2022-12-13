(function(){
    var $html=document.getElementsByTagName("html")[0]
    var $body=document.getElementsByTagName("body")[0]
    var click_cnt =0
    $html.onclick = function(e){
        var $elem = document.createElement("b")
        $elem.style.color="#FFC0CB"
        $elem.style.zIndex = 9999
        $elem.style.position="absolute"
        $elem.style.select="none"
        var x = e.pageX
        var y = e.pageY
        $elem.style.left = (x - 10) + 'px'
        $elem.style.top = (y - 20) + 'px'
        //文字出现机制
        switch(++click_cnt){
            case 10:
                $elem.innerText = "oWo"
                break;
            case 20:
                $elem.innerText = "oWo``"
                break;
            case 30:
                $elem.innerText = "oWo```"
                break;
            case 40:
                $elem.innerText = "oWo````"
                break;
            case 50:
                click_cnt = 0
                break;
            default:
                $elem.innerText = "❤"
                break;
        }
        $elem.style.fontSize = Math.random() * 10 + 8 + "px"
        var increase = 0
        var anim;
        //渐变消失
        setTimeout(function(){
            anim = setInterval(function(){
                if(++increase == 150){
                    clearInterval(anim)
                    $body.removeChild($elem)
                }
                $elem.style.top = y - 20 - increase + "px"
                $elem.style.opacity = (150 - increase) / 120
            }, 8)
        },70)
        $body.appendChild($elem)
    }
})()