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
        dialogue: 'Hi there , I\'m Ora a HR Manager, My day to day job requires me to check employee wellness, time etc. With Oracle Cloud I can achieve that!',
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
        dialogue: 'Gem of all Lands! Acquire me to get higher power to acquire and retain customers just like Oracle CX and Marketing Cloud.  ',
        tool: new Tool('qwer', 'You have found Frenchie\'s hat!'),
        successDialogue: 'Merci!',
        id: 'isbooth3',
        time: 'timebooth2'
      },
      {
        name: 'lil',
        dialogue: 'As Sharp as a sword and precise should be your Database, let\'s drive Oracle Autonomous Database',
        tool: new Tool('klj', 'You have found Lil\'s screwdriver!'),
        successDialogue: 'Thanks for the screwdriver!',
        id: 'isbooth4',
        time: 'timebooth3'
      },
      {
        name: 'toob',
        dialogue: 'A penny saved is a Penny Earned, with Oracle Financials Cloud it\'s reality ',
        tool: new Tool('nmo', 'You have finally Got the treasure'),
        successDialogue: 'Thanks for finding my wrench!',
        id: 'isbooth5',
        time: 'timebooth4'

      },
      {
        name: 'hammer',
        dialogue: 'The Crown of any industry, would be it\'s effective supply chain management. Experience it with Oracle SCM cloud.',
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
