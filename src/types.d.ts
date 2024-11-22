import { borders } from "./consts";

export interface Profile {
	icon: string;
	name: string;
	description: string;
}

export interface Section {
	id: string;
	title: string;
}

export interface IconType {
	icon: string;
	alt?: string;
	border?: keyof typeof borders;
}
