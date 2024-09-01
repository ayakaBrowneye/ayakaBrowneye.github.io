// カルーセル
const swiperExist = document.querySelector(".swiper");
if (swiperExist !== null) {
  var swiper = new Swiper(".mySwiper", {
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    loop: true,
    speed: 2000,
  });
}

// タブメニュー
const tabExist = document.querySelector(".tab");
if (tabExist !== null) {
  //// タブボタンのDOMを取得しクリックイベント「tabSwitch」を追加。
  const tabMenus = document.querySelectorAll(".tab__menu-item");
  tabMenus.forEach((tabMenu) => {
    tabMenu.addEventListener("click", tabSwitch);
  });

  function tabSwitch(e) {
    // クリックされた要素のデータ属性を取得
    const tabTargetData = e.currentTarget.dataset.tab;
    // クリックされた要素の親要素と、その子要素を取得
    const tabList = e.currentTarget.closest(".tab__menu");
    const tabItems = tabList.querySelectorAll(".tab__menu-item");

    // クリックされた要素の親要素の兄弟要素の子要素を取得
    const tabPanelItems =
      tabList.nextElementSibling.querySelectorAll(".tab__panel-box");

    // 全ての要素からis-activeクラスかis-showクラスを外す
    tabItems.forEach((tabItem) => {
      tabItem.classList.remove("is-active");
    });
    tabPanelItems.forEach((tabPanelItem) => {
      tabPanelItem.classList.remove("is-show");
    });

    // クリックされたmenu要素にis-activeクラスを付加
    e.currentTarget.classList.add("is-active");

    // クリックしたmenuのデータ属性と等しい値を持つパネルにis-showクラスを付加
    tabPanelItems.forEach((tabPanelItem) => {
      if (tabPanelItem.dataset.panel === tabTargetData) {
        tabPanelItem.classList.add("is-show");
      }
    });
  }
}

// resultページ
const ContentDetails = document.querySelector(".Content-details");
if (ContentDetails !== null) {
  const url = new URL(window.location.href);
  const params = url.searchParams;
  //   const entries = params.entries();
  let contactDetail = {};
  for (const [key, value] of params.entries()) {
    contactDetail[key] = value;
  }

  const entryKind = document.querySelector(".kind");
  if (contactDetail["kind"] === "1") {
    entryKind.insertAdjacentHTML("afterend", "<dd>ご予約</dd>");
  } else if (contactDetail["kind"] === "2") {
    entryKind.insertAdjacentHTML(
      "afterend",
      "<dd>お店に関するお問い合わせ</dd>"
    );
  } else {
    entryKind.insertAdjacentHTML("afterend", "<dd>その他</dd>");
  }

  const entryFirst = document.querySelector(".first");
  if (contactDetail["first"] == "yes") {
    entryFirst.insertAdjacentHTML("afterend", "<dd>はい</dd>");
  } else {
    entryFirst.insertAdjacentHTML("afterend", "<dd>いいえ</dd>");
  }

  const entryHow = document.querySelector(".how");
  if (contactDetail["how"] === "friend") {
    entryHow.insertAdjacentHTML("afterend", "<dd>知り合いの紹介で</dd>");
  } else if (contactDetail["how"] === "magazine") {
    entryHow.insertAdjacentHTML(
      "afterend",
      "<dd>SNS、Webサイト、雑誌などを見て</dd>"
    );
  } else {
    entryHow.insertAdjacentHTML("afterend", "<dd></dd>");
  }

  const entrySubject = document.querySelector(".subject");
  entrySubject.insertAdjacentHTML(
    "afterend",
    "<dd>" + contactDetail["subject"] + "</dd>"
  );

  const entryMessage = document.querySelector(".message");
  entryMessage.insertAdjacentHTML(
    "afterend",
    "<dd>" + contactDetail["message"] + "</dd>"
  );

  const entryMail = document.querySelector(".mail");
  entryMail.insertAdjacentHTML(
    "afterend",
    "<dd>" + contactDetail["mail"] + "</dd>"
  );
}
