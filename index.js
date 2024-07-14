
var arr = [
    {
        dp: "images/g8.jpg" ,
        story:"images/g8.jpg"
    },
    {
        dp: "images/meritt-thomas-_8qzW8tQbNk-unsplash.jpg",
             story: "images/g8.jpg"

    },
    {
        dp: "images/stylist.jpg" ,
             story: "images/g8.jpg"
    },
    {
        dp:"images/wepik-export-20231204140230KErw.png" ,
             story: "images/g8.jpg" 
    },
    {
        dp: "images/young-woman-with-round-glasses-yellow-sweater.jpg" ,
             story: "images/g8.jpg"
    }
]



var clutter = "";
arr.forEach(function(elem,idx){
    console.log(elem.dp);
    clutter += `<div id="story">  <img id="${idx}" src="${elem.dp}" alt=""></div>`;

});

console.log(clutter);

var storySection = document.querySelector("#story_section");
storySection.innerHTML  = clutter;
storySection.addEventListener('click',function(dets){
    let story = arr[dets.target.id].story;
    document.querySelector("#full_story").style.display = "block";
    document.querySelector("#full_story").style.backgroundImage = `url(${story})`;

    setTimeout(function(){
        document.querySelector("#full_story").style.display = "none";
    },3000)
})