function comp() {
        let butt=document.getElementById('sect');
        let lts = new XMLHttpRequest();
        lts.responseType = 'text';

        lts.open('GET',"accueil.html",true);

       
        lts.onreadystatechange = ()=> {
            if (lts.readyState == 4 && lts.status==200) {
            butt.innerHTML=lts.responseText; 
         }}
    lts.send();  
}
/*fonction deuxieme boutton*/
function compl() {
    let butt=document.getElementById('sect');
    let lts = new XMLHttpRequest();
    lts.responseType = 'text';

    lts.open('GET',"dash.html",true);

   
    lts.onreadystatechange = ()=> {
        if (lts.readyState == 4 && lts.status==200) {
        butt.innerHTML=lts.responseText; 
     }}
lts.send();  
}
/*fonction troisieme boutton*/
function comple() {
    let butt=document.getElementById('sect');
    let lts = new XMLHttpRequest();
    lts.responseType = 'text';

    lts.open('GET',"home.html",true);

   
    lts.onreadystatechange = ()=> {
        if (lts.readyState == 4 && lts.status==200) {
        butt.innerHTML=lts.responseText; 
     }}
lts.send();  
}
/*fonction quatrieme boutton*/