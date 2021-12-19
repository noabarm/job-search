var sites = [
    {"id": "1","name": "google","url": "www.google.com","subData": 
        [
        {"id": "2","name": "walla","url": "www.walla.co.il"},
        {"id": "3","name": "ynet","url": "www.ynet.co.il","subData": 
           [
             {"id": "4","name": "mako","url": "www.mako.co.il"},
             {"id": "5","name": "google","url": "www.google.com"},
             {"id": "6","name": "walla","url": "www.walla.co.il"}
           ]
         },
        {"id": "7","name": "google","url": "www.google.com"}
       ]
     },
    {"id": "8","name": "ynet","url": "www.ynet.co.il","subData": 
       [
        {"id": "9","name": "walla","url": "www.walla.co.il"},
        {"id": "10","name": "google","url": "www.google.com","subData": 
           [
             {"id": "11","name": "ynet","url": "www.ynet.co.il","subData": 
               [
                 {"id": "12","name": "walla","url": "www.walla.co.il"},
                 {"id": "13","name": "google","url": "www.google.com"},
                 {"id": "14","name": "mako","url": "www.mako.co.il","subData":
                 [
                    {"id": "12a","name": "walla","url": "www.walla.co.il"},
                    {"id": "13a","name": "google","url": "www.google.com"},
                    {"id": "14a","name": "mako","url": "www.mako.co.il"}
                  ]
                 }
               ]
              },
              {"id": "15","name": "google","url": "www.google.com"},
              {"id": "16","name": "mako","url": "www.mako.co.il"}
           ]
         },
         {"id": "17","name": "walla","url": "www.walla.co.il","subData": 
           [
             {"id": "18","name": "ynet","url": "www.ynet.co.il"},
             {"id": "19","name": "google","url": "www.google.com"},
             {"id": "20","name": "walla","url": "www.walla.co.il"}
           ]
          },
         {"id": "21","name": "mako","url": "www.mako.co.il"}
       ]
    }
];

var depth = 0;
//var site;
var subSite;

const colorArray =["cadetblue","lightpink","darkgrey","plum"]

function printCompany(mySites,depth,div){
   // if (div == null){
   //     div = document.getElementById("root");
   // }
    //site = document.getElementById("showSiteDetails");
    //subSite = document.getElementById("showSubSite")
    for (let i=0; i < mySites.length; i+=1){
        //console.log("{ id: "+ mySites[i].id +" name: " +mySites[i].name + " url: "+mySites[i].url + " depth: " + depth);
        
            let  mydiv = document.createElement('div');
            let  myLink = document.createElement('a');
            myLink.href = "http://" + mySites[i].url;
            myLink.text = "url: " + mySites[i].url;
            myLink.target = "_blank";
            myLink.rel = "external";

            mydiv.innerText =  "id: "+ mySites[i].id +"\n" +" name: " +mySites[i].name+"\n";
            mydiv.append(myLink);
            mydiv.className="showSiteDetails";
            mydiv.style.backgroundColor = colorArray[depth%colorArray.length];
            div.appendChild(mydiv)
        
        if(mySites[i].subData != null){
            let  mydiv2 = document.createElement('div');
            mydiv2.className = "showSiteDetails"
            mydiv2.style.backgroundColor = colorArray[depth];
            //mydiv.appendChild(mydiv2)
            let newDepth = depth+1;
            printCompany(mySites[i].subData,newDepth,mydiv);
        }
        
    }

    
}

function init(){
    let site = document.getElementById("root");
    printCompany(sites,depth,site)
}

//init();