export type StyleRules<
    ClassKey extends string | object = string
    > = ClassKey extends ((...args: any[]) => any)
    ? Record<keyof ReturnType<ClassKey>, object>
    : Record<keyof ClassKey, object>;

export type ClassNameMap<
    ClassKey extends string | object = string
    > = ClassKey extends ((...args: any[]) => any)
    ? Record<keyof ReturnType<ClassKey>, string>
    : Record<keyof ClassKey, string>;

export interface WithStyles<ClassKey extends string | object = string> {
    classes: ClassNameMap<ClassKey>;
}

export type Colors = {
    primary?: string,
    tertiary?: string,
    secondary?: string,
    disabled?: string,
    interactive?: string,
    invertedPrimary?: string,
    invertedSecondary?: string,
    invertedTertiary?: string,
}

export interface Theme {
    colors: {
        accent: Colors;
        text: Colors;
        border: Colors;
        back: Colors;
        overlay: Colors;
    }
}