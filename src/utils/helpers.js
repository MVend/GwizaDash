/* eslint-disable no-nested-ternary */
import JwtDecode from 'jwt-decode';
import { AiFillCalendar } from 'react-icons/ai';
import AuthToken from './authToken';

export const getLoggedUserInfo = () => {
  const token = AuthToken.getToken();
  if (!token) {
    return window.location.assign('/login');
  }
  const user = JwtDecode(token);
  return user;
};
export const doubleDigit = (number) => number > 9 ? `0${number - 12}` : `${number - 12}`;

export const formatedTime = (time) => {
  const split = time.split(':');
  const hour = Number(split[0]);
  const formatedhour = hour <= 12 ? `${hour}`: hour - 12 > 9 ? `0${hour - 12}` : `${hour - 12}`;
  const pmOrAm = hour > 12 ? 'PM' : 'AM';
  return `${formatedhour}:${split[1]} ${pmOrAm}`;

};

export const dateToString = (date) => {

  const dateString = date.slice(0, 10);
  const time = date.slice(11, 16);

  return `${dateString} ${formatedTime(time)}`;
};

export const formatToPhone = (phone) => {
  if (!phone || phone === '') return '';
  const phoneNumber = phone.slice(2, 12);
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
  )}-${phoneNumber.slice(6, 10)}`;
};

export const formatDate = (date) => {
  const parts = date.split('-');
  // const phoneNumber = phone.slice(2, 12);
  return `${parts[2]}- ${parts[1]}- ${parts[0]}`;
};

export const formatDate1 = (date) => {
  const parts = date.split('-');
  return `${parts[2].slice(0,2)}- ${parts[1]}- ${parts[0]}`;
};

export const getLanguage = (lang) => {
  console.log(lang);
  switch (lang) {
    case 'kin':
      return 'Kinyarwanda';
    case 'en':
      return 'English';
    case 'fr':
      return 'French';
    default:
      return '';
  }
  // return `${parts[2].slice(0, 2)}- ${parts[1]}- ${parts[0]}`;
};

export const formatToNID = (nid) => {
  if (!nid || nid === '') return '';
  // const nid = nid.slice(2, 12);
  return `${nid.slice(0, 1)} ${nid.slice(
    1,
    5
  )} ${nid.slice(5, 6)} ${nid.slice(6, 13)} ${nid.slice(13, 14)} ${nid.slice(14, 16)}`;
};

export const removeDecimal = (number) => {
  const amount = number.split('.');
  return amount[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export function capitalizeFirst(str) {
  const arr = str.split(' ');

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

  }
  const str2 = arr.join(' ');
  return str2;
}


export function SortedMenu(menu) {
  const sortedMenu = [];
  const topMenu = [];
  const subMenu = [];
  menu?.forEach((item) => {
    if (item.parent_option === 0) {
      topMenu.push({ ...item });
    } else {
      subMenu.push(item);
    }
  });
  topMenu?.forEach((item) => {
    const menuItem = {
      id: item.id,
      link: item.load_page,
      key: item.menu_title,
      parent_option: item.parent_option,
      icon: `<AiFillCalendar style={{ marginRight: '10px', width: '25px', height: '25px' }} />`,
      value: [],
    };
    sortedMenu.push(menuItem);
  });
  subMenu?.forEach((item) => {
    const menuItem = {
      id: item.id,
      link: item.load_page,
      key: item.menu_title,
      value: item.menu_title,
    };
    sortedMenu.forEach((menu) => {
      if (menu.id === item.parent_option) {
        menu.value.push(menuItem);
      }
    });
  });
  return sortedMenu;
}

// export const jwtDecode = () => {
// 	try {
// 		const userData = jwt.decode(localStorage.getItem('barefoot_token'));
// 		if (userData === null) throw new Error();
// 		return userData;
// 	} catch (err) {
// 		return null;
// 	}
// };

