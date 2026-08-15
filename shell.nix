{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs_22 
  ];

  shellHook = ''
    echo "Ambiente de Desenvolvimento Ativado!"
    echo "Node versão: $(node -v)"
    echo "NPM versão: $(npm -v)"
  '';
}
