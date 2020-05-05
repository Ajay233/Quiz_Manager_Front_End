export function isIconRequired(name){
  switch (name) {
    case "verifyProcess": return true;
    case "verifySuccess": return true;
    case "verifyError": return true;
    default: return false;
  }
}

export function iconPicker(name){
  switch (name) {
    case "verifyProcess": return "mail-sent.png";
    case "verifySuccess": return "mail-success.png";
    case "verifyError": return "mail-error.png";
    default: return null;
  }
}
