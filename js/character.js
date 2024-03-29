$(document).ready(function () {
    $(document).on('keydown',function (e){   
        if (!$('.me').is(':animated'))  {   
            // Hitboxes
            var meBot = (($(".me").position().top) + $(".me").height()+ $(".image-map").height());
            var meTop = ($(".me").position().top + $(".image-map").height());
            var meLeft = ($(".me").position().left);
            var meRight = $(".me").position().left + $('.me').width();
            var hitBlueTop = $(".hitbox-blue").position().top;
            var hitBlueBot = ($(".hitbox-blue").position().top + $(".hitbox-blue").height());
            var hitBlueLeft = $(".hitbox-blue").position().left;
            var hitBlueRight = $(".hitbox-blue").position().left + $(".hitbox-blue").width();
            var hitGreenTop = $(".hitbox-green").position().top;
            var hitGreenBot = ($(".hitbox-green").position().top + $(".hitbox-green").height());
            var hitGreenLeft = $(".hitbox-green").position().left;
            var hitGreenRight = $(".hitbox-green").position().left + $(".hitbox-green").width();
            var hitRedTop = $(".hitbox-red").position().top;
            var hitRedBot = ($(".hitbox-red").position().top + $(".hitbox-red").height());
            var hitRedLeft = $(".hitbox-red").position().left;
            var hitRedRight = $(".hitbox-red").position().left + $(".hitbox-red").width();
            var hitOrangeTop = $(".hitbox-orange").position().top;
            var hitOrangeBot = ($(".hitbox-orange").position().top + $(".hitbox-orange").height());
            var hitOrangeLeft = $(".hitbox-orange").position().left;
            var hitOrangeRight = $(".hitbox-orange").position().left + $(".hitbox-orange").width();
            var hitPurpleTop = $(".hitbox-purple").position().top;
            var hitPurpleBot = ($(".hitbox-purple").position().top + $(".hitbox-purple").height());
            var hitPurpleLeft = $(".hitbox-purple").position().left;
            var hitPurpleRight = $(".hitbox-purple").position().left + $(".hitbox-purple").width();
            var hitHouseTop = $(".hitbox-house").position().top;
            var hitHouseBot = ($(".hitbox-house").position().top + $(".hitbox-house").height());
            var hitHouseLeft = $(".hitbox-house").position().left;
            var hitHouseRight = $(".hitbox-house").position().left + $(".hitbox-house").width();

            var hitPantaiKiriTop = $(".hitbox-pantai-kiri").position().top;
            var hitPantaiKiriBot = ($(".hitbox-pantai-kiri").position().top + $(".hitbox-pantai-kiri").height());
            var hitPantaiKiriLeft = $(".hitbox-pantai-kiri").position().left;
            var hitPantaiKiriRight = $(".hitbox-pantai-kiri").position().left + $(".hitbox-pantai-kiri").width();
            var hitPantaiKananTop = $(".hitbox-pantai-kanan").position().top;
            var hitPantaiKananBot = ($(".hitbox-pantai-kanan").position().top + $(".hitbox-pantai-kanan").height());
            var hitPantaiKananLeft = $(".hitbox-pantai-kanan").position().left;
            var hitPantaiKananRight = $(".hitbox-pantai-kanan").position().left + $(".hitbox-pantai-kanan").width();

            switch(e.which){
                case 37: //left arrow key
                    if(meLeft > 0 && //Checks wether .me is in left most screen
                        ((( meTop > hitBlueBot) || ( meBot < hitBlueTop)) || ((meLeft-20 > hitBlueRight) || (meRight < hitBlueLeft))) && //collision check with blue hitbox
                        ((( meTop > hitGreenBot) || ( meBot < hitGreenTop)) || ((meLeft-20 > hitGreenRight) || (meRight < hitGreenLeft))) && //collision check with green hitbox
                        ((( meTop > hitRedBot) || ( meBot < hitRedTop)) || ((meLeft-20 > hitRedRight) || (meRight < hitRedLeft))) && //collision check with red hitbox
                        ((( meTop > hitOrangeBot) || ( meBot < hitOrangeTop)) || ((meLeft-20 > hitOrangeRight) || (meRight < hitOrangeLeft))) && //collision check with orange hitbox
                        ((( meTop > hitPurpleBot) || ( meBot < hitPurpleTop)) || ((meLeft-20 > hitPurpleRight) || (meRight < hitPurpleLeft))) && //collision check with purple hitbox
                        ((( meTop > hitHouseBot) || ( meBot < hitHouseTop)) || ((meLeft-20 > hitHouseRight) || (meRight < hitHouseLeft))) && //collision check with house hitbox
                        ((( meTop > hitPantaiKiriBot) || ( meBot < hitPantaiKiriTop)) || ((meLeft-20 > hitPantaiKiriRight) || (meRight < hitPantaiKiriLeft))) && //collision check with pantai Kiri hitbox
                        ((( meTop > hitPantaiKananBot) || ( meBot < hitPantaiKananTop)) || ((meLeft-20 > hitPantaiKananRight) || (meRight < hitPantaiKananLeft))) //collision check with pantai Kanan hitbox
                    ){ 
                        $('.sprite-left').css("opacity", 1);
                        $('.sprite-right').css("opacity", 0);
                        $('.sprite-up').css("opacity", 0);
                        $('.sprite-down').css("opacity", 0);
                        $('.me').stop().animate({
                            left: '-=20'
                        }, 100, 'linear'); 
                    }
                    break;
                case 38: //up arrow key
                    if((Math.abs($(".me").position().top)<$(".image-map").height()) && //Checks wether .me is in top most screen
                        ((( meTop-20 > hitBlueBot) || ( meBot < hitBlueTop)) || ((meLeft > hitBlueRight) || (meRight < hitBlueLeft))) && //collision check with blue hitbox
                        ((( meTop-20 > hitGreenBot) || ( meBot < hitGreenTop)) || ((meLeft > hitGreenRight) || (meRight < hitGreenLeft))) && //collision check with green hitbox
                        ((( meTop-20 > hitRedBot) || ( meBot < hitRedTop)) || ((meLeft > hitRedRight) || (meRight < hitRedLeft))) && //collision check with ref hitbox
                        ((( meTop-20 > hitOrangeBot) || ( meBot < hitOrangeTop)) || ((meLeft > hitOrangeRight) || (meRight < hitOrangeLeft))) &&//collision check with orange hitbox
                        ((( meTop-20 > hitPurpleBot) || ( meBot < hitPurpleTop)) || ((meLeft > hitPurpleRight) || (meRight < hitPurpleLeft))) && //collision check with purple hitbox
                        ((( meTop-20 > hitHouseBot) || ( meBot < hitHouseTop)) || ((meLeft > hitHouseRight) || (meRight < hitHouseLeft))) && //collision check with house hitbox
                        ((( meTop-20 > hitPantaiKiriBot) || ( meBot < hitPantaiKiriTop)) || ((meLeft > hitPantaiKiriRight) || (meRight < hitPantaiKiriLeft))) && //collision check with pantai kiri hitbox
                        ((( meTop-20 > hitPantaiKananBot) || ( meBot < hitPantaiKananTop)) || ((meLeft > hitPantaiKananRight) || (meRight < hitPantaiKananLeft))) //collision check with pantai kanan hitbox
                    ){
                        $('.sprite-left').css("opacity", 0);
                        $('.sprite-right').css("opacity", 0);
                        $('.sprite-up').css("opacity", 1);
                        $('.sprite-down').css("opacity", 0);
                        $('.me').stop().animate({
                            top: '-=20'
                        }, 100, 'linear'); 
                    }
                    break;
                case 39://right arrow key
                    if(meRight < $(".image-map").width() && //Checks wether .me is in right most screen
                        ((( meTop > hitBlueBot) || ( meBot < hitBlueTop)) || ((meLeft > hitBlueRight) || (meRight+20 < hitBlueLeft))) && //collision check with blue hitbox
                        ((( meTop > hitGreenBot) || ( meBot < hitGreenTop)) || ((meLeft > hitGreenRight) || (meRight+20 < hitGreenLeft))) && //collision check with green hitbox
                        ((( meTop > hitRedBot) || ( meBot < hitRedTop)) || ((meLeft > hitRedRight) || (meRight+20 < hitRedLeft))) && //collision check with red hitbox
                        ((( meTop > hitOrangeBot) || ( meBot < hitOrangeTop)) || ((meLeft > hitOrangeRight) || (meRight+20 < hitOrangeLeft))) && //collision check with orange hitbox
                        ((( meTop > hitPurpleBot) || ( meBot < hitPurpleTop)) || ((meLeft > hitPurpleRight) || (meRight+20 < hitPurpleLeft))) && //collision check with purple hitbox
                        ((( meTop > hitHouseBot) || ( meBot < hitHouseTop)) || ((meLeft > hitHouseRight) || (meRight+20 < hitHouseLeft))) && //collision check with house hitbox
                        ((( meTop > hitPantaiKiriBot) || ( meBot < hitPantaiKiriTop)) || ((meLeft > hitPantaiKiriRight) || (meRight+20 < hitPantaiKiriLeft))) && //collision check with pantai kiri hitbox
                        ((( meTop > hitPantaiKananBot) || ( meBot < hitPantaiKananTop)) || ((meLeft > hitPantaiKananRight) || (meRight+20 < hitPantaiKananLeft))) //collision check with pantai kanan hitbox
                    ){
                        $('.sprite-left').css("opacity", 0);
                        $('.sprite-right').css("opacity", 1);
                        $('.sprite-up').css("opacity", 0);
                        $('.sprite-down').css("opacity", 0);
                        $('.me').stop().animate({
                            left: '+=20'
                        }, 100, 'linear'); 
                    }
                    break;
                case 40:  //bottom arrow key
                    if((($(".me").position().top+$('.me').height()+40)<0) && //Checks wether .me is in bottom most screen
                        ((( meTop > hitBlueBot) || ( meBot+20 < hitBlueTop)) || ((meLeft > hitBlueRight) || (meRight < hitBlueLeft))) && //collision check with blue hitbox
                        ((( meTop > hitGreenBot) || ( meBot+20 < hitGreenTop)) || ((meLeft > hitGreenRight) || (meRight < hitGreenLeft))) && //collision check with green hitbox
                        ((( meTop > hitRedBot) || ( meBot+20 < hitRedTop)) || ((meLeft > hitRedRight) || (meRight < hitRedLeft))) && //collision check with red hitbox
                        ((( meTop > hitOrangeBot) || ( meBot+20 < hitOrangeTop)) || ((meLeft > hitOrangeRight) || (meRight < hitOrangeLeft))) && //collision check with orange hitbox
                        ((( meTop > hitPurpleBot) || ( meBot+20 < hitPurpleTop)) || ((meLeft > hitPurpleRight) || (meRight < hitPurpleLeft))) &&//collision check with purple hitbox
                        ((( meTop > hitHouseBot) || ( meBot+20 < hitHouseTop)) || ((meLeft > hitHouseRight) || (meRight < hitHouseLeft))) && //collision check with house hitbox
                        ((( meTop > hitPantaiKiriBot) || ( meBot+20 < hitPantaiKiriTop)) || ((meLeft > hitPantaiKiriRight) || (meRight < hitPantaiKiriLeft))) && //collision check with pantai kiri hitbox
                        ((( meTop > hitPantaiKananBot) || ( meBot+20 < hitPantaiKananTop)) || ((meLeft > hitPantaiKananRight) || (meRight < hitPantaiKananLeft))) //collision check with pantai kanan hitbox
                    ){ 
                        $('.sprite-left').css("opacity", 0);
                        $('.sprite-right').css("opacity", 0);
                        $('.sprite-up').css("opacity", 0);
                        $('.sprite-down').css("opacity", 1);
                        $('.me').stop().animate({
                            top: '+=20'
                        }, 100, 'linear');
                    }
                    break;
            }
        }
      })
});