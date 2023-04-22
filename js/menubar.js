let mainnav_list = document.querySelectorAll(".nav_menu li")
let megaNav_list = document.querySelectorAll('.megaNav .fields');


let reset_nav = _ => {
  for (let i = 0; i < mainnav_list.length; i++) {
    mainnav_list[i].classList.remove('open')
    megaNav_list[i].classList.remove('open')
  }
}

let open_nav = id => {
  reset_nav()
  mainnav_list[id].classList.add('open')
  megaNav_list[id].classList.add('open')
}

for (let i = 0; i < mainnav_list.length; i++) {
  mainnav_list[i].addEventListener('mouseover', _ => open_nav(i))
  megaNav_list[i].addEventListener('mouseenter', _ => open_nav(i))
  mainnav_list[i].addEventListener('mouseout', _ => reset_nav())
  megaNav_list[i].addEventListener('mouseleave', _ => reset_nav())
}



reset_nav();
