import { ChangeEvent, RefObject } from "react";

export interface ITitle {
    text: string;
    size?: string;
    color?: string;
    margin?: {
      top?: string;
      bottom?: string;
    };
  }
  
  export interface ITextInput {
    type: "email" | "text" | "textarea";
    ref?: RefObject<HTMLInputElement>;
    showFocus?: boolean;
    className?: string;
    defaultValue?: string;
    readonly?: boolean;
    id?: string;
    hasIcon?: boolean;
    icon?: string;
    name?: string;
    placeholder?: string;
    value?: string
    autoComplete?: boolean;
    onChange(e: ChangeEvent<HTMLInputElement>): void;
  }

  