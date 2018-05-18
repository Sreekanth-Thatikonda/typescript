export class YouTubeVideoConvertion{

    private numberOfViews: number;
    private numberOfSubcribes:number;
    private channelName:string;
    private videoTitle:string;
    private numberOfLikes:number;
    private numberOfDisLikes:number;
    private numberOfShares:number;
    private comments:number;
    private videoQuality:string[];
    private videoSpeed:number[];
    private videoTime:number;
    private annotation:boolean;
    private subTitle: boolean;

	public getNumberOfViews(): number {
		return this.numberOfViews;
	}

	public getNumberOfSubcribes(): number {
		return this.numberOfSubcribes;
	}

	public getChannelName(): string {
		return this.channelName;
	}

	public getVideoTitle(): string {
		return this.videoTitle;
	}

	public getNumberOfLikes(): number {
		return this.numberOfLikes;
	}


	public getNumberOfDisLikes(): number {
		return this.numberOfDisLikes;
	}

	public getNumberOfShares(): number {
		return this.numberOfShares;
	}

	public getComments(): number {
		return this.comments;
	}

	public getVideoQuality(): string[] {
		return this.videoQuality;
	}

	public getVideoSpeed(): number[] {
		return this.videoSpeed;
	}

	public getVideoTime(): number {
		return this.videoTime;
	}

	public getAnnotation(): boolean {
		return this.annotation;
	}

	public getSubTitle(): boolean {
		return this.subTitle;
	}

	public setNumberOfViews(value: number) {
		this.numberOfViews = value;
	}

	public setNumberOfSubcribes(value: number) {
		this.numberOfSubcribes = value;
	}

	public setChannelName(value: string) {
		this.channelName = value;
	}

	public setVideoTitle(value: string) {
		this.videoTitle = value;
	}

	public setNumberOfLikes(value: number) {
		this.numberOfLikes = value;
	}

	public setNumberOfDisLikes(value: number) {
		this.numberOfDisLikes = value;
	}

	public setNumberOfShares(value: number) {
		this.numberOfShares = value;
	}

	public setComments(value: number) {
		this.comments = value;
	}

	public setVideoQuality(value: string[]) {
		this.videoQuality = value;
	}

	public setVideoSpeed(value: number[]) {
		this.videoSpeed = value;
	}

	public setVideoTime(value: number) {
		this.videoTime = value;
	}

	public setAnnotation(value: boolean) {
		this.annotation = value;
	}

	public setSubTitle(value: boolean) {
		this.subTitle = value;
	}
    

   constructor(numberOfViews: number,numberOfSubcribes:number,channelName:string,videoTitle:string,numberOfLikes:number,numberOfDisLikes:number,numberOfShares:number,
        comments:number,videoTime:number,annotation:boolean,videoQuality:string[],videoSpeed:number[],subTitle: boolean){
            this.numberOfViews=numberOfViews;
            this.numberOfSubcribes=numberOfSubcribes;
            this.channelName=channelName;
            this.videoTitle=videoTitle;
            this.numberOfLikes=numberOfLikes;
            this.numberOfDisLikes=numberOfDisLikes;
            this.numberOfShares=numberOfShares;
            this.comments=comments;
            this.videoTime=videoTime;
            this.annotation=annotation;
            this.videoQuality=videoQuality;
            this.videoSpeed=videoSpeed;
            this.subTitle = subTitle;

    }
    
    
}
let youTubeObject=new YouTubeVideoConvertion(200000,2500,"Sunny-Leone","Sunny Darling",
12345,8,23456,2300,20,false,["360p","480p","720"],[1,2,3,4],false)


console.log(youTubeObject.getAnnotation())
console.log(youTubeObject.getNumberOfDisLikes())
console.log(youTubeObject.getVideoQuality())
console.log(youTubeObject.getChannelName())
console.log(youTubeObject.getComments())
console.log(youTubeObject.getNumberOfDisLikes())
console.log(youTubeObject.getNumberOfShares())
console.log(youTubeObject.getNumberOfSubcribes())
console.log(youTubeObject.getNumberOfViews())
console.log(youTubeObject.getSubTitle())
console.log(youTubeObject.getVideoSpeed())
console.log(youTubeObject.getVideoTime())
console.log(youTubeObject.getVideoTitle())

