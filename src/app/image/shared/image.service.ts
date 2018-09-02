import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
	visibleImages = [];

	getImages(){
		return this.visibleImages = IMAGES.slice(0);
	}

	getImage(id : number){
		return IMAGES.slice(0).find(image => image.id == id)
	}

}

const IMAGES = [
	{"id" : 1, "category" : "boats", "caption" : "View fom a boat", "url" : "assets/img/boat_01.jpeg"},
	{"id" : 2, "category" : "boats", "caption" : "View fom a boat", "url" : "assets/img/boat_02.jpeg"},
	{"id" : 3, "category" : "boats", "caption" : "View fom a boat", "url" : "assets/img/boat_03.jpeg"},
	{"id" : 4, "category" : "boats", "caption" : "View fom a boat", "url" : "assets/img/boat_04.jpeg"},
	{"id" : 5, "category" : "boats", "caption" : "View fom a boat", "url" : "assets/img/boat_05.jpeg"},
	{"id" : 6, "category" : "cars", "caption" : "View fom a boat", "url" : "assets/img/cars_01.jpeg"},
	{"id" : 7, "category" : "cars", "caption" : "View fom a boat", "url" : "assets/img/cars_02.jpeg"},
	{"id" : 8, "category" : "cars", "caption" : "View fom a boat", "url" : "assets/img/cars_03.jpeg"},
	{"id" : 9, "category" : "cars", "caption" : "View fom a boat", "url" : "assets/img/cars_04.jpeg"},
	{"id" : 10, "category" : "cars", "caption" : "View fom a boat", "url" : "assets/img/cars_05.jpeg"},
	{"id" : 11, "category" : "plans", "caption" : "View fom a boat", "url" : "assets/img/plans_01.jpeg"},
	{"id" : 12, "category" : "plans", "caption" : "View fom a boat", "url" : "assets/img/plans_02.jpeg"},
	{"id" : 13, "category" : "plans", "caption" : "View fom a boat", "url" : "assets/img/plans_03.jpeg"},
	{"id" : 14, "category" : "plans", "caption" : "View fom a boat", "url" : "assets/img/plans_04.jpeg"},
	{"id" : 15, "category" : "plans", "caption" : "View fom a boat", "url" : "assets/img/plans_05.jpeg"}
]
