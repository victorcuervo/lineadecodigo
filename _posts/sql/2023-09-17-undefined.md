---
layout: post
title: Contar elementos distintos con SQL
excerpt: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
categories: SQL
tags: [sql select,sql count]
image:
  path: /images/
  thumbnail: /images/
comments: true
share: true
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PWGYLOJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T175512Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIA3GvCNM08cIYE%2B9IrRBFzibvzCldcd7CJ1ybiFLUPVxAiEAwpwBnQbtle6fNpo66QFHZWPgFToAKYttraAa%2Fs7oHOYq%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDB1AJIBZDMdvY1cVMCrcA0lA4QnF8UM0uPXaayu8nnS1JOU4lFDz0Y0nTxRSitelWg3XMxIopiVIweR7ER9kvuts%2F4zGsVAsjcddzoEzElzki6wm3ADUee9HU1MJQPD7RzVGi1rHYRtWZaCb4uyGMsijfOiFutprZJ8x0o0v%2BcW9elhen5bUveW%2FRSOhprtco4UOviQy%2BASgqzxWa2%2FOekfHLbOLRtC4Hzh8rlhqpk7cXZ8b6v%2Btkuf9eSu1qpUccBayBnUM4mohKkJ7H5vpzCX3qV72Q5sd5BHqG%2BrPe%2FdclD5I2ZQdVsvhTSbUQunl8z4lQNfTjBuTiSZg4%2FYAAFz4tbukcI9N0kHCHk6PTyo9sFC4b8qPS3fBIUeQlMqlXnAE4S1qyNPhkr6FYAraCbkzCg5C8zgr004KK9VdR%2FmEe1hbtcDUXuCAyO%2BoiFKwOjzKlCHliaGsBbOSaEU9sS723vmHAxh0S4duPNCe17t51OmKRgsXaiNkh6xqcdVin0GLWTFhvIRxmxK%2FwLH2u4MuCrn%2BM%2BfaEBKVqL9DI2WzEHSDNhjilb%2Bm5qkvOPbQnyOslLMJR%2BQp%2B%2FYpzhqwhH3qeE3JFyGB5v3Ge9pz8zG23DxV2kSF6RPKN5nqjznwFfAONNE0axl6e9TdMNvcwckGOqUBqs0Vdwh7GwHvaUJ4MTspvfecV3CVacBdlPHnzbL0Iowj88HyEajykDBrR3kgmUWGahYhBmxXmaO0zmuRNj5EaNEv8jsNfblTjPKCFkPIO%2FNUXWWjfaebVozgwMmRqX7h3O8SVS9GvNz87CZu%2FVRaHrUhseGzREaIg1PTbctVMve7ShbNdf1IjoL82xxE1JKTV77dFJh4eg5b%2B4Nxwr7%2B%2BRlKluIf&X-Amz-Signature=3dcc62a0c0b52efae6f6022d73acee6b98d5e3611948d1d6fafca9d2dd6bf4bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

