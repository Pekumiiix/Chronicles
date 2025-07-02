export function FormatViews(views: number) {
  if (views < 1000) {
    return views;
  } else return (views / 1000).toFixed(1) + "K";
}

export function FormatCurrency(currency: number) {
  if (currency < 1000) {
    return currency;
  } else if (currency < 10000) {
    return (currency / 1000).toFixed(1) + "K";
  } else {
    return (currency / 1000).toFixed(0) + "K";
  }
}
