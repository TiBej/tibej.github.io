    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////
    function font_size_determination(block,font_size) {
        $(block).css('font-size', font_size);
        let block_wrap_height = $(block).height();
        let block_wrap_width = $(block).width();
        let block_height = $(block + ' > *').height();
        let block_width = $(block + ' > *').width();

        if (block_wrap_height < block_height || block_wrap_width < block_width) {
            font_size = font_size * 0.9;
            return font_size_determination(block,font_size);
        } else {
            return font_size;
        }
    }
    ////////////////////////////////////////////////////////////
    function addMCircle(ARR,i) {
        let htmlTemp = $( "#multiCircles ." + ARR[0][1] ).html();
        let textBlockWidth = 2* ARR[0][0].r/Math.sqrt(2);
        $( "#multiCircles ." + ARR[0][1]  ).html( htmlTemp + `
            <g class="classMC ${ARR[0][2]} ${ARR[i][1]}">
                <g class="circle_sub_line ${ARR[i][1]}_sub_line">
                </g>
                <g class="circle_sub_item ${ARR[i][1]}_sub_item">
                </g>
                <g class="clickTargetM">
                    <circle
                        class=""
                        cx="0"
                        cy="0"
                        r="${ ARR[0][0].r}"
                        fill="${ ARR[0][0].fill}"
                        stroke="${ ARR[0][0].stroke}"
                        stroke-width="${ ARR[0][0].strokeWidth}" />
                    <foreignObject
                        class=""
                        x="${-textBlockWidth*2/3}"
                        y="${-textBlockWidth*1/3}"
                        width="${textBlockWidth  + textBlockWidth*1/3}"
                        height="${textBlockWidth - textBlockWidth*1/3}">
                        <div
                            class="circle-text-wrap"
                            xmlns="http://www.w3.org/1999/xhtml">
                            <span class="circle-text" style="color:${paramMC.colorText}">${ARR[i][0]}</span>
                        </div>
                    </foreignObject>
                </g>
                <g class="clickTargetM nav_circle">
                    <circle
                        class=""
                        cx="0"
                        cy="0"
                        r="${ ARR[0][0].r}"
                        fill="${ ARR[0][0].fill}"
                        stroke="${ ARR[0][0].stroke}"
                        stroke-width="${ ARR[0][0].strokeWidth}" />
                    <foreignObject
                        class=""
                        x="${-textBlockWidth*2/3}"
                        y="${-textBlockWidth*1/3}"
                        width="${textBlockWidth  + textBlockWidth*1/3}"
                        height="${textBlockWidth - textBlockWidth*1/3}">
                        <div
                            class="circle-text-wrap"
                            xmlns="http://www.w3.org/1999/xhtml">
                            <span class="circle-text" style="color:${paramMC.colorText}">${ARR[i][0]}</span>
                        </div>
                    </foreignObject>
                </g>
            </g>
        ` );
        font_size_determination(`.${ARR[i][1]} .circle-text-wrap`,25)
    }
    //////////////////////////////////////////////
    function addSCircle(ARR,i) {
        let textBlockWidth = 2* ARR[0][0].r/Math.sqrt(2);
        let htmlTemp = $( "#multiCircles ." + ARR[0][2] + " ." + ARR[0][1] ).html();
        $( "#multiCircles ." + ARR[0][2] + " ." + ARR[0][1]).html( htmlTemp + `
            <g
                class="classSC classSC_item ${ARR[0][2]}_item ${ARR[i][1]}">
                <g class="circle_target_line ${ARR[i][1]}_target_line">
                </g>
                <g class="circle_target_item ${ARR[i][1]}_target_item">
                </g>
                <g class="clickTargetS">
                    <circle
                        class=""
                        cx="0"
                        cy="0"
                        r="${ ARR[0][0].r}"
                        fill="${ ARR[0][0].fill}"
                        stroke="${ ARR[0][0].stroke}"
                        stroke-width="${ ARR[0][0].strokeWidth}" />
                    <foreignObject
                        class=""
                        x="${-textBlockWidth*2/3}"
                        y="${-textBlockWidth*1/3}"
                        width="${textBlockWidth  + textBlockWidth*1/3}"
                        height="${textBlockWidth - textBlockWidth*1/3}">
                        <div
                            class="circle-text-wrap"
                            xmlns="http://www.w3.org/1999/xhtml">
                            <span class="circle-text" style="color:${paramSC.colorText}">${ARR[i][0]}</span>
                        </div>
                    </foreignObject>
                </g>
            </g>
        ` );
        htmlTemp = $(`.${ARR[0][2]} > .circle_sub_line`).html();
        $(`.${ARR[0][2]} > .circle_sub_line`).html( htmlTemp + `
             <line class="${ARR[i][1]}" fill="none" stroke="${ paramMC.colorLine}" stroke-width="${ paramMC.strokeWidthLine}" stroke-miterlimit="10" x1="0" y1="0" x2="0" y2="0"/>
        `)
        font_size_determination(`.${ARR[i][1]} .circle-text-wrap`,25)
    }
    //////////////////////////////////////////////
    function addTCircle(ARR,i) {
        let textBlockWidth = 1.8* ARR[0][0].r/Math.sqrt(2);
        let htmlTemp = $( "#multiCircles ." + ARR[0][3] + " ." + ARR[0][2] + " ." + ARR[0][1] ).html();
        $( "#multiCircles ." + ARR[0][3] + " ." + ARR[0][2] + " ." + ARR[0][1]  ).html( htmlTemp + `
            <g class="classTC classTC_target ${ARR[0][2]}_target ${ARR[i][1]}">
                <g class="">
                    <circle
                        class=""
                        cx="0"
                        cy="0"
                        r="${ ARR[0][0].r}"
                        fill="${ ARR[0][0].fill}"
                        stroke="${ ARR[0][0].stroke}"
                        stroke-width="${ ARR[0][0].strokeWidth}" />
                    <foreignObject
                        class=""
                        x="${-textBlockWidth*2/3}"
                        y="${-textBlockWidth*1/3}"
                        width="${textBlockWidth  + textBlockWidth*1/3}"
                        height="${textBlockWidth - textBlockWidth*1/3}">
                        <div
                            class="circle-text-wrap"
                            xmlns="http://www.w3.org/1999/xhtml">
                            <span class="circle-text" style="color:${paramTC.colorText}">${ARR[i][0]}</span>
                        </div>
                    </foreignObject>
                </g>
            </g>
        ` );
        htmlTemp = $(`.${ARR[0][3]} .${ARR[0][2]} > .circle_target_line`).html();
        $(`.${ARR[0][3]} .${ARR[0][2]} > .circle_target_line`).html( htmlTemp + `
              <line class="${ARR[i][1]}" fill="none" stroke="${ paramSC.colorLine}" stroke-width="${ paramSC.strokeWidthLine}" stroke-miterlimit="10" x1="0" y1="0" x2="0" y2="0"/>

        `)
        font_size_determination(`.${ARR[i][1]} .circle-text-wrap`,17.225)
    }

    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////

    for(let i = 1; i < textMC.length; i++){
        addMCircle(textMC,i);
    }
    for(let i = 0; i < textSC.length; i++){
        for(let k = 1; k < textSC[i].length; k++){
            addSCircle(textSC[i],k);
        }
    }
    for(let i = 0; i < textTC.length; i++){
        for(let k = 1; k < textTC[i].length; k++){
            addTCircle(textTC[i],k);
        }
    }
    
    let winWidth = $(window).width();
    function responsivBlock() {

        $('.main_animation_conteiner').css({"height":"auto"});

        if($(window).height() >= $(window).width() && $(window).width() <= 580){
            $('.main_animation_conteiner').css({"height":$('.main_animation_conteiner').width()*2});
        }
    }

    responsivBlock();
    $(window).resize(function () {
        if($(window).width() != winWidth){
            responsivBlock();
            winWidth = $(window).width();
        }
    })
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    function movePoint(timeMove,paretnClass,depthC,toX,toY,childS,childT){

        if(depthC == 'm'){
            let tl = gsap.timeline()
                .to(`.${paretnClass}`,{duration:timeMove,x:toX,y:toY,ease:'power1.inOut'})
            return tl;
        }

        if(depthC == 's'){
            if(childS == 0){
                let tl = gsap.timeline()
                    .to(`.${paretnClass} .circle_sub_item > *`,{duration:timeMove,x:0,y:0,ease:'power1.inOut'})
                    .to(`.${paretnClass} .circle_sub_line > *`,{duration:timeMove,attr:{x1:0,y1:0},ease:'power1.inOut'},'<')
                    .to('.classMC .nav_circle',{duration: timeMove,x:0,y:0,ease:'power1.inOut'},'<')
                return tl;
            } else {
                let tl = gsap.timeline()
                    .to(`.${paretnClass} .circle_sub_item > *:nth-child(${childS})`,{duration:timeMove,x:toX,y:toY,ease:'power1.inOut'})
                    .to(`.${paretnClass} .circle_sub_line > *:nth-child(${childS})`,{duration:timeMove,attr:{x1:toX,y1:toY},ease:'power1.inOut'},'<')
                return tl;
            }
        }

        if(depthC == 't'){
            if(childT == 0){
                let tl = gsap.timeline()
                    .to(`.${paretnClass} .circle_sub_item .circle_target_item > *`,{duration:timeMove,x:0,y:0,transformOrigin:'50% 50%',scale:1,ease:'power1.inOut'})
                    .to(`.${paretnClass} .circle_sub_item .circle_target_line > *`,{duration:timeMove,attr:{x1:0,y1:0},ease:'power1.inOut'},'<')
                return tl;
            } else {
                let tl = gsap.timeline()
                    .to(`.${paretnClass} .circle_sub_item > *:nth-child(${childS}) .circle_target_item > *:nth-child(${childT})`,{duration:timeMove,x:toX,y:toY,ease:'power1.inOut'})
                    .to(`.${paretnClass} .circle_sub_item > *:nth-child(${childS}) .circle_target_line > *:nth-child(${childT})`,{duration:timeMove,attr:{x1:toX,y1:toY},ease:'power1.inOut'},'<')
                return tl;
            }
        }
    }

    ////////////////////////////////////////////////////////////////////////////////


    function movel1(time,x,y){
        let tl = gsap.timeline()
        let activeIndex = $('.classMC.active').index() + 1;
        let activeNavY;

        if ($('.classMCcontainer > *').length % 2 == 0 ){
            tl.to('.classMCcontainer > *:nth-child(1)',{duration:time,x:x,y:y+(paramMC.r + otst/2),ease:'power1.inOut'},0)
                if(activeIndex == 1){activeNavY = y+(paramMC.r + otst/2)}
            tl.to('.classMCcontainer > *:nth-child(2)',{duration:time,x:x,y:y-(paramMC.r + otst/2),ease:'power1.inOut'},0)
                if(activeIndex == 2){activeNavY = y-(paramMC.r + otst/2)}
            let otstT = paramMC.r * 2 + otst;
            let otstTemp = otstT + paramMC.r + otst/2;
            for(let i = 3; i <= $('.classMCcontainer > *').length; i++){
                if(i%2 != 0){
                    tl.to('.classMCcontainer > *:nth-child('+i+')',{duration:time,x:x,y:(y+otstTemp),ease:'power1.inOut'},0)
                        if(activeIndex == i){activeNavY = (y+otstTemp)}
                }else{
                    tl.to('.classMCcontainer > *:nth-child('+i+')',{duration:time,x:x,y:(y-otstTemp),ease:'power1.inOut'},0)
                        if(activeIndex == i){activeNavY = (y-otstTemp)}
                    otstTemp += otstT;
                }
            }

        }else{
            tl.to('.classMCcontainer > *:nth-child(1)',{duration:time,x:x,y:y,ease:'power1.inOut'},0)
            let otstT = paramMC.r * 2 + otst;
            let otstTemp = otstT;
            for(let i = 2; i <= $('.classMCcontainer > *').length; i++){
                if(i%2 == 0){
                    tl.to('.classMCcontainer > *:nth-child('+i+')',{duration:time,x:x,y:(y+otstTemp),ease:'power1.inOut'},0)
                }else{
                    tl.to('.classMCcontainer > *:nth-child('+i+')',{duration:time,x:x,y:(y-otstTemp),ease:'power1.inOut'},0)
                    otstTemp += otstT;
                }
            }
        }

        if ($('.circle_main.active').hasClass('zero_sub')){
            tl.add(movePoint(time,'classMC.active','m',kf.width/2+paramMC.r,kf.cY,0,1),'>')
            tl.to('.classMC.active .nav_circle',{duration: time,x:(kf.xl1-kf.width/2-paramMC.r),y:activeNavY-kf.cY,ease:'power1.inOut'},'<')
        }
        else{
            tl.add(movePoint(time,'classMC.active','m',kf.xl2,kf.cY,0,1),'>')
            tl.to('.classMC.active .nav_circle',{duration: time,x:(kf.xl1-kf.xl2),y:activeNavY-kf.cY,ease:'power1.inOut'},'<')
        }


        // tl.add(movePoint(0.5,'classMC','m',activeIndex,0,0,0))
        return tl;
    }

    ////////////////////////////////////////////////////////////////////////////////

    function movel2(time){

        let tl = gsap.timeline()

        let tempSub = $('.classMC.active .circle_sub_item > *').length;
        let tempR = (tempSub * (2 * paramSC.r) + (otst*(tempSub-1)))/Math.PI;
        if(tempR < (paramMC.r + paramSC.r + otst)){
            tempR = paramMC.r + paramSC.r + otst;
        }
        if( tempSub % 2 != 0){tempSub++; console.log('hell') }

        let tempPov = 220/tempSub;
        let startGrad = 290;

        if($('.classMC.active .circle_sub_item .classSC').hasClass('active')){

            let activeIndex = $('.classMC.active .circle_sub_item .classSC.active').index() + 1;

            ////////////////////

            let tempTar = $('.classMC.active .circle_sub_item .classSC.active .circle_target_item  > *').length;
            let centPoint;
            if(tempTar <= 8){
                centPoint = tempR + (paramSC.r*2) + otst;
            }
            if(tempTar > 8){
                centPoint = tempR + (paramSC.r*2*(tempTar-8)) + otst;
            }
            if(centPoint > kf.xl2/2){
                centPoint = kf.xl2/2 + paramMC.r;
            }
            console.log(tempTar)
            console.log(centPoint)
            tl.add(movePoint(time,'classMC.active','s',-(centPoint),0,activeIndex,0),0)

            ////////////////////

            // if( tempSub % 2 != 0){startGrad -= tempPov/2; }

            for (let i = 1; i <= tempSub; i++){
                if(i!=activeIndex){
                    f = startGrad - (tempPov * i) + tempPov/2;
                    f = (Math.PI/180) * f;
                    let tempX = tempR*Math.cos(f);
                    let tempY = tempR*Math.sin(f);
                    tl.add(movePoint(time,'classMC.active','s',tempX,tempY,i,0),time/2)
                }
             tl.add(movel3(time,activeIndex,310),time)

            }
        }else{

            for (let i = 1; i <= tempSub; i++){
                f = startGrad - (tempPov * i) + tempPov/2;
                f = (Math.PI/180) * f;
                let tempX = tempR*Math.cos(f);
                let tempY = tempR*Math.sin(f);
                tl.add(movePoint(time,'classMC.active','s',tempX,tempY,i,0),0)
            }
        }
        return tl;
    }

    ////////////////////////////////////////////////////////////////////////////////

    function movel3(time,activeIndex,oborotCut){
        let tl = gsap.timeline()
        let tempTar = $('.classMC.active .circle_sub_item .classSC.active .circle_target_item  > *').length;
        let tempR = (tempTar * ( paramTC.r) + (otst*(tempTar-1)))/Math.PI;
        if(tempR < (paramMC.r + paramSC.r + otst)){
            tempR = paramTC.r + paramSC.r*2 + otst;
        }
        if(tempR > (kf.height/2 - (paramTC.r + paramSC.r + otst*2))){
            tempR = kf.height/2 -  otst*2;
        }
        if(tempR < (paramTC.r + otst*2)){
            tempR = (paramTC.r + otst*2);
        }


        let oborotCutTemp = (((paramTC.r*2) * tempTar) + (otst*(tempTar-1)))*180/(Math.PI*tempR);
        if(oborotCutTemp <= oborotCut){
            oborotCut = oborotCutTemp;
        }

        let tempPov = oborotCut/tempTar;
        let startGrad = 360 - (360 - oborotCut)/2;
        let tempLwidthPov = (Math.PI*tempR/180) * tempPov;

        let tempScaleKof = tempLwidthPov/(paramTC.r*2)-0.05;
        if(tempScaleKof > 1){tempScaleKof = 1}

        for (let i = 1; i <= tempTar; i++){
            f = startGrad - (tempPov * i) + tempPov/2;
            f = (Math.PI/180) * f;
            let tempX = tempR*Math.cos(f);
            let tempY = tempR*Math.sin(f);
            tl
                .to('.classMC.active .circle_sub_item .classSC.active .circle_target_item  > *',{duration:time,transformOrigin:'50% 50%',scale:tempScaleKof},0)
                .add(movePoint(time,'classMC.active','t',tempX,tempY,activeIndex,i),0)
        }

        return tl;
    }

    ////////////////////////////////////////////////////////////////////////////////
    let otst = 30;
    let kf = {
        width: $('#multiCircles').attr('width'),
        height: $('#multiCircles').attr('height'),
        cY: $('#multiCircles').attr('height')/2,
        xl1: $('#multiCircles').attr('width')-otst-paramMC.r,
        xl2: $('#multiCircles').attr('width')-otst*2-paramMC.r*4,
    }

    function offClick(){
        $('.main_animation_conteiner').css('pointer-events','none');
    }
    function onnClick(){
        $('.main_animation_conteiner').css('pointer-events','auto');
    }

    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////


    $('.clickTargetM').on('click', function(){
        offClick()

        if($(this).parent().hasClass('active')) {
            gsap.timeline({onComplete:function () {onnClick()}})
                .add(movePoint(0.5,'classMC','t',0,0,0,0))
                .add(movePoint(0.5,'classMC','s',0,0,0,0),'<')
                .add(startPos(),'<')


            $(this).parents('.circle_main').removeClass('active')
            $(this).removeClass('active')
            return 0;

        }
        if($(this).parent().hasClass('zero_sub')) {

            gsap.timeline()
                .add(movePoint(0.5,'classMC','t',0,0,0,0))
                .add(movePoint(0.5,'classMC','s',0,0,0,0),'<')

            $('.circle_main,.circle_main * ').removeClass('active')

            $(this).parents('.circle_main').addClass('active')
            $('.circle_main.active .zero_sub').addClass('active')
            $(this).addClass('active')

            gsap.timeline({onComplete:function () {onnClick()}})
                .add(movePoint(1,'classMC.active','s',0,0,0,0))
                .add(movel1(1,kf.xl1,kf.cY),'<')
                .add(movel3(1,1,360),'>')

            return 0;

        }
        else{
            gsap.timeline()
                .add(movePoint(0.5,'classMC','t',0,0,0,0))
                .add(movePoint(0.5,'classMC','s',0,0,0,0),'<')

            $('.circle_main,.circle_main * ').removeClass('active')

            $(this).parents('.circle_main').addClass('active')
            $(this).addClass('active')
            gsap.timeline({onComplete:function () {onnClick()}})
                .add(movePoint(1,'classMC.active','s',0,0,0,0))
                .add(movel1(1,kf.xl1,kf.cY),'<')
                .add(movel2(1),'>')

            return 0;
        }
    })
    /////////////////////////////////////////////////////////////////////



    $('.clickTargetS').on('click', function(){
        offClick()

         if($(this).parents('.circle_main').hasClass('active')) {

             if($(this).parents('.circle_sub_item').children().hasClass('active') == false) {

                 $(this).parents('.classSC_item').addClass('active')
                 $(this).addClass('active')

                 gsap.timeline({onComplete:function () {onnClick()}})
                     .add(movel2(1))
                 return 0;
             }

             if($(this).hasClass('active') == true) {

                 $(this).parents('.classSC_item').removeClass('active')
                 $(this).removeClass('active')
                 gsap.timeline({onComplete:function () {onnClick()}})
                     .add(movePoint(0.5,'classMC','t',0,0,0,0))
                     .add(movel2(1))
                     // .add(movePoint(0.5,'classMC','s',0,0,0,0),'<')
                     // .add(startPos(),'<')

                 // $('.main_animation_conteiner *').removeClass('active')
                 return 0;

             }

             else{
                 $(this).parents('.circle_sub_item').children().removeClass('active')

                 $(this).parents('.classSC_item').addClass('active')
                 $(this).addClass('active')

                 gsap.timeline({onComplete:function () {onnClick()}})
                     .add(movePoint(1,'classMC.active','t',0,0,0,0))
                     .add(movel2(1),'<')
                 return 0;

             }
        }
        else{
             $('.circle_main,.circle_main * ').removeClass('active')

             $(this).parents('.circle_main').addClass('active')
             $(this).parents('.classSC_item').addClass('active')
             $(this).addClass('active')

             $( ".classMC.active" ).appendTo( $( "#multiCircles .classMCcontainer" ) );

             gsap.timeline({onComplete:function () {onnClick()}})
                 .add(movePoint(0.5,'classMC','s',0,0,0,0))
                 .add(movel1(1,kf.xl1,kf.cY),'<')
                 .add(movel2(1),'>')

         }
    })
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    function listCategory(classM,classS){
        offClick()
        $('.main_animation_conteiner *').removeClass('active')

        $(classM).addClass('active')
        $(classM + ' .clickTargetM').addClass('active')

        $(classS).addClass('active')
        $(classS + ' .clickTargetS').addClass('active')

        gsap.timeline({onComplete:function () {onnClick()}})
            .add(movePoint(0.5,'classMC','t',0,0,0,0))
            .add(movePoint(1,'classMC','s',0,0,0,0),'<')

            .add(movel1(1,kf.xl1,kf.cY),'<')
            .add(movel2(1))

        return 0;
    }
    ///////////////////////
    //example
    //////////////////
    // listCategory('.classMC3','.classSC3')
    // or
    // listCategory('.classMC3')

    $('.svgClickToStart').on('click', function(){
        listCategory('.classMC3','.classSC3')
    });

    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////

    gsap.set(".main_animation_conteiner svg", {opacity: 1});
    function startPos(){
        offClick()
        return gsap.timeline({onComplete:()=>{onnClick()}})
            //
            .add(movePoint(1,'classMC1','m',450,700,1,1),'qq')
            .add(movePoint(1,'classMC1','s',-300,-50,1,0),'>-=0.5')
            .add(movePoint(1,'classMC1','s',-200,200,2,0),'<')
            //
            .add(movePoint(1,'classMC2','m',750,600,1,1),'qq')
            //
            .add(movePoint(1,'classMC3','m',1100,450,1,1),'qq')
            .add(movePoint(1,'classMC3','s',-300,-100,1,0),'>-=0.5')
            .add(movePoint(1,'classMC3','s',-200,-300,2,0),'<')
            .add(movePoint(1,'classMC3','s',50,-250,3,0),'<')
            .add(movePoint(1,'classMC3','s',-100,300,4,0),'<')
            .add(movePoint(1,'classMC3','s',100,350,5,0),'<')
            .add(movePoint(1,'classMC3','s',300,200,6,0),'<')
            //
            .add(movePoint(1,'classMC4','m',1500,300,1,1),'qq')
            .add(movePoint(1,'classMC4','s',230,-150,1,0),'>-=0.5')
            .add(movePoint(1,'classMC4','s',200,150,2,0),'<')
    }

    startPos();