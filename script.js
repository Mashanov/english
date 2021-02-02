function up ()
{

  var n = array[Math.random () * array.length | 0];

  it('name').html(n['russia'] + ' - ' + n['english']);
  it('img').at('new', 'src', n['img']);
  
  setTimeout(function ()
  {
    
    it('#go').css({borderTop: '3px solid #823a3a'});
    
    setTimeout(function ()
    {

      it('#go').css({borderRight: '3px solid #823a3a'});

      setTimeout(function ()
      {

        it('#go').css({borderBottom: '3px solid #823a3a'});

        setTimeout(function ()
        {

          it('#go').css({borderLeft: '3px solid #823a3a'});

        }, 750);
      }, 750);
    }, 750);
  }, 750);
}

up ();

it('#menu').click(function ()
{

  it('panel').css({left: '0'});
});

it('#close').click(function ()
{
  
  it('panel').at('del', 'style');
});
