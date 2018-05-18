"use strict";
exports.__esModule = true;
var YouTubeVideoConvertion = /** @class */ (function () {
    function YouTubeVideoConvertion(numberOfViews, numberOfSubcribes, channelName, videoTitle, numberOfLikes, numberOfDisLikes, numberOfShares, comments, videoTime, annotation, videoQuality, videoSpeed, subTitle) {
        this.numberOfViews = numberOfViews;
        this.numberOfSubcribes = numberOfSubcribes;
        this.channelName = channelName;
        this.videoTitle = videoTitle;
        this.numberOfLikes = numberOfLikes;
        this.numberOfDisLikes = numberOfDisLikes;
        this.numberOfShares = numberOfShares;
        this.comments = comments;
        this.videoTime = videoTime;
        this.annotation = annotation;
        this.videoQuality = videoQuality;
        this.videoSpeed = videoSpeed;
        this.subTitle = subTitle;
    }
    YouTubeVideoConvertion.prototype.getNumberOfViews = function () {
        return this.numberOfViews;
    };
    YouTubeVideoConvertion.prototype.getNumberOfSubcribes = function () {
        return this.numberOfSubcribes;
    };
    YouTubeVideoConvertion.prototype.getChannelName = function () {
        return this.channelName;
    };
    YouTubeVideoConvertion.prototype.getVideoTitle = function () {
        return this.videoTitle;
    };
    YouTubeVideoConvertion.prototype.getNumberOfLikes = function () {
        return this.numberOfLikes;
    };
    YouTubeVideoConvertion.prototype.getNumberOfDisLikes = function () {
        return this.numberOfDisLikes;
    };
    YouTubeVideoConvertion.prototype.getNumberOfShares = function () {
        return this.numberOfShares;
    };
    YouTubeVideoConvertion.prototype.getComments = function () {
        return this.comments;
    };
    YouTubeVideoConvertion.prototype.getVideoQuality = function () {
        return this.videoQuality;
    };
    YouTubeVideoConvertion.prototype.getVideoSpeed = function () {
        return this.videoSpeed;
    };
    YouTubeVideoConvertion.prototype.getVideoTime = function () {
        return this.videoTime;
    };
    YouTubeVideoConvertion.prototype.getAnnotation = function () {
        return this.annotation;
    };
    YouTubeVideoConvertion.prototype.getSubTitle = function () {
        return this.subTitle;
    };
    YouTubeVideoConvertion.prototype.setNumberOfViews = function (value) {
        this.numberOfViews = value;
    };
    YouTubeVideoConvertion.prototype.setNumberOfSubcribes = function (value) {
        this.numberOfSubcribes = value;
    };
    YouTubeVideoConvertion.prototype.setChannelName = function (value) {
        this.channelName = value;
    };
    YouTubeVideoConvertion.prototype.setVideoTitle = function (value) {
        this.videoTitle = value;
    };
    YouTubeVideoConvertion.prototype.setNumberOfLikes = function (value) {
        this.numberOfLikes = value;
    };
    YouTubeVideoConvertion.prototype.setNumberOfDisLikes = function (value) {
        this.numberOfDisLikes = value;
    };
    YouTubeVideoConvertion.prototype.setNumberOfShares = function (value) {
        this.numberOfShares = value;
    };
    YouTubeVideoConvertion.prototype.setComments = function (value) {
        this.comments = value;
    };
    YouTubeVideoConvertion.prototype.setVideoQuality = function (value) {
        this.videoQuality = value;
    };
    YouTubeVideoConvertion.prototype.setVideoSpeed = function (value) {
        this.videoSpeed = value;
    };
    YouTubeVideoConvertion.prototype.setVideoTime = function (value) {
        this.videoTime = value;
    };
    YouTubeVideoConvertion.prototype.setAnnotation = function (value) {
        this.annotation = value;
    };
    YouTubeVideoConvertion.prototype.setSubTitle = function (value) {
        this.subTitle = value;
    };
    return YouTubeVideoConvertion;
}());
exports.YouTubeVideoConvertion = YouTubeVideoConvertion;
var youTubeObject = new YouTubeVideoConvertion(200000, 2500, "Sunny-Leone", "Sunny Darling", 12345, 8, 23456, 2300, 20, false, ["360p", "480p", "720"], [1, 2, 3, 4], false);
console.log(youTubeObject.getAnnotation());
console.log(youTubeObject.getNumberOfDisLikes());
console.log(youTubeObject.getVideoQuality());
console.log(youTubeObject.getChannelName());
console.log(youTubeObject.getComments());
console.log(youTubeObject.getNumberOfDisLikes());
console.log(youTubeObject.getNumberOfShares());
console.log(youTubeObject.getNumberOfSubcribes());
console.log(youTubeObject.getNumberOfViews());
console.log(youTubeObject.getSubTitle());
console.log(youTubeObject.getVideoSpeed());
console.log(youTubeObject.getVideoTime());
console.log(youTubeObject.getVideoTitle());
