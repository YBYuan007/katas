const PI = 3.14159;

const sphereVolume = function (radius) {
  return (4 * PI * Math.pow(radius, 3)) / 3;
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  return (PI * Math.pow(radius, 2) * height) / 3;
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  return height * width * depth;
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let result = 0 ; 
  for (let i = 0 ; i < solids.length ; i ++) {
    switch (solids[i].type) {
      case 'sphere' : 
      result = result +  sphereVolume(solids[i].radius); 
      break; 

      case 'cone' : 
      result = result +  coneVolume(solids[i].radius, solids[i].height); 
      break; 

      case 'prism' : 
      result = result +   prismVolume(solids[i].height, solids[i].width, solids[i].depth); 
      break; 

    }
  } 
  return result; 
};


const largeSphere = {
  type: "sphere",
  radius: 40,
};

const smallSphere = {
  type: "sphere",
  radius: 10,
};

const cone = {
  type: "cone",
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
