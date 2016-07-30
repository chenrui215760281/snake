$(function(){
	for(var i=0;i<20;i++){
		for(var j=0;j<20;j++){
		var g=Math.floor(Math.random()*30);
		var b=Math.floor(Math.random()*50+155);

      $('.paizi').addClass('animate');
   $(document).on('click',function(){
        $('.paizi').addClass('huiqu');
      })
   // $('.changjing').addClass('animate');
   $(document).on('click',function(){
        $('.changjing').addClass('chulai');
      })

		$('<div>').addClass('block').attr('id',i+'_'+j)
		.css({backgroundColor:'rgba(0,'+g+','+b+',0.9)'})
		.appendTo('.changjing')
		}
		
	}
	var she=[
      {x:0,y:0},
      {x:0,y:1},
      {x:0,y:2}
	];
     var shiwu={x:'',y:''};


    // var zhaodian = function(dian){
    //       return $('#'+'dian'.x+'_'+'dian'.y);
    //  }

    // console.log(zhaodian(she));

    var init = function(){
          for(var i=0;i<she.length;i++){
             $('#'+she[i].x+'_'+she[i].y)
          .addClass('she');
        }
          $('#'+shiwu.x+'_'+shiwu.y).addClass('shiwu')
     }
     init();
	
	function fangshiwu(){
		var a=Math.floor(Math.random()*20);
		var b=Math.floor(Math.random()*20);
       $('#'+a+'_'+b).addClass('shiwu');
        return {x:a,y:b};
	}
	var shiwu=fangshiwu();
	var fangxiang='you';
	move = function(){
		var jiutou=she[she.length-1];
          var xintou={x:jiutou.x,y:jiutou.y+1}

         if(xintou.y>19||xintou.y<0||xintou.x<0||xintou.x>19){
          zanting();
          return;
         }

		if(fangxiang==='you'){
			var xintou={x:jiutou.x,y:jiutou.y+1}
		}
		if(fangxiang==='zuo'){
			var xintou={x:jiutou.x,y:jiutou.y-1}
		}
		if(fangxiang==='shang'){
			var xintou={x:jiutou.x-1,y:jiutou.y}
		}
		if(fangxiang==='xia'){
			var xintou={x:jiutou.x+1,y:jiutou.y}
		}

		she.push(xintou);
		$('#'+xintou.x+'_'+xintou.y).addClass('she');
		if(xintou.x===shiwu.x&&xintou.y===shiwu.y){
			$('#'+shiwu.x+'_'+shiwu.y).removeClass('shiwu');
			shiwu=fangshiwu();
		}else{
			var weiba=she.shift();
		$('#'+weiba.x+'_'+weiba.y).removeClass('she');
		}
		

	}
     var timeId;
     kaishi=function(){
     timeId=setInterval(move,200);

     }
     zanting=function(){
          clearInterval(timeId)
     }
     $(document).on('click',kaishi)
	$(document).on('keyup',function(e){
          e.preventDefault();
          var biao={
          	'zuo':37,
          	'you':39,
          	'shang':38,
          	'xia':40
          };

        

          if(Math.abs(e.keyCode-biao[fangxiang])===2){
          	return;
          }
      if(e.keyCode===37){
      	fangxiang='zuo'
      }
      if(e.keyCode===39){
      	fangxiang='you'
      }
      if(e.keyCode===38){
      	fangxiang='shang'
      }
      if(e.keyCode===40){
      	fangxiang='xia'
      }
	})

      
})