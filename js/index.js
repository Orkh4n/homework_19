function c_panel(){
    var ox_div = document.getElementById("ox_card")
    var ox_main = document.getElementById("o_main")
    var w = document.getElementById("w").value
    var h = document.getElementById("h").value
    var bg = document.getElementById("bg").value
    var br = document.getElementById("br").value
    var wi = document.getElementById("uni_w").value
    var he = document.getElementById("uni_h").value
    var uni_br = document.getElementById("uni_br").value
    var uni_left = document.getElementById("uni_pl").value
    var uni_top = document.getElementById("uni_pt").value
    var colord = document.getElementById("color_div").value
    var ptop = document.getElementById("ptop").value
    var pleft = document.getElementById("pleft").value
    var otext = document.getElementById("txt").value
    var txtS = document.getElementById("txt_size").value
    var txt_unit = document.getElementById("uni_txt").value
    var txt_color = document.getElementById("txt_color").value
    var sss = document.getElementById("sss").value

    ox_main.style.background = colord
    
    ox_div.style.width = w + wi
    ox_div.style.height = h + he
    ox_div.style.background = bg
    ox_div.style.borderRadius = br + uni_br
    ox_div.style.left = pleft + uni_left
    ox_div.style.top = ptop + uni_top
    ox_div.style.fontSize = txtS + txt_unit
    ox_div.innerHTML = otext
    ox_div.style.color = txt_color
    ox_div.style.backgroundImage = "url" + '("'+sss+'")'
    
    
}