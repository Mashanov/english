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
  it('img[data-game="1"]').at('del', 'src');
  it('img[data-game="1"]').at('new', 'src', n['img']);
  
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

function toFixedNoRounding (n)
{
  
  let z = false, k = 0;
  n = n.toString ();
  
  do {
    
    if (n[k] == '.') z = true;
    else k++;
    
  } while (z != true);
  
  return Number(n.substr(0, k));
};

let array_color = [['green', 'rgb(78, 169, 78)'],['red', 'rgb(245, 131, 131)'], ['yellow', 'rgb(216, 216, 84)'], ['blue', 'rgb(120, 174, 220)'], ['orange', 'rgb(216, 162, 81)'], ['pink', 'rgb(218, 137, 212)']];
var a = null;

function setGame (from = false)
{
  
  it('#root-game').html(`

    *[data-game]:not([data-game="` + from + `"]) {
    display: none;
    }

    *[data-game="` + from + `"] {
    display: block;
    }
  `);
  
  switch (from)
  {
          
    case 2:
      it('#close').click();
      
      it('#container-ball').html('');
      
      a = toFixedNoRounding (Number.parseInt(it('#container-ball').css('width')) / 75) * toFixedNoRounding (Number.parseInt(it('#container-ball').css('height')) / 75);
      for (var i = 0; i != a; i++)
      {

        it('#container-ball').append(`<div class="ball" onclick="ball (this)" style="background: ` + array_color[Math.random () * array_color.length | 0][1] + `"></div>`);
      };
      
      a = array_color[Math.random () * array_color.length | 0];
      it('#name-games').html(`Лопайте шарики цвета <font style="color: ` + a[1] + `;font-weight: 600;">` + a[0] + `</font>`);
      break;
      
     case 3:
      it('#close').click();
      break;
  }
};

function ball (from)
{
  
  if (from.style.background == a[1]) from.remove ();
};
