// Text.
// Open;
var subject_0_headlines = ['מטרת הלומדה:',
    'איך זה עובד:', 'איך זה עובד:'
];

var subject_0_text = [
    `שימור הידע בגדוד הפיקוד לכלל בעלי התפקידים - מג”ד, מ”פים, קציני מטה.

כלל הפורמטים, המצגות הרלוונטיות, מצעים לדיון נמצאים באותו המקום וביישור קו לכל הגדוד, כך שאין שוני וקיימת ודאות מתמדת מהם הדברים על פיהם ואיתם עובדים.`,
`נוהל ש״י (שימור הידע) נמצא סה״כ ב-3 מקומות. 
1. תיקיית המקור הנמצאת אצל קצינת הצפה.
2. תיקיית העתק הנמצאת בשיתוף גדוד, משם לוקחים את כל החומרים.
3. אתר חטיבה, למען שימור הידע הנוסף ושימוש בחומרים למי שאין גישה לתיקיות בהכרח.`,
`במהלך המחזור, הקציני מטה מעדכנים את הקבצים שלהם (כל אחד בציר שלו) על תיקיית המקור אשר נמצאת אצל הקצינת צפ”ה. בסוף כל מחזור (תקופת ההכנם) קצינת הצפה מוחקת את תיקיית העתק אשר נמצאת בשיתוף גדוד ושמה שם  מחדש את כל הקבצים שנמצאים בתיקיית המקור - כי הם המעודכנים ביותר! 
וכך המנגנון נשמר כל מחזור מחדש, עם הקבצים הכי מעודכנים.
(כנ״ל על אתר החטיבה בסוף המחזור).`
];

var subject_1_headlines = ['הסבר כללי:'];
var subject_1_text = [`האזור בו נמצאים דברים הקשורים להכשרה עצמה ודברים נוספים. 

דוגמאות: סק"ם חי"ג, תיקי יסוד, תיקי חניך, מצעים לדיונים כאלה ואחרים, פורמטים לישיבות וכו'.`];

var subject_2_headlines = ['הסבר כללי:'];
var subject_2_text = [`כל הדברים הקשורים לעולם המבצעי.

דוגמאות: סד"פ תפיסת כוננות, הופ"א וכו'.`];

var subject_3_headlines = ['הסבר כללי:'];
var subject_3_text = [`כל הדברים הקשורים לעולמות הכוח אדם.

דוגמאות: ועדות הערכה, דוחות סיכום הכשרה, כנס קקצ וכו'.`];

var subject_4_headlines = ['הסבר כללי:'];
var subject_4_text = [`כל הדברים הקשורים בשגרה ושוטף.

דוגמאות: מסמך מופעים, מצע למסדרי שגרה וכו'.`];

var subject_5_headlines = ['הסבר כללי:'];
var subject_5_text = [`המקום שבו נמצאים הקישורים לכל הקבצים הקיימים בנוהל ש"י ע"פ תחומים.
    
סוג, הפלטפורמה בה הם נגישים, מי הקצין מטה האחראי על העלאת ועדכון הקובץ והכי חשוב - קישור מעודכן לקובץ.`];

NUMBER_OF_SUBJECTS = 6;

let subjectText = '';
let subjectHeadline = '';
let progressBar;
let forwardArrow;
let backwardArrow;


// Start the coding.
window.addEventListener("load", () => {
    let path = window.location.pathname;

    if (path.includes('start')) {
        initializeStart();
    } else if (path.includes('main')) {
        initializeMain();
    } else {
        console.log('error');
    }
});

const initializeStart = () => {
    document.getElementById('start-button').addEventListener('click', () => {
        window.location.href = "main.html";
    });
}

const initializeMain = () => {
    subjectText = document.getElementById('subject-text');
    subjectHeadline = document.getElementById('subject-headline');
    progressBar = document.getElementById('progress-bar');
    forwardArrow = document.getElementById('forward-arrow');
    backwardArrow = document.getElementById('backward-arrow');

    for (let i = 0; i < NUMBER_OF_SUBJECTS; i++) {
        document.getElementById(`subject_${i}`).addEventListener('click', changingText);
    }
}

const changingText = (event) => {
    progressBar.src = 'sources/images/progress bar 0.svg';
    progressBar.style.opacity = '1';
    forwardArrow.style.opacity = '1';
    backwardArrow.style.opacity = '0';

    let value = event.target.textContent;
    let id = event.target.id;
    let number = id.slice(8,9);

    // console.log(value);
    // console.log(id);
    // console.log(number);

    // document.querySelectorAll('.cerrent-subject').forEach(element => {
    //     if (element.classList.contains)
    // })
    // forEach(element => {
        
    // })
    event.target.style.textDecoration = 'underline';
    document.getElementById('sub-headline').innerText = `${value}:`;

    const curHeadline = window[`subject_${number}_headlines`];
    const curText = window[`subject_${number}_text`];
    const curNext = window[`subject${number}`];

    console.log(curNext);

    subjectHeadline.innerText = curHeadline[0];
    subjectText.innerText = curText[0];

    document.getElementById('forward-arrow').addEventListener('click', curNext);
}

var subject0 = () => {
    document.removeEventListener('click', subject0);
    progressBar.src = 'sources/images/progress bar 1.svg';
    backwardArrow.style.opacity = '1';
    console.log('sub0');
}

var subject1 = () => {
    document.removeEventListener('click', subject1);
    progressBar.src = 'sources/images/progress bar 1.svg';
    backwardArrow.style.opacity = '1';
    console.log('sub1');
}

var subject2 = () => {
    document.removeEventListener('click', subject2);
    progressBar.src = 'sources/images/progress bar 1.svg';
    backwardArrow.style.opacity = '1';
    console.log('sub2');
}

var subject3 = () => {
    document.removeEventListener('click', subject3);
    progressBar.src = 'sources/images/progress bar 1.svg';
    backwardArrow.style.opacity = '1';
    console.log('sub3');
}

var subject4 = () => {
    document.removeEventListener('click', subject4);
    progressBar.src = 'sources/images/progress bar 1.svg';
    backwardArrow.style.opacity = '1';
    console.log('sub4');
}

var subject5 = () => {
    document.removeEventListener('click', subject5);
    progressBar.style.opacity = '0';
    forwardArrow.style.opacity = '0';
    console.log('sub5');
}