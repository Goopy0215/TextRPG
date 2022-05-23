let health = 100
let money = 1000
let campfire = 0
let campfirePrice = 100
let key = 0
let relic = 0
let relicPrice = 1000
let wolfPelt = 0
let wolfPeltPrice = 100
let trollSkin = 0
let trollSkinPrice = 750
let diamond = 0
let diamondPrice = 1000
let ruby = 0
let rubyPrice = 1000
let logs = 0
let stone = 0
let RefinedWood = 0
let deerSkin = 0
let carp = 0
let carpPrice = 10
let cookedCarp = 0
let cookedCarpPrice = 40
let largeMB = 0
let LMBP = 50
let cookedLMB = 0
let cookedLMBPrice = 250
let Bass = 0
let BassPrice = 5
let cookedBass = 0
let cookedBassPrice = 20
let CatFish = 0
let CatFishPrice = 25
let cookedCF = 0
let cookedCFPrice = 100
let deerSkinPrice = 50
let bearPelt = 0
let bearPeltPrice = 250
let pickaxes = 0
let sword = 0
let gun = 0
let gunPrice = 500
let rod = 0
let rodPrice = 750
let shield = 0
let shieldPrice = 200
let potion = 0
let potionPrice = 1000
let logPlus = 1
let stonePlus = 1
let RefinedWoodPlus = 1
let autologPlus = 0
let autoStonePlus = 0
let SawMillTime = 0
let SawMill = 0
let SawMillCost = 250
let SawMillAuto = 0
let SawMillAutoPrice = 100
let autoChopperPrice = 150
let autoMinerPrice = 350
let pickaxePrice = 100
let RefinedWoodPrice = 5
let stonePrice = 3
let logPrice = 1
let AutoSawMill = 0
let barTender = 0
let drink = 0
let drinkPlus = 20
let steak = 0
let steakPlus = 40
let steaks = 0
let drinkPrice = 25
let steakPrice = 40
let bet10Price = 10
let bet50Price = 50
let bet100Price = 100
let bet1000Price = 1000
let dogAttack = 40
let menu

let player = {}

function updatePlayerData() {
	player.health = health
	player.money = money
	player.campfire = campfire
	player.campfirePrice = campfirePrice
	player.key = key
	player.relicPrice = relicPrice
	player.wolfPelt = wolfPelt
	player.wolfPeltPrice = wolfPeltPrice
	player.trollSkin = trollSkin
	player.trollSkinPrice = trollSkinPrice
	player.diamond = diamond
	player.diamondPrice = diamondPrice
	player.ruby = ruby
	player.rubyPrice = rubyPrice
	player.logs = logs
	player.stone = stone
	player.RefinedWood = RefinedWood
	player.deerSkin = deerSkin
	player.carp = carp
	player.carpPrice = carpPrice
	player.cookedCarp = cookedCarp
	player.cookedCarpPrice = cookedCarpPrice
	player.largeMB = largeMB
	player.LMBP = LMBP
	player.cookedLMB = cookedLMB
	player.cookedLMBPrice = cookedLMBPrice
	player.Bass = Bass
	player.BassPrice = BassPrice
	player.cookedBass = cookedBass
	player.cookedBassPrice = cookedBassPrice
	player.CatFish = CatFish
	player.CatFishPrice = CatFishPrice
	player.cookedCF = cookedCF
	player.cookedCFPrice = cookedCFPrice
	player.deerSkinPrice = deerSkinPrice
	player.bearPelt = bearPelt
	player.bearPeltPrice = bearPeltPrice
	player.pickaxes = pickaxes
	player.sword = sword
	player.gun = gun
	player.gunPrice = gunPrice
	player.rod = rod
	player.rodPrice = rodPrice
	player.shield = shield
	player.shieldPrice = shieldPrice
    player.potion = potion
	player.potionPrice = potionPrice
	player.logPlus = logPlus
	player.stonePlus = stonePlus
	player.RefinedWoodPlus = RefinedWoodPlus
	player.autologPlus = autologPlus
	player.autoStonePlus = autoStonePlus
	player.SawMillTime = SawMillTime
	player.SawMill = SawMill
	player.SawMillCost = SawMillCost
	player.SawMillAuto = SawMillAuto
	player.SawMillAutoPrice = SawMillAutoPrice
	player.autoChopperPrice = autoChopperPrice
	player.autoMinerPrice = autoMinerPrice
	player.pickaxePrice = pickaxePrice
	player.RefinedWoodPrice = RefinedWoodPrice
	player.stonePrice = stonePrice
	player.logPrice = logPrice
	player.AutoSawMill = AutoSawMill
	player.barTender = barTender
	player.drink = drink
	player.drinkPlus = drinkPlus
	player.steak = steak
	player.steakPlus = steakPlus
	player.steaks = steaks
	player.drinkPrice = drinkPrice
	player.steakPrice = steakPrice
	player.bet10Price = bet10Price
	player.bet50Price = bet50Price
	player.bet100Price = bet100Price
	player.bet1000Price = bet1000Price
	player.dogAttack = dogAttack
	player.campfire = campfire
	player.menu = menu
}

function updateGameData() {
    health = player.health
    money = player.money
    campfire = player.campfire
    campfirePrice = player.campfirePrice
    key = player.key
    relic = player.relic
    relicPrice = player.relicPrice
    wolfPelt = player.wolfPelt
    wolfPeltPrice = player.wolfPeltPrice
    trollSkin = player.trollSkin
    trollSkinPrice = player.trollSkinPrice
    diamond = player.diamond
    diamondPrice = player.diamondPrice
    ruby = player.ruby
    rubyPrice = player.rubyPrice
    logs = player.logs
    stone = player.stone
    RefinedWood = player.RefinedWood
    deerSkin = player.deerSkin
    carp = player.carp
    carpPrice = player.carpPrice
    cookedCarp = player.cookedCarp
    cookedCarpPrice = player.cookedCarpPrice
    largeMB = player.largeMB
    LMBP = player.LMBP
    cookedLMB = player.cookedLMB
    cookedLMBPrice = player.cookedLMBPrice
    Bass = player.Bass
    BassPrice = player.BassPrice
    cookedBass = player.cookedBass
    cookedBassPrice = player.cookedBassPrice
    CatFish = player.CatFish
    CatFishPrice = player.CatFishPrice
    cookedCF = player.cookedCF
    cookedCFPrice = player.cookedCFPrice
    deerSkinPrice = player.deerSkinPrice
    bearPelt = player.bearPelt
    bearPeltPrice = player.bearPeltPrice
    pickaxes = player.pickaxes
    sword = player.sword
    gun = player.gun
    gunPrice = player.gunPrice
    rod = player.rod
    rodPrice = player.rodPrice
    shield = player.shield
    shieldPrice = player.shieldPrice
    potion = player.potion
    potionPrice = player.potionPrice
    logPlus = player.logPlus
    stonePlus = player.stonePlus
    RefinedWoodPlus = player.RefinedWoodPlus
    autologPlus = player.autologPlus
    autoStonePlus = player.autoStonePlus
    SawMillTime = player.SawMillTime
    SawMill = player.SawMill
    SawMillCost = player.SawMillCost
    SawMillAuto = player.SawMillAuto
    SawMillAutoPrice = player.SawMillAutoPrice
    autoChopperPrice = player.autoChopperPrice
    autoMinerPrice = player.autoMinerPrice
    pickaxePrice = player.pickaxePrice
    RefinedWoodPrice = player.RefinedWoodPrice
    stonePrice = player.stonePrice
    logPrice = player.logPrice
    AutoSawMill = player.AutoSawMill
    barTender = player.barTender
    drink = player.drink
    drinkPlus = player.drinkPlus
    steak = player.steak
    steakPlus = player.steakPlus
    steaks = player.steaks
    drinkPrice = player.drinkPrice
    steakPrice = player.steakPrice
    bet10Price = player.bet10Price
    bet50Price = player.bet50Price
    bet100Price = player.bet100Price
    bet1000Price = player.bet1000Price
    dogAttack = player.dogAttack
    menu = player.menu
}

//health function
setInterval(function () {
	if (health > 100) {
		health = 100
		changeInventory()
		changeMarket()
	}
}, 100)

//money function
setInterval(function () {
	if (money < 0) {
		money = 0
		changeInventory()
		changeMarket()
	}
}, 100)

//function for auto saw
setInterval(function () {
	if (logs >= SawMillAuto) {
		logs -= RefinedWoodPlus * SawMillAuto
		RefinedWood += SawMillAuto
		changeInventory()
		changeMarket()
	}
}, 8000)

//function for automining
setInterval(function () {
	stone += autoStonePlus
	changeInventory()
	changeMarket()
}, 1000)

//function for autolog
setInterval(function () {
	logs += autologPlus
	changeInventory()
	changeMarket()
}, 1000)

//sell wood
$('#sell1').click(function () {
	logs--
	money += logPrice
	changeInventory()
	changeMarket()
})

$('#sell10').click(function () {
	logs -= 10
	money += logPrice * 10
	changeInventory()
	changeMarket()
})

$('#sellall').click(function () {
	money += logPrice * logs
	logs = 0
	changeInventory()
	changeMarket()
})
//sell stone
$('#sell1Stone').click(function () {
	stone--
	money += stonePrice
	changeInventory()
	changeMarket()
})

$('#sell10Stone').click(function () {
	stone -= 10
	money += stonePrice * 10
	changeInventory()
	changeMarket()
})

$('#sellallStone').click(function () {
	money += stonePrice * stone
	stone = 0
	changeInventory()
	changeMarket()
})
//refined wood
$('#sell1RW').click(function () {
	RefinedWood--
	money += RefinedWoodPrice
	changeInventory()
	changeMarket()
})

$('#sell10RW').click(function () {
	RefinedWood -= 10
	money += RefinedWoodPrice * 10
	changeInventory()
	changeMarket()
})

$('#sellallRW').click(function () {
	money += RefinedWoodPrice * RefinedWood
	RefinedWood = 0
	changeInventory()
	changeMarket()
})

//sell wolf pelts
$('#sell1WP').click(function () {
	wolfPelt--
	money += wolfPeltPrice
	changeInventory()
	changeMarket()
})

$('#sell10WP').click(function () {
	wolfPelt -= 10
	money += wolfPeltPrice * 10
	changeInventory()
	changeMarket()
})

$('#sellallWP').click(function () {
	money += wolfPeltPrice * wolfPelt
	wolfPelt = 0
	changeInventory()
	changeMarket()
})

//sell hide
$('#sell1H').click(function () {
	deerSkin--
	money += deerSkinPrice
	changeInventory()
	changeMarket()
})

$('#sell10H').click(function () {
	deerSkin -= 10
	money += deerSkinPrice * 10
	changeInventory()
	changeMarket()
})

$('#sellallH').click(function () {
	money += deerSkinPrice * deerSkin
	deerSkin = 0
	changeInventory()
	changeMarket()
})

//sell hide
$('#sell1R').click(function () {
	relic--
	money += relicPrice
	changeInventory()
	changeMarket()
})

$('#sell10R').click(function () {
	relic -= 10
	money += relicPrice * 10
	changeInventory()
	changeMarket()
})

$('#sellallR').click(function () {
	money += relicPrice * relic
	relic = 0
	changeInventory()
	changeMarket()
})

//sell bass
$('#sell1Bass').click(function () {
	Bass--
	money += BassPrice
	changeInventory()
	changeMarket()
})

$('#sell10Bass').click(function () {
	Bass -= 10
	money += BassPrice * 10
	changeInventory()
	changeMarket()
})

$('#sellallBass').click(function () {
	money += BassPrice * Bass
	Bass = 0
	changeInventory()
	changeMarket()
})

//cook bass
$('#cook1bass').click(function () {
	Bass--
	cookedBass++
	changeInventory()
	changeMarket()
})

$('#cook10bass').click(function () {
	Bass -= 10
	cookedBass++
	changeInventory()
	changeMarket()
})

$('#cookallbass').click(function () {
	cookedBass += 1 * Bass
	Bass = 0
	changeInventory()
	changeMarket()
})

//cook carp
$('#cook1carp').click(function () {
	carp--
	cookedCarp++
	changeInventory()
	changeMarket()
})

$('#cook10carp').click(function () {
	carp -= 10
	cookedCarp++
	changeInventory()
	changeMarket()
})

$('#cookallcarp').click(function () {
	cookedCarp += 1 * carp
	carp = 0
	changeInventory()
	changeMarket()
})

//cook CF
$('#cook1CF').click(function () {
	CatFish--
	cookedCF++
	changeInventory()
	changeMarket()
})

$('#cook10CF').click(function () {
	CatFish -= 10
	cookedCF++
	changeInventory()
	changeMarket()
})

$('#cookallCF').click(function () {
	cookedCF += 1 * CatFish
	CatFish = 0
	changeInventory()
	changeMarket()
})

//cook LMB
$('#cook1LMB').click(function () {
	largeMB--
	cookedLMB++
	changeInventory()
	changeMarket()
})

$('#cook10LMB').click(function () {
	largeMB -= 10
	cookedLMB++
	changeInventory()
	changeMarket()
})

$('#cookallLMB').click(function () {
	cookedLMB += 1 * largeMB
	largeMB = 0
	changeInventory()
	changeMarket()
})

//sell carp
$('#sell1Carp').click(function () {
	carp--
	money += carpPrice
	changeInventory()
	changeMarket()
})

$('#sell10Carp').click(function () {
	carp -= 10
	money += carpPrice * 10
	changeInventory()
	changeMarket()
})

$('#sellallCarp').click(function () {
	money += carpPrice * carp
	carp = 0
	changeInventory()
	changeMarket()
})

//sell cooked bass
$('#sell1CB').click(function () {
	cookedBass--
	money += cookedBassPrice
	changeInventory()
	changeMarket()
})

$('#sell10CB').click(function () {
	cookedBass -= 10
	money += cookedBassPrice * 10
	changeInventory()
	changeMarket()
})

$('#sellallCB').click(function () {
	money += cookedBassPrice * cookedBass
	cookedBass = 0
	changeInventory()
	changeMarket()
})

//sell cooked carp
$('#sell1CC').click(function () {
	cookedCarp--
	money += cookedCarpPrice
	changeInventory()
	changeMarket()
})

$('#sell10CC').click(function () {
	cookedCarp -= 10
	money += cookedCarpPrice * 10
	changeInventory()
	changeMarket()
})

$('#sellallCC').click(function () {
	money += cookedCarpPrice * cookedBass
	cookedCarp = 0
	changeInventory()
	changeMarket()
})

//sell cooked CF
$('#sell1CCF').click(function () {
	cookedCF--
	money += cookedCFPrice
	changeInventory()
	changeMarket()
})

$('#sell10CCF').click(function () {
	cookedCF -= 10
	money += cookedCFPrice * 10
	changeInventory()
	changeMarket()
})

$('#sellallCCF').click(function () {
	money += cookedCFPrice * cookedCF
	cookedCF = 0
	changeInventory()
	changeMarket()
})

//sell cooked CF
$('#sell1CLB').click(function () {
	cookedLMB--
	money += cookedLMBPrice
	changeInventory()
	changeMarket()
})

$('#sell10CLB').click(function () {
	cookedLMB -= 10
	money += cookedBassPrice * 10
	changeInventory()
	changeMarket()
})

$('#sellallCLB').click(function () {
	money += cookedLMBPrice * cookedLMB
	cookedLMB = 0
	changeInventory()
	changeMarket()
})

//sell catfish
$('#sell1CF').click(function () {
	CatFish--
	money += CatFishPrice
	changeInventory()
	changeMarket()
})

$('#sell10CF').click(function () {
	CatFish -= 10
	money += CatFishPrice * 10
	changeInventory()
	changeMarket()
})

$('#sellallCF').click(function () {
	money += CatFishPrice * CatFish
	CatFish = 0
	changeInventory()
	changeMarket()
})

//sell largebass mouth
$('#sell1LB').click(function () {
	largeMB--
	money += LMBP
	changeInventory()
	changeMarket()
})

$('#sell10LB').click(function () {
	largeMB -= 10
	money += LMBP * 10
	changeInventory()
	changeMarket()
})

$('#sellallLB').click(function () {
	money += LMBP * largeMB
	largeMB = 0
	changeInventory()
	changeMarket()
})

//sell Bear Pelts
$('#sell1BP').click(function () {
	bearPelt--
	money += bearPeltPrice
	changeInventory()
	changeMarket()
})

$('#sell10BP').click(function () {
	bearPelt -= 10
	money += bearPeltPrice * 10
	changeInventory()
	changeMarket()
})

$('#sellallBP').click(function () {
	money += bearPeltPrice * bearPelt
	bearPelt = 0
	changeInventory()
	changeMarket()
})
//Troll Skin
$('#sell1TS').click(function () {
	trollSkin--
	money += trollSkinPrice
	changeInventory()
	changeMarket()
})

$('#sell10TS').click(function () {
	trollSkin -= 10
	money += trollSkinPrice * 10
	changeInventory()
	changeMarket()
})

$('#sellallTS').click(function () {
	money += trollSkinPrice * trollSkin
	trollSkin = 0
	changeInventory()
	changeMarket()
})

//Diamond
$('#sell1D').click(function () {
	diamond--
	money += diamondPrice
	changeInventory()
	changeMarket()
})

$('#sell10D').click(function () {
	diamond -= 10
	money += diamondPrice * 10
	changeInventory()
	changeMarket()
})

$('#sellallD').click(function () {
	money += diamondPrice * diamond
	diamond = 0
	changeInventory()
	changeMarket()
})

//Ruby
$('#sell1Ruby').click(function () {
	ruby--
	money += rubyPrice
	changeInventory()
	changeMarket()
})

$('#sell10Ruby').click(function () {
	ruby -= 10
	money += rubyPrice * 10
	changeInventory()
	changeMarket()
})

$('#sellallRuby').click(function () {
	money += rubyPrice * ruby
	ruby = 0
	changeInventory()
	changeMarket()
})

//buy items
$('#autoChopper').click(function () {
	money -= autoChopperPrice
	autologPlus++
	changeInventory()
	changeMarket()
})

$('#autoMiner').click(function () {
	money -= autoMinerPrice
	autoStonePlus += 1
	changeInventory()
	changeMarket()
})

$('#campFire').click(function () {
	logs -= campfirePrice
	campfire++
	changeMarket()
	changeInventory()
})

$('#buyPickaxe').click(function () {
	if (money < pickaxePrice) {
		alert("You don't have enough.")
	} else {
		money -= pickaxePrice
		pickaxes++
		changeInventory()
		changeMarket()
	}
})

$('#buyGun').click(function () {
	if (money < gunPrice) {
		alert("You don't have enough.")
	} else {
		money -= gunPrice
		gun++
		changeInventory()
		changeMarket()
	}
})

$('#buyRod').click(function () {
	if (money < rodPrice) {
		alert("You don't have enough.")
	} else {
		money -= rodPrice
		rod++
		changeInventory()
		changeMarket()
	}
})

$('#buyShield').click(function () {
	if (money < shieldPrice) {
		alert("You don't have enough.")
	} else {
		money -= shieldPrice
		shield++
		changeInventory()
		changeMarket()
	}
})

$('#potion2').click(function () {
	if (money < potionPrice) {
		alert("You don't have enough.")
	} else {
		money -= potionPrice
		potion++
		changeInventory()
		changeMarket()
	}
})

$('#SawMillBuy').click(function () {
	logs -= SawMillCost
	SawMill++
	changeInventory()
	changeMarket()
})

$('#AutoSaw').click(function () {
	if (money <= SawMillAutoPrice) {
		alert("You don't have enough money.")
	} else if (SawMill == 0) {
		alert("You don't have a SawMill")
	} else {
		money -= SawMillAutoPrice
		SawMillAuto += 1
		changeInventory()
		changeMarket()
	}
})
//Potion
$('#potion1').click(function () {
	if (potion <= 0) {
		alert('You Have no potions.')
	} else if (health >= 100) {
		alert('You are already full health.')
        }else if(Math.random < 0.7){
            alert('You drank a potion and gained health')
            health += 50
            potion--
            changeInventory()
            changeMarket()
        }else{
            alert('You drank a potion and nothing happened')
            potion--
        }
		changeInventory()
		changeMarket()
	
})

//Tavern
$('#Drink').click(function () {
	if (money <= drinkPrice) {
		alert('You dont have enough money.')
	} else if (health == 100) {
		alert('You are too full.')
	} else if (money >= drinkPrice) {
		alert('You had a drink!')
		money -= drinkPrice
		health += drinkPlus
		changeInventory()
		changeMarket()
	}
})

$('#lean').click(function () {
	if (money <= drinkPrice) {
		alert('You dont have enough money.')
	} else if (health == 100) {
		alert('You are too full.')
	} else if (money >= drinkPrice) {
		alert('You sipped some lean!')
		money -= drinkPrice
		health = 100
		changeInventory()
		changeMarket()
	}
})

$('#Eat').click(function () {
	if (money <= steakPrice) {
		alert('You dont have enough money.')
	} else if (health == 100) {
		alert('You are too full.')
	} else if (money >= steakPrice) {
		alert('You ate a steak!')
		money -= steakPrice
		health += steakPlus
		changeInventory()
		changeMarket()
	}
})

$('#bean').click(function () {
	if (money <= steakPrice) {
		alert('You dont have enough money.')
	} else if (health == 100) {
		alert('You are too full.')
	} else if (money >= steakPrice) {
		alert('You popped a bean!')
		money -= steakPrice
		health = 100
		changeInventory()
		changeMarket()
	}
})

//gambling

$('#bet10').click(function () {
	if (money < bet10Price) {
		alert('You dont have enough money.')
	} else if (Math.random() < 0.5) {
		alert('You have won the bet!')
		money += bet10Price
	} else {
		alert('You have lost the bet!')
		money -= bet10Price
	}
})

$('#bet50').click(function () {
	if (money < bet50Price) {
		alert('You dont have enough money.')
	} else if (Math.random() < 0.5) {
		alert('You have won the bet!')
		money += bet50Price
	} else {
		alert('You have lost the bet!')
		money -= bet50Price
	}
})

$('#bet100').click(function () {
	if (money < bet100Price) {
		alert('You dont have enough money.')
	} else if (Math.random() < 0.5) {
		alert('You have won the bet!')
		money += bet100Price
	} else {
		alert('You have lost the bet!')
		money -= bet100Price
	}
})

$('#bet1000').click(function () {
	if (money < bet1000Price) {
		alert('You dont have enough money.')
	} else if (Math.random() < 0.5) {
		alert('You have won the bet!')
		money += bet1000Price
	} else {
		alert('You have lost the bet!')
		money -= bet1000Price
	}
})

$('#betAll').click(function () {
	if (money < 1) {
		alert('You dont have enough money.')
	} else if (Math.random() < 0.5) {
		alert('You have won the bet!')
		money += money
	} else {
		alert('You have lost the bet!')
		money -= money
	}
})

function gamble50() {
	return Math.random() < 0.5
}

//menu setup

$('#BarTender').click(function () {
	let diceRoll = Math.random() * 8
	if (diceRoll < 1) {
		$('#tenderTalk').html('Hello travler')
		leanBar()
	} else if (diceRoll < 2) {
		$('#tenderTalk').html('Welcome travler')
		leanBar()
	} else if (diceRoll < 3) {
		$('#tenderTalk').html('Hello travler')
		leanBar()
	} else if (diceRoll < 4) {
		$('#tenderTalk').html('Welcome travler')
		leanBar()
	} else if (diceRoll < 5) {
		$('#tenderTalk').html('Hello travler')
		leanBar()
	} else if (diceRoll < 6) {
		$('#tenderTalk').html('Welcome travler')
		leanBar()
	} else if (diceRoll < 7) {
		$('#tenderTalk').html('Hello travler')
		leanBar()
	} else if (diceRoll < 8) {
		$('#tenderTalk').html('Waddup Bitch!')
		leanBar()
	}
	changeMarket()
})

$('#gambling').click(function () {
	menu = switchMenu('gambleTable')

	changeMarket()
})

$('#visit3').click(function () {
	let diceRoll = Math.random() * 29
	if (gun == 0) {
		alert("You don't have a gun to go hunting.")
	} else if (diceRoll < 1) {
		logs += 5
		alert('You went out and found some logs!')
		changeInventory()
	} else if (diceRoll < 2) {
		alert('You went hunting and found nothing')
		changeInventory()
	} else if (diceRoll < 3) {
		alert('You went hunting and were attacked by dogs!')
		menu = switchMenu('encounter2')
	} else if (diceRoll < 4) {
		health -= 10
		alert('You went hunting and found a deer!')
		deerSkin++
	} else if (diceRoll < 5) {
		logs += 5
		alert('You went out and found some logs!')
	} else if (diceRoll < 6) {
		stone += 5
		alert('You went out and found some stones!')
	} else if (diceRoll < 7) {
		alert('You went hunting and found nothing')
		changeInventory()
	} else if (diceRoll < 8) {
		alert('You went hunting and found a deer!')
		deerSkin++
		changeInventory()
	} else if (diceRoll < 9) {
		alert('You went hunting and found nothing')
		changeInventory()
	} else if (diceRoll < 10) {
		alert('You went hunting and found a deer!')
		deerSkin++
	} else if (diceRoll < 11) {
		health -= 10
		alert('You went hunting and tripped')
	} else if (diceRoll < 12) {
		logs += 5
		alert('You went hunting and found a deer!')
		deerSkin++
	} else if (diceRoll < 13) {
		stone += 5
		alert('You went out and found some stones!')
	} else if (diceRoll < 14) {
		alert('You ran into a group of bandits while hunting!')
		menu = switchMenu('encounter3')
	} else if (diceRoll < 15) {
		alert('You went hunting and found a deer!')
		deerSkin++
		changeInventory()
	} else if (diceRoll < 16) {
		alert('You went hunting and found nothing')
		changeInventory()
	} else if (diceRoll < 17) {
		alert('You went hunting and were attacked by dogs!')
		menu = switchMenu('encounter2')
	} else if (diceRoll < 18) {
		health -= 10
		alert('You went hunting and found a deer!')
		deerSkin++
	} else if (diceRoll < 19) {
		logs += 5
		alert('You went out and found some logs!')
	} else if (diceRoll < 20) {
		stone += 5
		alert('You went out and found some stones!')
	} else if (diceRoll < 21) {
		alert('You went hunting and found nothing')
		changeInventory()
	} else if (diceRoll < 22) {
		alert('You went hunting and found a deer!')
		deerSkin++
		changeInventory()
	} else if (diceRoll < 23) {
		alert('You went hunting and found nothing')
		changeInventory()
	} else if (diceRoll < 24) {
		alert('You went hunting and found a deer!')
		deerSkin++
	} else if (diceRoll < 25) {
		health -= 10
		alert('You went hunting and tripped')
	} else if (diceRoll < 26) {
		logs += 5
		alert('You went hunting and found a deer!')
		deerSkin++
	} else if (diceRoll < 28) {
		stone += 5
		alert('You went out and found some stones!')
	} else if (diceRoll < 29) {
		alert('You run into a bear on your hunting trip!')
		menu = switchMenu('encounter1')
	}
})

$('#fishing').click(function () {
	let diceRoll = Math.random() * 12

	if (rod == 0) {
		alert("You don't have a Fishing Rod to go Fishing.")
	} else if (diceRoll < 1) {
		alert('You went fishing and caught a Bass!')
		Bass++
	} else if (diceRoll < 2) {
		alert('You went fishing and found a Bass!.')
		Bass++
	} else if (diceRoll < 3) {
		carp++
		alert('You went fishing and found a Carp.')
	} else if (diceRoll < 4) {
		health -= 10
		alert('You went fishing and tripped')
	} else if (diceRoll < 5) {
		alert('You went fishing and found a Carp.')
		carp++
	} else if (diceRoll < 6) {
		alert('You went fishing and found nothing.')
	} else if (diceRoll < 7) {
		alert('You went fishing and caught a Bass!')
		Bass++
	} else if (diceRoll < 8) {
		alert('You went fishing and found nothing.')
	} else if (diceRoll < 9) {
		alert('You went fishing and found a CatFish!')
		CatFish++
	} else if (diceRoll < 10) {
		health -= 10
		alert('You went fishing and tripped')
	} else if (diceRoll < 11) {
		alert('You went fishing and found a CatFish!')
		CatFish++
	} else if (diceRoll < 12) {
		alert('You went fishing and found a Largemouth Bass!')
		largeMB++
	}
	changeInventory()
})

$('#bearFight').click(function () {
	if (sword >= 1) {
		if (Math.random() < 0.5) {
			alert('You fought the bear and killed it with your sword!')
			bearPelt += 1
		} else {
			alert('You fought the bear and it got the better of you!')
			health -= 20
		}
	} else if (shield >= 1) {
		alert('You were attacked by the bear but defended yourself with your shield!')
		shield -= 1
	} else {
		let diceRoll = Math.random() * 6
		if (diceRoll < 1) {
			alert('You fought the bear and was mauled to death by the bear.')
			health -= 100
		} else if (diceRoll < 2) {
			alert('You fought the bear and was gravely injured by the bear.')
			health = 10
		} else if (diceRoll < 3) {
			alert('You fought the bear off')
		} else if (diceRoll < 4) {
			alert('You killed the bear!')
			bearPelt += 1
		} else if (diceRoll < 5) {
			alert('You got ingjured by the bear.')
			health -= 50
		} else if (diceRoll < 6) {
			alert('You got injured by the bear.')
			health -= 30
		}
	}

	menu = switchMenu('main')
})

$('#bearRun').click(function () {
	if (Math.random() < 0.5) {
		alert('You got away from the bear unscathed!')
		health -= 0
		alert('You walk back out of the forest.')
	} else if (Math.random() < 0.5) {
		alert('You got away from the bear with a scratch!')
		health -= 20
		alert('You walk out of the forest limping.')
	} else {
		alert('You got away from the bear but it cost ya!')
		health -= 60
		alert('You walk out of the forest bleeding and limping.')
	}
	menu = switchMenu('main')
	changeInventory()
	changeMarket()
})

$('#wolfFight').click(function () {
	if (sword >= 1) {
		if (Math.random() < 0.5) {
			alert('You fought the wolves and killed them with your sword!')
			wolfPelt += 3
		} else {
			alert('You fought the wolves and and almost killed them with your sword but you got hurt in the fight.')
			health -= 15
		}
	} else if (shield >= 1) {
		alert('You were attacked by the wolves but defended yourself with your shield!')
		shield -= 1
	} else if (Math.random() < 0.5) {
		alert('You fought the wolves and got injured.')
		health -= 30
		alert('You limp out of the forest with the sound of dogs barking in the distance.')
	} else {
		alert('You fought the wolves and were gravely injured.')
		health -= 50
		alert('You limp out of the forest bleeding from your wounds.')
	}
	menu = switchMenu('main')
})

$('#wolfRun').click(function () {
	if (Math.random() < 0.5) {
		alert('You got away from the wolves unscathed!')
		health -= 0
		alert('You walk back out of the forest.')
	} else if (Math.random() < 0.5) {
		alert('You got away from the wolves with a scratch!')
		health -= 15
		alert('You walk out of the forest with the taste of blood in your mouth.')
	} else {
		alert('You got away from the wolves but it cost ya!')
		health -= 35
		alert('You walk out of the forest bleeding and limping.')
	}
	menu = switchMenu('main')
	changeInventory()
	changeMarket()
})

$('#banditFight').click(function () {
	if (sword >= 1) {
		if (Math.random() < 0.5) {
			alert('You fought the bandits and killed them with your sword!')
			if (Math.random() < 0.5) {
				alert('You found some gold in their pockets.')
				money += 100
			} else {
				alert('You check their pockets and find nothing')
			}
		} else {
			alert('You fought the bandits off and  almost killed them with your sword.')
		}
	} else {
		let diceRoll = Math.random() * 3
		if (diceRoll < 1) {
			alert('You fought the bandits off and got injured.')
			health -= 50
			alert('You limp out of the forest with all your gold but the taste of blood in your mouth.')
		} else if (diceRoll < 2) {
			alert('You fought the bandits off and was gravely injured and lost some of your gold.')
			health -= 70
			gold -= 75
			alert('You limp out of the forest bleeding from your wounds.')
		} else if (diceRoll < 3) {
			alert('You fought off all the bandits without a scratch')
		}
	}
	menu = switchMenu('main')
})

$('#banditRun').click(function () {
	if (Math.random() < 0.5) {
		if (money >= 200) {
			alert('You gave the bandits 200 gold and got away without a scratch.')
			health -= 0
			money -= 200
			alert('You walk back out of the forest.')
		} else {
			alert('You didnt have enough gold so the bandits beat you up.')
			health -= 25
		}
	} else if (Math.random() < 0.5) {
		if (money >= 150) {
			alert('You gave the bandits 150 gold and got away without a scratch.')
			health -= 0
			money -= 150
		} else {
			alert('You dont have enough gold so the bandits beat you up.')
			health -= 25
		}
	} else {
		if (money >= 100) {
			alert('You gave the bandits 100 gold and got away without a scratch.')
			health -= 0
			money -= 100
		} else {
			alert('You didnt have enough gold so the bandits beat you up.')
			health -= 25
		}
	}
	menu = switchMenu('main')
	changeInventory()
	changeMarket()
})



$('#banditflee').click(function () {
	if (Math.random() < 0.5) {
			alert('You got away from the bandits.')
			health -= 0
	} else if (Math.random() < 0.5) {
			alert('The bandits caught up and took some of your gold and roughed you up.')
			health -= 25
            money -= 100
	} else {
        if(shields >= 1){
            alert('The bandits hit your shield with an arrow but you got away.')
        }else{
            alert('The bandits hit you with an arrow but you got away.')
			health -= 50
        }
	}
	menu = switchMenu('main')
	changeInventory()
	changeMarket()
})


//other stuff
$('#visit2').click(function () {
	menu = switchMenu('tavern')

	changeMarket()
})

$('#dungeon').click(function () {
	menu = switchMenu('dungeons')
	changeMarket()
})

$('#room1').click(function () {
	if (Math.random() < 0.5) {
		menu = switchMenu('dungeon1')
	} else {
		RandomRoom()
	}
	changeInventory()
	changeMarket()
})

$('#room2').click(function () {
	if (Math.random() < 0.5) {
		let diceRoll = Math.random() * 8
		if (diceRoll < 1) {
			alert('You enter the next room and theres a empty doorway in the middle of it.')
			menu = switchMenu('dungeon4')
		} else if (diceRoll < 2) {
			alert('You enter the next room and theres chest sitting in the middle of it.')
			menu = switchMenu('dungeon6')
		} else if (diceRoll < 3) {
			alert('You enter the next room and theres a troll waiting for you!')
			menu = switchMenu('dungeon3')
		} else if (diceRoll < 4) {
			alert('You enter the next room to see a potion sitting in the middle of it.')
			menu = switchMenu('dungeon5')
		} else if (diceRoll < 5) {
			alert('You enter the next room and theres chest sitting in the middle of it.')
			menu = switchMenu('dungeon6')
		} else if (diceRoll < 6) {
			alert('You enter the next room and theres a troll waiting for you!')
			menu = switchMenu('dungeon3')
		} else if (diceRoll < 7) {
			alert('You enter the next room to see a potion sitting in the middle of it.')
			menu = switchMenu('dungeon5')
		} else if (diceRoll < 8) {
			alert('You enter a room with a chest and what looks to be an exit.')
			menu = switchMenu('dungeonEnd')
		}
	} else {
		let diceRoll = Math.random() * 8
		if (diceRoll < 1) {
			alert('You enter the next room and theres a empty doorway in the middle of it.')
			menu = switchMenu('dungeon4')
		} else if (diceRoll < 2) {
			alert('You enter the next room and theres chest sitting in the middle of it.')
			menu = switchMenu('dungeon6')
		} else if (diceRoll < 3) {
			alert('You enter the next room and theres a troll waiting for you!')
			menu = switchMenu('dungeon3')
		} else if (diceRoll < 4) {
			alert('You enter the next room to see a potion sitting in the middle of it.')
			menu = switchMenu('dungeon5')
		} else if (diceRoll < 5) {
			alert('You enter the next room and theres chest sitting in the middle of it.')
			menu = switchMenu('dungeon6')
		} else if (diceRoll < 6) {
			alert('You enter the next room and theres a troll waiting for you!')
			menu = switchMenu('dungeon3')
		} else if (diceRoll < 7) {
			alert('You enter the next room to see a potion sitting in the middle of it.')
			menu = switchMenu('dungeon5')
		} else if (diceRoll < 8) {
			alert('You enter the next room and theres a empty doorway in the middle of it.')
			menu = switchMenu('dungeon4')
		}
	}
	changeInventory()
	changeMarket()
})

$('#room3').click(function () {
	let diceRoll = Math.random() * 8
	if (diceRoll < 1) {
		alert('You enter the next room and theres a empty doorway in the middle of it.')
		menu = switchMenu('dungeon4')
	} else if (diceRoll < 2) {
		alert('You enter the next room and theres chest sitting in the middle of it.')
		menu = switchMenu('dungeon6')
	} else if (diceRoll < 3) {
		alert('You enter the next room and theres a troll waiting for you!')
		menu = switchMenu('dungeon3')
	} else if (diceRoll < 4) {
		alert('You enter the next room to see a potion sitting in the middle of it.')
		menu = switchMenu('dungeon5')
	} else if (diceRoll < 5) {
		alert('You enter the next room and theres chest sitting in the middle of it.')
		menu = switchMenu('dungeon6')
	} else if (diceRoll < 6) {
		alert('You enter the next room and theres a troll waiting for you!')
		menu = switchMenu('dungeon3')
	} else if (diceRoll < 7) {
		alert('You enter the next room to see a potion sitting in the middle of it.')
		menu = switchMenu('dungeon5')
	} else if (diceRoll < 8) {
		alert('You enter a room with a chest and what looks to be an exit.')
		menu = switchMenu('dungeonEnd')
	}
})

$('#room4').click(function () {
	let diceRoll = Math.random() * 8
	if (diceRoll < 1) {
		alert('You enter the next room and theres a empty doorway in the middle of it.')
		menu = switchMenu('dungeon4')
	} else if (diceRoll < 2) {
		alert('You enter the next room and theres chest sitting in the middle of it.')
		menu = switchMenu('dungeon6')
	} else if (diceRoll < 3) {
		alert('You enter the next room and theres a troll waiting for you!')
		menu = switchMenu('dungeon3')
	} else if (diceRoll < 4) {
		alert('You enter the next room to see a potion sitting in the middle of it.')
		menu = switchMenu('dungeon5')
	} else if (diceRoll < 5) {
		alert('You enter the next room and theres chest sitting in the middle of it.')
		menu = switchMenu('dungeon6')
	} else if (diceRoll < 6) {
		alert('You enter the next room and theres a troll waiting for you!')
		menu = switchMenu('dungeon3')
	} else if (diceRoll < 7) {
		alert('You enter the next room to see a potion sitting in the middle of it.')
		menu = switchMenu('dungeon5')
	} else if (diceRoll < 8) {
		alert('You enter the next room and theres a empty doorway in the middle of it.')
		menu = switchMenu('dungeon4')
	}
})

$('#room5').click(function () {
	let diceRoll = Math.random() * 8
	if (diceRoll < 1) {
		alert('You enter the next room and theres an empty doorway in the middle of it.')
		menu = switchMenu('dungeon4')
	} else if (diceRoll < 2) {
		alert('You enter the next room and theres chest sitting in the middle of it.')
		menu = switchMenu('dungeon6')
	} else if (diceRoll < 3) {
		alert('You enter the next room and theres a troll waiting for you!')
		menu = switchMenu('dungeon3')
	} else if (diceRoll < 4) {
		alert('You enter the next room to see a potion sitting in the middle of it.')
		menu = switchMenu('dungeon5')
	} else if (diceRoll < 5) {
		alert('You enter the next room and theres chest sitting in the middle of it.')
		menu = switchMenu('dungeon6')
	} else if (diceRoll < 6) {
		alert('You enter the next room and theres a troll waiting for you!')
		menu = switchMenu('dungeon3')
	} else if (diceRoll < 7) {
		alert('You enter the next room to see a potion sitting in the middle of it.')
		menu = switchMenu('dungeon5')
	} else if (diceRoll < 8) {
		alert('You enter the next room and theres an empty doorway in the middle of it.')
		menu = switchMenu('dungeon4')
	}
})

$('#room6').click(function () {
	let diceRoll = Math.random() * 8
	if (diceRoll < 1) {
		alert('You enter the next room and theres an empty doorway in the middle of it.')
		menu = switchMenu('dungeon4')
	} else if (diceRoll < 2) {
		alert('You enter the next room and theres chest sitting in the middle of it.')
		menu = switchMenu('dungeon6')
	} else if (diceRoll < 3) {
		alert('You enter the next room and theres a troll waiting for you!')
		menu = switchMenu('dungeon3')
	} else if (diceRoll < 4) {
		alert('You enter the next room to see a potion sitting in the middle of it.')
		menu = switchMenu('dungeon5')
	} else if (diceRoll < 5) {
		alert('You enter the next room and theres chest sitting in the middle of it.')
		menu = switchMenu('dungeon6')
	} else if (diceRoll < 6) {
		alert('You enter the next room and theres a troll waiting for you!')
		menu = switchMenu('dungeon3')
	} else if (diceRoll < 7) {
		alert('You enter the next room to see a potion sitting in the middle of it.')
		menu = switchMenu('dungeon5')
	} else if (diceRoll < 8) {
		alert('You enter a room with a chest and what looks to be an exit.')
		menu = switchMenu('dungeonEnd')
	}
})

$('#drinkP').click(function () {
	if (Math.random() < 0.5) {
		alert('You drank the potion and died!')
		health -= 100
	} else if (Math.random() < 0.5) {
		alert('You drank the potion and gained health!')
		health += 50
		let diceRoll = Math.random() * 3
		if (diceRoll < 1) {
			alert('You enter the next room and theres an empty doorway in the middle of it.')
			menu = switchMenu('dungeon4')
		} else if (diceRoll < 2) {
			alert('You enter the next room and theres chest sitting in the middle of it.')
			menu = switchMenu('dungeon6')
		} else if (diceRoll < 3) {
			alert('You enter the next room and theres a troll waiting for you!')
			menu = switchMenu('dungeon3')
		}
	} else {
		alert('You drank the potion and lost health!')
		let diceRoll = Math.random() * 3
		if (diceRoll < 1) {
			alert('You enter the next room and theres an empty doorway in the middle of it.')
			menu = switchMenu('dungeon4')
		} else if (diceRoll < 2) {
			alert('You enter the next room and theres chest sitting in the middle of it.')
			menu = switchMenu('dungeon6')
		} else if (diceRoll < 3) {
			alert('You enter the next room and theres a troll waiting for you!')
			menu = switchMenu('dungeon3')
		}
		health -= 25
	}
	changeInventory()
	changeMarket()
})

$('#moveRoom').click(function () {
	let diceRoll = Math.random() * 3
	if (diceRoll < 1) {
		alert('You moved past the potion into the next room.')
		let diceRoll = Math.random() * 3
		if (diceRoll < 1) {
			alert('You enter the next room and theres an empty doorway in the middle of it.')
			menu = switchMenu('dungeon4')
		} else if (diceRoll < 2) {
			alert('You enter the next room and theres chest sitting in the middle of it.')
			menu = switchMenu('dungeon6')
		} else if (diceRoll < 3) {
			alert('You enter the next room and theres a troll waiting for you!')
			menu = switchMenu('dungeon3')
		}
	} else if (diceRoll < 2) {
		alert('You moved past the potion into the next room.')
		if (Math.random() < 0.5) {
			menu = switchMenu('dungeon1')
		} else {
			menu = switchMenu('dungeon2')
		}
		alert('You enter a room with two ways to go.')
	} else if (diceRoll < 3) {
		alert('You moved past the potion into the next room.')
		let diceRoll = Math.random() * 3
		if (diceRoll < 1) {
			alert('You enter the next room and theres a chest and what appears to be an exit.')
			menu = switchMenu('dungeonEnd')
		} else if (diceRoll < 2) {
			alert('You enter the next room and theres chest sitting in the middle of it.')
			menu = switchMenu('dungeon6')
		} else if (diceRoll < 3) {
			alert('You enter the next room and theres a troll waiting for you!')
			menu = switchMenu('dungeon3')
		}
	}
})

$('#moveRoom2').click(function () {
	let diceRoll = Math.random() * 4
	if (diceRoll < 1) {
		alert('You moved past the doorway into the next room.')
		menu = switchMenu('dungeon5')
		alert('You enter the next room and theres a potion in the middle of it.')
	} else if (diceRoll < 2) {
		alert('You moved past the doorway into the next room.')
		if (Math.random() < 0.5) {
			menu = switchMenu('dungeon1')
		} else {
			menu = switchMenu('dungeon2')
		}
		alert('You enter the next room and theres two ways to go.')
	} else if (diceRoll < 3) {
		alert('You moved past the doorway into the next room.')
		menu = switchMenu('dungeon7')
		alert('You enter the next room and theres a door with a keyhole.')
	} else if (diceRoll < 4) {
		if (shield >= 1) {
			alert(
				'You walk through the room and hear a click and a barrage of arrows fire at you but you protect yourself with your shield!'
			)
			let diceRoll = Math.random() * 3
			if (diceRoll < 1) {
				alert('You enter the next room and theres a chest and what appears to be an exit.')
				menu = switchMenu('dungeonEnd')
			} else if (diceRoll < 2) {
				alert('You enter the next room and theres chest sitting in the middle of it.')
				menu = switchMenu('dungeon6')
			} else if (diceRoll < 3) {
				alert('You enter the next room and theres a troll waiting for you!')
				menu = switchMenu('dungeon3')
			}
		} else {
			alert('You walk through the room and hear a click and a barrage of arrows impale you!')
			health -= 100
		}
	}
})

$('#moveRoom3').click(function () {
	let diceRoll = Math.random() * 3
	if (diceRoll < 1) {
		alert('You moved past the chest into the next room.')
		menu = switchMenu('dungeon7')
		alert('You enter the next room and theres a door with a keyhole.')
	} else if (diceRoll < 2) {
		alert('You moved past the chest into the next room.')
		if (Math.random() < 0.5) {
			menu = switchMenu('dungeon1')
		} else {
			menu = switchMenu('dungeon2')
		}
		alert('You enter the next room and theres two ways to go.')
	} else if (diceRoll < 3) {
		alert('You moved past the chest into the next room.')
		menu = switchMenu('dungeon3')
		alert('You enter the next room and theres a troll waiting for you!')
	}
})

$('#run').click(function () {
	let diceRoll = Math.random() * 8
	if (diceRoll < 1) {
		alert('You got away from the troll unscathed!')
		health -= 0
		let diceRoll = Math.random() * 3
		if (diceRoll < 1) {
			alert('You enter the next room and theres a potion in the middle of it.')
			menu = switchMenu('dungeon5')
		} else if (diceRoll < 2) {
			alert('You enter the next room and theres two ways to go.')
			menu = switchMenu('dungeon1')
		} else if (diceRoll < 3) {
			alert('You enter the next room and theres a chest in the middle of it!')
			menu = switchMenu('dungeon6')
		}
	} else if (diceRoll < 2) {
		alert('You got away from the troll with a scratch!')
		health -= 25
		let diceRoll = Math.random() * 3
		if (diceRoll < 1) {
			alert('You enter the next room and theres a potion in the middle of it.')
			menu = switchMenu('dungeon4')
		} else if (diceRoll < 2) {
			alert('You enter the next room and theres two ways to go.')
			menu = switchMenu('dungeon1')
		} else if (diceRoll < 3) {
			alert('You enter the next room and theres a chest in the middle of it!')
			menu = switchMenu('dungeon6')
		}
	} else if (diceRoll < 3) {
		alert('You got away from the troll but it cost ya!')
		health -= 60
		let diceRoll = Math.random() * 3
		if (diceRoll < 1) {
			alert('You enter the next room and theres a potion in the middle of it.')
			menu = switchMenu('dungeon4')
		} else if (diceRoll < 2) {
			alert('You enter the next room and theres two ways to go.')
			menu = switchMenu('dungeon1')
		} else if (diceRoll < 3) {
			alert('You enter the next room and theres a chest in the middle of it!')
			menu = switchMenu('dungeon6')
		}
	} else if (diceRoll < 4) {
		alert('You try to run from the troll but it squashes you with its club!')
		health -= 100
	} else if (diceRoll < 5) {
		alert('You got away from the troll with a scratch!')
		health -= 25
		let diceRoll = Math.random() * 3
		if (diceRoll < 1) {
			alert('You enter the next room and theres a potion in the middle of it.')
			menu = switchMenu('dungeon5')
		} else if (diceRoll < 2) {
			alert('You enter the next room and theres two ways to go.')
			menu = switchMenu('dungeon1')
		} else if (diceRoll < 3) {
			alert('You enter the next room and theres a chest in the middle of it!')
			menu = switchMenu('dungeon6')
		}
	} else if (diceRoll < 6) {
		alert('You got away from the troll with a scratch!')
		health -= 25
		let diceRoll = Math.random() * 3
		if (diceRoll < 1) {
			alert('You enter the next room and theres a potion in the middle of it.')
			menu = switchMenu('dungeon5')
		} else if (diceRoll < 2) {
			alert('You enter the next room and theres two ways to go.')
			menu = switchMenu('dungeon1')
		} else if (diceRoll < 3) {
			alert('You enter the next room and theres a chest in the middle of it!')
			menu = switchMenu('dungeon6')
		}
	} else if (diceRoll < 7) {
		alert('You got away from the troll unscathed!')
		health -= 0
		let diceRoll = Math.random() * 3
		if (diceRoll < 1) {
			alert('You enter the next room and theres a empty doorway in the middle of it.')
			menu = switchMenu('dungeon4')
		} else if (diceRoll < 2) {
			alert('You enter the next room and theres two ways to go.')
			menu = switchMenu('dungeon2')
		} else if (diceRoll < 3) {
			alert('You enter the next room and theres a chest in the middle of it!')
			menu = switchMenu('dungeon6')
		}
	} else if (diceRoll < 8) {
		alert('You got away from the troll but it cost ya!')
		health -= 60
		let diceRoll = Math.random() * 3
		if (diceRoll < 1) {
			alert('You enter the next room and theres a potion in the middle of it.')
			menu = switchMenu('dungeon5')
		} else if (diceRoll < 2) {
			alert('You enter the next room and theres two ways to go.')
			menu = switchMenu('dungeon1')
		} else if (diceRoll < 3) {
			alert('You enter the next room and theres a chest in the middle of it!')
			menu = switchMenu('dungeon6')
		}
	}
	changeInventory()
	changeMarket()
})

$('#fight').click(function () {
	if (sword >= 1) {
		let diceRoll = Math.random() * 6
		if (diceRoll < 1) {
			alert('You kill the troll.')
			trollSkin++
			RandomRoom()
		} else if (diceRoll < 2) {
			alert('You almost kill the troll but it got away.')
			menu = switchMenu('dungeon2')
			alert('You enter the next room and theres two ways to go.')
		} else if (diceRoll < 3) {
			alert('The troll gets the better of you and breaks your sword.')
			sword--
			RandomRoom()
		} else if (diceRoll < 4) {
			alert('You kill the troll.')
			trollSkin++
			RandomRoom()
		} else if (diceRoll < 5) {
			alert('You almost kill the troll but it got away.')
			menu = switchMenu('dungeon2')
			alert('You enter the next room and theres two ways to go.')
		} else if (diceRoll < 6) {
			alert('You almost kill the troll but it got away.')
			RandomRoom()
		}
	} else if (shield >= 1) {
		alert('You defeneded yourself with your shield but it broke.')
		shield -= 1
		let diceRoll = Math.random() * 3
		if (diceRoll < 1) {
			alert('You enter the next room and theres an empty doorway in the middle of it.')
			menu = switchMenu('dungeon5')
		} else if (diceRoll < 2) {
			alert('You enter the next room and theres two ways to go.')
			menu = switchMenu('dungeon2')
		} else if (diceRoll < 3) {
			alert('You enter the next room and theres a chest and what appears to be an exit.')
			menu = switchMenu('dungeonEnd')
		}
	} else {
		let diceRoll = Math.random() * 3
		if (diceRoll < 1) {
			alert('You barely escaped from the troll.')
			health = 25
			let diceRoll = Math.random() * 3
			if (diceRoll < 1) {
				alert('You enter the next room and theres a potion in the middle of it.')
				menu = switchMenu('dungeon5')
			} else if (diceRoll < 2) {
				alert('You enter the next room and theres chest sitting in the middle of it.')
				menu = switchMenu('dungeon6')
			} else if (diceRoll < 3) {
				alert('You enter the next room and theres a door with a keyhole.')
				menu = switchMenu('dungeon7')
			}
		} else if (diceRoll < 2) {
			alert('You escape from the troll unscathed.')
			let diceRoll = Math.random() * 3
			if (diceRoll < 1) {
				alert('You enter the next room and theres an empty doorway sitting in the middle of it.')
				menu = switchMenu('dungeon4')
			} else if (diceRoll < 2) {
				alert('You enter the next room and theres chest sitting in the middle of it.')
				menu = switchMenu('dungeon6')
			} else if (diceRoll < 3) {
				alert('You enter the next room and theres two ways to go.')
				menu = switchMenu('dungeon2')
			}
		} else if (diceRoll < 3) {
			alert('You try to fight the troll but die!')
			health -= 100
		}
	}
	changeInventory()
	changeMarket()
})

$('#trap').click(function () {
	let diceRoll = Math.random() * 3
	if (diceRoll < 1) {
		if (shield >= 1) {
			alert('You walk through the empty doorway and you block the barrage of arrows.')
			let diceRoll = Math.random() * 3
			if (diceRoll < 1) {
				alert('You enter the next room and theres a potion in the middle of it.')
				menu = switchMenu('dungeon5')
			} else if (diceRoll < 2) {
				alert('You enter the next room and theres chest sitting in the middle of it.')
				menu = switchMenu('dungeon6')
			} else if (diceRoll < 3) {
				alert('You enter the next room and theres a door with a keyhole.')
				menu = switchMenu('dungeon7')
			}
		} else {
			alert('You walk through the empty doorway and die to a barrage of arrows.')
			health -= 100
		}
	} else if (diceRoll < 2) {
		alert('You walk through the empty doorway nothing happens.')
		let diceRoll = Math.random() * 3
		if (diceRoll < 1) {
			alert('You enter the next room and theres a potion in the middle of it.')
			menu = switchMenu('dungeon5')
		} else if (diceRoll < 2) {
			alert('You enter the next room and theres chest sitting in the middle of it.')
			menu = switchMenu('dungeon6')
		} else if (diceRoll < 3) {
			alert('You enter the next room and theres a troll waiting for you!')
			menu = switchMenu('dungeon3')
		}
	} else if (diceRoll < 3) {
		alert('You walk through the empty doorway and hear a noise in a distant room')
		let diceRoll = Math.random() * 3
		if (diceRoll < 1) {
			alert('You enter the next room and theres a door with a keyhole.')
			menu = switchMenu('dungeon7')
		} else if (diceRoll < 2) {
			alert('You enter a room with a chest and what looks to be an exit.')
			menu = switchMenu('dungeonEnd')
		} else if (diceRoll < 3) {
			alert('You enter the next room and theres a troll waiting for you!')
			menu = switchMenu('dungeon3')
		}
	}

	changeInventory()
	changeMarket()
})

$('#chest1').click(function () {
	let diceRoll = Math.random() * 4
	if (diceRoll < 1) {
		alert('You open the chest and find some gold.')
		money += 100
		let diceRoll = Math.random() * 3
		if (diceRoll < 1) {
			alert('You enter the next room and theres two ways to go.')
			menu = switchMenu('dungeon1')
		} else if (diceRoll < 2) {
			alert('You enter the next room and theres an empty doorway sitting in the middle of it.')
			menu = switchMenu('dungeon4')
		} else if (diceRoll < 3) {
			alert('You enter the next room and theres a troll waiting for you!')
			menu = switchMenu('dungeon3')
		}
	} else if (diceRoll < 2) {
		alert('You open the chest and it was a trap!')
		health -= 50
		let diceRoll = Math.random() * 3
		if (diceRoll < 1) {
			alert('You enter the next room and theres a potion in the middle of it.')
			menu = switchMenu('dungeon5')
		} else if (diceRoll < 2) {
			alert('You enter the next room and theres two ways to go.')
			menu = switchMenu('dungeon1')
		} else if (diceRoll < 3) {
			alert('You enter the next room and theres a troll waiting for you!')
			menu = switchMenu('dungeon3')
		}
	} else if (diceRoll < 3) {
		alert('You open the chest and find a shield.')
		shield++
		let diceRoll = Math.random() * 3
		if (diceRoll < 1) {
			alert('You enter a room with a chest and what looks to be an exit.')
			menu = switchMenu('dungeonEnd')
		} else if (diceRoll < 2) {
			alert('You enter the next room and theres two ways to go.')
			menu = switchMenu('dungeon2')
		} else if (diceRoll < 3) {
			alert('You enter the next room and theres a door with a keyhole.')
			menu = switchMenu('dungeon7')
		}
	} else if (diceRoll < 4) {
		alert('You open the chest and find a key.')
		key++
		let diceRoll = Math.random() * 3
		if (diceRoll < 1) {
			alert('You enter a room with a chest and what looks to be an exit.')
			menu = switchMenu('dungeonEnd')
		} else if (diceRoll < 2) {
			alert('You enter the next room and theres a door with a keyhole.')
			menu = switchMenu('dungeon7')
		} else if (diceRoll < 3) {
			alert('You enter the next room and theres a troll waiting for you!')
			menu = switchMenu('dungeon3')
		}
	}
	changeInventory()
	changeMarket()
})

$('#chest2').click(function () {
	let diceRoll = Math.random() * 6
	if (diceRoll < 1) {
		alert('You open the chest and find 1000 gold!')
		money += 1000
		menu = switchMenu('main')
	} else if (diceRoll < 2) {
		alert('You open the chest and find a sword!')
		sword++
		menu = switchMenu('main')
	} else if (diceRoll < 3) {
		alert('You open the chest and find nothing!')
		menu = switchMenu('main')
	} else if (diceRoll < 4) {
		alert('You open the chest and its a trap!')
		health -= 60
		menu = switchMenu('main')
	} else if (diceRoll < 5) {
		alert('You open the chest and find a sword!')
		sword++
		menu = switchMenu('main')
	} else if (diceRoll < 6) {
		alert('You open the chest and find 1000 gold!')
		money += 1000
		menu = switchMenu('main')
	}

	changeInventory()
	changeMarket()
})

$('#doorKey').click(function () {
	if (key >= 1) {
		let diceRoll = Math.random() * 6
		if (diceRoll < 1) {
			alert('You open the door and find an empty room.')
			RandomRoom()
		} else if (diceRoll < 2) {
			alert('You open the door and find a relic!')
			relic++
			RandomRoom()
		} else if (diceRoll < 3) {
			alert('You open the door and find a troll!')
			menu = switchMenu('dungeon3')
		} else if (diceRoll < 4) {
			alert('You open the door and its a trap!')
			health -= 60
			RandomRoom()
		} else if (diceRoll < 5) {
			alert('You open the door and find a relic!')
			relic++
			RandomRoom()
		} else if (diceRoll < 6) {
			alert('You open the door and find 10000 gold!')
			money += 10000
			RandomRoom()
		}
		key--
	} else {
		alert('You dont have the key to this door.')
	}

	changeInventory()
	changeMarket()
})

$('#moveRoom4').click(function () {
	let diceRoll = Math.random() * 3
	if (diceRoll < 1) {
		alert('You moved past the door into the next room.')
		menu = switchMenu('dungeon4')
		alert('You enter the next room and theres an empty doorway in the middle of it.')
	} else if (diceRoll < 2) {
		alert('You moved past the door into the next room.')
		if (Math.random() < 0.5) {
			menu = switchMenu('dungeon1')
		} else {
			menu = switchMenu('dungeon2')
		}
		alert('You enter the next room and theres two ways to go.')
	} else if (diceRoll < 3) {
		alert('You moved past the door into the next room.')
		menu = switchMenu('dungeon3')
		alert('You enter the next room and theres a troll waiting for you!')
	}
})

//(Math.random() < 0.5)

$('#visit').click(function () {
	menu = switchMenu('marketPlace')
	changeMarket()
})

$('#campfire1').click(function () {
	if (campfire <= 0) {
		alert('You dont have a campfire built.')
	} else menu = switchMenu('cooking')
	changeMarket()
	changeInventory()
})

$('#return').click(function () {
	menu = switchMenu('main')
})

function gameOver() {
	window.location.reload()
}

//inv updater
function changeInventory() {
	$('#Sugma').html('Health: ' + health)

	if (health <= 0) {
		let alerted = localStorage.getItem('alerted') || ''
		if (alerted != 'yes') {
			alert('Game Over!');
			localStorage.setItem('alerted', 'yes')
		}
		gameOver();
        clearSave();
	};

	if (money >= 1000000) {
		$('#money').html('Gold: ' + money + ' SK DID IT FIRST!!')
	} else if (money >= 1100000) {
		$('#money').html('Gold: ' + money)
	} else {
		$('#money').html('Gold: ' + money)
	}

	if (logs == 1) {
		$('#logs').html('You own ' + logs + ' log. ')
	} else if (logs > 1) {
		$('#logs').html('You own ' + logs + ' logs. ')
	} else {
		$('#logs').html('')
	}

	if (pickaxes == 1) {
		$('#pickaxes').html('You own ' + pickaxes + ' pickaxe. ')
	} else if (pickaxes > 1) {
		$('#pickaxes').html('You own ' + pickaxes + ' pickaxes. ')
	} else {
		$('#pickaxes').html('')
	}

	if (stone == 1) {
		$('#stone').html('You own ' + stone + ' stone. ')
	} else if (stone > 1) {
		$('#stone').html('You own ' + stone + ' stones. ')
	} else {
		$('#stone').html('')
	}

	if (RefinedWood == 1) {
		$('#refinedWood').html('You own ' + RefinedWood + ' RefinedWood. ')
	} else if (RefinedWood > 1) {
		$('#refinedWood').html('You own ' + RefinedWood + ' RefinedWoods. ')
	} else {
		$('#refinedWood').html('')
	}

	if (SawMill == 1) {
		$('#SawMill').html('You own ' + SawMill + ' SawMill. ')
	} else if (SawMill > 1) {
		$('#SawMill').html('You own ' + SawMill + ' SawMills. ')
	} else {
		$('#SawMill').html('')
	}

	if (SawMillAuto == 1) {
		$('#AutoSawmill').html('You own ' + SawMillAuto + ' Auto SawMill. ')
	} else if (SawMillAuto > 1) {
		$('#AutoSawmill').html('You own ' + SawMillAuto + ' Auto SawMills. ')
	} else {
		$('#AutoSawmill').html('')
	}

	if (deerSkin == 1) {
		$('#hide').html('You own ' + deerSkin + ' Hide. ')
	} else if (deerSkin > 1) {
		$('#hide').html('You own ' + deerSkin + ' Hides. ')
	} else {
		$('#hide').html('')
	}

	if (bearPelt == 1) {
		$('#bearPelt').html('You own ' + bearPelt + ' Bear Pelt. ')
	} else if (bearPelt > 1) {
		$('#bearPelt').html('You own ' + bearPelt + ' Bear Pelts. ')
	} else {
		$('#bearPelt').html('')
	}

	if (cookedBass == 1) {
		$('#cookedBass').html('You own ' + cookedBass + ' Cooked Bass. ')
	} else if (cookedBass > 1) {
		$('#cookedBass').html('You own ' + cookedBass + ' Cooked Bass. ')
	} else {
		$('#cookedBass').html('')
	}

	if (cookedCarp == 1) {
		$('#cookedCarp').html('You own ' + cookedCarp + ' Cooked Carp. ')
	} else if (cookedCarp > 1) {
		$('#cookedCarp').html('You own ' + cookedCarp + ' Cooked Carp. ')
	} else {
		$('#cookedCarp').html('')
	}

	if (cookedCF == 1) {
		$('#cookedCF').html('You own ' + cookedCF + ' Cooked Cat Fish. ')
	} else if (cookedCF > 1) {
		$('#cookedCF').html('You own ' + cookedCF + ' Cooked Cat Fish. ')
	} else {
		$('#cookedCF').html('')
	}

	if (cookedLMB == 1) {
		$('#cookedLMB').html('You own ' + cookedLMB + ' Cooked LargeMouth Bass. ')
	} else if (cookedLMB > 1) {
		$('#cookedLMB').html('You own ' + cookedLMB + ' Cooked LargeMouth Bass. ')
	} else {
		$('#cookedLMB').html('')
	}

	if (gun == 1) {
		$('#guns').html('You own ' + gun + ' Gun. ')
	} else if (gun > 1) {
		$('#guns').html('You own ' + gun + ' Guns. ')
	} else {
		$('#guns').html('')
	}

	if (rod == 1) {
		$('#rods').html('You own ' + rod + ' Rod. ')
	} else if (rod > 1) {
		$('#rods').html('You own ' + rod + ' Rods. ')
	} else {
		$('#rods').html('')
	}

    if (potion == 1) {
		$('#potion1').html('You own ' + potion + ' Potion. ')
	} else if (potion > 1) {
		$('#potion1').html('You own ' + potion + ' Potions. ')
	} else {
		$('#potion1').html('')
	}

	if (shield == 1) {
		$('#shield').html('You own ' + shield + ' shield. ')
	} else if (shield > 1) {
		$('#shield').html('You own ' + shield + ' shields')
	} else {
		$('#shield').html('')
	}

	if (sword == 1) {
		$('#swords').html('You own ' + sword + ' sword. ')
	} else if (sword > 1) {
		$('#swords').html('You own ' + sword + ' swords')
	} else {
		$('#swords').html('')
	}

	if (key == 1) {
		$('#key').html('You own ' + key + ' key. ')
	} else if (key > 1) {
		$('#key').html('You own ' + key + ' keys.')
	} else {
		$('#key').html('')
	}

	if (relic == 1) {
		$('#relic').html('You own ' + relic + ' relic. ')
	} else if (relic > 1) {
		$('#relic').html('You own ' + relic + ' relics.')
	} else {
		$('#relic').html('')
	}

	if (Bass == 1) {
		$('#bass').html('You have ' + Bass + ' bass. ')
	} else if (Bass > 1) {
		$('#bass').html('You have ' + Bass + ' bass')
	} else {
		$('#bass').html('')
	}

	if (carp == 1) {
		$('#carp').html('You have ' + carp + ' carp. ')
	} else if (carp > 1) {
		$('#carp').html('You have ' + carp + ' carp.')
	} else {
		$('#carp').html('')
	}

	if (CatFish == 1) {
		$('#catFish').html('You have ' + CatFish + ' CatFish. ')
	} else if (CatFish > 1) {
		$('#catFish').html('You have ' + CatFish + ' CatFish.')
	} else {
		$('#catFish').html('')
	}

	if (largeMB == 1) {
		$('#largeMB').html('You have ' + largeMB + ' Largemouth Bass. ')
	} else if (largeMB > 1) {
		$('#largeMB').html('You have ' + largeMB + ' Largemouth Bass.')
	} else {
		$('#largeMB').html('')
	}

	if (trollSkin == 1) {
		$('#trollSkin').html('You have ' + trollSkin + ' Troll Skin. ')
	} else if (trollSkin > 1) {
		$('#trollSkin').html('You have ' + trollSkin + ' Troll Skins.')
	} else {
		$('#trollSkin').html('')
	}

	if (wolfPelt == 1) {
		$('#wolfPelt').html('You have ' + wolfPelt + ' Wolf Pelt. ')
	} else if (wolfPelt > 1) {
		$('#wolfPelt').html('You have ' + wolfPelt + ' Wolf Pelts.')
	} else {
		$('#wolfPelt').html('')
	}

	if (ruby == 1) {
		$('#ruby').html('You have ' + ruby + ' ruby. ')
	} else if (ruby > 1) {
		$('#ruby').html('You have ' + ruby + ' rubys.')
	} else {
		$('#ruby').html('')
	}

	if (diamond == 1) {
		$('#diamond').html('You have ' + diamond + ' diamond. ')
	} else if (diamond > 1) {
		$('#diamond').html('You have ' + diamond + ' diamonds.')
	} else {
		$('#diamond').html('')
	}

	//Bear Pelt
	if (Bass > 0) {
		$('#cookallbass').css('display', 'block')
	} else {
		$('#cookallbass').css('display', 'none')
	}
	if (Bass >= 1) {
		$('#cook1bass').css('display', 'block')
	} else {
		$('#cook1bass').css('display', 'none')
	}
	if (Bass >= 10) {
		$('#cook10bass').css('display', 'block')
	} else {
		$('#cook10bass').css('display', 'none')
	}

	//Bear Pelt
	if (carp > 0) {
		$('#cookallcarp').css('display', 'block')
	} else {
		$('#cookallcarp').css('display', 'none')
	}
	if (carp >= 1) {
		$('#cook1carp').css('display', 'block')
	} else {
		$('#cook1carp').css('display', 'none')
	}
	if (carp >= 10) {
		$('#cook10carp').css('display', 'block')
	} else {
		$('#cook10carp').css('display', 'none')
	}

	//Bear Pelt
	if (CatFish > 0) {
		$('#cookallCF').css('display', 'block')
	} else {
		$('#cookallCF').css('display', 'none')
	}
	if (CatFish >= 1) {
		$('#cook1CF').css('display', 'block')
	} else {
		$('#cook1CF').css('display', 'none')
	}
	if (CatFish >= 10) {
		$('#cook10CF').css('display', 'block')
	} else {
		$('#cook10CF').css('display', 'none')
	}

	//Bear Pelt
	if (largeMB > 0) {
		$('#cookallLMB').css('display', 'block')
	} else {
		$('#cookallLMB').css('display', 'none')
	}
	if (largeMB >= 1) {
		$('#cook1LMB').css('display', 'block')
	} else {
		$('#cook1LMB').css('display', 'none')
	}
	if (largeMB >= 10) {
		$('#cook10LMB').css('display', 'block')
	} else {
		$('#cook10LMB').css('display', 'none')
	}

	if (logs <= 0) {
		$('#campFire').css('display', 'block')
	} else {
		$('#campFire').css('display', 'none')
	}
	if (logs > campfirePrice) {
		$('#campFire').css('display', 'block')
	} else {
		$('#campFire').css('display', 'none')
	}

	if (campfire >= 1) {
		$('#campfire1').css('display', 'block')
	} else {
		$('#campfire1').css('display', 'none')
	}
}
//market updater
function changeMarket() {
	//wood
	if (logs > 0) {
		$('#sellall').css('display', 'block')
	} else {
		$('#sellall').css('display', 'none')
	}
	if (logs > 1) {
		$('#sell1').css('display', 'block')
	} else {
		$('#sell1').css('display', 'none')
	}
	if (logs >= 10) {
		$('#sell10').css('display', 'block')
	} else {
		$('#sell10').css('display', 'none')
	}
	//stone
	if (stone > 0) {
		$('#sellallStone').css('display', 'block')
	} else {
		$('#sellallStone').css('display', 'none')
	}
	if (stone > 1) {
		$('#sell1Stone').css('display', 'block')
	} else {
		$('#sell1Stone').css('display', 'none')
	}
	if (stone >= 10) {
		$('#sell10Stone').css('display', 'block')
	} else {
		$('#sell10Stone').css('display', 'none')
	}
	//refined wood
	if (RefinedWood > 0) {
		$('#sellallRW').css('display', 'block')
	} else {
		$('#sellallRW').css('display', 'none')
	}
	if (RefinedWood >= 1) {
		$('#sell1RW').css('display', 'block')
	} else {
		$('#sell1RW').css('display', 'none')
	}
	if (RefinedWood >= 10) {
		$('#sell10RW').css('display', 'block')
	} else {
		$('#sell10RW').css('display', 'none')
	}
	//Wolf Pelts
	if (wolfPelt > 0) {
		$('#sellallWP').css('display', 'block')
	} else {
		$('#sellallWP').css('display', 'none')
	}
	if (wolfPelt >= 1) {
		$('#sell1WP').css('display', 'block')
	} else {
		$('#sell1WP').css('display', 'none')
	}
	if (wolfPelt >= 10) {
		$('#sell10WP').css('display', 'block')
	} else {
		$('#sell10WP').css('display', 'none')
	}

	//hide
	if (deerSkin > 0) {
		$('#sellallH').css('display', 'block')
	} else {
		$('#sellallH').css('display', 'none')
	}
	if (deerSkin >= 1) {
		$('#sell1H').css('display', 'block')
	} else {
		$('#sell1H').css('display', 'none')
	}
	if (deerSkin >= 10) {
		$('#sell10H').css('display', 'block')
	} else {
		$('#sell10H').css('display', 'none')
	}

	//Bear Pelt
	if (bearPelt > 0) {
		$('#sellallBP').css('display', 'block')
	} else {
		$('#sellallBP').css('display', 'none')
	}
	if (bearPelt >= 1) {
		$('#sell1BP').css('display', 'block')
	} else {
		$('#sell1BP').css('display', 'none')
	}
	if (bearPelt >= 10) {
		$('#sell10BP').css('display', 'block')
	} else {
		$('#sell10BP').css('display', 'none')
	}

	//relic
	if (relic > 0) {
		$('#sellallR').css('display', 'block')
	} else {
		$('#sellallR').css('display', 'none')
	}
	if (relic >= 1) {
		$('#sell1R').css('display', 'block')
	} else {
		$('#sell1R').css('display', 'none')
	}
	if (relic >= 10) {
		$('#sell10R').css('display', 'block')
	} else {
		$('#sell10R').css('display', 'none')
	}

	//bass
	if (Bass > 0) {
		$('#sellallBass').css('display', 'block')
	} else {
		$('#sellallBass').css('display', 'none')
	}
	if (Bass >= 1) {
		$('#sell1Bass').css('display', 'block')
	} else {
		$('#sell1Bass').css('display', 'none')
	}
	if (Bass >= 10) {
		$('#sell10Bass').css('display', 'block')
	} else {
		$('#sell10Bass').css('display', 'none')
	}

	//cooked bass
	if (cookedBass > 0) {
		$('#sellallCB').css('display', 'block')
	} else {
		$('#sellallCB').css('display', 'none')
	}
	if (cookedBass >= 1) {
		$('#sell1CB').css('display', 'block')
	} else {
		$('#sell1CB').css('display', 'none')
	}
	if (cookedBass >= 10) {
		$('#sell10CB').css('display', 'block')
	} else {
		$('#sell10CB').css('display', 'none')
	}

	//carp
	if (carp > 0) {
		$('#sellallCarp').css('display', 'block')
	} else {
		$('#sellallCarp').css('display', 'none')
	}
	if (carp >= 1) {
		$('#sell1Carp').css('display', 'block')
	} else {
		$('#sell1Carp').css('display', 'none')
	}
	if (carp >= 10) {
		$('#sell10Carp').css('display', 'block')
	} else {
		$('#sell10Carp').css('display', 'none')
	}

	//cooked carp
	if (cookedCarp > 0) {
		$('#sellallCC').css('display', 'block')
	} else {
		$('#sellallCC').css('display', 'none')
	}
	if (cookedCarp >= 1) {
		$('#sell1CC').css('display', 'block')
	} else {
		$('#sell1CC').css('display', 'none')
	}
	if (cookedCarp >= 10) {
		$('#sell10CC').css('display', 'block')
	} else {
		$('#sell10CC').css('display', 'none')
	}

	//catfish
	if (CatFish > 0) {
		$('#sellallCF').css('display', 'block')
	} else {
		$('#sellallCF').css('display', 'none')
	}
	if (CatFish >= 1) {
		$('#sell1CF').css('display', 'block')
	} else {
		$('#sell1CF').css('display', 'none')
	}
	if (CatFish >= 10) {
		$('#sell10CF').css('display', 'block')
	} else {
		$('#sell10CF').css('display', 'none')
	}

	if (cookedCF > 0) {
		$('#sellallCCF').css('display', 'block')
	} else {
		$('#sellallCCF').css('display', 'none')
	}
	if (cookedCF >= 1) {
		$('#sell1CCF').css('display', 'block')
	} else {
		$('#sell1CCF').css('display', 'none')
	}
	if (cookedCF >= 10) {
		$('#sell10CCF').css('display', 'block')
	} else {
		$('#sell10CCF').css('display', 'none')
	}

	//LargeMouth Bass
	if (largeMB > 0) {
		$('#sellallLB').css('display', 'block')
	} else {
		$('#sellallLB').css('display', 'none')
	}
	if (largeMB >= 1) {
		$('#sell1LB').css('display', 'block')
	} else {
		$('#sell1LB').css('display', 'none')
	}
	if (largeMB >= 10) {
		$('#sell10LB').css('display', 'block')
	} else {
		$('#sell10LB').css('display', 'none')
	}

	//LargeMouth Bass
	if (cookedLMB > 0) {
		$('#sellallCLB').css('display', 'block')
	} else {
		$('#sellallCLB').css('display', 'none')
	}
	if (cookedLMB >= 1) {
		$('#sell1CLB').css('display', 'block')
	} else {
		$('#sell1CLB').css('display', 'none')
	}
	if (cookedLMB >= 10) {
		$('#sell10CLB').css('display', 'block')
	} else {
		$('#sell10CLB').css('display', 'none')
	}

	//Troll Skin
	if (trollSkin > 0) {
		$('#sellallTS').css('display', 'block')
	} else {
		$('#sellallTS').css('display', 'none')
	}
	if (trollSkin >= 1) {
		$('#sell1TS').css('display', 'block')
	} else {
		$('#sell1TS').css('display', 'none')
	}
	if (trollSkin >= 10) {
		$('#sell10TS').css('display', 'block')
	} else {
		$('#sell10TS').css('display', 'none')
	}

	//Diamond
	if (diamond > 0) {
		$('#sellallD').css('display', 'block')
	} else {
		$('#sellallD').css('display', 'none')
	}
	if (diamond >= 1) {
		$('#sell1D').css('display', 'block')
	} else {
		$('#sell1D').css('display', 'none')
	}
	if (diamond >= 10) {
		$('#sell10D').css('display', 'block')
	} else {
		$('#sell10D').css('display', 'none')
	}

	//Ruby
	if (ruby > 0) {
		$('#sellallRuby').css('display', 'block')
	} else {
		$('#sellallRuby').css('display', 'none')
	}
	if (ruby >= 1) {
		$('#sell1Ruby').css('display', 'block')
	} else {
		$('#sell1Ruby').css('display', 'none')
	}
	if (ruby >= 10) {
		$('#sell10Ruby').css('display', 'block')
	} else {
		$('#sell10Ruby').css('display', 'none')
	}

	//upgrades
	if (money >= autoChopperPrice) {
		$('#autoChopper').css('display', 'block')
	} else {
		$('#autoChopper').css('display', 'none')
	}

	if (logs >= SawMillCost) {
		$('#SawMillBuy').css('display', 'block')
	} else {
		$('#SawMillBuy').css('display', 'none')
	}

	if (money >= autoMinerPrice) {
		$('#autoMiner').css('display', 'block')
	} else {
		$('#autoMiner').css('display', 'none')
	}

	if (money >= SawMillAutoPrice) {
		$('#AutoSaw').css('display', 'block')
	} else {
		$('#AutoSaw').css('display', 'none')
	}

    if (money >= potionPrice) {
		$('#potion2').css('display', 'block')
	} else {
		$('#potion2').css('display', 'none')
	}



    if(SawMill > 0){
        $('#sawMill').css('display', 'block')
    }else{
        $('#sawMill').css('display', 'none')
    }

	if (dungKnow > 0) {
		$('#dungeon').css('display', 'block')
	} else {
		$('#dungeon').css('display', 'none')
	}

	//chop time
	if (chopTime <= 0) {
		$('#chop').css('display', 'block')
	} else if (chopTime > 0) {
		$('#chop').css('display', 'none')
	}

	if (pickaxes == 0) {
		$('#mineStone').css('display', 'none')
	} else if (mineTime <= 0) {
		$('#mineStone').css('display', 'block')
	} else if (mineTime > 0) {
		$('#mineStone').css('display', 'none')
	}


if (SawMill == 0){
    $('sawMill').css('display', 'none')
}else if (sawTime <= 0) {
		$('#sawMill').css('display', 'block')
	} else if (sawTime > 0) {
		$('#sawMill').css('display', 'none')
	}

}
//menu swapper
function switchMenu(menu) {
	$('.menus').children().css('display', 'none')
	$('.' + menu).css('display', 'block')
	return menu
}

//gather functions
$('#chop').click(function () {
	chopTime += 1
	logs += logPlus
	changeInventory()
	changeMarket()
	setTimeout(1500)
	chopTime -= 1
})

let chopTime = 0
let mineTime = 0
let sawTime = 0

$('#mineStone').click(function () {
	if (pickaxes == 0) {
		alert('You have nothing to mine with.')
	} else {
		mineFind()
		changeInventory()
		changeMarket()
		setTimeout(2500)
		mineTime -= 1
	}
})

$('#sawMill').click(function () {
	if (logs <= 0) {
		alert("You don't have enough logs.")
	} else if (SawMill == 0) {
		alert("You don't have a SawMill")
	} else {
		logs -= RefinedWoodPlus
		RefinedWood++
        sawTime += 1
		changeInventory()
		changeMarket()
        setTimeout(3000)
        sawTime -= 1
	}
})

$('#return2').click(function () {
	menu = switchMenu('main')
})

$('#return3').click(function () {
	menu = switchMenu('tavern')
})

$('#return4').click(function () {
	menu = switchMenu('tavern')
})

$('#return5').click(function () {
	menu = switchMenu('tavern')
	alert('You can leave the Lean&Bean but the Lean&Bean never leaves you.')
})

$('#return6').click(function () {
	menu = switchMenu('main')
})

function clearTavern() {}

function switchMenu2(menu) {
	$('.tavern').children().css('display', 'none')
	$('.' + menu).css('display', 'block')
	return menu
}

function RandomRoom() {
	let diceRoll = Math.random() * 8
	if (diceRoll < 1) {
		alert('You enter the next room and theres a empty doorway in the middle of it.')
		menu = switchMenu('dungeon4')
	} else if (diceRoll < 2) {
		alert('You enter the next room and theres chest sitting in the middle of it.')
		menu = switchMenu('dungeon6')
	} else if (diceRoll < 3) {
		alert('You enter the next room and theres a troll waiting for you!')
		menu = switchMenu('dungeon3')
	} else if (diceRoll < 4) {
		alert('You enter the next room to see a potion sitting in the middle of it.')
		menu = switchMenu('dungeon5')
	} else if (diceRoll < 5) {
		alert('You enter the next room and theres chest sitting in the middle of it.')
		menu = switchMenu('dungeon6')
	} else if (diceRoll < 6) {
		alert('You enter the next room and theres a troll waiting for you!')
		menu = switchMenu('dungeon3')
	} else if (diceRoll < 7) {
		alert('You enter the next room to see a potion sitting in the middle of it.')
		menu = switchMenu('dungeon5')
	} else if (diceRoll < 8) {
		bar
		alert('You enter the next room and theres a empty doorway in the middle of it.')
		menu = switchMenu('dungeon4')
	}
}

function gameOverAlert() {
	alert('Game Over.')
}

function easterAlert() {
	let alerted = localStorage.getItem('alerted') || ''
	if (alerted != 'yes') {
		alert('SK did it first!!')
		localStorage.setItem('alerted', 'yes')
	}
}

function leanBar() {
	let diceRoll = Math.random() * 16
	if (diceRoll < 1) {
		menu = switchMenu('bar')
	} else if (diceRoll < 2) {
		menu = switchMenu('bar')
	} else if (diceRoll < 3) {
		menu = switchMenu('bar')
	} else if (diceRoll < 4) {
		menu = switchMenu('bar')
	} else if (diceRoll < 5) {
		menu = switchMenu('bar')
	} else if (diceRoll < 6) {
		menu = switchMenu('bar')
	} else if (diceRoll < 7) {
		menu = switchMenu('bar')
	} else if (diceRoll < 8) {
		menu = switchMenu('bar')
	} else if (diceRoll < 9) {
		menu = switchMenu('bar')
	} else if (diceRoll < 10) {
		menu = switchMenu('bar')
	} else if (diceRoll < 11) {
		menu = switchMenu('bar')
	} else if (diceRoll < 12) {
		menu = switchMenu('bar')
	} else if (diceRoll < 13) {
		menu = switchMenu('bar')
	} else if (diceRoll < 14) {
		menu = switchMenu('bar')
	} else if (diceRoll < 15) {
		menu = switchMenu('bar')
	} else if (diceRoll < 16) {
		menu = switchMenu('leanBar')
	}
}

// function mineFind() {
//     let diceRoll = Math.random()
//     mineTime++
    
//     if (diceRoll > 0.01) {
//         // do stuff
//     } else if (diceRoll > 0.02) {
//         // do something else
//     } else {
//         stone++
//         // default thing
//     }
// }

function mineFind() {
	let diceRoll = Math.random() * 128
	if (diceRoll < 1) {
		stone++
		mineTime++
	} else if (diceRoll < 2) {
		stone++
		mineTime++
	} else if (diceRoll < 3) {
		stone++
		mineTime++
	} else if (diceRoll < 4) {
		stone++
		mineTime++
	} else if (diceRoll < 5) {
		stone++
		mineTime++
	} else if (diceRoll < 6) {
		stone++
		mineTime++
	} else if (diceRoll < 7) {
		stone++
		mineTime++
	} else if (diceRoll < 8) {
		stone++
		mineTime++
	} else if (diceRoll < 9) {
		stone++
		mineTime++
	} else if (diceRoll < 10) {
		stone++
		mineTime++
	} else if (diceRoll < 11) {
		stone++
		mineTime++
	} else if (diceRoll < 12) {
		stone++
		mineTime++
	} else if (diceRoll < 13) {
		stone++
		mineTime++
	} else if (diceRoll < 14) {
		stone++
		mineTime++
	} else if (diceRoll < 15) {
		stone++
		mineTime++
	} else if (diceRoll < 16) {
		stone++
		mineTime++
	} else if (diceRoll < 17) {
		alert('you went mining and hurt yourself.')
		health -= 10
		mineTime++
	} else if (diceRoll < 18) {
		stone++
		mineTime++
	} else if (diceRoll < 19) {
		stone++
		mineTime++
	} else if (diceRoll < 20) {
		stone++
		mineTime++
	} else if (diceRoll < 21) {
		stone++
		mineTime++
	} else if (diceRoll < 22) {
		stone++
		mineTime++
	} else if (diceRoll < 23) {
		stone++
		mineTime++
	} else if (diceRoll < 24) {
		alert('You found a ruby!')
		ruby++
		mineTime++
	} else if (diceRoll < 25) {
		stone++
		mineTime++
	} else if (diceRoll < 26) {
		stone++
		mineTime++
	} else if (diceRoll < 27) {
		stone++
		mineTime++
	} else if (diceRoll < 28) {
		stone++
		mineTime++
	} else if (diceRoll < 29) {
		stone++
		mineTime++
	} else if (diceRoll < 30) {
		stone++
		mineTime++
	} else if (diceRoll < 31) {
		alert('You found a diamond!')
		diamond++
		mineTime++
	} else if (diceRoll < 32) {
		stone++
		mineTime++
	} else if (diceRoll < 33) {
		stone++
		mineTime++
	} else if (diceRoll < 34) {
		stone++
		mineTime++
	} else if (diceRoll < 35) {
		stone++
		mineTime++
	} else if (diceRoll < 36) {
		stone++
		mineTime++
	} else if (diceRoll < 37) {
		stone++
		mineTime++
	} else if (diceRoll < 38) {
		stone++
		mineTime++
	} else if (diceRoll < 39) {
		stone++
		mineTime++
	} else if (diceRoll < 40) {
		stone++
		mineTime++
	} else if (diceRoll < 41) {
		stone++
		mineTime++
	} else if (diceRoll < 42) {
		stone++
		mineTime++
	} else if (diceRoll < 43) {
		stone++
		mineTime++
	} else if (diceRoll < 44) {
		stone++
		mineTime++
	} else if (diceRoll < 45) {
		stone++
		mineTime++
	} else if (diceRoll < 46) {
		stone++
		mineTime++
	} else if (diceRoll < 47) {
		stone++
		mineTime++
	} else if (diceRoll < 48) {
		stone++
		mineTime++
	} else if (diceRoll < 49) {
		alert('you went mining and hurt yourself.')
		health -= 25
		mineTime++
	} else if (diceRoll < 50) {
		stone++
		mineTime++
	} else if (diceRoll < 51) {
		stone++
		mineTime++
	} else if (diceRoll < 52) {
		stone++
		mineTime++
	} else if (diceRoll < 53) {
		stone++
		mineTime++
	} else if (diceRoll < 54) {
		stone++
		mineTime++
	} else if (diceRoll < 55) {
		stone++
		mineTime++
	} else if (diceRoll < 56) {
		stone++
		mineTime++
	} else if (diceRoll < 57) {
		alert('you went mining and hurt yourself.')
		health -= 20
		mineTime++
	} else if (diceRoll < 58) {
		stone++
		mineTime++
	} else if (diceRoll < 59) {
		stone++
		mineTime++
	} else if (diceRoll < 60) {
		stone++
		mineTime++
	} else if (diceRoll < 61) {
		stone++
		mineTime++
	} else if (diceRoll < 62) {
		stone++
		mineTime++
	} else if (diceRoll < 63) {
		stone++
		mineTime++
	} else if (diceRoll < 64) {
		stone++
		mineTime++
	} else if (diceRoll < 65) {
		stone++
		mineTime++
	} else if (diceRoll < 66) {
		stone++
		mineTime++
	} else if (diceRoll < 67) {
		stone++
		mineTime++
	} else if (diceRoll < 68) {
		stone++
		mineTime++
	} else if (diceRoll < 69) {
		stone++
		mineTime++
	} else if (diceRoll < 70) {
		stone++
		mineTime++
	} else if (diceRoll < 71) {
		stone++
		mineTime++
	} else if (diceRoll < 72) {
		stone++
		mineTime++
	} else if (diceRoll < 73) {
		stone++
		mineTime++
	} else if (diceRoll < 74) {
		stone++
		mineTime++
	} else if (diceRoll < 75) {
		stone++
		mineTime++
	} else if (diceRoll < 76) {
		stone++
		mineTime++
	} else if (diceRoll < 77) {
		stone++
		mineTime++
	} else if (diceRoll < 78) {
		stone++
		mineTime++
	} else if (diceRoll < 79) {
		stone++
		mineTime++
	} else if (diceRoll < 80) {
		stone++
		mineTime++
	} else if (diceRoll < 81) {
		alert('you went mining and hurt yourself.')
		health -= 20
		mineTime++
	} else if (diceRoll < 82) {
		stone++
		mineTime++
	} else if (diceRoll < 83) {
		stone++
		mineTime++
	} else if (diceRoll < 84) {
		stone++
		mineTime++
	} else if (diceRoll < 85) {
		stone++
		mineTime++
	} else if (diceRoll < 86) {
		stone++
		mineTime++
	} else if (diceRoll < 87) {
		stone++
		mineTime++
	} else if (diceRoll < 88) {
		stone++
		mineTime++
	} else if (diceRoll < 89) {
		stone++
		mineTime++
	} else if (diceRoll < 90) {
		stone++
		mineTime++
	} else if (diceRoll < 91) {
		stone++
		mineTime++
	} else if (diceRoll < 92) {
		stone++
		mineTime++
	} else if (diceRoll < 93) {
		stone++
		mineTime++
	} else if (diceRoll < 94) {
		stone++
		mineTime++
	} else if (diceRoll < 95) {
		stone++
		mineTime++
	} else if (diceRoll < 96) {
		stone++
		mineTime++
	} else if (diceRoll < 97) {
		stone++
		mineTime++
	} else if (diceRoll < 98) {
		stone++
		mineTime++
	} else if (diceRoll < 99) {
		stone++
		mineTime++
	} else if (diceRoll < 100) {
		stone++
		mineTime++
	} else if (diceRoll < 101) {
		stone++
		mineTime++
	} else if (diceRoll < 102) {
		stone++
		mineTime++
	} else if (diceRoll < 103) {
		stone++
		mineTime++
	} else if (diceRoll < 104) {
		stone++
		mineTime++
	} else if (diceRoll < 105) {
		stone++
		mineTime++
	} else if (diceRoll < 106) {
		stone++
		mineTime++
	} else if (diceRoll < 107) {
		stone++
		mineTime++
	} else if (diceRoll < 108) {
		stone++
		mineTime++
	} else if (diceRoll < 109) {
		stone++
		mineTime++
	} else if (diceRoll < 110) {
		stone++
		mineTime++
	} else if (diceRoll < 111) {
		stone++
		mineTime++
	} else if (diceRoll < 112) {
		stone++
		mineTime++
	} else if (diceRoll < 113) {
		alert('you went mining and hurt yourself.')
		health -= 10
		mineTime++
	} else if (diceRoll < 114) {
		stone++
		mineTime++
	} else if (diceRoll < 115) {
		stone++
		mineTime++
	} else if (diceRoll < 116) {
		stone++
		mineTime++
	} else if (diceRoll < 117) {
		stone++
		mineTime++
	} else if (diceRoll < 118) {
		stone++
		mineTime++
	} else if (diceRoll < 119) {
		stone++
		mineTime++
	} else if (diceRoll < 120) {
		stone++
		mineTime++
	} else if (diceRoll < 121) {
		alert('you went mining and hurt yourself.')
		health -= 15
		mineTime++
	} else if (diceRoll < 122) {
		stone++
		mineTime++
	} else if (diceRoll < 123) {
		stone++
		mineTime++
	} else if (diceRoll < 124) {
		stone++
		mineTime++
	} else if (diceRoll < 125) {
		stone++
		mineTime++
	} else if (diceRoll < 126) {
		stone++
		mineTime++
	} else if (diceRoll < 127) {
		stone++
		mineTime++
	} else if (diceRoll < 128) {
		stone++
		mineTime++
	}
}
//dialogue
let dungKnow = 0
$('#dialogue').click(function () {
	alert('You can see what ive got.')
})

$('#dialogue2').click(function () {
	if (pickaxes <= 0) {
		alert('I dont know much now but come back later and i might know something new.')
	} else if (dungKnow >= 1) {
		alert('I already told you everything i know.')
	} else {
		alert('I know about some dungeon around here but thats about it.')
		dungKnow++
	}
})

$('#save').click(function () {
	save()
})

$('#load2').click(function () {
	loadGame()
})

/* SETUP A SAVE STATE */
function save() {
    

} // FUNCTION: SAVE GAME

/* LOAD PREVIOUS game */
function loadGame() {
	// Split cookie string and get all individual name=value pairs in an array
	let cookieArr = document.cookie.split(';')

	// Loop through the array elements
	for (let i = 0; i < cookieArr.length; i++) {
		let cookiePair = cookieArr[i].split('=')

		/* Removing whitespace at the beginning of the cookie name
            and compare it with the given string */
		if ('save' == cookiePair[0].trim()) {
			// Decode the cookie value and return
			player = JSON.parse(cookiePair[1])
		}
	}
	console.log(player.money)
}


/* SETUP A SAVE STATE */
function save() {
    updatePlayerData()
    // TRY TO SAVE THE GAME
    try {
        localStorage.setItem("save",JSON.stringify(player));
    }catch(err) {
            alert("Cannot access localStorage - browser may be old or storage may be corrupt");
    }
   alert("Game saved successfully");
};
// FUNCTION: SAVE GAME

/* LOAD PREVIOUS game */
function loadGame() {
    alert("You loaded the game.");
    
    player = JSON.parse(localStorage.getItem("save"));
    console.log(player); 
    
    updateGameData()
    // initGame();
};

function clearSave() {
    localStorage.clear();
}