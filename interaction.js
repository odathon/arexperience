AFRAME.registerComponent('accepts-clicks', {
  init: function() {
    this.el.addEventListener('touchend', handleClickEvent);
    this.el.addEventListener('click', handleClickEvent);
  },
  tick: function() {
    hideSpeechBubbleIfNoMarker();
  }
});

function hideSpeechBubbleIfNoMarker() {
  var speechBubble = document.querySelector(".speech-bubble");
  if (speechBubble.style.display === 'none' || !speechBubble.style.display) return;

  var shouldHide = true;
  builders.forEach(function(builder){
    var builderMarker = document.querySelector("#" + builder.name + "-marker");
    if (builderMarker && builderMarker.object3D.visible) shouldHide = false;
  });

  tools.forEach(function(tool){
    var toolMarker = document.querySelector("#" + tool.name + "-marker");
    if (toolMarker && toolMarker.object3D.visible) shouldHide = false;
  });

  if (shouldHide) speechBubble.style.display = 'none';
};

function handleClickEvent() {
  builders.forEach(function(builder) {
    console.log(builder);
    var builderMarker = document.querySelector("#" + builder.name + "-marker");

    var myParam = location.search.split('custid=')[1] ? location.search.split('custid=')[1] : '45466';
    console.log(myParam);
    var currentdate = new Date(); 
    var obj=null;
    var datetime =  currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + " @ "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();



    if(builder.name==='pyra'){
         obj ={
      isbooth1: true,
      timebooth: datetime
  };
} else if(builder.name==='frenchie'){
         obj ={
      isbooth3: true,
      timebooth2: datetime
  };
}else if(builder.name==='toob'){
       obj ={
      isbooth5: true,
      timebooth4: datetime
  };
}else if(builder.name==='lil'){
        obj ={
      isbooth4: true,
      timebooth3: datetime
  };
}
else if(builder.name==='hammer'){
         obj ={
      isbooth4: true,
      timebooth3: datetime
  };
  }


    if (builderMarker && builderMarker.object3D.visible) {
      if (searchForBuilderTool(builder)){
        toggleSpeechBubble(builder,obj,myParam);
      } else {
        toggleSpeechBubble(builder,obj,myParam);
      }
    }
 
  tools.forEach(function(tool){
    var toolMarker = document.querySelector("#" + tool.name + "-marker");
    if (toolMarker && toolMarker.object3D.visible) {
     // toggleSpeechBubble(tool.dialogue,tool.name);
      if (!userState.hasBuilderTool(tool)) userState.addTool(tool);
    }
  });
});
}

function toggleSpeechBubble(builder,obj,param) {
  var speechBubble = document.querySelector(".speech-bubble");
	if (speechBubble.style.display === 'none' || !speechBubble.style.display) {
    speechBubble.innerHTML = builder.dialogue;
    speechBubble.style.display = 'block';
  } else {
    speechBubble.style.display = 'none';
  }

  
   //var uri="https://argamer.herokuapp.com/customers/customer/"+param
  
 /* console.log(obj);

    $.ajax({ 
     type:'post',
     url:uri,
     dataType :'jsonp',
     data: obj,  //<------since your controller returns string use "text"
     success: function(data) {
    alert('Load was performed.');
  }
      
		
});
*/


}

function searchForBuilderTool(builder) {
  return userState.tools.some(function(tool) {
    return tool.name === builder.tool.name;
  });
};