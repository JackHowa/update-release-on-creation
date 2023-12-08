function sayHi() {
  console.log("hi from the console");
  const outputObject = {
    componentUsagesFromJsx: 2,
    componentUsagesFromHbs: 2,
    tokenUsagesFromScss: 2,
    tokenUsagesFromJsx: 3,

    // derivative data
    tokenUsages: 5,
    componentUsages: 5,
  };
  console.log(
    `<table><tr><th>Key</th><th>Value</th></tr><tr><td>componentUsagesFromJsx</td><td>${outputObject.componentUsagesFromJsx}</td></tr><tr><td>componentUsagesFromHbs</td><td>${outputObject.componentUsagesFromHbs}</td></tr><tr><td>tokenUsagesFromScss</td><td>${outputObject.tokenUsagesFromScss}</td></tr><tr><td>tokenUsagesFromJsx</td><td>${outputObject.tokenUsagesFromJsx}</td></tr><tr><td>tokenUsages</td><td>${outputObject.tokenUsages}</td></tr><tr><td>componentUsages</td><td>${outputObject.componentUsages}</td></tr></table>`
  );
}

sayHi();
