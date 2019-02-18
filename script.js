window.onload=function(){
  //email to be used and checked as bizEmailInput.value
  const bizEmailInput = document.getElementById('email-id');
  function ValidateEmail(mail){
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
      $(".biz-input-border").toggleClass("biz-input-border sucess-border")
      return true
    };
    $(".biz-input-border").toggleClass("biz-input-border fail-border");
    $(".hide-email-error").toggleClass("hide-email-error email-error");
    return false
  };
  // $('select').click(function(){
  //   ValidateEmail(bizEmailInput.value)
  // })

  let bizSizeInput = 0;

  $('select').change(function() {
    bizSizeInput=$(this).val();
  });

  let radioAns = 0; 
  $(":radio[name=importance]").change(function() {
    radioAns = this.value
  });


  $(".submit-btn").click(function(e){
    e.preventDefault();
    if(ValidateEmail(bizEmailInput.value) == false){
      return false
    }else if(bizSizeInput==0){
      $(".hide-size-error").toggleClass("hide-size-error size-error");
      return false
    }else if(radioAns === 0){
      $(".hide-importance-error").toggleClass("hide-importance-error importance-error");
      return false
    }

    $('#biz-form').submit()

      
  })

$('#biz-form').submit(function(e){
  //prevent the normal submission of the form
      e.preventDefault();

      const targetImportance = [4, 6, 8];

      // clears out the form to render the qualified and unqualified responce
      $('#biz-detail-form').remove();

      
      // =========note========
      // this compares the values returned with the unqualified requierments
      if(bizSizeInput == 1 || targetImportance.includes(Number(radioAns))){
        // replace the text 
        $("#book-demo-title").html('<h1>Oh no!<br/>All our consultants are busy</h1>');
        $("#book-demo-text").html('<p class=\'unqualified-lead-text\'>We\'ll let you know when the next one is available.</p>');
        // change icons and classes to change size of containers
        $("i").toggleClass( "fa-calendar fa-calendar-times")
        $(".book-a-demo").toggleClass("book-a-demo unqualified-container")
        $("h1").toggleClass("book-demo-title unqualified-lead-title")
        $("p").toggleClass("book-demo-text unqualified-lead-text")
      }
      else{
        // replace the text 
        $("#book-demo-title").html('<h1 class=\'qualified-lead-title\'> Awesome! <br/> We\'ll contact you shortly </h1>');
        $("#book-demo-text").html('<p class=\'qualified-lead-text\'>We\'ll send you an email with available times to meet.</p>');
        // change icons and classes to change size of containers
        $(".book-a-demo").toggleClass("book-a-demo qualified-container");
        $("h1").toggleClass("book-demo-title qualified-lead-title")
        $("i").toggleClass( "fa-calendar fa-calendar-check")
      }
})

  // document.querySelector('form.biz-detail-form').addEventListener
  // ('submit', function (e) {
      
  //     //prevent the normal submission of the form
  //     e.preventDefault();


  //     const targetBizSize = 0;
  //     const targetImportance = [1, 5, 7];

  //     // clears out the form to render the qualified and unqualified responce
  //     $('#biz-detail-form').remove();

      
  //     // =========note========
  //     // this compares the values returned with the unqualified requierments
  //     if(bizSizeInput == 0 || targetImportance.includes(Number(radioAns))){
  //       // replace the text 
  //       $("#book-demo-title").html('<h1>Oh no!<br/>All our consultants are busy</h1>');
  //       $("#book-demo-text").html('<p class=\'unqualified-lead-text\'>We\'ll let you know when the next one is available.</p>');
  //       // change icons and classes to change size of containers
  //       $("i").toggleClass( "fa-calendar fa-calendar-times")
  //       $(".book-a-demo").toggleClass("book-a-demo unqualified-container")
  //       $("h1").toggleClass("book-demo-title unqualified-lead-title")
  //       $("p").toggleClass("book-demo-text unqualified-lead-text")
  //     }
  //     else{
  //       // replace the text 
  //       $("#book-demo-title").html('<h1 class=\'qualified-lead-title\'> Awesome! <br/> We\'ll contact you shortly </h1>');
  //       $("#book-demo-text").html('<p class=\'qualified-lead-text\'>We\'ll send you an email with available times to meet.</p>');
  //       // change icons and classes to change size of containers
  //       $(".book-a-demo").toggleClass("book-a-demo qualified-container");
  //       $("h1").toggleClass("book-demo-title qualified-lead-title")
  //       $("i").toggleClass( "fa-calendar fa-calendar-check")
  //     }
 
  // });
}
