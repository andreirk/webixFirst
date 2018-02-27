let strip = (text) => {
    return text.replace(/<(?:.|\n)*?>/gm, '');
 }

 export {strip};