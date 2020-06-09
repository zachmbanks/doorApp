let door = {
  makeup: ['single', 'pair', 'single slide', 'bipart', 'folding'],
  frame: {
      handing: ['left hand', 'left hand reverse', 'right hand', 'right hand reverse'],
      frameMaterial: ['Steel', 'Aluminum', 'Wood'],
      insideWidth: 36,
      insideHeight: 84,
      jambFace: 0,
      headFace: 0,
      frameDepth: 0,
  },
  panel: {
      panelMaterial:  ['Steel', 'Aluminum','Wood', 'Glass'],
      panelWidth: function(){
          width = door.frame.insideWidth - (door.panel.jambGap * 2);
          return width;

      },
      panelHeight: function(){
         let dp = door.panel;
         let height = (door.frame.insideHeight - dp.jambGap) - dp.finsihFloorGap;
         return height;
      },
      jambGap: .125,
      finsihFloorGap: .625,
      centerOfPairGap: .1875

  }

}


function singleSelectChangeText() {
  var configSelection = document.getElementById("configSelect");
  var selValue = configSelection.options[configSelection.selectedIndex].value;
  console.log(selValue)
  //Setting Value
  document.querySelector(".panelCalculator").style.display = 'block';
}




function calculate() {
  let width, height, configSelect;
  
  configSelect = document.querySelector('#configSelect').text;
  width = document.querySelector('#insideFrameWidth').value;
  height = document.querySelector('#insideFrameHeight').value;
  door.frame.insideWidth = width;
  door.frame.insideHeight = height;
  panelW = door.panel.panelWidth();
  panelH = door.panel.panelHeight();
  if (configSelect === 'Equal Pair') {
   document.querySelector('#panleSizeDiscription').innerHTML = 'Two equal panel\'s' 
   document.querySelector('#panelSize').innerHTML = (panelW / 2) - door.panel.centerOfPairGap + ' x ' + panelH
  } else{
    document.querySelector('#panelSize').innerHTML = 'Door panel dimention is ' + panelW + ' x ' + panelH ;
  }
  
  
}
