import { borders, colors } from "./consts";

export type Colors = keyof typeof colors;
export type BorderStyle = keyof typeof borders;

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
	border?: BorderStyle;
}

interface Button {
	text: string;
	icon?: string;
	icon_border?: BorderStyle;
	href?: string;
	alt?: string;
}

type Tag = {
	text: string;
	style?: Colors;
};
