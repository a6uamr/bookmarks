const n=document.getElementById('n'), N=/^\w{3}([ \w]*\w)*$/,
  l=document.getElementById('l'), L=/^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i,
  a=document.getElementById('a'), R=document.getElementById('R'),
  r=document.getElementById('r'), s=document.getElementById('s'),
  t=document.querySelector('tbody');
let B=[], I=0;
function m(){}
function T(s){let T='',i=0; while(i<B.length){if(!s ||
  B[i].n.toLowerCase().includes(s.toLowerCase())) T+=`<tr><td>${i+1}</td>
  <td>${B[i].n}</td><td><a href=${B[i].l} target="_blank">
  <i class="fas fa-eye"></i> Visit</a></td><td><button type="button"
  onclick="E(${i});" class="btn btn-outline-info">
  <i class="fas fa-pen-to-square"></i> Edit</button></td><td><button type="button"
  onclick="D(${i});" class="btn btn-outline-danger"><i class="fas fa-trash-can">
  </i> Delete</button></td></tr>`; i++;} t.innerHTML=T;}
function rv(e){e.classList.remove('is-valid');}
function v(V,v){if(V.test(v.value)) {v.classList.remove('is-invalid');
  v.classList.add('is-valid');} else {rv(v); v.classList.add('is-invalid');}}
function b(){localStorage.setItem('B',JSON.stringify(B));}
function A(){if(!(N.test(n.value) && L.test(l.value))) {R.showModal(); return;}
  for(let i=0;i<B.length;i++){if(i==I) continue; if(n.value==B[i].n)
  {r.showModal(); return;}} if(!/^https?:\/\//i.test(l.value)) l.value='https://'
  +l.value; a.innerHTML='Bookmark'; B.splice(I,1,{n:n.value,l:l.value});
  n.value=''; l.value=''; rv(n); rv(l); s.value=''; T(); b(); I=B.length;}
function D(i){B.splice(i,1); T(s.value); a.innerHTML='Bookmark'; b(); I=B.length;}
function E(i){n.value=B[i].n; l.value=B[i].l; a.innerHTML='Save'; I=i;}
if(localStorage.getItem('B')!=null)
  {B=JSON.parse(localStorage.getItem('B')); T(); I=B.length;}