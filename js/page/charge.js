/**
 * Created by Administrator on 2016/11/1.
 */
function search() {
    $.ajax({
        url:'user/charges',
        type:'post',
        data:{
            "searchkey":$("select[name='field_k'] option:selected").val(),
            "inputvalue":$("#inp").val(),
            "agencyname":null,//$("input[name='agent_id'] option:selected").text(),
            "startdate":$("#start_time").val(),
            "enddate":$("#end_time").val()
        },/*传递到后台的参数*/
        datatype:'json',/*指定返回数据类型*/
        success:function (data) {
            var str1='';
            $('.data_table tbody').empty();
            $('.pages').empty();
            $.each(data.datas,function (index,comment) {
            	//格式化时间
            	var chargedate = new Date(comment.chargedate).format("yyyy-MM-dd HH:mm:ss");
            	
                str1 += '<tr  align="center">'+
                    '<td>'+comment.usercode+'</td>'+
                    '<td>'+comment.username+'</td>'+
                    '<td>'+comment.agencyname+'</td>'+
                    '<td>'+comment.chargecanal+'</td>'+
                    '<td>'+comment.chargeway+'</td>'+
                    '<td>'+comment.packagename+'</td>'+
                    '<td>'+comment.price+'</td>'+
                    '<td>'+chargedate+'</td>'+
                    '<td>'+comment.cardstatus+'</td>'+
                    '<td>'+comment.orderstatus+'</td>'+
                    '<td>'+'<div style="width: 110px;height: 24px;position: relative;">' +
                    '<ul class="action_ul"><li><a href="">'+'查流量'+'</a></li></div> ' +'</td>'+
                    '</tr>'
            })
            $('.data_table ').append(str1);
            var str2='共'+data.total+'条，50条/页';
            $('.pages').append(str2);
        }
    })
}





$.ajax({
    url:'user/charges',
    type:'post',
    datatype:'json',/*指定返回数据类型*/
    success:function (data) {
        var str1='';
        $.each(data.datas,function (index,comment) {
        	
        	//格式化时间
        	var chargedate = new Date(comment.chargedate).format("yyyy-MM-dd HH:mm:ss");
        	
            str1 += '<tr  align="center">'+
                '<td>'+comment.usercode+'</td>'+
                '<td>'+comment.username+'</td>'+
                '<td>'+comment.agencyname+'</td>'+
                '<td>'+comment.chargecanal+'</td>'+
                '<td>'+comment.chargeway+'</td>'+
                '<td>'+comment.packagename+'</td>'+
                '<td>'+comment.price+'</td>'+
                '<td>'+chargedate+'</td>'+
                '<td>'+comment.cardstatus+'</td>'+
                '<td>'+comment.orderstatus+'</td>'+
                '<td>'+'<div style="width: 110px;height: 24px;position: relative;">' +
                '<ul class="action_ul"><li><a href="">'+'查流量'+'</a></li></div> ' +'</td>'+
                '</tr>'
        })
        $('.data_table ').append(str1);
        var str2='共'+data.total+'条，50条/页';
        $('.pages').append(str2);
    }
}
)

/*选择代理商*/
/*var a=['xia1','xia2','xia3','xia4'];
var str3='';
for(i=0;i<a.length;i++){
    str3+='<option value='+i+'>'+a[i]+'</option>'
}
$('.agent_name').append(str3);*/

$.ajax({
    url:'http://rap.taobao.org/mockjsdata/9611/agency/getagencyname',/*请求地址*/
    type:'post',
    datatype:'string',/*指定返回数据类型*/
    success:function (data) {
        var str3='';
        $each(data,function (index,comment) {
            str3+='<option value='+index+'>'+comment+'</option>'
        })
        $('.agent_name').append(str3);
    }
})








/*var a=[{"userId":"1000","userCode":"1234567890","userName":"张三","userPhone":"111111111",
    "regDate":"11111","agencyName":"111111","regCannal":"111111"},
    {"userId":"1001","userCode":"1234567891","userName":"lisi","userPhone":"111111111",
        "regDate":"11111","agencyName":"111111","regCannal":"111111"},
]
var str='';
for(i=0;i<a.length;i++){
    str += '<tr  align="center">'+
        '<td>'+a[i].userId+'</td>'+
        '<td>'+a[i].userCode+'</td>'+
        '<td>'+a[i].userName+'</td>'+
        '<td>'+a[i].userPhone+'</td>'+
        '<td>'+a[i].regDate+'</td>'+
        '<td>'+a[i].agencyName+'</td>'+
        '<td>'+a[i].regCannal+'</td>'+
        '<td>'+'<div style="width: 110px;height: 24px;position: relative;">' +
        '<ul class="action_ul"><li><a href="">'+'查流量'+'</a></li></div> ' +'</td>'+
        '</tr>'
}
$('.data_table ').append(str);*/
$('tr').hover(
    function () {
        $(this).addClass('mouseOn')
    },
    function () {
        $(this).removeClass('mouseOn')
    }
)
$('.action_ul').hover(
    function () {
        $(this).addClass('action_ul_on')
    },
    function () {
        $(this).removeClass('action_ul_on')
    }
)
/*var b=a.length;
var str2='共'+b+'条，50条/页';
$('.pages').append(str2);*/

//        laydate({
//            elem: '#start_time'
//        })
