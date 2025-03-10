import { Remark } from "./models/Remark";
import TestPart from "./models/TestPart";

export const students = [{
  studentId: 1,
  name: "שולמית",
  familyName: "אייזנשטיין",
  classId: 1
},
{
  studentId: 2,
  name: "הדסה",
  familyName: "לוי",
  classId: 1
},
{
  studentId: 3,
  name: "נחמה",
  familyName: "כהן",
  classId: 1
}
];

export const testParts: TestPart[] = [{
  TestTypeId: 1,
  TestPartId: 1,
  TestPartDsc: ' תוכן ומבנה',
  TestPartPoints: 60,
  LevelsDsc: [
    `50-60 טוב`,
    `40-50 בינוני`,
    `30-40 גבולי`,
    `0-30 חלש`
    
  ],
  Levels: [
    { from: 0, to: 5, description: '' }
  ]
},
{
  TestTypeId: 1,
  TestPartId: 2,
  TestPartDsc: 'לשון',
  TestPartPoints: 40,
  LevelsDsc: [`35-40 טוב`,
    `30-35 בינוני`,
    `25-30 גבולי`,
    `0-25 חלש`]
},


];


export const remarks: Remark[] =[
    { RemarkId:"1",TestPartId: 2,TestTypeId: 1, RemarkPoints:1, RemarkName: "הערת תקינות", 
RemarkDsc: "		🔎חסרה כותרת. כתבי בקצרה את שם הנושא שבחרת. 🖍", }, 
    { RemarkId:"2",TestPartId: 1,TestTypeId: 1, RemarkPoints:2, RemarkName: "הערת תוכן", 
RemarkDsc: "עיקר הפתיחה הוא הצגת הטענה/ התופעה בהכללה , חסרונה עלול לגרום לנימוקים לקויים. העתיקי מהשאלון את הטענה ושלבי בפתיחה/בדגם דיון הציגי את שני צידי הדיון(שתי הטענות הסותרות)/ בתאור תופעה הדגימי בכמה תחומים.", },
 { RemarkId:"3",TestPartId: 1,TestTypeId: 1, RemarkPoints:2, RemarkName: "הערת תוכן", 
RemarkDsc: "	חשוב לדייק בהצגת הנושא/אין להרחיבו/ לשנותו/ לצמצמו/ שלבי גם את המטאפורה/ ניסוח השאלון/ הפתיח .הציגי את כל חלקי הנושא / נסחי את הנושא לפי ההנחיה ולא לפי הפתיח. 📝", },
 { RemarkId:"4",TestPartId: 1,TestTypeId: 1, RemarkPoints:1, RemarkName: "הערת תוכן", 
RemarkDsc: "		הסבירי את הנושא/ יש להבין נכון את הנושא ולדייק בהסברו /הסבירי את המטאפורה / הסבירי את הניסוח של השאלון", },
{ RemarkId:"5",TestPartId: 1,TestTypeId: 1, RemarkPoints:1, RemarkName: "הערת תוכן", 
    RemarkDsc: " הציגי את הפתיחה צריכה לשדר רמה. מחקי תוכן רדוד או ילדותי / הצגי את טענת הנגד באופן הגיוני.", },
 { RemarkId:"6",TestPartId: 1,TestTypeId: 1, RemarkPoints:2, RemarkName: "הערת תוכן", 
RemarkDsc: "		משפט המפתח שכתבת הוא פרט /דוגמא. שלבי אותו בפסקה מתאימה (אם יש)/ כתבי את הנימוק/הגורם בהכללה ובססי אותו.  ", },
 { RemarkId:"7",TestPartId: 1,TestTypeId: 1, RemarkPoints:2, RemarkName: "הערת תוכן", 
RemarkDsc: "	חסר מ' מפתח מוגדר וממוקד/ חזרת על הטענה/ התופעה/ כתבת תחום, סיסמה או מטאפורה מעורפלת, כתבי נימוק ברור.", },
 { RemarkId:"8",TestPartId: 1,TestTypeId: 1, RemarkPoints:2, RemarkName: "הערת תוכן", 
RemarkDsc: "	הקשר של מ' המפתח לנושא אינו ישיר/ מדויק/ ברור/ הגיוני/ מציאותי/ כתבת נימוק לנימוק. כתבי מ' מפתח מתאים לפי הדגם. ", },
 { RemarkId:"9",TestPartId: 1,TestTypeId: 1, RemarkPoints:1, RemarkName: "הערת תוכן", 
RemarkDsc: "	נסחי את הנימוק על דרך החיוב ולא על דרך השלילה. 💬 (בתוך הפיסקה תוכלי לכתוב גם על דרך השלילה.)", },
 { RemarkId:"10",TestPartId: 1,TestTypeId: 1, RemarkPoints:2, RemarkName: "הערת תוכן", 
RemarkDsc: "	הרעיון אינו מובן כל צורכו, הסבירי למה את מתכוונת, מה בדיוק את רוצה לומר, 🧷ואיך זה קשור לטענה /למ' המפתח. ", },
 { RemarkId:"11",TestPartId: 1,TestTypeId: 1, RemarkPoints:2, RemarkName: "הערת תוכן", 
RemarkDsc: "	🍦🍧אל תגזימי / אל תכלילי / אל תקציני. הגזמה פוגמת בשכנוע. 😢 סייגי את דבריך/ כתבי יותר מדויק ומציאותי.", },
 { RemarkId:"42",TestPartId: 1,TestTypeId: 1, RemarkPoints:2, RemarkName: "הערת מבנה ", 
RemarkDsc: "	42.	הביסוס אינו מוכיח את משפט המפתח/ ביססת את הנימוק לנימוק/ ההרחבה אינה קשורה ישירות לתופעה או לטענה הכללית/ השירשור אינו הגיוני/ המשל לא דומה לנמשל . כתבי ביסוס מתאים יותר.  ", },
 { RemarkId:"14",TestPartId: 1,TestTypeId: 1, RemarkPoints:2, RemarkName: "הערת תוכן", 
RemarkDsc: "	כתבי ביסוס / דוגמא יותר מצוי/ה מרכזי/ת ומשמעותי/ת מלמד/ת על הכלל/ מחזק את הרעיון/ בוגר ומכובד (אדם בודד אינו מלמד על הכלל ). ", },
 { RemarkId:"12",TestPartId: 1,TestTypeId: 1, RemarkPoints:2, RemarkName: "הערת תוכן", 
RemarkDsc: "	האמנם? נראה שהדבר אינו מדויק/מציאותי/ נכון / הגיוני, דייקי בהצגתו או מחקי 🍦🍧(במקום מחקרים, המציאות מראה)", },
 { RemarkId:"15",TestPartId: 1,TestTypeId: 1, RemarkPoints:2, RemarkName: "הערת תוכן", 
RemarkDsc: "	📌חסר ביסוס / הפיסקה קצרה מדי/ פרטי או הדגימי מתחומים מגוונים וכו' 🖌 📌חסר הסבר מעמיק /תוכן עיוני בפיסקה. הוסיפי העמקה: הסבר / פירוט/ נימוק / ראיה / השוואה / הקבלה וכד'", },
 { RemarkId:"16",TestPartId: 1,TestTypeId: 1, RemarkPoints:2, RemarkName: "הערת תוכן", 
RemarkDsc: "מה הקשר בין הביסוס למ' המפתח? הסבירי את הקשר, הוסיפי לביסוס פרטים המדגישים את הרעיון/ כתבת משל ללא נמשל, כתבי אותו / ביססת רק על דרך השלילה, יש לבסס גם את הרעיון עצמו.", },
 { RemarkId:"17",TestPartId: 1,TestTypeId: 1, RemarkPoints:2, RemarkName: "הערת תוכן", 
RemarkDsc: "	ביססת רק חלק אחד / כתבת רק על פרט אחד ממשפט המפתח/ הרחבת רק את הדוגמא. בססי חלקים/ פרטים נוספים / בססי את הרעיון הכללי.", },
 { RemarkId:"18",TestPartId: 1,TestTypeId: 1, RemarkPoints:2, RemarkName: "הערת תוכן", 
RemarkDsc: "	אל תכתבי נימוקים הפוכים / מ' מפתח סותרים / תוצאה דומה לגורם. הוסיפי מ' מפתח/ נימוק שונה.", },
 { RemarkId:"19",TestPartId: 1,TestTypeId: 1, RemarkPoints:4, RemarkName: "הערת תוכן", 
RemarkDsc: "	חסרה כתיבה על חלק מרכיבי הנושא וההנחיה/ . הוסיפי פסקה /חלק / הוסיפי דוגמאות לפי דרישות ההנחיה", },
 { RemarkId:"20",TestPartId: 1,TestTypeId: 1, RemarkPoints:2, RemarkName: "הערת תוכן", 
RemarkDsc: "	במאמרך חסרים נימוקים מרכזיים/ משכנעים/ משמעותיים. הוסיפי נימוקים חשובים /הוסיפי נימוקים/ גורמים/ תוצאות חשובים/ות..", },
 { RemarkId:"21",TestPartId: 1,TestTypeId: 1, RemarkPoints:2, RemarkName: "הערת תוכן", 
RemarkDsc: "רוב	משפטי המפתח לקוחים מתחום אחד /רוב הדוג' מאותו תחום. כתבי נימוקים/ דוג' מתחומים נוספים/ מתקופות שונות. ", },
 { RemarkId:"22",TestPartId: 1,TestTypeId: 1, RemarkPoints:1, RemarkName: "הערת תוכן", 
RemarkDsc: "	 הסיום קצר-הוסיפי תוכן מתאים מסקנה/ המלצה וכו/ חסר בסיום של דגם דיון: חוות דעת / נימוק הגיוני לחוות הדעת."},
{ RemarkId:"24",TestPartId: 1,TestTypeId: 1, RemarkPoints:4, RemarkName: "הערת מבנה", 
RemarkDsc: "חסרה פתיחה, הוסיפי!/ פיסקה זו אינה מתאימה לפתיחה. בדקי אם אפשר לשלב אותה במקום אחר במאמר.", },
{ RemarkId:"23",TestPartId: 1,TestTypeId: 1, RemarkPoints:1, RemarkName: "הערת מבנה", 
    RemarkDsc: "כתבת בסיום משפט שאינו הגיוני/ הסיום אינו תואם את הנכתב במאמר, כתבי בהתאמה ובהגיון .", },
 { RemarkId:"25",TestPartId: 1,TestTypeId: 1, RemarkPoints:1, RemarkName: "הערת מבנה", 
RemarkDsc: "הציגי את הטענה בנפרד, לא בתוך דוגמא או נימוק/ לאחר טענת נגד כתבי את הטענה במשפט נפרד. (ניסוח בלתי תלוי)/", },
 { RemarkId:"26",TestPartId: 1,TestTypeId: 1, RemarkPoints:2, RemarkName: "הערת מבנה", 
RemarkDsc: "🔎 📝/ כתבי פתיחה המתאימה לדגם המובן מן ההנחיהציגי ברור את הדגם  בדגם דיון כתבי משפט המודיע שיערך דיון במאמר.", },
 { RemarkId:"27",TestPartId: 1,TestTypeId: 1, RemarkPoints:1, RemarkName: "הערת מבנה", 
RemarkDsc: "אין לרמוז על נימוקים בפתיחה (ולא על גורמים / תוצאות). 🗑העבירי לגוף מאמר / מחקי / הוסיפי תוכן אחר במקום.", },
 { RemarkId:"28",TestPartId: 1,TestTypeId: 1, RemarkPoints:1, RemarkName: "הערת מבנה", 
RemarkDsc: "המבע מדי נחרץ/ מביע מסקנה /המלצה, העבירי אותו לסיום💭. בפתיחה הציגי את הנושא כטעון שכנוע/ בדגם דיון כתבי פתיחה ניטרלית, חוות דעת העבירי לסיום.", },
 { RemarkId:"29",TestPartId: 1,TestTypeId: 1, RemarkPoints:1, RemarkName: "הערת מבנה", 
RemarkDsc: "הפתיחה ארוכה מדי, קצרי. האם עיקר התוכן בפתיחה עיוני? קצרי סיפור או תיאור/ בדקי אם התוכן רדוד או חוזר על עצמו.", },
 { RemarkId:"30",TestPartId: 1,TestTypeId: 1, RemarkPoints:1, RemarkName: "הערת מבנה", 
RemarkDsc: "הפתיחה אינה זורמת, היא קטועה/ חזרת על דברייך. ✂ שני את ניסוח המשפטים / את מיקומם או קשרי אותם/ מקמי את הטענה לאחר טענת הנגד.", },
 { RemarkId:"31",TestPartId: 1,TestTypeId: 1, RemarkPoints:1, RemarkName: "הערת מבנה", 
RemarkDsc: "   הקשר של המשפט/ים לפתיחה אינו ברור. 🧷 קשרי אותו היטב / מחקי/העבירי למקום מתאים במאמר הודיעי ברור על טענת נגד ועל דחיתה ", },
 { RemarkId:"32",TestPartId: 1,TestTypeId: 1, RemarkPoints:1, RemarkName: "הערת מבנה", 
RemarkDsc: "	 כתבי תיאור/ דוגמא/פרטים המבטאים את התופעה/ הטענה באופן מדויק בהתאם לנושא/ לדרישות ההנחיה. 📝", },
{ RemarkId:"33",TestPartId: 1,TestTypeId: 1, RemarkPoints:1, RemarkName: "הערת מבנה", 
    RemarkDsc: "	דייקי בניסוח שאלות קישור: מדוע? כיצד? מה? ולא האם? (האם ? האומנם? -ניתן לשאול רק לפני הצגת הטענה לאחר טענת הנגד) כתבי רק שאלות קישור שמשפטי המפתח של החלק הבא עונים עליהם ", },
 { RemarkId:"45",TestPartId: 1,TestTypeId: 1, RemarkPoints:4, RemarkName: "הערת מבנה", 
RemarkDsc: "לא ניכר מבנה ברור של פסקות /של חלקים בגוף המאמר/ בני את הפסקות על בסיס משפטי מפתח/סדרי את הפסקות בחלקים לפי הדגם הרטורי המתאים להנחיה . ", },
 { RemarkId:"34",TestPartId: 1,TestTypeId: 1, RemarkPoints:2, RemarkName: "הערת מבנה", 
RemarkDsc: "🔎😢הנושא הוא... וכאן כתבת על ... סטית מהנושא/ מדרישות ההנחיה. 🧷המשפט / המבע המסומן אינו קשור ישירות לנושא.", },
 { RemarkId:"36",TestPartId: 1,TestTypeId: 1, RemarkPoints:2, RemarkName: "הערת מבנה", 
RemarkDsc: "מה הקשר בין מ' המפתח לטענה/ לתופעה? איך זה קורה? הסבירי כיצד מ' המפתח מנמק את הטענה/ התופעה הכללית.", },
 { RemarkId:"38",TestPartId: 1,TestTypeId: 1, RemarkPoints:2, RemarkName: "הערת מבנה", 
RemarkDsc: "התיאור/ הדוגמא/ המשל – ארוך מדי /לא כל הפרטים נחוצים וקשורים. קצרי, כתבי תמציתי, בחרי רק פרטים המחזקים את הנימוק. מחקי פרטים שאינם כאלה. 🗑במקומם תוכלי להדגים מתחומים נוספים או להוסיף ביסוס אחר.", },
 { RemarkId:"37",TestPartId: 1,TestTypeId: 1, RemarkPoints:2, RemarkName: "הערת מבנה", 
RemarkDsc: "   קישרת את הביסוס לרעיון אחר שאינו קשור ישירות לפיסקה, קשרי את הביסוס לנושא המדויק/ במקום הוראה או מסקנה נסחי ביסוס והוכחה/ ניסחת את הביסוס כתוצאה במקום גורם או להיפך, נסחי בהתאם לחלק במאמר.  ", },
 { RemarkId:"13",TestPartId: 1,TestTypeId: 1, RemarkPoints:2, RemarkName: "הערת תוכן", 
RemarkDsc: "הביסוס (הדוגמא) חוזר על הנאמר/ אינו מוסיפה הרבה. הוסיפי פרטים משכנעים/ החליפי דוג'/ הדגימי במס' תחומים.", },
 { RemarkId:"41",TestPartId: 1,TestTypeId: 1, RemarkPoints:2, RemarkName: "הערת מבנה", 
RemarkDsc: "קראי את הפיסקה ובדקי היכן חזרת על דברייך 🗑מחקי, והוסיפי תוכן אחר/ אין צורך לסכם את הפיסקה בסופה.", },
 { RemarkId:"43",TestPartId: 1,TestTypeId: 1, RemarkPoints:1, RemarkName: "הערת מבנה", 
RemarkDsc: "הפיסקה מבולבלת, סדרי את הפרטים/ המשפטים ברצף הגיוני/ .", },
 { RemarkId:"35",TestPartId: 1,TestTypeId: 1, RemarkPoints:1, RemarkName: "הערת מבנה", 
RemarkDsc: " הביסוס חשוב וקשור לטענה/ לתופעה, אבל אינו קשור במדויק למשפט המפתח. שני את מ' המפתח או כתבי פיסקה נוספת.", },
 { RemarkId:"39",TestPartId: 1,TestTypeId: 1, RemarkPoints:2, RemarkName: "הערת מבנה", 
RemarkDsc: " כתבת על כך במקום אחר במאמר / המשפט/ים קשור לפיסקה אחרת. 📜סדרי, בכל פיסקה הרחיבי רק את הנימוק שלה/ הביסוס כללי, מתאים לפתיחה או לסיום ולא לגוף המאמר/ מסקנה והמלצה העבירי לסיום.", },
 { RemarkId:"46",TestPartId: 1,TestTypeId: 1, RemarkPoints:1, RemarkName: "הערת מבנה", 
RemarkDsc: "למען הלכידות כתבי משפט שלם, ולא כותרת מִשנֶה (במקום מספור פסקאות או סימון כוכביות). חסר משפט קישור בשורה נפרדת לפני כל חלק/ הוסיפי ביטוי קישור למען הרצף והזרימה .", },
 { RemarkId:"44",TestPartId: 1,TestTypeId: 1, RemarkPoints:1, RemarkName: "הערת מבנה", 
RemarkDsc: "מילת הקישור אינה מתאימה במדויק לקשר ההגיוני בין המשפטים/ הפסקות. מחקי /שני אותה. 🧷( עם זאת - משמעותו ויתור ולא הוספה / - מה גם - משמעותו קל וחומר, ולא הוספה/למשל משמעותו -דוגמא ולא משל ).", },
 { RemarkId:"47",TestPartId: 1,TestTypeId: 1, RemarkPoints:2, RemarkName: "הערת מבנה", 
RemarkDsc: "ניסוח משפט מפתח לפי תקופה/ תחום אינו מוצלח וגורר כפילויות וחוסר דיוק.  נסחי נימוק שונה לכל פיסקה, ורק את הדוגמאות הביאי מתחומים/ מתקופות שונות. ", },
 { RemarkId:"40",TestPartId: 1,TestTypeId: 1, RemarkPoints:2, RemarkName: "הערת מבנה", 
RemarkDsc: "🧷אל תחברי בפיסקה שני נימוקים / רמזת על נימוק נוסף, הקדישי לכל נימוק פיסקה נפרדת. (או כתבי נימוק מכליל)", },
 { RemarkId:"48",TestPartId: 1,TestTypeId: 1, RemarkPoints:2, RemarkName: "הערת מבנה", 
RemarkDsc: "הנימוקים (מ. מפתח) המסומנים דומים מדי/ קרובים מדי זה לזה. חברי אותם לפיסקה אחת, או הדגישי את ההבדל בין הנימוקים.", },
 { RemarkId:"49",TestPartId: 1,TestTypeId: 1, RemarkPoints:1, RemarkName: "הערת מבנה", 
RemarkDsc: "מיקום הפיסקה במאמר אינו מתאים/ מתאים לחלק אחר/ 📏סדרי את הפסקות בסדר הגיוני /בהתאם להנחיה.", },
 { RemarkId:"50",TestPartId: 1,TestTypeId: 1, RemarkPoints:1, RemarkName: "הערת מבנה", 
RemarkDsc: "כתבת/ רמזת על  נימוק/ גורם/ תוצאה  שאינם מופיעים בגוף המאמר. 🍨מחקי / בדקי אם אפשר לשלב בפסקות.", },
 { RemarkId:"51",TestPartId: 1,TestTypeId: 1, RemarkPoints:1, RemarkName: "הערת מבנה", 
RemarkDsc: "אין לחזור בסיום על הנימוקים/ הגורמים / התוצאות . 🗑מחקי אותם. הוסיפי תוכן מתאים לסיום. 🍨(מסקנה, המלצה, משאלה, איחול וכד')", },
 { RemarkId:"52",TestPartId: 1,TestTypeId: 1, RemarkPoints:1, RemarkName: "הערת מבנה", 
RemarkDsc: "משפט שאינו כללי אינו מתאים לסיום, שלבי אותו בפיסקה המתאימה/ הסיום צריך לנבוע מכל המאמר ולא רק מחלקו 🧷", },
 { RemarkId:"53",TestPartId: 1,TestTypeId: 1, RemarkPoints:2, RemarkName: "הערת מבנה", 
RemarkDsc: "סיום אינו הולם את הדגם- דייקי בהתאמת הסיום לדגם המובן מן ההנחיה '.", },
 { RemarkId:"54",TestPartId: 1,TestTypeId: 1, RemarkPoints:2, RemarkName: "הערת מבנה", 
RemarkDsc: "  חסר רכיב לפי הדגם: סיכום הטענה/ התופעה וכו' /חסר סיום"},
{ RemarkId:"א",TestPartId: 2,TestTypeId: 1, RemarkPoints:0.5, RemarkName: "הערת לשון", 
RemarkDsc: "א) במאמר (כתיבת עיון) לא כותבים שמות חסרי משמעות. 🗑מחקי את השמות.", },
 { RemarkId:"ב",TestPartId: 2,TestTypeId: 1, RemarkPoints:0.5, RemarkName: "הערת לשון", 
RemarkDsc: "ב) 💭במאמר לא מצטטים דיבור ישיר. 💬שכתבי לדיבור עקיף.", },
 { RemarkId:"ג",TestPartId: 2,TestTypeId: 1, RemarkPoints:0.5, RemarkName: "הערת לשון", 
RemarkDsc: "ג) בגוף המאמר כותבים בגוף שלישי, לא כותבים בלשון מדבר או נוכח. 💭ולא פונים אל הקורא.", },
 { RemarkId:"ד",TestPartId: 2,TestTypeId: 1, RemarkPoints:0.5, RemarkName: "הערת לשון", 
RemarkDsc: "ד) משלב נמוך/ סלנג / שפת דיבור/ לש' ילדותית משדרים רדידות וחוסר רמה. במקרה הצורך סמני מירכאות (אז - ביטוי זמן בלבד).", },
 { RemarkId:"ה",TestPartId: 2,TestTypeId: 1, RemarkPoints:0.5, RemarkName: "הערת לשון", 
RemarkDsc: "ה) הלשון סיפורית תיאורית / ארוכה/ מליצית. 📝כתבי בלשון עיונית / קצרה.", },
 {  RemarkId:"ו",TestPartId: 2,TestTypeId: 1, RemarkPoints:0.5, RemarkName: "הערת לשון", 
RemarkDsc:"ו)   מחקי מילים כלליות וסתמיות שמשמעותן רחבה ושטחית / 📝כתבי במקומן מילים יותר מדויקות ומוגדרות.", },
 { RemarkId:"ז",TestPartId: 2,TestTypeId: 1, RemarkPoints:0.5, RemarkName: "הערת לשון", 
RemarkDsc: " ז)     המילה המסומנת מופיעה מס' פעמים במאמר. 🖌גווני את אוצר המילים/ גווני את מבנה המשפטים.🍦", },
 { RemarkId:"ח",TestPartId: 2,TestTypeId: 1, RemarkPoints:0.5, RemarkName: "הערת לשון", 
RemarkDsc: " ח) הימנעי מביטויים שבלוניים חסרי תוכן ומשמעות/ מחקי ביטויים כפולים/ מילים מיותרות, כל המוסיף גורע." },
 { RemarkId:"ט",TestPartId: 2,TestTypeId: 1, RemarkPoints:0.5, RemarkName: "הערת לשון", 
RemarkDsc: "ט)  לא התכוונת לזה... המבע המסומן אינו מבטא נכון / מדויק את מה שאת רוצה להביע ופוגם בנכונות הרעיון. מחקי / בחרי מבע מתאים יורר (אל תכתבי ראשית בתחילת פסקה).	", },
 { RemarkId:"י",TestPartId: 2,TestTypeId: 1, RemarkPoints:0.5, RemarkName: "הערת לשון", 
RemarkDsc: "י) המשפט מסורבל / קטוע. 📝כתבי משפט במבנה ברור וזורם. 🎈(דבר , זה, כאשר, כש... בכך – עלולים לסרבל את המשפט)"},
{ RemarkId:"יא",TestPartId: 2,TestTypeId: 1, RemarkPoints:0.5, RemarkName: 'הערת תקינות', 
RemarkDsc: ' יא) השימוש בביטוי המסומן אינו תקין /מתאים / מדויק/ אין מילה כזו. 🎈 בחרי ביטוי מתאים יותר / מחקי אותו (זה עם זה ולא אחד עם השני וכדו ). 🗑', },
 { RemarkId:"יב",TestPartId: 2,TestTypeId: 1, RemarkPoints:0.5, RemarkName: 'הערת תקינות', 
RemarkDsc: 'יב) המילה אינה מתאימה לנושא המשפט (דקדוקית). הפכי אותה לזכר/ לנקבה/ ליחיד/לרבים בהתאם לנושא המשפט. ', },
 { RemarkId:"יג",TestPartId: 2,TestTypeId: 1, RemarkPoints:0.5, RemarkName: 'הערת תקינות', 
RemarkDsc: 'יג) המילים: "זה" / "זאת" / "זו" אינן  "אוגד", נסי מילה אחרת במקומן. 🖌למשל -  "הוא" / "אינו".', },
 { RemarkId:"יד",TestPartId: 2,TestTypeId: 1, RemarkPoints:0.5, RemarkName: 'הערת תקינות', 
RemarkDsc: 'יד) לא כותבים אוגד (הוא, היא, הם, הן), לפני פועל.', },
 { RemarkId:"טו",TestPartId: 2,TestTypeId: 1, RemarkPoints:0.5, RemarkName: 'הערת תקינות', 
RemarkDsc: 'טו) לא כותבים "את" לאחר המילים: "יש" או "אין". 🗑מחקי אותה וסדרי את המשפט.', },
 { RemarkId:"טז",TestPartId: 2,TestTypeId: 1, RemarkPoints:0.5, RemarkName: 'הערת תקינות', 
RemarkDsc: 'טז) רק בהווה אפשר לכתוב "אין" או "יש" (אינו, ישנו). ⌚בעבר או בעתיד השתמשי במילה "לא" / גם "ה" לפני פועל אפשר רק בהווה בעבר ובעתיד כתבי "ש".', },
 { RemarkId:"יז",TestPartId: 2,TestTypeId: 1, RemarkPoints:0.5, RemarkName: 'הערת תקינות', 
RemarkDsc: 'יז) בהווה: ⌚ במקום "לא" מתאים יותר לכתוב "אין" / "אינם" וכדו. .', },
 { RemarkId:"יח",TestPartId: 2,TestTypeId: 1, RemarkPoints:0.5, RemarkName: 'הערת תקינות', 
RemarkDsc: 'יח) במילה המסומנת יש שגיאת כתיב. 🖌תקני אותה.', },
 { RemarkId:"יט",TestPartId: 2,TestTypeId: 1, RemarkPoints:0.5, RemarkName: 'הערת תקינות', 
RemarkDsc: 'יט) כדי לנסח משפט תקין/ כדי לדייק / שני את מיקום המילים המסומנות ("מאד" כתבי אחרי התואר, בהווה הנושא קודם לנשוא). 📌', },
 { RemarkId:"כ",TestPartId: 2,TestTypeId: 1, RemarkPoints:0.5, RemarkName: 'הערת תקינות', 
RemarkDsc: 'כ) המשפט קטוע, לא סיימת אותו, 🖌 חסרה מילה/ חסר נושא/ הוסיפי נשוא לנושא המסומן.', },
 { RemarkId:"כא",TestPartId: 2,TestTypeId: 1, RemarkPoints:0.5, RemarkName: 'הערת תקינות', 
RemarkDsc: 'כא) אין לפתוח פיסקה ב"ו" החיבור.🗑מחקי / כתבי מילת קישור מתאימה (כמו כן, זאת ועוד) 🧷מחקי ביטוי קישור כפול ומיותר.', },
 { RemarkId:"כב",TestPartId: 2,TestTypeId: 1, RemarkPoints:0.5, RemarkName: 'הערת תקינות', 
RemarkDsc: 'כב) שימוש שגוי/ חסר במילות יחס/ באותיות מש"ה וכל"ב (ה הידיעה לפני פועל בעבר/ כש ולא ש/ ש מיותר/ כדי ולא בכדי/כיון ש... או בגלל ה... ולא בגלל ש...)', },
 { RemarkId:"כג",TestPartId: 2,TestTypeId: 1, RemarkPoints:0.5, RemarkName: 'הערת תקינות', 
RemarkDsc: 'כג) כתבי בהווה. : ⌚ אין לקפוץ מזמן לזמן ללא סיבה.', },
 { RemarkId:"כד",TestPartId: 2,TestTypeId: 1, RemarkPoints:0.5, RemarkName: 'הערת תקינות', 
RemarkDsc: 'כד) המשיכי בזמן: ⌚ שהתחלת בו. שני לעבר / עתיד', },
 { RemarkId:"כה",TestPartId: 2,TestTypeId: 1, RemarkPoints:0.5, RemarkName: 'הערת תקינות', 
RemarkDsc: 'כה) סמני נקודה בסוף משפט / סימן שאלה, פסיק, או כל פיסוק הדרוש להבנה.', },
 { RemarkId:"כו",TestPartId: 2,TestTypeId: 1, RemarkPoints:0.5, RemarkName: 'הערת תקינות', 
RemarkDsc: 'כו) נקודה מסמנים רק בסוף משפט. 🗑🗑מחקי נקודות מיותרות באמצע משפט / מחקי פסיקים מיותרים / מירכאות מיותרות.', },
 { RemarkId:"כז",TestPartId: 2,TestTypeId: 1, RemarkPoints:0.5, RemarkName: 'הערת תקינות', 
RemarkDsc: 'כז)  📌הוסיפי נקודתיים או/ומירכאות לסימון: ציטוט / אמירה / משלב דיבור / מושג.', },
 { RemarkId:"כט",TestPartId: 2,TestTypeId: 1, RemarkPoints:1, RemarkName: 'הערת תקינות', 
RemarkDsc: 'כט) השאירי 📐📏שוליים בשני הצדדים / רוחב השוליים מוגזם, צמצמי אותו. 🍦', },
 { RemarkId:"ל",TestPartId: 2,TestTypeId: 1, RemarkPoints:2, RemarkName: 'הערת תקינות', 
RemarkDsc: 'ל) השאירי רווח בין הפסקות, הקפידי על חלוקה נכונה לפסקות . 🍦', },
 { RemarkId:"לא",TestPartId: 2,TestTypeId: 1, RemarkPoints:0.5, RemarkName: 'הערת תקינות', 
RemarkDsc: 'לא) כתבי עד השוליים. אל תעברי שורה בתוך פיסקה, אם לא הגעת לשוליים, גם לא לאחר משפט המפתח/ אל תמספרי פסקות.', },
 { RemarkId:"לב",TestPartId: 2,TestTypeId: 1, RemarkPoints:0.5, RemarkName: 'הערת תקינות', 
RemarkDsc: 'לב)  הכתב אינו ברור קשה להבין את המילים. 🖌כתבי בכתב ברור ומסודר/ בגודל נוח לקריאה.    📐', },
 { RemarkId:"לג",TestPartId: 2,TestTypeId: 1, RemarkPoints:0.5, RemarkName: 'הערת תקינות', 
RemarkDsc: 'לג) אין לכתוב בעיפרון או למחוק בטיפקס / כתיבה בעט מחיק אינה חוקית. 🗑התוצאה על אחריותך/ אין לגזור דף ולהדביקו.. ', },
 {  RemarkId:"לד",TestPartId: 2,TestTypeId: 1, RemarkPoints:0.5, RemarkName: 'הערת תקינות', 
RemarkDsc: 'לד) 🖌📑סמני את דפי הטיוטה ברור גדול וצבעוני🖍 / סמני ברור ומודגש קטעים בטיוטה שנועדו לבדיקה. 🔎'}];
