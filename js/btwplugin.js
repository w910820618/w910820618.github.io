window.onload = function() {
  themeDefaultContent = $(
    '#app > .theme-container>.page > .theme-default-content'
  );

  themeDefaultContent.attr('id', 'container');
  btw = new BTWPlugin(); // 注意btw需要是个全局变量,把const去掉
  btw.init({
    id: 'container',
    blogId: '25399-1611373846171-547',
    name: '洲洋的编程课堂',
    qrcode: 'https://w910820618-1253988311.cos.ap-beijing.myqcloud.com/%E5%9B%BE%E7%89%87/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7/qrcode_for_gh_4afc5ec351d9_344.jpg',
    keyword: '1984',
  });
};
