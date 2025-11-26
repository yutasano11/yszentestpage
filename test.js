const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

// ハンバーガーメニューの開閉
burger.addEventListener('click', () => {
    // ナビゲーションの表示切り替え
    nav.classList.toggle('nav-active');

    // バーガーのアニメーション（×印にする等が必要ならCSS追加）
    burger.classList.toggle('toggle');
});

// メニューをクリックしたら閉じる
navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
    });
});