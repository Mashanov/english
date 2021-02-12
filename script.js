var n = null;
function up ()
{

  it('#go').at('del', 'style');
  it('#go').css({pointerEvents: 'none',filter: 'contrast(0.8)'});
  let nBack = n;

  while (nBack == n)
  {
    n = array[Math.random () * array.length | 0];
  };

  it('name').html(n['russia'] + ' - ' + n['english']);
  it('img').at('del', 'src');
  it('img').at('new', 'src', n['img']);
  
  setTimeout(function ()
  {
    
    it('#go').css({borderTop: '3px solid #475b67'});
    setTimeout(function ()
    {

      it('#go').css({borderRight: '3px solid #475b67'});
      setTimeout(function ()
      {

        it('#go').css({borderBottom: '3px solid #475b67'});
        setTimeout(function ()
        {

          it('#go').css({borderLeft: '3px solid #475b67'});
          setTimeout(function ()
          {

            it('#go').at('del', 'style');
            it('#go').css({border: 'none'});

          }, 750);
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

function goClide ()
{

  it('name').html(n['russia']);
  it('#text-center').html('Как будет "' + n['russia'] + '" на английском');
  it('#background').css({display:'block'});

  setTimeout (function ()
  {

    it('#background').css({opacity: 1})

  }, 0)
};

it('#eng-word').input('on', function ()
{

  if (it('#eng-word').html().toLowerCase().trim() == n['english'])
  {

    up ();
    it('#background').at('del', 'style');
    it('#eng-word').html('');
  }
});

it('#forgot').click(function ()
{
  
  up ();
  it('#background').at('del', 'style');
  it('#eng-word').html('');
});

function setGame (from = false)
{
  
  it('*[data-game]:not([data-game="' + from + '"])').css({display: 'none'});
  it('*[data-game="' + from + '"]').css({display: 'block'});
  
  switch (from)
  {
          
    case 2:
      it('#close').click();
      
      it('#container-ball').html();
      
      var a = (Number.parseInt(it('#container-ball').css('width')) / 75) * (Number.parseInt(it('#container-ball').css('height')) / 75);
      for (var i = 0; i != ; i++)
      {

        it('#container-ball').append(`<div class="ball"></div>`);
      }
      break;
  }
};
