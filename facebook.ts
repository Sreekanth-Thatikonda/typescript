export class FaceBookPageView {
    private profileName:string;
    private age:number;
    private sex:string;
    private status:string;
    private numberOfFriends:number;
    private timeline:string[];
    private numberOfFallowers:number;
    private birthPlace:string;
    private numberOfLikes:number;
    private numberOfDisLikes:number;
    private instagramName:string;
    private whatsAppName:string;
    private numberOfPhotos:number;
    private numberOfProfilePic:number;
    private dateOfBirth:string;

    constructor(profileName:string,age:number,sex:string,status:string,numberOfFriends:number,timeline:string[],
        numberOfFallowers:number,birthPlace:string,numberOfLikes:number,numberOfDisLikes:number,instagramName:string,
        whatsAppName:string,numberOfPhotos:number,numberOfProfilePic:number,dateOfBirth:string){
            this.age=age;
            this.birthPlace=birthPlace;
            this.dateOfBirth=dateOfBirth;
            this.instagramName=instagramName;
            this.numberOfDisLikes=numberOfDisLikes;
            this.numberOfFallowers=numberOfFallowers;
            this.numberOfFriends=numberOfFriends;
            this.numberOfLikes=numberOfLikes;
            this.numberOfPhotos=numberOfPhotos;
            this.numberOfProfilePic=numberOfProfilePic;
            this.profileName=profileName;
            this.sex=sex;
            this.status=status;
            this.timeline=timeline;
            this.whatsAppName=whatsAppName;
            }

            getProfileName=()=>{
                return this.profileName;
            }
            getAge=()=>{
                return this.age;
            }
            getSex=()=>{
                return this.sex;
            }
            getStatus=()=>{
                return this.status;
            }
            getNumberOfFriends=()=>{
                return this.numberOfFriends;
            }
            getTimeLine=()=>{
                return this.timeline;
            }
            getNumberOfFollowers=()=>{
                return this.numberOfFallowers;
            }
            getNumberOfLikes=()=>{
                return this.numberOfLikes;
            }
            getNumberOfDisLikes=()=>{
                return this.numberOfDisLikes;
            }
            getDateOfBirth=()=>{
                return this.dateOfBirth;
            }
            getInstaGramName=()=>{
                return this.instagramName;
            }
            getWhatsAppName=()=>{
                return this.whatsAppName;
            }
            getNumberOfPhotos=()=>{
                return this.numberOfPhotos;
            }
            getNumberOfProfilePic=()=>{
                return this.numberOfProfilePic;
            }
            getBirthPlace=()=>{
                return this.birthPlace;
            }

}

let faceBookObject=new FaceBookPageView("santhosh",24,"Male","UnMarried",500,["Went to Bali","relaxed","123"],50,"Harapanahalli",2000,0,"santya","santhosh1212",12,2,"12-Dec-1993");

let profileName=faceBookObject.getProfileName();
console.log(profileName)
console.log(faceBookObject.getAge())
console.log(faceBookObject.getBirthPlace())
console.log(faceBookObject.getNumberOfProfilePic())
console.log(faceBookObject.getNumberOfPhotos())
console.log(faceBookObject.getWhatsAppName())
console.log(faceBookObject.getInstaGramName())
console.log(faceBookObject.getDateOfBirth())
console.log(faceBookObject.getNumberOfDisLikes())
console.log(faceBookObject.getNumberOfLikes())
console.log(faceBookObject.getNumberOfFollowers())
console.log(faceBookObject.getTimeLine())
console.log(faceBookObject.getNumberOfFriends())
console.log(faceBookObject.getStatus())
console.log(faceBookObject.getSex())
