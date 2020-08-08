var http = require('http');
const fetch = require("node-fetch");

http.createServer(function (req, res) {
  
  /*let player = {
    id:1231232,
    name:'eyal',
    level:34,
    coins:120000,
    country:'us'
  }*/

  //let playerId = 1000206049
  let playerId = 1
  let Url = 'https://playersdb-api.hbi-dev.huuuge.net/project/hc/user_id/' + playerId
   
  fetch(Url)
  .then(data=>{return data.json()})
  .then(ret=>{


    let player={}    
    player=ret
  
    //console.log(player)
    //onsole.log(JSON.stringify(req))

    let config = {}
    if (player.first_ha_iso=='PL'){




        // config Header
        config.id = 15
        config.name = 'config'
        config.minigameId = '1'
        config.custom_1 = 'custom 1'
        config.custom_2 = 'custom 2'
        config.custom_3 = 'custom 3'
        
        
        
        

        // config spins
        config.spins = []
        for (i=1;i<11;i++){
            let spin = {}
            
            spin.spinsN=i
            spin.sumOfBets=i*player.avg_bet
            
            config.spins.push(spin)
        }





        // config moves
        config.moves = []
        for (i=1;i<11;i++){
            let move = {}
            
            move.moveN=i
            move.weight=i*13
            
            config.moves.push(move)

        }







        // config steps
        config.steps = []
        for (i=1;i<50;i++){
            let step = {}
            
            step.step=i
            step.rewardReason='Step'
            step.chips = i*player.first_purchase_value*3 
            step.diamonds = 18*player.calc_avg_bet_size_21days/4;
            step.bronzeTickets = 0 
            step.silverTickets = 3
            step.goldTickets = 0
            step.xpBoost = 4
            step.lobbyBoost = 0 
            step.avatarFrame = 2
            step.charmsBoxId = 4
            
            config.moves.push(step)
        }








       } // end US

       res.writeHead(200, {'Content-Type': 'text/html'});
       res.end(JSON.stringify(config));
    }) //end fetch   
  
  
}).listen(8080);