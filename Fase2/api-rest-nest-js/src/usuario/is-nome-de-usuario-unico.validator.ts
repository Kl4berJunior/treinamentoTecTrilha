import { ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface, registerDecorator } from "class-validator";
import { UsuarioService } from "./usuario.service";


@ValidatorConstraint()
class IsNomeDeUsuarioUnicoConstraint implements ValidatorConstraintInterface {

  constructor(private usuarioService: UsuarioService) { }
  validate(nomeDoUsuario: string, validationArguments?: ValidationArguments): boolean | Promise<boolean> {
    return !!!this.usuarioService.buscaPorNomeDeUsuario(nomeDoUsuario);
  }

}


export function IsNomeDeUsuarioUnico(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsNomeDeUsuarioUnicoConstraint,
    });
  };
}