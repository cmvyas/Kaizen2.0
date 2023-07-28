class TreeNode {
    constructor(value) {
      this.value = value;
      this.children = [];
      this.count = 0;
    }
  }
  
  class UniqueTree {
    constructor() {
      this.root = new TreeNode("Root");
    }
  
    insert(parentNode, property, value) {
      for (const child of parentNode.children) {
        if (child.value === property) {
          for (const subChild of child.children) {
            if (subChild.value === value) {
              subChild.count++;
              return;
            }
          }
          const newNode = new TreeNode(value);
          newNode.count = 1;
          child.children.push(newNode);
          return;
        }
      }
      const newPropertyNode = new TreeNode(property);
      const newNode = new TreeNode(value);
      newNode.count = 1;
      newPropertyNode.children.push(newNode);
      parentNode.children.push(newPropertyNode);
    }
  }
  
  function fetchSpecificProperties(rootElement = document.body) {
    function getElementSpecificProperties(element) {
      const computedStyles = window.getComputedStyle(element);
      const specificProperties = {
        "background-color": computedStyles.backgroundColor,
        "color": computedStyles.color,
        "font-family": computedStyles.fontFamily,
        "font-size": computedStyles.fontSize,
        "border-radius": computedStyles.borderRadius,
      };
  
      return specificProperties;
    }
  
    function traverse(element, tree) {
      const tagNameLevel1 = element.tagName;
      const properties = getElementSpecificProperties(element);
  
      tree.insert(tree.root, tagNameLevel1);
  
      for (const property in properties) {
        tree.insert(tree.root, tagNameLevel1, property);
        tree.insert(tree.root.children.find((child) => child.value === tagNameLevel1), property, properties[property]);
      }
  
      for (const childElement of element.children) {
        traverse(childElement, tree);
      }
    }
  
    const tree = new UniqueTree();
    traverse(rootElement, tree);
  
    return tree;
  }
  
  const tree = fetchSpecificProperties();
  console.log(tree);
  
  
  ///////
  
  
  var a1 = tree.root.children;
  var count_bg_color = count_color = count_font_family = count_font_size = count_border_radius = 0;
  var bg_color = color = font_family = font_size = border_radius ='';
  for(i=0; i<a1.length; i++){
    if(typeof a1[i].value!='undefined'){
     // console.log(a1[i].value);
      for(j=0; j<a1[i].children.length; j++){
        if(typeof a1[i].children[j].value!='undefined'){
         // console.log(a1[i].children[j].value);
  
            if(a1[i].children[j].value === 'background-color'){
              for(k=0; k<a1[i].children[j].children.length; k++){
                if(typeof a1[i].children[j].children[k].value!='undefined'){
                 // console.log(a1[i].children[j].children[k].value);
                 // console.log(a1[i].children[j].children[k].count);
                  if(a1[i].children[j].children[k].count>count_bg_color) 
                  {
                    count_bg_color=a1[i].children[j].children[k].count;
                    bg_color=a1[i].children[j].children[k].value;
                  
                  }
                }
              }
            }
  
            else if(a1[i].children[j].value === 'color'){
              for(k=0; k<a1[i].children[j].children.length; k++){
                if(typeof a1[i].children[j].children[k].value!='undefined'){
                //  console.log(a1[i].children[j].children[k].value);
               //   console.log(a1[i].children[j].children[k].count);
                  if(a1[i].children[j].children[k].count>count_color) {count_color=a1[i].children[j].children[k].count;
                  color=bg_color=a1[i].children[j].children[k].value;}
                }
              }
            }
  
            else if(a1[i].children[j].value === 'font-family'){
              for(k=0; k<a1[i].children[j].children.length; k++){
                if(typeof a1[i].children[j].children[k].value!='undefined'){
                  if(a1[i].children[j].children[k].count>count_font_family) 
                  {count_font_family=a1[i].children[j].children[k].count;
                    font_family=a1[i].children[j].children[k].value;}
                  
                }
              }
            }
  
            else if(a1[i].children[j].value === 'font-size'){
              for(k=0; k<a1[i].children[j].children.length; k++){
                if(typeof a1[i].children[j].children[k].value!='undefined'){
                  if(a1[i].children[j].children[k].count>count_font_size) {count_font_size=a1[i].children[j].children[k].count;
                    font_size=a1[i].children[j].children[k].value;
                  }
                //  console.log(a1[i].children[j].children[k].value);
                 // console.log(a1[i].children[j].children[k].count);
                }
              }
            }
  
            else if(a1[i].children[j].value === 'border-radius'){
              for(k=0; k<a1[i].children[j].children.length; k++){
                if(typeof a1[i].children[j].children[k].value!='undefined'){
                  if(a1[i].children[j].children[k].count>count_border_radius) {
                    count_border_radius=a1[i].children[j].children[k].count;
                    border_radius=a1[i].children[j].children[k].value;
                  }
                 // console.log(a1[i].children[j].children[k].value);
               //   console.log(a1[i].children[j].children[k].count);
                }
              }
            }
            
            
            
          
        }
      }
    }
  
  } 
  
      console.log("Best backaground color for your template will be:" + bg_color);
      console.log("Best font color for your template will be:" + color);
      console.log("Best font type for your template will be:" + font_family);
      console.log("Best font_size for your template will be:" + font_size);
      console.log("If you wanna give border box radius choose this:" + border_radius);
     
/////// localstorage

localStorage.setItem('bg_color', bg_color);
localStorage.setItem('color', color);
localStorage.setItem('font_family', font_family);
localStorage.setItem('font_size', font_size);
localStorage.setItem('border_radius', border_radius);