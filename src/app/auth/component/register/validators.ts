import { AbstractControl, ValidatorFn , Validators ,  ValidationErrors } from "@angular/forms"

export function regexValidator(regex: RegExp): ValidatorFn{
  return (control:AbstractControl): ValidationErrors | null  =>{

      if (!control.value) {
        return null; // Don't validate empty values
      }
      const isValid = regex.test(control.value);
      return isValid ? null : { regexError: 'Invalid format' };
    };

}



