const lightClass = document.querySelector('.header-section .dark-light-ele');
const menuBtn = document.querySelector('.header-section .mobile-menu-icon');
const slideContent = document.querySelector('.header-section .headercontainer nav.js-drop-wrap');
const navLink = document.querySelectorAll('.header-section .headercontainer nav ul a.nav-link')
lightClass.addEventListener('click' , function() {
    if(lightClass.classList.contains('active')){
      lightClass.classList.remove('active');
      document.querySelector('body').classList.remove('lightMode');
      document.documentElement.style.setProperty('--secondary_color','#001e2d');
      document.documentElement.style.setProperty('--slate_light','#f9f9f9');
      document.documentElement.style.setProperty('--primary_color','#062c3f');
      document.documentElement.style.setProperty('--developer_light','#e9f1f9');
      document.documentElement.style.setProperty('--border','#a9b7c9');
      document.documentElement.style.setProperty('--border_light','#e8e8f1');
      document.documentElement.style.setProperty('--owner','#e16c40');
      document.documentElement.style.setProperty('--owner_mid','#f4caba');
      document.documentElement.style.setProperty('--tenant','#408b70');
      document.documentElement.style.setProperty('--tenant_mid','#dbe9e4');
    }else{
      lightClass.classList.add('active');
      document.querySelector('body').classList.add('lightMode');
      document.documentElement.style.setProperty('--secondary_color','#f9f9f9');
      document.documentElement.style.setProperty('--slate_light','#001e2d');
      document.documentElement.style.setProperty('--primary_color','#e9f1f9');
      document.documentElement.style.setProperty('--developer_light','#062c3f');
      document.documentElement.style.setProperty('--border','#e8e8f1');
      document.documentElement.style.setProperty('--border_light','#a9b7c9');
      document.documentElement.style.setProperty('--owner','#f4caba');
      document.documentElement.style.setProperty('--owner_mid','#e16c40');
       document.documentElement.style.setProperty('--tenant','#dbe9e4');
      document.documentElement.style.setProperty('--tenant_mid','#408b70');
    }
})
menuBtn.addEventListener('click', ()=>{
  if(menuBtn.classList.contains('activeBtn')){
    slideContent.style.maxHeight = '0';
    menuBtn.classList.remove('activeBtn')
  }else{
    slideContent.style.maxHeight = '600px';
    menuBtn.classList.add('activeBtn')
  }
})

navLink.forEach((items)=>{
 items.addEventListener('click' , ()=>{
  slideContent.style.maxHeight = '0';
  menuBtn.classList.remove('activeBtn')
})
})

const logoLink = document.querySelector('.header-section .logo');
logoLink.addEventListener('click' , ()=> {
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
})

const allProjects = document.querySelector('.work .all-projects');
allProjects.addEventListener('click' , ()=>{
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })

  const onScroll = () =>{
    if (window.scrollY === 0) {
      window.removeEventListener('scroll',onScroll);
      const titles = document.querySelector('section.banner .project-wrapper .main-projects.titles');
      if(titles) titles.click();
      setTimeout(function(){
        const ctaLink = document.querySelector('section.banner .JustClick a.cta-link');
        if(ctaLink) ctaLink.click();
      },100)
    }
  }
  window.addEventListener('scroll' , onScroll);
})

function callBack(){
  const headerSection = document.querySelector("header .header-section")
  window.addEventListener('scroll' , ()=> {
    const  scrollTop = window.scrollY || document.documentElement.scrollTop;
    if(scrollTop > 0){
      headerSection.classList.add("white-bg");
    }else{
      headerSection.classList.remove("white-bg");
    }
  })
}
callBack();


const justClick = document.querySelector('section.banner .JustClick a.cta-link');
const projectPopup = document.querySelector('section.banner .jsProjects');
const popCross= document.querySelector('section.banner .jsProjects .cross');
justClick.addEventListener('click' , () => {
    document.querySelector('html').classList.add('overflow')
    projectPopup.classList.add('isActive');
})
popCross.addEventListener('click' , () => {
    projectPopup.classList.remove('isActive');
    document.querySelector('html').classList.remove('overflow');
})

const menus = document.querySelectorAll('section.banner .project-wrapper');
document.addEventListener('mouseup' , (e) => {
  let isClickInside = false;
  menus.forEach ( menu => {
   if(menu.contains(e.target)){
    isClickInside = true;
   }
  })
  if(!isClickInside){
    projectPopup.classList.remove('isActive');
    document.querySelector('html').classList.remove('overflow');
  }
})

const projectTitle = document.querySelectorAll('section.banner .project-wrapper .titles');
const projectList = document.querySelectorAll('section.banner .project-wrapper .projects-list');

projectTitle.forEach((titles , index) => {
  titles.addEventListener('click' , function(){
    if(!this.classList.contains('active')){
      projectTitle.forEach(title => title.classList.remove('active'));
      projectList.forEach(list => list.classList.remove('active'));
      this.classList.add('active');
      projectList[index].classList.add('active')
    }
  })
})

const copyLogo = document.querySelectorAll('.contact .copy-logo');
const copyLinkCont = document.querySelectorAll('.contact .contact-link');
copyLogo.forEach((copyBtn) => {
 copyBtn.addEventListener('click' , function() {
 let wrapper = this.closest('.contact-link');
  const contactLink = wrapper?.querySelector('.contact-number a');
  if(contactLink){
    let hyperLink = contactLink.getAttribute('href');
    hyperLink = hyperLink.replace(/^tel:|^mailto:/, '');
    navigator.clipboard.writeText(hyperLink).then(()=>{
      wrapper.classList.add('linkCopyied');
      setTimeout(function(){
       wrapper.classList.remove('linkCopyied');
      },5000)
    });
  }
 })
})