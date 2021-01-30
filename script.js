function up ()
{

  var n = array[Math.random () * array.length | 0];

  it('name').html(n['russia'] + ' - ' + n['english']);
  it('img').at('new', 'src', n['img']);
}

up ();
