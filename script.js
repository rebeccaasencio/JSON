let outputContent = document.getElementById('outputContent')
let contentGrid = document.getElementById('contentGrid')

let jsonDatabase = [
  {
    "title": "Pezi Duri Redesign",
    "picture":"project_01_midterm_redesign.png",
    "description": "Pezi Duri is a D'onofrio ice cream brand popular in Peru. This assignment called for a redesign of the art/graphic material of a product of your choice. We were able to explore coveying a specific mood and reaching an intended audience with our design. I chose to redesign the Lucuma ice cream packaging from D'onofrio with a 1930's traditional animation/rubber hose art style. I took inspirations from early Disney animation films, and video game franchises like Cuphead. This redesign was done in Adobe Illustrator and rendered in Adobe Photoshop.",
    "color":"#C5EAF2"
  },
  {
    "title":"Plant Pattern",
    "picture":"PlantWatercolor_Rebecca-01.png",
    "description":"Pattern Assignment made in Illustrator",
    "color":"#C5EAF2"
  },
  {
    "title": "Cat Space Arcade",
    "picture": "CatSpaceArcade_Rebecca.png",
    "description": "Photoshop Surrealism Assignment made in Photoshop",
    "color":"#C5EAF2"
  },
  {
    "title": "Hypnotic Beam",
    "picture": "texture_assignment_ copy.png",
    "description":"Texture Assignment made in Photoshop",
    "color":"#C5EAF2"
  },
  {
    "title":"BIG PLANTS",
    "picture": "BIG_PLANTS_BATTLE.jpg",
    "description": "BIG PLANTS is a video game concept I created in 2020. BIG PLANTS is a plant based adventure game inspired by video games such as, Pikmin, The Legend of Zelda franchise, Stardew Valley, and Paper Mario 64.",
    "color":"#C5EAF2"
  },
  {
    "title":"Moose Skull",
    "picture":"Watercolor_Skull.jpg",
    "description":"Medium: Watercolor, Color Pencil, Pen and Ink",
    "color":"#C5EAF2"
  },
  {
    "title":"Double Face",
    "picture":"pen_and_ink_double_face.JPG",
    "description":"Medium: Alcohol-Based Marker, Pen and Ink",
    "color":"#C5EAF2"
  },
  {
    "title":"Squirrel Forestry",
    "picture":"pen_and_ink_forestry.jpg",
    "description":"Medium: Pen and Ink",
    "color":"#C5EAF2"
  }
];

for (var i = 0; i < jsonDatabase.length; i++){
  createElement(jsonDatabase[i]);
}

function createElement(incomingJSON){
  let newContent = document.createElement("DIV");
  newContent.classList.add('contentItem');
  newContent.style.backgroundColor=incomingJSON['color'];

  let newTitle = document.createElement("H2");
  newTitle.classList.add("contentTitle");
  newTitle.innerText = incomingJSON['title'];
  newContent.appendChild(newTitle);

  let newImage = document.createElement("IMG");
  newImage.classList.add("Image");
  newImage.src = incomingJSON['picture'];
  newContent.appendChild(newImage);

  let newDescription = document.createElement("H4");
  newDescription.innerText = incomingJSON['description'];
  newContent.appendChild(newDescription);

  contentGrid.appendChild(newContent);
}
