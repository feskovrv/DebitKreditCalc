export const clearSymbol = (str) => {
    return str.replace(/[a-zа-я!@#$%^&*(),.?":{}|<>-]/, '')
  }

export const MONTH_RU = ["ЯНВ", "ФЕВ", "МАР", "АПР", "МАЙ", "ИЮН", "ИЮЛ", "АВГ", "СЕН", "ОКТ", "НОЯ", "ДЕК"];

export const initialDate = () => {
    const dateNow = new Date();
    const getYear = () => {return dateNow.getFullYear()};
    const getMonth = () => {
        const month = dateNow.getMonth()+1;
        return month < 10 ? '0' + month : month;
    }
    const getDay = () => {
        const day = dateNow.getDate();
        return day < 10 ? '0' + day : day;
    }
return `${getYear()}-${getMonth()}-${getDay()}`;
};

export const saveToLocalStorage = (result) => {localStorage.setItem('data', JSON.stringify(result));}