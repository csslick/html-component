# html-component
html asset component test
- 헤더, 푸터 등 공통 영역을 asset(component)화 하여 사용

## demo https://csslick.github.io/html-component/

```
// header asset
const header = {
  id: '#main_header', // HTML 문서상의 요소명
  url: "./components/header.html"  // 파일 경로
}

// footer asset
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

// 헤더 로드
loadAssets(header)

// 푸터 로드
loadAssets(footer)

```
