//Syareta Cafeのイージング
const heading = document.querySelector('#heading');
const keyframes = {
    color: ['transparent','#fff'],
    backgroundPosition: ['100% 0', '0 0'],
};
const options = {
    duration: 1500,
    easing: 'ease',
};
heading.animate(keyframes, options);

//サブタイトルのイージング
const subheading = document.querySelector('#heading-sub');
const keyframe = {
    color: ['transparent','#fff'],
};
const option = {
    duration: 2000,
    easing: 'ease',
};
subheading.animate(keyframes, options);

/*---------コンテンツ表示----------*/
// 監視対象が範囲内に現れたら実行する動作
const animateFade = (entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.animate(
          {
            opacity: [0, 1],
            filter: ['blur(.4rem)', 'blur(0)'], 
            translate: ['0 0.15rem', 0],
          },
          {
            duration: 1500,
            easing: 'ease',
            fill: 'forwards',
          }
        );
        // 一度ふわっと表示されたら監視をやめる(でも再読み込みしたらまた監視対象に入るっぽいね)
        obs.unobserve(entry.target);
      }
    });
  };
  
  // 監視設定
  const fadeObserver = new IntersectionObserver(animateFade);
  
  // .fadeinを監視するよう指示
  const fadeElements = document.querySelectorAll('.fadein');
  fadeElements.forEach((fadeElement) => {
    fadeObserver.observe(fadeElement);
  });

/*---------画像ギャラリー----------*/
const mainImage = document.querySelector('.gallery-image img');
const thumbImages = document.querySelectorAll('.gallery-thumbnails img');

thumbImages.forEach((thumbImage)=>{
    thumbImage.addEventListener('mouseover', (event) =>{
        mainImage.src = event.target.src;
        mainImage.animate({opacity: [0,1]}, 500);
    });
});


//スクロール位置の指定
//めんどくせーのでIDの位置を更に動かすための関数に渡してやってます
function menuScroll() {
    const menu = document.getElementById('Menu');
    setScroll(menu);
}

function newsScroll() {
    const news = document.getElementById('News');
    setScroll(news);
}

function contactScroll() {
    const top = document.getElementById('Top');
    setScroll(top);
}

// スクロール位置設定
function setScroll(element) {
    const elements = element; 
    elements.scrollIntoView({  
    behavior: 'smooth'  
});
}