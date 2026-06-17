<?php
echo "<h1>PHP funcionando com Docker</h1>";

$host = 'mysql';
$user = 'root';
$pass = 'senha123';
$db   = 'meubanco';

$conn = new mysqli($host, $user, $pass, $db);

if ($conn->connect_error) {
    echo "<p style='color:red'>Erro: " . $conn->connect_error . "</p>";
} else {
    echo "<p style='color:green'>Conectado ao MySQL com sucesso</p>";
}