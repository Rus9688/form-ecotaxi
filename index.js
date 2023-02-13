const startDateElem = document.getElementById('start-date');
const endDateElem = document.getElementById('end-date');
const minDate = new Date();

startDateElem.min = (formatDate(new Date));

startDateElem.addEventListener('change', (e) => {
    minDate.setDate(new Date(e.target.value).getDate() + 7);    
    endDateElem.min = formatDate(minDate)
})

function formatDate(date) {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
}

const form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target).entries());
  console.log(data)
})







