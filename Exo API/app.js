fetch("https://mbouridev.github.io/users.json")

    .then((response) => response.json())
    .then(function(response){
        console.log(response)

        response = response.customers

        var users = []
        var pets = []
        petId = 0

        //Afficher tous les users
        for(var i in response){
            users[i] = response[i]['user_name']
        
            var petArray = response[i]['user_pets'] 

            //Afficher tous les animaux
            for(var p in petArray){
                pets[petId] = petArray[p]['pet_name']
                petId++;
            }

            if (users[i]['user_pets'] > 0){
                users[i] = response[i]['user_name']
            }
            
        }
        console.log(users)
        console.log(pets.sort())
        
    })