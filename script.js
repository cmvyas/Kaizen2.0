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
  
  
  //-------------------------------------------------------------------------//
  
  var a1 = tree.root.children;
  var v1, v2, max1, max2, temp;
  
  var strGlobal="";
  var strGlobalFull="";
  for(i=0; i<a1.length; i++){
    if(typeof a1[i].value!='undefined'){
      //console.log(a1[i].value);
      for(j=0; j<a1[i].children.length; j++){
        if(typeof a1[i].children[j].value!='undefined'){
          //console.log(a1[i].children[j].value);
            
            const numbers = [];
            
          
            if(typeof a1[i].children[j].children[0].value!='undefined' || typeof a1[i].children[j].children[1].value!='undefined'){
  
                if(a1[i].children[j].children.length<2){
                    //console.log("Only 1 value");
                    v1 = a1[i].children[j].children[0].value;
                    max1 = a1[i].children[j].children[0].count;
                    v2 = "";
                    max2 = "";
                } else if(a1[i].children[j].children.length<3){
                    //console.log("Only 2 value");
                    v1 = a1[i].children[j].children[0].value;
                    max1 = a1[i].children[j].children[0].count;
                    v2 = a1[i].children[j].children[1].value;
                    max2 = a1[i].children[j].children[1].count;
                }
                
                strGlobal = a1[i].value+" "+a1[i].children[j].value+" "+v1+" "+max1+" "+v2+" "+max2+";";
                strGlobalFull=strGlobalFull+a1[i].value+" "+a1[i].children[j].value+" "+v1+" "+max1+" "+v2+" "+max2+";";
                console.log(strGlobal);
            }
        }
      }
    }
  }
  
  console.log(strGlobalFull);