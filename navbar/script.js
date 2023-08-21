function positive(n) {
    let sum = 0;
    for (let i = 0; i < n.length; i++) {
      if (n[i] > 0) {
        sum += n[i];
      }
    }
    return sum;
  }
  let n=[8,-9,2,-7,5];
  let p=positive(n);
  window.alert(p);