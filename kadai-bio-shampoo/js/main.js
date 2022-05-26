$('.slider').slick({
  arrows: false,
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    }
  ]
});

//fade
$('.animate-up').waypoint({
  handler:function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInUp');
      this.destroy();
    }
  },

  offset: '60%',
});

$('.animate-left').waypoint({
  handler:function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInLeft');
      this.destroy();
    }
  },

  offset: '60%',
});

$('.animate-right').waypoint({
  handler:function(direction) {
    if (direction === 'down') {
      $(this.element).addClass('animate__fadeInRight');
      this.destroy();
    }
  },

  offset: '60%',
});


// フォーム入力欄
$('#submit_button').on(`click`,function(e){
  var username = $('#username').val();
  var userkana = $('#userkana').val();
  var postal = $('#postal').val();
  var pref = $('#pref').val();
  var addressLevel1 = $('#addressLevel1').val();
  var tel = $('#tel').val();
  var email = $('#email').val();
  var pw = $('#pw').val()
  var paymentRadio = $('#paymentRdio').val();
  var check = $(".check").val();
  
  
  
  var error_text = '';

  if (username.trim() === '') {
    error_text = 'お名前を入力してください';
  }
  else if (userkana.trim() === '') {
    error_text = 'フリガナを入力してください';
  }
  else if (!userkana.match(/^[ァ-ヴ　]+$/) === '') {
    error_text = 'フリガナには全角のカタカナとスペースのみを入力してください';
  }
  else if (postal.trim() === '') {
    error_text = '郵便番号を入力してください'
  }

  else if (pref.trim() === '') {
    error_text = '都道府県を選んでください'
  }

  else if (addressLevel1.trim() === '') {
    error_text = '市区町村を入力してください';
  }
  else if (!addressLevel1.match(/^[^ -~｡-ﾟ]+$/)){
    error_text = '市区町村は全角で入力してください';
  }

  else if (tel.trim() === '') {
    error_text = '電話番号を入力してください';
  }
  else if (!tel.match(/[0-9]{10,11}$/)) {
    error_text = '電話番号を10から11桁で入力してください';
  }
  else if (email.trim() === '') {
    error_text = 'メールアドレスを入力してください';
  }
  else if (!email.match(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)) {
    error_text = 'メールアドレスを正しい書式で入力してください';
  }
  else if (!pw.match(/[a-zA-Z0-9]{4,}$/)) {
    error_text = '４桁以上のパスワードを入力してください';
  }

   else if ($('input.check:checked').length == 0) {
    error_text = 'お支払方法を選択してください';
  }


  $('#form_has_error').text(error_text);

  if (error_text === '') {

  }
});
