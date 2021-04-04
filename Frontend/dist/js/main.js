$(document).ready(function () {
    //tab
    $('.tablink').click(function(evt){
        evt.preventDefault();
        tabOpen(evt,this.id);

    });
    function tabOpen(evt,tabName){
        let i,x,tabLinks;
        x = $('.tab-cate');
        for(i = 0;i < x.length;i ++ ){
            console.log(x[i]);
            x[i].classList.remove('active');
        }
        tabLinks = $('.tablink');
        for(i = 0;i < x.length; i++ ){
                tabLinks[i].parentElement.classList.remove('active');
        }
        
        document.querySelector((`#tab-cate__${tabName[tabName.length-1]}`).toString()).classList.add('active');
        evt.currentTarget.parentElement.classList.add('active')
    }
    $('#tablink-1').click();
});
var gotop= document.querySelector('#go-top');
window.onscroll = ()=>{
    if(gotop){

        if(document.body.scrollTop> 400||document.documentElement.scrollTop > 400){
            gotop.style.opacity="1";
        }
        else{
            gotop.style.opacity="0";
        }
    }
}