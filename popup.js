document.getElementById("btn").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: onRun,
  });
});

function onRun() {
  //   document.body.style.backgroundColor = "#fcc";
  //   var elem = document.getElementById("short_cur_key");
  //   console.log(elem);

  //   var elem = document.getElementsByClassName(
  //     "css-901oao r-1awozwy r-115tad6 r-6koalj r-37j5jr r-a023e6 r-16dba41 r-1h0z5md r-rjixqe r-bcqeeo r-o7ynqc r-clp7b1 r-3s2u2q r-qvutc0"
  //   );
  //   var elem = getByTestId("app-text-transition-container");

  //   var element = document.querySelector("span[app-text-transition-container]");
  var elements = document.querySelectorAll("span[data-testid]");

  console.log(elements);

  elements.forEach((element) => {
    console.log(element);
    var viewCountSpan = element.firstElementChild.firstElementChild;
    if (viewCountSpan != null) {
      console.log(viewCountSpan);
      viewCountSpan.innerHTML = "";
    }
  });
  //   var cnt = elem.firstElementChild.firstElementChild;
  //   console.log(cnt);
  //   cnt.innerHTML = "";
  return;
  if (elem !== null && elem.length > 1) {
    console.log(elem[0]);
  } else {
    console.log("No Contents!");
  }
}
