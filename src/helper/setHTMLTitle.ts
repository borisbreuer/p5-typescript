export const setHTMLTitle = (title: string) =>{
    document.getElementsByTagName('title')[0]!.textContent = title;
}