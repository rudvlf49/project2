<script>
        $(function(){
            $('.mainMenu>li').mouseover(function(){
                $(this).children('.subMenu').stop().slideDown();
                
            });
            $('.mainMenu>li').mouseleave(function(){
                $(this).children('.subMenu').stop().slideUp();
                
            });
            
            
            
            
            
        });
</script>