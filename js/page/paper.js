$(function(){
	// 库存报表数据展示
	var data = [
	    {
	    	agencyname: '1',
	    	usercode: '刘艳',
	    	iccid: '1064618474934',
	    	packagename: '1个月, 20M',
	    	indate: '2016-09-13 17:37',
	    	username: '',
	    	regdate: ''
	    },
	    {
	    	agencyname: '1',
	    	usercode: '刘艳',
	    	iccid: '1064618474934',
	    	packagename: '1个月, 20M',
	    	indate: '2016-09-13 17:37',
	    	username: '',
	    	regdate: ''
	    },
	    {
	    	agencyname: '1',
	    	usercode: '刘艳',
	    	iccid: '1064618474934',
	    	packagename: '1个月, 20M',
	    	indate: '2016-09-13 17:37',
	    	username: '',
	    	regdate: ''
	    },
	    {
	    	agencyname: '1',
	    	usercode: '刘艳',
	    	iccid: '1064618474934',
	    	packagename: '1个月, 20M',
	    	indate: '2016-09-13 17:37',
	    	username: '',
	    	regdate: ''
	    },
	    {
	    	agencyname: '1',
	    	usercode: '刘艳',
	    	iccid: '1064618474934',
	    	packagename: '1个月, 20M',
	    	indate: '2016-09-13 17:37',
	    	username: '',
	    	regdate: ''
	    },
	    {
	    	agencyname: '1',
	    	usercode: '刘艳',
	    	iccid: '1064618474934',
	    	packagename: '1个月, 20M',
	    	indate: '2016-09-13 17:37',
	    	username: '',
	    	regdate: ''
	    },
	    {
	    	agencyname: '1',
	    	usercode: '刘艳',
	    	iccid: '1064618474934',
	    	packagename: '1个月, 20M',
	    	indate: '2016-09-13 17:37',
	    	username: '',
	    	regdate: ''
	    },
	    {
	    	agencyname: '1',
	    	usercode: '刘艳',
	    	iccid: '1064618474934',
	    	packagename: '1个月, 20M',
	    	indate: '2016-09-13 17:37',
	    	username: '',
	    	regdate: ''
	    },
	    {
	    	agencyname: '1',
	    	usercode: '刘艳',
	    	iccid: '1064618474934',
	    	packagename: '1个月, 20M',
	    	indate: '2016-09-13 17:37',
	    	username: '',
	    	regdate: ''
	    },
	    {
	    	agencyname: '1',
	    	usercode: '刘艳',
	    	iccid: '1064618474934',
	    	packagename: '1个月, 20M',
	    	indate: '2016-09-13 17:37',
	    	username: '',
	    	regdate: ''
	    },
	    {
	    	agencyname: '1',
	    	usercode: '刘艳',
	    	iccid: '1064618474934',
	    	packagename: '1个月, 20M',
	    	indate: '2016-09-13 17:37',
	    	username: '',
	    	regdate: ''
	    },
	    {
	    	agencyname: '1',
	    	usercode: '刘艳',
	    	iccid: '1064618474934',
	    	packagename: '1个月, 20M',
	    	indate: '2016-09-13 17:37',
	    	username: '',
	    	regdate: ''
	    },
	    {
	    	agencyname: '1',
	    	usercode: '刘艳',
	    	iccid: '1064618474934',
	    	packagename: '1个月, 20M',
	    	indate: '2016-09-13 17:37',
	    	username: '',
	    	regdate: ''
	    },
	    {
	    	agencyname: '1',
	    	usercode: '刘艳',
	    	iccid: '1064618474934',
	    	packagename: '1个月, 20M',
	    	indate: '2016-09-13 17:37',
	    	username: '',
	    	regdate: ''
	    },
	    {
	    	agencyname: '1',
	    	usercode: '刘艳',
	    	iccid: '1064618474934',
	    	packagename: '1个月, 20M',
	    	indate: '2016-09-13 17:37',
	    	username: '',
	    	regdate: ''
	    },
	];

	var str = '';
	for(var i = 0; i < data.length; i++) {
		var num = i + 1;
		str += '<tr>' +
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
});