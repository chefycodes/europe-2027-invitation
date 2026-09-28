// Tally owns all response collection. No answers are stored by this site.
const loadButton = document.querySelector('#load-survey');
loadButton?.addEventListener('click', () => {
  const id = loadButton.dataset.formId;
  if (!/^[a-zA-Z0-9]+$/.test(id)) return;
  const iframe = document.createElement('iframe');
  iframe.src = `https://tally.so/embed/${id}?alignLeft=1&hideTitle=1&dynamicHeight=1`;
  iframe.title = 'Europe 2027 interest and preferences survey';
  iframe.width = '100%';
  iframe.height = '850';
  iframe.loading = 'lazy';
  iframe.setAttribute('frameborder', '0');
  document.querySelector('#tally-container').append(iframe);
  const script = document.createElement('script');
  script.src = 'https://tally.so/widgets/embed.js';
  script.async = true;
  document.body.append(script);
  loadButton.hidden = true;
});
const sticky = document.querySelector('.mobile-cta');
if ('IntersectionObserver' in window) {
  new IntersectionObserver(([entry]) => {
    sticky.classList.toggle('at-survey', entry.isIntersecting);
  }, { threshold: 0.05 }).observe(document.querySelector('#survey'));
}
const groupSize = document.querySelector('#group-size');
const money = n => '$' + n.toLocaleString('en-US', {maximumFractionDigits:2});
const moneyRange = (a,b) => money(a)+'–'+money(b);
function calculateLodging() {
 const count=Number(groupSize.value);
 if (!Number.isInteger(count)||count<1||count>30) { groupSize.setCustomValidity('Enter a whole number from 1 to 30.'); groupSize.reportValidity(); return; }
 groupSize.setCustomValidity('');
 document.querySelector('#group-caption').textContent='Showing '+count+' people. The apartment price stays fixed when group size changes; each person’s share changes. Inputs stay on this page and are not sent to Tally.';
 document.querySelectorAll('[data-quote]').forEach(card=>{
  const low=Number(card.dataset.low),high=Number(card.dataset.high),input=card.querySelector('input'),value=Number(input.value);
  card.querySelector('[data-dorm-total]').textContent=moneyRange(low*count,high*count);
  const valid=input.value!==''&&Number.isFinite(value)&&value>=0&&value<=1000000;
  card.querySelector('[data-apartment-total]').textContent=valid?money(value):'Enter a quote above';
  card.querySelector('[data-apartment-person]').textContent=valid?money(value/count):'—';
  const diff=card.querySelector('[data-difference]');
  if(!valid){diff.textContent='Compare a quote with the dorm allowance.';return;}
  if(value<low*count) diff.textContent='Airbnb saves '+moneyRange(low*count-value,high*count-value)+' for the group · '+moneyRange(low-value/count,high-value/count)+' per person versus the dorm range.';
  else if(value>high*count) diff.textContent='Airbnb costs '+moneyRange(value-high*count,value-low*count)+' more for the group · '+moneyRange(value/count-high,value/count-low)+' more per person versus the dorm range.';
  else diff.textContent='Airbnb is within the dorm range: from '+money(value-low*count)+' more to '+money(high*count-value)+' less for the group; '+money(value/count-low)+' more to '+money(high-value/count)+' less per person.';
 });
}
groupSize?.addEventListener('input',calculateLodging);
document.querySelectorAll('.apartment-quote').forEach(input=>input.addEventListener('input',calculateLodging));
document.querySelectorAll('[data-city]').forEach(anchor => anchor.addEventListener('click', () => {
  document.getElementById(anchor.dataset.city).open = true;
}));
