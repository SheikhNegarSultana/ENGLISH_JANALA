const Vocabulary_Section = document.getElementById('Vocabulary_Section')
const FAQ_Section = document.getElementById('FAQ_Section')
const banner = document.getElementById('banner')
const NavBar = document.getElementById('NavBar')
const login_btn = document.getElementById('login_btn')
const logout = document.getElementById('logout')

login_btn.addEventListener('click', ()=>{
    const user_Name = document.getElementById('name').value
    const password = document.getElementById('password').value

    if( user_Name.length === 0){
        alert("Enter Your name")
    }

    if( password === '123456'){
        alert("Login successful!")
        Vocabulary_Section.classList.remove('hidden')
        FAQ_Section.classList.remove('hidden')
        NavBar.classList.remove('hidden')
        banner.classList.add('hidden')

    }
    else{
        alert(" Use this Password : 123456")
    }
  
})

logout.addEventListener('click',()=>{
    NavBar.classList.add('hidden')
    Vocabulary_Section.classList.add('hidden')
    FAQ_Section.classList.add('hidden')
    banner.classList.remove('hidden')
    
})