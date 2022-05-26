var can = document.getElementById('cookie')
var config = {
    type:'line',
    data:
        {
            labels:['folong','emerson','emeric','cyrile','ebenezer'],
            datasets:[
                {label:'taux de sucre',data:[2,4,1,6,4],bacgroundColor:'olive'},
                {label:'taux de sucre',data:[2,2,4,3,2],bacgroundColor:'green'},
                {label:'taux de sucre',data:[2,4,1,6,3],bacgroundColor:'blue'},
                {label:'taux de sucre',data:[4,4,2,3,6],bacgroundColor:'red'}
            ]
        }
    
}
var la = new Chart(can,config)

// alert("ici js")
// $(document).ready(()=>{
// console.log("end of loading")
//  var moi = new Aliment();
//  console.log(moi.name)

// })
var config2 = {
    type:'bar',
    data:{
        labels:[],
        datasets:[
            {
                label:'label',data:[]
            }
        ]
    }
}

// document.writeln("<script type='text/javascript' src='assets/js/classList.js'></script>");



// $(document).ready(function(){
//     $("p").click(function(){
//       $(this).hide();
//     });
//   });

