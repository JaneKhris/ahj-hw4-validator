export default function getSystem(input) {
  if (input.startsWith('34') || input.startsWith('37')) {
    return ['ae', 15];
  }
  if (input.startsWith('300') || input.startsWith('301') || input.startsWith('302') || input.startsWith('303')
    || input.startsWith('304') || input.startsWith('305') || input.startsWith('36') || input.startsWith('38')) {
    return ['diners', 14];
  }
  if (input.startsWith('6011') || input.startsWith('65')) {
    return ['discover', 16];
  }
  if (input.startsWith('35')) {
    return ['jcb', 16];
  }
  if (input.startsWith('51') || input.startsWith('52') || input.startsWith('53') || input.startsWith('54')
    || input.startsWith('55')) {
    return ['mastercard', 16];
  }
  if (input.startsWith('4')) {
    return ['visa', 16];
  }
  if (input.startsWith('2')) {
    return ['mir', 16];
  }
  return false;
}
