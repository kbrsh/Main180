// Contains the story and paths
var story = {
  intro: {
    prompt: 'You are a water droplet in the ocean, now what?',
    options: [{
      name: 'Evaporate',
      path: 'choose_cloud'
    }, {
      name: 'Stay',
      path: 'lonely'
    }]
  },
  choose_cloud: {
    prompt: 'Choose your Cloud!',
    options: [{
      name: 'Stratus',
      path: 'fair'
    }, {
      name: 'Cumulonimbus',
      path: 'precipitate_choice'
    }]
  },
  precipitate_choice: {
    prompt: 'You have condensed into a Cumulonimbus cloud, now what?',
    options: [{
      name: 'Precipitate',
      path: 'precipitate_type'
    }, {
      name: 'Do Nothing',
      path: 'lonely'
    }]
  },
  precipitate_type: {
    prompt: 'Time to precipitate',
    options: [{
      name: 'Make it rain!',
      path: 'rain_type'
    }, {
      name: 'Make it hail!',
      path: 'hail_type'
    }]
  },
  hail_type: {
    prompt: 'How big is the hail?',
    options: [{
      name: 'Small',
      path: 'small'
    }, {
      name: 'BIG',
      path: 'big'
    }]
  },
  small: {
    prompt: 'Small hail! Everyone looks at it and has fun.',
    options: [{
      name: 'Collect Somewhere',
      path: 'collection'
    }]

  },
  big: {
    prompt: 'You cause havoc in the city. Buildings are destroyed, and people die.',
    options: [{
      name: 'Collect Somewhere',
      path: 'collection'
    }]
  },
  rain_type: {
    prompt: 'What type of rain?',
    options: [{
    name: 'Light Drizzle',
    path: 'drizzle'
  }, {
    name: 'Heavy Rainstorm',
    path: 'heavy'
             }]
  },
  drizzle: {
    prompt: 'Some light rain has happend and everyone is happy',
    options: [{
      name: 'Land somewhere',
      path: 'collection'
    }]

  },
  heavy: {
    prompt: 'You have caused floods to happen in the city, and everything is being destroyed.',
    options: [{
    name: 'Land somewhere',
      path: 'collection'
  }]
  },
  collection: {
    prompt: 'Where would you like to be collected with your fellow droplets?',
    options: [{
    name: 'Ocean',
    path: 'ocean'
  }, {
    name: 'Swamp',
    path: 'swamp'
  }]
  },
  ocean: {
    prompt: 'You are now in the ocean, waiting to start the cycle again',
    options: [{
      name: 'Start Over',
      path: 'intro'
    }]
  },
  swamp: {
    prompt: 'You are in the muddy swamp, and can\'t wait to start the journey again',
    options: [{
    name: 'Start Over',
    path: 'intro'
  }]
  },
  fair: {
    prompt: 'You are in a cirrus cloud now, fair weather again!',
    options: [{
      name: 'Start Again',
      path: 'intro'
    }]
  },
  lonely: {
    prompt: 'You are lonely now',
    options: [{
      name: 'Start Again',
      path: 'intro'
    }]
  }
}

/**
 * Chosen option is an object with properties {name, path}
 */
function display_scenario(chosen_option) {
  var option_name = chosen_option.name;
  var option_path = chosen_option.path;
  var scenario = story[option_path];

  // Clear the #prompt div and the #options div
  $('#prompt').empty();
  $('#options').empty();

  // Create a <p> to display what the user has chosen if option_name is not null and append it to the #prompt <div>
  if (option_name) {
    $('<p>').html('You have chosen <b>' + option_name + '</b>').appendTo('#prompt');
  }

  // Append the scenario's prompt
  $('<p>').html(scenario.prompt).appendTo('#prompt');

  // Append the options into the #options <div>
  // We want to loop through all the options and create buttons for each one. A regular for-loop would not suffice because adding a button is not asynchronous. We will create an asynchronous loop by using recursion
  function add_option_button(index) {
    if (index === scenario.options.length) {
      // Base case
      return;
    }

    var option = scenario.options[index];

    // Create a <button> for this option and append it to the #options <div>
    $('<button>')
      .html(option.name)
      .click(function(e) {
        // This is an onclick handler function. It decides what to do after the user has clicked on the button.

        // First, prevent any default thing that the button is going to do, since we're specifying our own action for the button
        e.preventDefault();

        // We'll want to call display_scenario() with this option
        display_scenario(option);
      })
      .appendTo('#options');

    // Add the next option button
    add_option_button(index + 1);
  }
  add_option_button(0);
}

// This function waits until the document is ready
$(document).ready(function() {
  // Start the story
  display_scenario({
    name: null,
    path: 'intro'
  });
  $('button').hover(
       function(){ $(this).addClass('tada') },
       function(){ $(this).removeClass('tada') }
)
});
