
// switch-case

// switch(expression){
//     case value1:
//         ///

//         break;
//         case value2:
//         ///

//         break;

//         default:
//             ///
//             break;

// }
///
//

//a
let str="uabced";
let ch=str[0]; //str.charAt(0);

// switch(ch){
//     case "a":
//         console.log("vowel");
//         break;
//         case 'e':
//             console.log("vowel");
//         break;
//         case 'i':
//             console.log("vowel");
//         break;
//         case 'o':
//             console.log("vowel");
//         break;
//         case 'u':
//             console.log("vowel");
//         break;
//         default:
//             console.log("character is not vowel");
//             break;
// }

switch(ch){
    case "a":
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            console.log("vowel");
        break;
        default:
            console.log("character is not vowel");
            break;
}

const browser="chrome";

switch(browser){
        case "chrome":
            console.log("launched chrome browser");
            break;
        case "firefox":
            console.log("launched firefox browser");
            break;
        default:
                console.log("browser not supported...")
            break;
}

let  ex="Sunday11";

switch(ex){
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tue":
        console.log("Today is Tue");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    case "default":
        console.log("None of the above");
        break;

    default:
        console.log("None of the above");
        break;
}