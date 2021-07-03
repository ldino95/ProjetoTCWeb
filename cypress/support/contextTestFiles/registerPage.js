

module.exports = {
formRegister: {
    titlePage : 'h2',
    firstName : ':nth-child(1) > :nth-child(2) > .form-control',
    lastName : ':nth-child(1) > :nth-child(3) > .form-control',
    addressCampo : '.col-md-8 > .form-control',
    emailAdress : '#eid > .form-control',
    phoneNumber : ':nth-child(4) > .col-md-4 > .form-control',
    genderF : ':nth-child(2) > .ng-pristine',
    genderM : ':nth-child(1) > .ng-pristine',
    hobbiesCricket : '#checkbox1',
    hobbiesMovies : '#checkbox2',
    hobbiesHockey : '#checkbox3',
    languageCampo : '#msdd',
    itemLanguage : '.ui-autocomplete > :nth-child(6)',
    skillsCampo : '#Skills',
    countryCampo : '#countries',
    itemCountry : '#select2-country-results > :nth-child(1)',
    selectCountry : '.select2-selection',
    itemSelect :'#select2-country-results > :nth-child(2)',
    birthYear : '#yearbox',
    birthMonth : ':nth-child(11) > :nth-child(3) > .form-control',
    birthDay : '#daybox',
    passowordFirst : '#firstpassword',
    passowordSecond :'#secondpassword',
    fileUpload: '#imagesrc',
   
    btnRegister : '#submitbtn',
    btnRefresh : '#Button1',

    messageTxt : "#msgtxt",

    alertEmail : "#basicBootstrapForm > div:nth-child(3)"
    


}


}