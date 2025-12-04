---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UO3JA5A%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T063548Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIHoGViuzJWgLw9%2BwsYuU9V1G7T3W2PQJlW87s3OYtH0sAiBcTQ9%2BWhWa2f0c%2FAgAz70oCLtIBImW4yiXmMmT%2BrmRwir%2FAwg%2FEAAaDDYzNzQyMzE4MzgwNSIMSqVI5ws%2FDjRDoiTcKtwDjlRytMN9%2BSAq%2FOms7qZ0XJj4NKPdFIz0G6yraRLFTakgg4KYGlhVZTGfb2ILu2Mdwl0hDn%2FlH7iHmPUY4hpUo%2FLSHV5A8n6rVmkprWl6hYlq3zpMVnXJw14VHA%2FAin0THWq7tJpcNVt%2FgvsoVtYyG75GNb4QFT%2BxUXEjQHdeR8BSDU23LgRiJQrLDUCNGifTfkh91L0w9phFCp%2FKqWNoGmp0%2BGj3XruB1ZAZAvUQ1RlBlNGR%2B6KiMzhh6YGGfmn2j0GOLiwFHebLtURl%2FkqD0wPKR8xws%2B%2BV6WU8J5IXiw0vhFHWgSrLI7FINPCq3hTUGAoV6QAS4vKJvyD3y%2BAUB6HsqdQpndYOeesHaVJDCuFJNavZIEPx40FOC7K3njC8%2FbLWPtvM5g%2F32bCp%2FnpdFhjAiz%2F7jfUIewhVKFeTW46jZ404nq2Js1xi0wuLxQ%2FCX2LksNl%2F83Q862ZVCUEVrHLFaN5VY21ybnancBATPhTdMqiBXa670U6EeyxdTac%2Fl951Ckoeqq599CI4%2B3XKsMVxYeBbfQFgqEmbSPmO%2FJ9RzzH8T%2F13B114A%2Fnc7F2%2FRpEij0xLzMrckaW3PZmu5bViqvSutfUEyBEhsWcfoWHBSAW0ZsjfXTh04vwwo8rEyQY6pgFCoERrz10n4ukJtxp9d5zLwYHIy4FBXNIl6DkcEnZSnPHYun9d9XODsk8XKeuYdaSHcGW4DsK02PD7Bqeah%2BkGmRrEkVZ9mA%2FCxwq1mdy8oMlXHLAnvkNfH4%2FXWBpARBD7Idig9YUB%2FAS%2FvQRuagf3EeXjFONZ%2FbioCeigRrRAyGq9s60Vlam3s5XoFLttgY9ziFk4W1FJ6B2i7XKc4%2B%2FwY%2FqueJHJ&X-Amz-Signature=2ded951547ce9817db4547081effd3a5aa6e1d9b48ac1bc18cef51c94d99c4a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Dada nuestra tabla de libros, podemos realizar una consulta [SQL](https://www.manualweb.net/sql/), para contar elementos de la siguiente forma:


```sql
SELECT count(*) FROM libros
```


Esta consulta [SQL](http://www.manualweb.net/sql/) nos devolverá todas las entradas que tenga la tabla libros. Es decir, todos los libros de todos los autores. De esta forma, ante una tabla que tengamos los siguientes elementos dentro de ella.


| ISBN               | Titulo                  | Autor             |
| ------------------ | ----------------------- | ----------------- |
|  978-1-4493-0814-8 | What Is HTML5?          | Brett McLaughlin  |
| 970-26-0518-0      | Cómo Programar en Java  | Paul Deitel       |
| 978-84-415-2348-7  | Java SE 6               | F. Javier Moldes  |
| 978-1-4493-1439-2  | What's New in Java 7?   | Madhusudhan Konda |
| 978-1-4493-1608-2  | Just Spring             | Madhusudhan Konda |
| 978-1-4493-2838-2  | Just Spring Data Access | Madhusudhan Konda |

undefined
Obtendremos que hay 6 libros al utilizar la sentencia `count`.


Contar elementos distintos en [SQL](https://www.manualweb.net/sql/) sería para cubrir consultas del estilo... _"Contar todas las editoriales distintas de las que tenemos libros"_ o _"Contar todos los autores distintos de los que tenemos libros"_.


### Count y distinct para elementos distintos.


Para ello deberemos de aplicar la función `count` de [SQL](http://www.manualweb.net/sql/) sobre los campos editorial o autor, pero con una salvedad y es que utilizaremos el modificador `distinct`. Mediante esta sentencia `distinct` estaremos contando aquellos elementos que sean distintos.


La sentencia [SQL](http://www.manualweb.net/sql/) tendrá la siguiente sintaxis:


```sql
SELECT count(distinct campo) FROM tabla
```


Así, para sacar los autores distintos, ejecutaremos la siguiente sentencia [SQL](http://www.manualweb.net/sql/):


```sql
SELECT count(distinct autor) FROM libros
```


Siendo el resultado igual a 4 ya que solo hay libros de 4 autores diferentes.


De esta manera ya sabemos cómo podemos contar elementos distintos con [SQL](https://www.manualweb.net/sql/) mediante la sentencia `count` y el modificador `distinct`.

