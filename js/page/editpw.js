$(function(){
	$('.editpwBtn').click(function(){
		if($('.b_pwInp').val() == '') {
			alert('请输入原始密码');
		} else {
			if($('.n_pwInp').val() == '') {
				alert('请输入新密码');
			} else {
				if($('.a_pwInp').val() == '') {
					alert('请再次输入新密码');
				} else {
					if( $('.n_pwInp').val() != $('.a_pwInp').val() ) {
						alert('两次输入密码不一致');
					} else {
						$.ajax({
							type: 'POST',
							url: 'agency/setpwd',
							data: {
								'oldpwd': $('.b_pwInp').val(),
								'newpwd': $('.n_pwInp').val()
							},
							success: function(data){
								if(data.status == 1) {
									alert(data.msg);
									window.location.reload();
								} else {
									alert(data.msg);
									window.location.reload();
								}
							}
						});
					}
				}
			}
		}
	});
});
