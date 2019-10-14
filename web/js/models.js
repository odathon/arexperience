var builders = [],
    tools = [];

function ARModel(name, dialogue) {
    //we can make name link to the el id to find it on click?
    this.name = name;
    this.dialogue = dialogue;
    

}

ARModel.prototype.speak = function() {
    return this.dialogue;   
}

//Builder model
function Builder(name, dialogue, tool, successDialogue) {
    ARModel.call(this, name, dialogue);
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
        dialogue: 'Hi there , I\'m Ora I am princess of Zorcona! I\'ve lost my sword. Let me know if you see it!',
        tool: new Tool('xyz', 'You have found Ora\'s Sword!'),
        successDialogue: 'Thanks for my hammer!'
      },
      {
        name: 'biggie',
        dialogue: 'Thank you helping me find my sword! Fortune favors te brave, be brave and look for an emerald Gem!',
        tool: new Tool('abc', 'You have found my gem!'),
        successDialogue: 'My blocks have been found!'
      },
      {
        name: 'frenchie',
        dialogue: 'Gem has special powers when combined with crown, Look for crown to unveil those powers. ',
        tool: new Tool('qwer', 'You have found Frenchie\'s hat!'),
        successDialogue: 'Merci!'
      },
      {
        name: 'lil',
        dialogue: 'Just a step away from treasure.!!',
        tool: new Tool('klj', 'You have found Lil\'s screwdriver!'),
        successDialogue: 'Thanks for the screwdriver!'
      },
      {
        name: 'toob',
        dialogue: 'You have got superpowers! It\'s time for some  gold! ',
        tool: new Tool('nmo', 'You have finally Got the treasure'),
        successDialogue: 'Thanks for finding my wrench!'
      },
      {
        name: 'hammer',
        dialogue: 'You have finally got the treasure. To collect it kindly go to MCX booth!! ',
        tool: new Tool('nmo', 'You have finally Got the treasure'),
        successDialogue: 'Thanks for finding my wrench!'
      }
    ];

    buildersArray.forEach(function(builder){
        builders.push(new Builder(builder.name, builder.dialogue, builder.tool, builder.successDialogue));
        if (builder.tool) tools.push(builder.tool);
    });

    console.log('builders', builders);
    console.log('tools', tools)
}

initiateModels();
