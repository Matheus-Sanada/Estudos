## O @ MIXIN

- O @mixin diretiva permite criar codigo css que deve ser reutilizado em todo o codigo.
- O @include diretiva é criada para permitir que voce use (inclua) o mixin.
  
### Definindo o Mixin

- Um mixin é definico com a @mixin diretiva

@mixin name {
  property: value;
  property: value;
  ...
}

- O exemplo a seguir cria um mixin chamado "important-text":

@mixin important-text {
  color: red;
  font-size: 25px;
  font-weight: bold;
  border: 1px solid blue;
}