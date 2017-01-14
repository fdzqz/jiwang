$(function(){

    // 套餐查询
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
                            "    <label for=''>" + data[i].children[j].packagename + "</label>" +
                            "    <input class='pacTypeItemInp' type='text' name=" + data[i].children[j].packageid + " value=" + data[i].children[j].packagepreprice + " />" +
                            "    <span class='pacTypeItemDet'>最低价格：<span class='lowPri'>" + data[i].children[j].packageprice + "</span></span>" +
                            "</p>";
                }
                str += "<div class='pacType'>" +
                       "    <h4 class='pacTypeTit'>" + data[i].packagename + "</h4>" + aStr +
                       "</div>";
            }
            $('.acForm').prepend(str);

            // 套餐修改
            (function(){
                var $pacInp = $('.pacTypeItemInp');
                var pacPrice = [];
                for(var i = 0; i < $pacInp.length; i++) {
                    pacPrice.push( $pacInp.eq(i).val() );
                }

                $('.acBtn').click(function(){
                    var subData = [];
                    for(var i = 0; i < $pacInp.length; i++) {
                        if( Number( $pacInp.eq(i).val() ) != Number( pacPrice[i] ) && Number( $pacInp.eq(i).val() ) > Number( $('.lowPri').eq(i).text() ) ) {
                            subData.push({
                                packageid: $pacInp.eq(i).attr('name'),
                                packageprice: $pacInp.eq(i).val()
                            });
                        }
                    }
                    alert(subData[0].packageprice)
                    if(subData.length != 0) {
                        $.ajax({
                            type: 'POST',
                            // url: 'http://rap.taobao.org/mockjsdata/9611/package/update',
                            url: 'package/update',
                            data: subData,
                            success: function(data){
                                data = data[0];
                                if(data.status == 1) {
                                    alert(data.msg);
                                    window.location.reload();
                                } else {
                                    alert(data.msg);
                                    window.location.reload();
                                }
                            }
                        });
                    } else {
                        alert('套餐价格未修改或小于最低价格！');
                    }
                });

            })();

        }
    });

});
