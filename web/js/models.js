var builders = [],
    tools = [];

function ARModel(name, dialogue,id,time) {
    //we can make name link to the el id to find it on click?
    this.name = name;
    this.dialogue = dialogue;
    this.id=id;
    this.time=time;
    

}

ARModel.prototype.speak = function() {
    return this.dialogue;   
}

//Builder model
function Builder(name, dialogue, tool, successDialogue,id,time) {
    ARModel.call(this, name, dialogue,id,time);
    this.tool = tool;
    this.successDialogue = successDialogue;
}

Builder.prototype = Object.create(ARModel.prototype);

//Tool model
function Tool(name, dialogue) {
    ARModel.call(this, name, dialogue);
}

Tool.prototype = Object.create(ARModel.prototype);

function initiateModels() {
    var buildersArray = [
      { 
        name: 'pyra',
        dialogue: 'Hi ! I\'m PYRA, I am your HR assistant for Oracle HCM Cloud, get in touch with our HCM Consultant to knoe more.',
        tool: new Tool('xyz', 'You have found Ora\'s Sword!'),
        successDialogue: 'Thanks for my hammer!',
        id: 'isbooth1',
        time: 'timebooth' 
      }, 
      {
        name: 'biggie',
        dialogue: 'Thank you helping me find my sword! Fortune favors te brave, be brave and look for an emerald Gem!',
        tool: new Tool('abc', 'You have found my gem!'),
        successDialogue: 'My blocks have been found!',
        id: 'isbooth2',
        time: 'timebooth1'
      },
      {
        name: 'frenchie',
        dialogue: 'Congratulations! you collected the 5th avatar at our CX booth ! hope you liked the experience',
        successDialogue: 'Merci!',
        id: 'isbooth3',
        time: 'timebooth2'
      },
      {
        name: 'lil',
        dialogue: 'Thanks for checking out Oracle Autonomous Data Warehouse(ADW).  Learn more about ADW from our specialised consultant.',
        tool: new Tool('klj', 'You have found Lil\'s screwdriver!'),
        successDialogue: 'Thanks for the screwdriver!',
        id: 'isbooth4',
        time: 'timebooth3'
      },
      {
        name: 'toob',
        dialogue: 'A cool as our ERP is it let\'s you maintain your Enterprise and it\'s resources just like a Crown to your Company',
        tool: new Tool('nmo', 'You have finally Got the treasure'),
        successDialogue: 'Thanks for finding my wrench!',
        id: 'isbooth5',
        time: 'timebooth4'

      },
      {
        name: 'hammer',
        dialogue: 'Oracle Supply Chain can help you with your redundant tasks in  your supply chain in a better way!',
        tool: new Tool('nmo', 'You have finally Got the treasure'),
        successDialogue: 'Thanks for finding my wrench!',
        id:'booth6',
        time: 'timebooth5'
      }
    ];

    buildersArray.forEach(function(builder){
        builders.push(new Builder(builder.name, builder.dialogue, builder.tool, builder.successDialogue, builder.id, builder.time));
        if (builder.tool) tools.push(builder.tool);
    });

    console.log('builders', builders);
    console.log('tools', tools)
}

initiateModels();
