const Alexa = require('ask-sdk-core');

var celebs=[];
celebs.push('Kohli');
celebs.push('katrina kaif');

var myData = []; 
myData.push("The Indian captain Virat kohli was spotted at the airport sporting black round necked tee and blue jeans. Would you like to see how it turned out?");
myData.push("katrina kaif looked stunning");

var caption = []; 
caption.push("Kohli at delhi airport");
caption.push("katrina kaif on the sets of her upcoming film");

var styleimgurl=[];
 styleimgurl[0]='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRni-5WN8UaRuh4_Y3AXnoC6aBxA9ltdDmR80Qqgz3jtWs2iqxWQA&s';
styleimgurl[1]='https://akm-img-a-in.tosshub.com/sites/cosmo/sites/default/files/gallery/images/1464875268-picmonkey-collage.jpg';

var imgurl=[];
imgurl.push('https://assets.myntassets.com/h_68,q_100,w_52/v1/assets/images/2275352/2018/2/24/11519444618271-Roadster-Men-Black-Solid-Round-Neck-T-shirt-1771519444618074-1.jpg');
imgurl.push('https://assets.myntassets.com/h_68,q_100,w_52/v1/assets/images/productimage/2019/6/11/bc20f705-56eb-4c18-8f76-15bfe6dc35cb1560231457019-1.jpg');

var item=[];
item.push('Black T Shirt');
item.push('Blue Jeans');

var company=[];
company.push('Roadster');
company.push('Wrogn');

var offers=[];
offers.push('As part of end of season sale spykar levis and wrogn are offering upto 50 percent discount on tshirt and jeans only on myntra and jabong');

const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const speakOutput = 'Welcome to TRENDZ, You can know about latest styling trends of the celebrities and latest offers available on myntra and Jabong ';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'You can say hello to me! How can I help?';

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
const knowMoreIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'new_looks';
    },
    handle(handlerInput) {
        const speakOutput = myData[0];

        return handlerInput.responseBuilder
            .speak(speakOutput)
          .reprompt(speakOutput)
            .getResponse();
    }
};
const offersIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'offer';
    },
    handle(handlerInput) {
        const speakOutput = offers[0];

        return handlerInput.responseBuilder
            .speak(speakOutput)
          .reprompt("Would you like to know more offers or discover the latest styling trends of celebrities")
            .getResponse();
    }
};
const affirmIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'card_send';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
  .speak('I have sent a card to your alexa app, that shows the look')
  .withStandardCard(celebs[0],caption[0],styleimgurl[0],styleimgurl[0])
  .reprompt("Would You like to see similar styles available on Myntra")
  .getResponse();
    }
};
const HelloWorldIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'HelloWorldIntent';
    },
    handle(handlerInput) {
        const speakOutput = 'Okay Order Placed';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
const myntraIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'myntra_jabongpage';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
        .speak(item[0])
  .withStandardCard(
    item[0], 
    company[0]+" "+item[0],imgurl[0])
   .reprompt("See jeans too")
  .getResponse();
    }
};
const SecondItemIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'secondItem';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder
     .speak(item[1])
  .withStandardCard(
    item[1], 
    company[1]+" "+item[1],imgurl[1])
   .reprompt("Place order")
  .getResponse();
    }
};
const CancelAndStopIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.CancelIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.StopIntent');
    },
    handle(handlerInput) {
        const speakOutput = 'Goodbye!';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .getResponse();
    }
};
const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        // Any cleanup logic goes here.
        return handlerInput.responseBuilder.getResponse();
    }
};

// The intent reflector is used for interaction model testing and debugging.
// It will simply repeat the intent the user said. 
const IntentReflectorHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest';
    },
    handle(handlerInput) {
        const intentName = Alexa.getIntentName(handlerInput.requestEnvelope);
        const speakOutput = `You just triggered ${intentName}`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
            .getResponse();
    }
};

// Generic error handling to capture any syntax or routing errors. 
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.stack}`);
        const speakOutput = `Sorry, I had trouble doing what you asked. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

// The SkillBuilder acts as the entry point for your skill, routing all request and response
// payloads to the handlers above.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,
        HelloWorldIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
        knowMoreIntentHandler ,
         affirmIntentHandler,
         offersIntentHandler,
        SecondItemIntentHandler ,
         myntraIntentHandler,
        IntentReflectorHandler, // make sure IntentReflectorHandler is last so it doesn't override your custom intent handlers
    )
    .addErrorHandlers(
        ErrorHandler,
    )
    .lambda();
