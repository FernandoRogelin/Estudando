angular.module("listaTelefonica", []);
angular.module("listaTelefonica").controller("listaTelefonicaCtrl", $scope => {
  $scope.message = "Lista Telefonica"
  $scope.contatos = [
    {nome: "Pedro", telefone: "9999-8888"},
    {nome: "Ana", telefone: "9999-8778"},
    {nome: "Rafael", telefone: "9889-8668"}
  ];
});