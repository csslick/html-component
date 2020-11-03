// component(asset) 등록
const header = {
  id: '#main_header',
  url: "./components/header.html"
}
const footer = {
  id: '#main_footer',
  url: "./components/footer.html"
}

function getAssets(asset) {
  $.ajax({
    url: asset.url,
    success: function (data) {
      $(asset.id).html(data);
    }
  });
  console.log(asset)
}

getAssets(header)
getAssets(footer)

// fetch("./components/header.html")
//   .then((res) => {
//     return res.text();
//   })
//   .then((data) => {
//     // $('#container').html(data);
//     console.log(data);
//     const header = document.querySelector("#main_header");
//     header.innerHTML = data;
//   });
