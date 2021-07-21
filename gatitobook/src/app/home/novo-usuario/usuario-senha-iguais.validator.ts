import { FormGroup } from '@angular/forms';

export function usuarioSenhaIguaisValidator(formgroup : FormGroup) {
  const userName = formgroup.get('userName')?.value ?? '';
  const password = formgroup.get('password')?.value ?? '';

  if(userName.trim() + password.trim()) {
    return userName !== password ? null : {senhaIgualUsuario : true}
  } else {
    return null;
  }
}
