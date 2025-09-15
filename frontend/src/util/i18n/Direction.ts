export let Direction : string = 'ltr';

export function handleDirection(lang : string) {
    
    Direction = lang === 'ar' ? 'rtl' : 'ltr';

    return Direction;
}