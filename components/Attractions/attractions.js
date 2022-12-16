let SacredLandButton = document.getElementById('SacredLand_Button')
let DevilLandButton = document.getElementById('DevilLand_Button')

const SacredLandHandler = () => {
    location.replace('./SacredLandContent/sacredLand.html')
}


SacredLandButton.addEventListener('click', SacredLandHandler)

const DevilLandHandler = () => {
    location.replace('./DevilLandContent/devilLand.html')
}

DevilLandButton.addEventListener('click', DevilLandHandler)


