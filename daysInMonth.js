'use strict';
function daysInMonth(month,leapYear=false){
  if(month==='February' && leapYear){
    month='FebruaryL';
  }
  switch(month){
  case('January'):
    return 31;
  case('February'):
    return 28;

  case('FebruaryL'):
    return 29;
  case('March'):
    return 31;
  case('April'):
    return 30;
  case('May'):
    return 31;
  case('June'):
    return 30;
  case('July'):
    return 31;
  case('August'):
    return 31;
  case('September'):
    return 30;
  case('October'):
    return 31;
  case('November'):
    return 30;
  case('December'):
    return 31;
  default:
    throw new Error('Must provide a valid month');
  }
    
}