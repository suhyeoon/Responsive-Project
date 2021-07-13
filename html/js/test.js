<style>

#gnb_all{width:100px;height:100px; background:red; display:none;}
.gnb_menu_btn{cursor:pointer;}

</style>

 

<div class="gnb_menu_btn">버튼</div>
<div id="gnb_all">something I want to show</div>

 

<script>//닫기 버튼 없이도 토글하면 사라지고, 다른영역 클릭시 사라지는 전체보기 메뉴
  $(document).ready(function(){
      $('.gnb_menu_btn').click(function(event){
          event.stopPropagation();
           $("#gnb_all").slideToggle("fast");
      });
      $("#gnb_all").on("click", function (event) {
          event.stopPropagation();
      });
  });
  $(document).on("click", function () {
      $("#gnb_all").hide();
  });
    </script>