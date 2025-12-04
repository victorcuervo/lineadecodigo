---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G4FG662%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T045312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCID%2BY796Zm6TSEPll3oig%2FofJ67ZHsXe0OyrlBL%2FujqiwAiEA7v0FovhOWk1aaXpo8v21CF2K9frMAYK15dn4Sq%2BBUjcq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDC70IK%2BUQmE6IZIE2SrcA8XpwfX3o7tRATJVDVpohccTqf9xPWpwXihOI46ZbUxWLPccyXhKW1ZeQk0Y%2B7aK3Ht9Xvidpxm4LgiAzicWA6bg5%2FNUUvSCdP9XlfkX9NA1rerrIU66XtfzAivGUR1qAsGOCEwPHvPLFv%2BUggEnpmPPgbCF%2FZkqyHepT1CwvLW8duXYZycHZ14nmrqKNWXaTE0mn%2FzHKu0WVwYHo30PNti1auL4PqF9JZfx00wEb1crywhV6QcZ%2Bae2bdqiauX6GHovuIcAE0RWcWDl9EftNz%2F%2BzWWeZDpFLv9cKAgn00JE7rTfRVIYWN7%2FQMKqpyxMgeThdlA%2FN1KREM4xDPoLGW3um6nlhX6VeGQ9Gou4z1wosxaDmLjLbOjN7cOedJTuYSyBExdjp585%2BxnKlsdg7AEQMK6xgt4YmLWydE0jCMSVirVpZv4KbbANFbzJ%2BziDu7vo8dpcsdOch%2BQ6pV%2FXhaIMzs3Z5wNbe5doJFBgytk0RurN5CYAgE9mOj3h5fPL1cHiC%2FRxNcp2FJ1pW7dg7WU7S8nA9Mc%2FdYaUNyCWGgjA4e9PfNBkCfb3pxWH4WV%2BQZrYSeqY9EqQo7cFLhhhIQtRlJ1UcLH6Fft%2B1YLMoAzah55wxRhUA7CT1i%2F7MImQxMkGOqUBeXGtlfYFzbwRv%2BskpGCnvXlbPLmuD1TC0nmJyG0AFeGwqdxpMlP9uecHyEEeDwxCierpAJbFUafFk3NHGVQZAVmCNXdHQ0IeShoMLpfA%2F3%2BbimLZcqRsSDF8a35vXCQY%2FT6%2B4M91Xq%2BchCdgMVMwDiXQ8aGJpOHFOUPuVF2yz07Mag%2BeHKyBGdpVCOX%2F6GCMkNDu3e41mk5cjhfh%2FN2cTJ1vF49B&X-Amz-Signature=b9f3d9583ac72e9983ef6fe8a68051d34a4730a277c6e0dcdbb0e6ce8b694f0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

