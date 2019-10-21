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
        dialogue: 'CONGRATULATIONS!  You just captured the last of the 5 Avatars of the Oracle MCXF Treasure Hunt!  Checkout your MCXF journey at the CX Demo booth.  Thanks for joining Oracle Modern Customer Experience Forum.',
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
        dialogue: 'Do you have fragmented understanding of your customer?  Do you know the path to connected intelligence that helps create customer-insight-driven interactions?  Let\'s talk',
        tool: new Tool('qwer', 'You have found Frenchie\'s hat!'),
        successDialogue: 'Merci!',
        id: 'isbooth3',
        time: 'timebooth2'
      },
      {
        name: 'lil',
        dialogue: 'Thanks for checking out Oracle Autonomous Data Warehouse for CX.  Learn more about the CX Apps here https://www.oracle.com/applications/customer-experience/',
        tool: new Tool('klj', 'You have found Lil\'s screwdriver!'),
        successDialogue: 'Thanks for the screwdriver!',
        id: 'isbooth4',
        time: 'timebooth3'
      },
      {
        name: 'toob',
        dialogue: 'Delighted to have you at the CX Demo.  Learn more about CX here https://www.oracle.com/applications/customer-experience/ ',
        tool: new Tool('nmo', 'You have finally Got the treasure'),
        successDialogue: 'Thanks for finding my wrench!',
        id: 'isbooth5',
        time: 'timebooth4'

      },
      {
        name: 'hammer',
        dialogue: 'Welcome to Oracle MCXF.  This is the start of your journey into The Experience Economy.  Are you ready?',
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
