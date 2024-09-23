const v1 = 'TypeScript';
const v2 = `hello ${v1}`;


type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
type Lang = "en" | "ja" | "pt";

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;