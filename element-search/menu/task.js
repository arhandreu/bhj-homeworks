let menu = Array.from(document.querySelectorAll('.menu_main li'))

menu.forEach(element => {
    element.onclick = () => {
        if (element.querySelector('.menu.menu_sub.menu_active')) {            
            element.querySelector('.menu.menu_sub.menu_active').className = 'menu menu_sub'
            return false    
        }
        else if (element.querySelector('.menu_sub')) {
                if (document.querySelector('.menu.menu_sub.menu_active')) {                    
                    document.querySelector('.menu.menu_sub.menu_active').className = 'menu menu_sub'
                }
            element.querySelector('.menu_sub').className = 'menu menu_sub menu_active'            
            return false
        }               
        else {
            location = element.querySelector('a').href
        }               
    }
})