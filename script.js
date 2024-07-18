/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        console.log('Menu toggle clicked');
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));

const blurHeader = () => {
    const header = document.getElementById('header');
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    window.scrollY >= 50 ? header.classList.add('blur-header')
                         : header.classList.remove('blur-header');
};

window.addEventListener('scroll', blurHeader);

//EMAIL.JS
const contactForm = document.getElementById('contact-form') ,
      contactMessage= document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()
    
    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_0zd0gub','template_26xmw23','#contact-form','6g_504WsJTZ_yH_P3')
      .then(() =>{
        //show sent message
        contactMessage.textContent = 'message sent successfully'

        //remove message after 5s

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        //clear input fields
        contactForm.reset()

      })
}

contactForm.addEventListener('submit',sendEmail)

