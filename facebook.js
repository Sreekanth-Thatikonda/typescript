"use strict";
exports.__esModule = true;
var FaceBookPageView = /** @class */ (function () {
    function FaceBookPageView(profileName, age, sex, status, numberOfFriends, timeline, numberOfFallowers, birthPlace, numberOfLikes, numberOfDisLikes, instagramName, whatsAppName, numberOfPhotos, numberOfProfilePic, dateOfBirth) {
        var _this = this;
        this.getProfileName = function () {
            return _this.profileName;
        };
        this.getAge = function () {
            return _this.age;
        };
        this.getSex = function () {
            return _this.sex;
        };
        this.getStatus = function () {
            return _this.status;
        };
        this.getNumberOfFriends = function () {
            return _this.numberOfFriends;
        };
        this.getTimeLine = function () {
            return _this.timeline;
        };
        this.getNumberOfFollowers = function () {
            return _this.numberOfFallowers;
        };
        this.getNumberOfLikes = function () {
            return _this.numberOfLikes;
        };
        this.getNumberOfDisLikes = function () {
            return _this.numberOfDisLikes;
        };
        this.getDateOfBirth = function () {
            return _this.dateOfBirth;
        };
        this.getInstaGramName = function () {
            return _this.instagramName;
        };
        this.getWhatsAppName = function () {
            return _this.whatsAppName;
        };
        this.getNumberOfPhotos = function () {
            return _this.numberOfPhotos;
        };
        this.getNumberOfProfilePic = function () {
            return _this.numberOfProfilePic;
        };
        this.getBirthPlace = function () {
            return _this.birthPlace;
        };
        this.age = age;
        this.birthPlace = birthPlace;
        this.dateOfBirth = dateOfBirth;
        this.instagramName = instagramName;
        this.numberOfDisLikes = numberOfDisLikes;
        this.numberOfFallowers = numberOfFallowers;
        this.numberOfFriends = numberOfFriends;
        this.numberOfLikes = numberOfLikes;
        this.numberOfPhotos = numberOfPhotos;
        this.numberOfProfilePic = numberOfProfilePic;
        this.profileName = profileName;
        this.sex = sex;
        this.status = status;
        this.timeline = timeline;
        this.whatsAppName = whatsAppName;
    }
    return FaceBookPageView;
}());
exports.FaceBookPageView = FaceBookPageView;
var faceBookObject = new FaceBookPageView("santhosh", 24, "Male", "UnMarried", 500, ["Went to Bali", "relaxed", "123"], 50, "Harapanahalli", 2000, 0, "santya", "santhosh1212", 12, 2, "12-Dec-1993");
var profileName = faceBookObject.getProfileName();
console.log(profileName);
console.log(faceBookObject.getAge());
console.log(faceBookObject.getBirthPlace());
console.log(faceBookObject.getNumberOfProfilePic());
console.log(faceBookObject.getNumberOfPhotos());
console.log(faceBookObject.getWhatsAppName());
console.log(faceBookObject.getInstaGramName());
console.log(faceBookObject.getDateOfBirth());
console.log(faceBookObject.getNumberOfDisLikes());
console.log(faceBookObject.getNumberOfLikes());
console.log(faceBookObject.getNumberOfFollowers());
console.log(faceBookObject.getTimeLine());
console.log(faceBookObject.getNumberOfFriends());
console.log(faceBookObject.getStatus());
console.log(faceBookObject.getSex());
