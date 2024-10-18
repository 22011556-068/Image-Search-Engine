 let accessKey = "UgonOUvp0CTGdWMg-5gYw5zIydhxXoZzVMDQDcptr0U";
const formSearch = document.querySelector('.form-search');
const searchBox = document.querySelector('.search-box');
const searchResult = document.querySelector('.search-results');
const showBtn = document.querySelector('.show-more-btn');
let keyword='';
let page = 1;
async  function showImage(){
    keyword = searchBox.value;
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;
    const response = await fetch(url);
    let data = await response.json();
  const results = data.results;
   results.map((result)=>{
    let image = document.createElement('img');
    image.src = result.urls.small;
    let link = document.createElement('a');
    link.href = result.links.html;
    link.appendChild(image);
    link.target = '-blank'
    searchResult.appendChild(link);
   });
   showBtn.style.display = 'block';
  }
  formSearch.addEventListener('submit', (e)=>{
    e.preventDefault();
    page = 1;
    showImage();
  });
  showBtn.addEventListener('click',()=>{
     page++;
     showImage();
  });
  

 