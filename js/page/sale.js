(function(){

    // 成品卡套餐查询
    $.ajax({
        type: 'POST',
        url: 'package/getall',
        // url: 'http://rap.taobao.org/mockjsdata/9611/package/getall',
        success: function(data){
            var str = '';
            var aStr = '';
            for(var i = 0; i < data.length; i++) {
                aStr = '';
                for(var j = 0; j < data[i].children.length; j++) {
                    aStr += "<p class='pacTypeItem'>" +
                            "    <input class='pacTypeItemInp'value=" + data[i].children[j].packageid + " checked='checked' name='pacType' type='radio' />" +
                            "    <span class='pacItemType'>" + data[i].children[j].packagename + "</span>" +
                            "    <span class='pacTypeItemDet'>￥" + data[i].children[j].packagepreprice + "</span>" +
                            "</p>";
                }
                str += "<div class='pacType'>" +
                       "    <h4 class='pacTypeTit'>" + data[i].packagename + "</h4>" + aStr +
                       "</div>";
            }
            $('.pacTypeUnit').append(str);
        }
    });
})();
