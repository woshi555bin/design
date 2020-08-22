import { ReactNode, AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";

export type AppearancesTypes = keyof typeof APPEARANCES;

type btnType =
	| "primary"
	| "primaryOutline"
	| "secondary"
	| "secondaryOutline"
	| "tertiary"
	| "outline"
	| "inversePrimary"
	| "inverseSecondary"
	| "inverseOutline";

type AppearancesObj = {
	[key in btnType]: btnType;
};

export const APPEARANCES: AppearancesObj = {
	primary: "primary",
	primaryOutline: "primaryOutline",
	secondary: "secondary",
	secondaryOutline: "secondaryOutline",
	tertiary: "tertiary",
	outline: "outline",
	inversePrimary: "inversePrimary",
	inverseSecondary: "inverseSecondary",
	inverseOutline: "inverseOutline",
};

 // sezi
export type SizesTypes = keyof typeof SIZES;
type sizeType = "small" | "medium";
type sizeObj = {
	[key in sizeType]: sizeType;
};
export const SIZES: sizeObj = {
	small: "small",
	medium: "medium",
};




export interface CustormButtonProps {
	/** 是否禁用 */
	disabled?: boolean;
	/** 是否加载中 */
	isLoading?: boolean;
	/** 是否是a标签 */
	isLink?: boolean;
	/** 是否替换加载中文本 */
	loadingText?: ReactNode;
	/** 按钮大小 */
	size?: SizesTypes;
	/** 按钮类型 */
	appearance?: AppearancesTypes;
	/** 无效点击 */
	isUnclickable?: boolean;
}

export type ButtonProps = CustormButtonProps &
	AnchorHTMLAttributes<HTMLAnchorElement> &
	ButtonHTMLAttributes<HTMLButtonElement>;