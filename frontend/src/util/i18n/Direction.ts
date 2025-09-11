export let Direction : string;

export function handleDirection(lang : string) {
    
    Direction = lang === 'ar' ? 'rtl' : 'ltr';
    console.log(Direction);

    return Direction;
}