export function priceFormatter(
  amount: number,
  locale: string,
  currency: string,
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount)
}
