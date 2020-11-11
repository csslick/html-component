// component(asset) 등록
const header = {
  id: '#main_header',
  url: "./components/header.html"
}
const footer = {
  id: '#main_footer',
  url: "./components/footer.html"
}

function loadAssets(asset) {
  $.ajax({
    url: asset.url,
    success: function (data) {
      $(asset.id).html(data);
    }
  });
}

loadAssets(header)
loadAssets(footer)


