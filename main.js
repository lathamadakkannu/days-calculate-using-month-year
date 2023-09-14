var a=prompt("enter the month");
var b=prompt("enter the year");

switch(true){
    case a==1||a==3||a==5||a==7||a==8||a==10:
        document.write("The number of days in a month is 31");
        break;

    case a==4||a==6||a==9||a==11:
        document.write("The number of days in a month is 30");
        break;

    case a==2&&b%4==0:
        document.write("The number of days in a month is 29");
        break;

    case a==2&&b%4!=0:
        document.write("The number of days in a month is 28");
        break;
    
    default:
        document.write("-1")
}