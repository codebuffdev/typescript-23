let userName: string | null;
//enter a value
userName = null;
if (userName == null) {
    console.log(`You Canceled..`);
} else if (userName == '') {
    console.log(`Name can't be Empty`);
} else {
    console.log(`Hello ! ${userName}`);
}
