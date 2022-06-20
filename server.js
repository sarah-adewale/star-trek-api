const express = require('express') //use express
const app = express() //use app to call express
const cors = require('cors') // use/add cors
const PORT = 3000 //listen on port 3000

app.use(cors()) // use cors

const aliens = {
     'humans':{
        'speciesName': 'Humans',
        'homeWorld': 'Earth',
        'features': 'Rounded ear, hair on the hairs and face (sometimes)',
        'interestingFact': 'Founded the united fedeartion of planets after first contact with the vulcans',
        'notableExamples': 'James T. Kirk, Zephram Cochran, Abraham Lincoln',
        'image': 'https://static.wikia.nocookie.net/aliens/images/6/68/The_City_on_the_Edge_of_Forever.jpg'
    },
    'vulcans':{
        'speciesName' : 'Vulcans',
        'homeworld': 'Vulcan',
        'features':'Pointed ears, upward-curving eyebrows',
        'interestingFact': 'Practice an extreme form of emotional regulation that focuses on logic above all else, pioneered by a Vulcan named Surak' ,
        'notableExamples' : "Spock, T'Pol, Sarek",
        'image': 'https://static.wikia.nocookie.net/aliens/images/7/75/Vulcans-FirstContact.jpg'
    },
    'klingons':{
        'speciesName' : 'Klingons',
        'homeworld': "Qo'noS",
        'features':'Large stature, pronounced ridges on the forehead, stylized facial hair',
        'interestingFact': 'Highly skilled in weapons and battle. Their facial ridges were lost as the result of a virus in 2154, but were subsequently restored by 2269.' ,
        'notableExamples' : "Worf, Kor, Kang",
        'image': 'https://static.wikia.nocookie.net/aliens/images/7/74/Kruge.jpg'
    },
    'romulans':{
        'speciesName' : 'Romulans',
        'homeworld': "Romulus",
        'features':'Pointed ears, upward-curving eyebrows,green tinge to the skin, diagonal smooth forehead ridges (sometimes)',
        'interestingFact': 'Share a common ancestory with Vulcans, though none of the emotional discipline. Romulus has a sister planet, Remus, on which the Remans are seen as lesser beings.' ,
        'notableExamples' : "Pardek, Tal'aura, Narissa",
        'image': 'https://static.wikia.nocookie.net/aliens/images/1/1d/Zzzd7.jpg'
    },
    'borg':{
        'speciesName' : '(The) Borg',
        'homeworld': 'unknown (Delta Quadrant)',
        'features':'pale skin, numerous interior and exterior biological modifications',
        'interestingFact': 'No single genetic lingeage, species propagates by assimilating individuals via nanotechnology, led by a hive mind guided by a single "queen" individual. DO NOT APPROACH unless under specific diplomatic orders from Starfleet Command.' ,
        'notableExamples' : "Borg Queen, Seven of Nine, Locutus",
        'image': 'https://static.wikia.nocookie.net/aliens/images/7/76/Borg.jpg'
    },
    'gorn':{
        'speciesName' : 'Gorn',
        'homeworld': 'unknown (Alpha Quadrant)',
        'features':'scaly green skin, large, iridescent eyes, powerful build, sharp teeth',
        'interestingFact': 'Extremely militaristic and driven to conquer, but also possess advanced scientific knowledge allowing for superior bio-weapons.' ,
        'notableExamples' : "Gorn Captain",
        'image': 'https://static.wikia.nocookie.net/aliens/images/9/9b/Gorn.jpg'
    },
    'trill':{
        'speciesName' : 'Trill',
        'homeworld': 'Trill',
        'features':'Outward appearance similar to humans, aside from distinct dark pigment marks running symmetrically down both sides of the face and body',
        'interestingFact': 'Some Trill are willin hosts to a long-lived invertibrate symbiote that merges with the host to create a distinct personality.' ,
        'notableExamples' : "Jadzia Dax, Ezri Dax, Curzon Dax",
        'image': 'https://static.wikia.nocookie.net/aliens/images/4/42/EzriDax.jpg'
    },
}

app.get('/', (request, response) =>{ //when a user clicks enter (home)
    response.sendFile(__dirname + '/index.html') // respond with the root file
})

app.get('/api/:alienName', (request, response) =>{ //when user clicks api url
    const aliensName = request.params.alienName.toLowerCase() //use aliensName to request parameters
    if(aliens[aliensName]){ //if aliensName is in aliens
        response.json(aliens[aliensName]) //respond with obj name in json format
    }else{
        response.json(aliens['humans'])
    } 
})

app.listen(process.env.PORT || PORT,() =>{
    console.log(`server is running of port ${PORT}, better go catch it!`)
})



