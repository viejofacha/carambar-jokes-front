const btn=document.getElementById("btn");
const q=document.getElementById("question");
const a=document.getElementById("answer");
const apiLink=document.getElementById("apiLink");
apiLink.href=`${window.API_BASE}/api/v1/jokes/random`;
apiLink.textContent=apiLink.href.replace(/^https?:\/\//,"");
async function fetchRandom(){
  q.textContent="Chargement…"; a.textContent="";
  try{
    const res=await fetch(`${window.API_BASE}/api/v1/jokes/random`);
    if(!res.ok) throw new Error("API error");
    const joke=await res.json();
    q.textContent=joke.question; a.textContent=joke.answer;
  }catch(e){ q.textContent="Oups ! Impossible de récupérer une blague."; a.textContent=""; console.error(e); }
}
btn.addEventListener("click", fetchRandom);
