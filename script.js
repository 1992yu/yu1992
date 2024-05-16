//scroll_effect
$(window).on('load scroll', function () {
  var scrollAnimationElm = $('.scroll_up, .scroll_left, .scroll_right');
  var triggerMargin = 150; // 要素が表示されるトリガーマージン

  // スクロール時の処理
  scrollAnimationElm.each(function () {
    var position = $(this).offset().top; // 要素の位置を取得
    var scroll = $(window).scrollTop(); // スクロール位置を取得
    var windowHeight = $(window).height(); // ウィンドウの高さを取得

    // 要素が画面内の特定の位置に来たら、クラスを追加して表示させる
    if (scroll > position - windowHeight + triggerMargin) {
      $(this).addClass('on');
    }
  });
});
