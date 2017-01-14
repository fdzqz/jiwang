$(function(){
<<<<<<< HEAD
	// 库存报表数据展示
	// var data = [
	//     {
	//     	agencyname: '1',
	//     	usercode: '刘艳',
	//     	iccid: '1064618474934',
	//     	packagename: '1个月, 20M',
	//     	indate: '2016-09-13 17:37',
	//     	username: '',
	//     	regdate: ''
	//     }
	// ];
	// var str = '';
	// for(var i = 0; i < data.length; i++) {
	// 	var num = i + 1;
	// 	str += '<tr>' +
	//            '    <td>' + num + '</td>' +
	//            '    <td>' + data[i].agencyname + '</td>' +
	//            '    <td>' + data[i].usercode + '</td>' +
	//            '    <td>' + data[i].iccid + '</td>' +
	//            '    <td>' + data[i].packagename + '</td>' +
	//            '    <td>' + data[i].indate + '</td>' +
	//            '    <td>' + data[i].username + '</td>' +
	//            '    <td>' + data[i].regdate + '</td>' +
	//            '</tr>';
	// }
	// $('.dataShowBox').append(str);

=======
	
>>>>>>> efdecd54804cd9fe5da848f8e2f9b0c4116e45dd
    // 库存报表数据获取
	$.ajax({
		type: 'POST',
		url: 'card/stock',
		success: function(data){
			//ert(data.datas[1].agencyname);
			var str = '';
			$(data.datas).each(function(index,obj){
				
				//格式化时间
	        	var indate = new Date(obj.indate).format("yyyy-MM-dd HH:mm:ss");
	        	var regdate = new Date(obj.regdate).format("yyyy-MM-dd HH:mm:ss");
				
				var num = index+1;
				str += '<tr>' +
<<<<<<< HEAD
			           '    <td>' + num + '</td>' +
			           '    <td>' + data[i].agencyname + '</td>' +
			           '    <td>' + data[i].usercode + '</td>' +
			           '    <td>' + data[i].iccid + '</td>' +
			           '    <td>' + data[i].packagename + '</td>' +
			           '    <td>' + data[i].indate + '</td>' +
			           '    <td>' + data[i].username + '</td>' +
			           '    <td>' + data[i].regdate + '</td>' +
			           '</tr>';
			}
			$('.dataShowBox').append(str);
=======
		           '    <td>' + num + '</td>' +
		           '    <td>' + obj.agencyname + '</td>' +
		           '    <td>' + obj.usercode + '</td>' +
		           '    <td>' + obj.iccid + '</td>' +
		           '    <td>' + obj.packagename + '</td>' +
		           '    <td>' + indate + '</td>' +
		           '    <td>' + obj.username + '</td>' +
		           '    <td>' + regdate + '</td>' +
		           '</tr>';
					
			});
			
			
			$('.dataShowBox').append(str); 
>>>>>>> efdecd54804cd9fe5da848f8e2f9b0c4116e45dd
		}
	});
});
