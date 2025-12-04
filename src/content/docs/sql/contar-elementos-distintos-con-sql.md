---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
slug: /sql/contar-elementos-distintos-con-sql/
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3KW46OP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsQk7ZgLlauq%2BueuM3fySokfB6QNp%2FDWkcHgq057PEFgIgDIDyEYQdMuS%2FRv1SAR7ZwAmQR99h7ZwdyH3ow1bMB1oq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDH8c5waTEb%2FO19UO8ircA%2FVs3Xegxuj28xoiMlLaW%2F2m3F4qiDeoatVgdCPvPSDKAcxVSODsqkravhOJ4VrgeoKdFgWfck4dobnUrD9G86NvUyQTIooRxE0gc63FHQNDuVR6ycTS8qJruTLhO1QPmVvnEyUBVt2FTQXAw0lOkkz7l4%2FJ8DPZ0Hkq0VEKXHKaOI58DqrYH%2FT0YiX%2Bl1CuG10gDhvBXsVwl30hvqxXeGxYSJCCqeUZeGrlDW5C6zE6Lv6k7EAzsrK8DcibtN2r4HwjjeUwQ511PWiYaEXCCg3zY7hR9aivdmWQlgjSc78POkFaWJem0qfwYvH0xNyw9nBpnFsiBPP8C1JihlzSitdCgRzRkHtIcKVWU2X5a%2F7hWriXlTkhuGE4o%2B5C8kSD2FnhahuCg4HjltYHNlircxzkoU3W7idzqsBVD%2BNyXf7GkozKihHvx2VvgQlNfmP7HYtF1NN%2Fc5%2FyPLRilgOu6G2UgLNZHglGM1TkyJLrifmQAxLWT%2BI3HYb1CrLG1wKdcsJecXXWTonbUqzZ5LEMgm2fZcQXfoTJ8NKG7Ee6XcEbqw2NEj%2FWJPBcdoF0RqjubCe0wU%2BBkVmLN9IfYCLWmDZLwiVgwXjLiPiLY5EiMfecx9By7QUgTL91TcpiMPOLyMkGOqUB3449dzcE7TPP4PWD8nssCzdDV2ysPLYATFSc7KG%2BrVUS9Ha9mFHS49XXTrhG%2B%2FmmwMt0SWBPitAT7qybrqckyq8bW%2B4wkMZoXOG3T4a0sYHFHvd0FG%2F6Fx5wZqoWBE%2FIfVJYBFiy4GuH%2Bj63AzTGpH1ddCa%2FZTeqnvVYMU%2BfJKonh7j5u8VAW%2Fnm1uJHloLERUzcmvKFZPriEq7rWzN%2B67PGXuyI&X-Amz-Signature=504d7072e86f9e7d8b8cfb2f36c0ec4c4b9aafdef4d48f75d272b63a477743b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

