

const ID_NAVBAR = 'navbar';
const CLASS_LI  = 'anchor';
const CLASS_SUB_UL = 'sub';

window.addEventListener("load", aine, false);

function aine(){

    let sidebar = document.getElementById(ID_NAVBAR);
    sidebar.style.visibility = "visible";

    let anchors = document.querySelectorAll("." + CLASS_LI);

    for(let anchor of anchors ){

        let sub = anchor.querySelector('.' + CLASS_SUB_UL);
        sub.style.display = 'block';
        let height4 = sub.offsetHeight;
        sub.style.height = "0px";
        sub.style.display = 'none';
        sub.style.height = "0px";
        sub.style.visibility = "visible";
        sub.style.display = 'block';

        if (anchor.classList.contains('open')){
            console.log('anchor2', anchor);
            anchor.classList.add('activen');
            sub.style.height = height4 + "px";
        }

        anchor.onclick = function () {
                if (this.classList.contains('activen')){
                    this.classList.remove('activen');
                    sub.style.height = "0px";
                }else {
                    this.classList.add('activen');
                    sub.style.height = height4 + "px";
                }
        }
    }

}




