
const fetchCategories = async (searchText) => {
    const bal = ` https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText} `
    const res = await fetch(bal)
    const data = await res.json();
    allPostData = data.posts;
    console.log(allPostData);
    displayCard(allPostData);
    

}

// ------------------------------------

const lastData = document.getElementById(`lastData`);
const loadData = async () => {
    
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
    const data = await res.json();
    console.log(data);
    displaydata(data)
}

const displaydata = data => {
    data.forEach(data => {
        // console.log(data);\
        const dataCard = document.createElement('div');
        dataCard.classList = `ard card-compact w-96 bg-base-100 shadow-xl`;
        dataCard.innerHTML = `
        <figure><img src="${data.cover_image}"
        alt="Shoes" /></figure>
<div class="card-body">
    <p class="flex gap-4"><img src="images/5.png" alt="">29 January 2024</p>
    <h2 class="card-title font-bold">${data.title}
    </h2>
    <p>${data.description}</p>
    <div>
        <div class="avatar">
            <div class="h-10 w-10 rounded-full">
                <img src="${data.profile_image} "/>
            </div>
            <div>
                <h4 class="font-bold">${data.author.name}</h4>
            </div>
            <p class="relative right-16"><br>${data.author.designation}</p>
        </div>
    </div>
</div>
        `;
        lastData.appendChild(dataCard);

    })
}
// -------------------------------


const displayCard = allPostData => {
    const LetsApi = document.getElementById('LetsApi');
    LetsApi.innerHTML = ``;
    allPostData.forEach(post => {
        const postCard = document.createElement('div')
        postCard.classList = 'hero bg-base-200'

        postCard.innerHTML = ` 
        <span class="relative flex h-3 w-3">
        <span id="dot"
            class="bottom-14 right-64 absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
    </span>
    <div class="hero-content flex-col lg:flex-row ">
        <img src="${post.image}"
            class="max-w-sm w-24 rounded-lg shadow-2xl " />
        <div>
            <span class="flex gap-5">
                <p># ${post.category}</p>
                <p>Author : ${post.author.name}</p>
            </span>
            <h1 class="text-xl font-bold">${post.title}</h1>
            <p class="py-6">It’s one thing to subject yourself to ha Halloween costume mishap
                <br> because, hey that’s your prerogative
            </p>
            <div class="flex gap-5">
                <span class="flex gap-2">
                    <img src="images/Vector.png" alt="">
                    <p>560</p>
                </span>
                <span class="flex gap-2">
                    <img src="images/tabler-icon-eye.png" alt="">
                    <p>1,800</p>
                </span>
                <span class="flex gap-2">
                    <img src="images/tabler-icon-clock-hour-9.png" alt="">
                    <p>5 min</p>
                </span>
                <span class="lg:pl-72">
                    <img src="images/Group 40106.png" alt="">
                </span>
            </div>
        </div>
    </div>
    `;
        LetsApi.appendChild(postCard);


    })
}

document.getElementById('search-btn').addEventListener('click', function () {
    toggleloading(true);
    const searchField = document.getElementById('search');
    const searchText = searchField.value;
    fetchCategories(searchText);
})

// loaing------------------
const toggleloading = (isLoading)=>{
    const loading =document.getElementById('loading');
    if(isLoading){
        loading.classList.remove('hidden');
    }
}

// ----------click---------------------------
btn = document.getElementById('LetsApi').addEventListener('click', function (e) {
    console.log("click")

})


fetchCategories('');

loadData();