# Trendz-Prototype
Trendz is a voice based engagement platform that would be available on all the alexa enabled devices.

With Trendz, The latest fashion statements of the celebrities are notified to the users through alexa, these users may then be suggested  to go through the designs in the cards and later asked if they would like to buy the products from the Myntra, Jabong site.
An example conversation -

        *User- "Alexa, What are the latest styling trends"
        *Alexa- "The Indian captain Virat kohli was spotted at the airport sporting black round
        *necked tee and matching pair of trousers. Would you like to see how it turned out?"
        *User-"Yes, Please"
        *Alexa-"I have sent the image of the look to your device "
        *User- "It looks Good. Please, place the order for me."

The code is written in nodejs and hosted as a lambda function which makes it completely serverless, and the intents from the alexa skill are mapped to the functions present in this nodejs file. 

I have attached a sample video of the prototype along with the zip folder of the code in which trendz skill is being called from  echo dot and the skill is sending display cards to my alexa account and can be seen on alexa app as well as alexa.amazon.com webpage.

Further Improvements Required-

* Account Linking with Myntra to enable users to place orders from skill, This can be achieved by the account linking card which takes the   required credentials from the users and sends it for verification.

* Currently arrays are being used to store offers and other information, they will have to be shifted to database, so that data may be       accessed and updated through api calls.  
