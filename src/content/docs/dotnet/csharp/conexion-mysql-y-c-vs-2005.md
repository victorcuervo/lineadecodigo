---
title: "Conexión MYSQL y C# VS 2005"
description: "Aprende a crear una conexión entre MySQL y C# en Visual Studio 2005 con métodos para ejecutar consultas SELECT, INSERT y UPDATE de forma sencilla."
date: 2012-03-31
updatedDate: 2026-02-09
tags: ["mysql","connection","query","insert","mysqlcommand"]
slug: dotnet/csharp/conexion-mysql-y-c-vs-2005
type: doc
topic: dotnet
id: 2c8a9dfb-adca-81e8-88da-d41f94c983e3
author: Pablo Ruiz
---

Buenas nuevamente hoy e venido a dejarles un post relacionado a .NET en su sabor [C#](http://www.manualweb.net/csharp/). Mostraré lo simple que es conectar ambos.


Bueno, manos a la obra! Primeramente lo que tenemos que realizar es la descarga del conector a [MySQL](http://www.manualweb.net/mysql/), Conector MYSQL .Net 6.2.4


Seguido crearemos una nueva aplicacion de consola que automáticamente nos deja apuntados a un MAIN dentro de él haremos todo. Solo para el ejemplo, si es que realizas aplicaciones de mayor tamaño es recomendable mas orientación a objeto.


Como ya instalamos MYSQL Connector solamente agregamos la referencia. Click derecho sobre referencias - Agregar referencias >> localizar [MYSQL.DATA](http://mysql.data/). Y con eso tendríamos nuetra referencia agregada, solo nos quedaría apuntarla a nuestra Console Aplication.


> Asumo que tienes instalado MYSQL Server en tu computador personal, o te estas apuntando a algún servidor remoto. Si tu respuesta es que no tienes MYSQL Server instalado, ni menos un Servidor te recomiendo que localices la aplicación [WAMP Sever](http://www.wampserver.com/en/) trae varias cosas entre ellas [MySQL](http://www.manualweb.net/mysql/), [PHP](http://www.manualweb.net/php/), Apache, PHPMyAdmin


Bueno continuemos ahora vamos a lo que es código...


## Método EjecutarSelect


Crearemos un método llamado "EjecutarSelect" con dos parámetros que seran la conexión y la query, de la siguiente manera:


```c#
private static void EjecutarSelect(MySqlConnection cnn, string Select)
{
    cnn.Open();
    MySqlCommand ComandoSelect = new MySqlCommand(Select);
    ComandoSelect.Connection = cnn;
    MySqlDataReader Resultado;
    Resultado = ComandoSelect.ExecuteReader();
    while (Resultado.Read())
    {
        Console.WriteLine("id:" + Resultado.GetString(0));
        Console.WriteLine("nombre:" + Resultado.GetString(1));
        Console.WriteLine("Apellido:" + Resultado.GetString(2));
        Console.WriteLine("Direccion:" + Resultado.GetString(3));
    }
    cnn.Close();
}
```


**Explicación:**

1. Abrimos la conexión
2. Creamos un objeto del tipo MySqlCommand que es quién llevará la consulta que hemos realizado
3. Ahora al objeto que creamos le decimos que se apunte a la conexión que estamos pasando por parámetro
4. Luego creamos nuestro MySqlDataReader que como su nombre lo dice "Reader" leerá los datos obtenidos por la consulta
5. En ésta linea le decimos al DataReader que lea los datos del objeto que creamos anteriormente del tipo MySqlCommand (que es quién tiene la consulta)
6. Bueno ahora lo unico que hacemos es recorrer un ciclo while para obtener los datos
7. No creo que necesite mayor explicación pero el GetString, por lógica nos devuelve un string en la posición indicada

## Método InsertarDatos


Ahora nuestro método que modificará datos:


```c#
private static void InsertarDatos(MySqlConnection cnn, string query)
{
    cnn.Open();
    MySqlCommand comandoInsertar = new MySqlCommand(query);
    comandoInsertar.Connection = cnn;
    comandoInsertar.ExecuteNonQuery();
    cnn.Close();
}
```


**Explicación del método InsertarDatos con dos parámetros como el anterior método:**

1. Abrimos la conexión
2. Creamos nuestro objeto que tendrá la consulta
3. Le decimos a nuestro objeto que se apunte a la conexión
4. Ejecutamos la consulta
5. Cerramos la conexión

## Método ActualizarDatos


```c#
private static void ActualizarDatos(MySqlConnection cnn, string query)
{
    cnn.Open();
    MySqlCommand comandoUpdate = new MySqlCommand(query);
    comandoUpdate.Connection = cnn;
    comandoUpdate.ExecuteNonQuery();
    cnn.Close();
}
```


**Explicación del método ActualizarDatos:**

1. Abrimos la conexión
2. Creamos nuestro objeto que tendrá la consulta
3. Apuntamos la conexión a nuestro objeto
4. Ejecutamos la consulta
5. Cerramos conexión

## Implementación en el Main


Bueno ya tenemos nuestros método listo, nos queda solo apuntar los método al main y crear nuestra conexión:


```c#
string CadenaConexion = "Server=localhost;Database=lineadecodigo;Uid=root;Pwd=;";

MySqlConnection cnn = new MySqlConnection(CadenaConexion);

InsertarDatos(cnn, "INSERT INTO USUARIO(NOMBRE,APELLIDO,DIRECCION) VALUES('Victor','Cuervo','Avila');");
EjecutarSelect(cnn, "SELECT * FROM usuario");
ActualizarDatos(cnn, "UPDATE USUARIO SET NOMBRE='MODIFICADO' WHERE ID=2");
Console.ReadKey();
```


**Explicación:**

1. Creamos un String que tendrá la conexión Standar de MYSL
2. Creamos un MySqlConnection que tendrá en su parámetro la cadenadeConexion
3. Llamamos al método InsertarDatos le pasamos por parámetro la conexión y la consulta
4. Llamamos al método EjecutarSelect le pasamos por parámetro la conexión y la consulta
5. Llamamos al método ActualizarDatos le pasamos por parámetro la conexión y la consulta
6. Usamos Console.readKey(); para que la pantalla negra no se cierre automáticamente y puedas ver los datos

## Estructura de la base de datos


Se me olvidaba... Para este ejemplo estoy usando la siguiente tabla:


```sql
CREATE DATABASE lineadecodigo;
USE lineadecodigo;

CREATE TABLE usuario(
    id          INT NOT NULL AUTO_INCREMENT,
    nombre      CHAR(20) NOT NULL,
    apellido    CHAR(15) NOT NULL,
    direccion   CHAR(40) NOT NULL,
    PRIMARY KEY (id)
);
```


Una tabla llamada usuario con varios campos. El ID auto_increment y primary key.


Bueno eso es todo es super simple llevar a cabo ésto... inténtelo y cuenten como les vá.

