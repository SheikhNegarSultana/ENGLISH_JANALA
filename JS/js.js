function levelButtons(){
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res => res.json())
    .then( data => showLevelButtons(data.data))

    function showLevelButtons(buttons){

        const levelButtons = document.getElementById('levelButtons')

        for(const button of buttons){
            // console.log(button.level_no)
            const levelButton = document.createElement('button')
            levelButton.classList = 'btn btn-outline btn-primary border-[#422AD5] text-[#422AD5] hover:bg-[#422AD5] hover:text-white rounded-lg'


            levelButton.addEventListener('click', () => {

                document.querySelectorAll('#levelButtons button')
                .forEach(btn => btn.classList.remove('active'))

                levelButton.classList.add('active')

                levelById(button.level_no)
               
            })


            levelButton.innerHTML = `<i class="fas fa-book"></i>
                                      Lesson -${button.level_no}`
            
            levelButtons.appendChild(levelButton)
        }
    }
}
levelButtons()



// Vocabulary Section 
function levelById(id){
    fetch(`https://openapi.programming-hero.com/api/level/${id}`)
    .then(res=>res.json())
    .then( data => showVocabularyCard(data.data))
}


function showVocabularyCard(cardDataById){
    const showVocabularyCards = document.getElementById('showVocabularyCards')
    showVocabularyCards.innerHTML = ""

    if(cardDataById.length > 0){

    cardDataById.map( a => {

    const div = document.createElement('div')
    div.classList = "col-span-1 p-6 bg-white rounded-lg shadow-sm hover:bg-[#aed1f484]"

    // console.log(a.id)

    div.innerHTML = `
<div class="text-center">
            <h1 class="text-xl font-bold text-gray-900">${a.word}</h1>
            <p class="text-sm font-medium text-gray-500 mt-2">Meaning / Pronunciation</p>
            <h2 class="text-gray-800 font-semibold text-lg mt-4">"${a.meaning === null ? "অর্থ নেই" : a.meaning } / ${a.pronunciation}"</h2>
            <div class=" mt-[2rem] flex justify-between gap-4 ">
                <button onclick="vocabulary_details_byID(${a.id})" type="button" class="btn w-10 h-10 flex items-center justify-center bg-[#E9F4FF] rounded-lg hover:bg-blue-200" aria-label="Info">
                    <i class="fas fa-info-circle text-[#374957]"></i>
                </button>
                <button type="button" class="btn w-10 h-10 flex items-center justify-center bg-[#E9F4FF] rounded-lg hover:bg-blue-200" aria-label="Volume">
                    <i class="fas fa-volume-up text-[#374957]"></i>
                </button>
            </div>
        </div>
`

showVocabularyCards.appendChild(div)
    
}) 
        
    }

    else {
        
       const divNoContent = document.createElement('div')
       divNoContent.classList = ' col-span-full flex flex-col items-center justify-center '
       divNoContent.innerHTML = `
         <img src="./assets/alert-error.png" alt="" srcset="">
  <p class="text-[#79716B] font-normal text-[0.8rem] mb-[0.7rem]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
  <h2 class="text-xl text-[#292524] font-semibold">নেক্সট Lesson এ যান</h2>`

showVocabularyCards.appendChild(divNoContent)

    }


}



// Vocabulary Details

function vocabulary_details_byID(id){
     fetch(`https://openapi.programming-hero.com/api/word/${id}`)
    .then(res=>res.json())
    .then( data => vocabulary_details_modal(data.data))
}

function vocabulary_details_modal(details){

    const modal_content = document.getElementById('modal_content')

    modal_content.innerHTML = `
    <div class="flex items-center gap-2 mb-3">
      <h2 class="text-xl font-bold text-[#292524]">${details.word}</h2>
      <span class="text-gray-500 text-lg">${details.pronunciation}</span>

      <button onclick="new Audio('${details.audio}').play()"
              class="ml-1 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700"
              aria-label="Play pronunciation" type="button">
        <i class="fa-solid fa-volume-high"></i>
      </button>
    </div>

    <p class="font-semibold text-[#292524]">Meaning</p>
    <p class="text-gray-700 mb-4">${details.meaning  === null ? "অর্থ পাওয়া যায় নি" : details.meaning}</p>

    <p class="font-semibold text-[#292524]">Example</p>
    <p class="text-gray-700 mb-4">${details.example === undefined ? "উদাহরণ নেই" : details.example }</p>

    <p class="font-semibold text-[#292524]">সমার্থক শব্দ গুলো</p>
    <div class="flex gap-2 flex-wrap mt-2 mb-5">
      ${details.synonyms.map(s => `<span class="px-3 py-1 bg-gray-100 rounded-md text-gray-700 text-sm">${s}</span>`).join("")}
    </div>

    <div class="flex justify-center">
      <form method="dialog">
        <button class="bg-[#422AD5] hover:bg-[#351A9E] text-white font-medium rounded-lg px-5 py-2 shadow-md">
          Complete Learning
        </button>
      </form>
    </div>`

document.getElementById("word_modal").showModal();

}