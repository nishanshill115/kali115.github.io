(function(){
  alert("Safe XSS simulation!");
  const el = document.createElement('div');
  el.textContent = "Pop-up executed (safe)";
  document.body.appendChild(el);
})();
