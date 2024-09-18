
export enum TranslationLanguage {
    Français = "fr-FR",
    English = "en-GB",
    //日本語 = "ja-JP",
    //ไทย = "th-TH"
}

export enum LanguageLevel {
    Native = 100,
    Fluent = 75,
    Intermediate = 50,
    Beginner = 25
}

export class Language {
    public name!: string;
    public writing_level!: LanguageLevel;
    public reading_level!: LanguageLevel;
    public speaking_level!: LanguageLevel;
    public listening_level!: LanguageLevel;
    public estimated_level!: string;
    public trend!: string;
    public reading_trend!: string;
    public writing_trend!: string;
    public speaking_trend!: string;
    public listening_trend!: string;
    
}    