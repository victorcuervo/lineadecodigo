---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZOAL4XQJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073537Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQDYPXjFQIsa2gtN7l%2B4Sod2gOZCOVFa1IxEjPZGIeV%2B%2BgIhAN8mRtC1J%2Fhni1wQFdafkj6%2BBRF7yXY1DfAM3eWaozO6Kv8DCEAQABoMNjM3NDIzMTgzODA1IgzMjvgq4cHkZeiNp9sq3APVAvmQUhl0XfX%2Bs443iDX99NtvAWl0WAYRdoqDT9VCNyNl9DlmQgp%2FJAYymfgzP4CVUZcAXNiglIrCBP1ePfi6aas7iheASwv%2BV4iEY3wl8dkMirH8zXKS4yWhG7Ozvw5f9RQ546Re8JGn4KaEps66zHRTtwt951eFukEgkbWMVCIpo6M8Bz45EHL92X0ALw2sHT1LNc1ay%2Fns%2FEZAbL2rWPRIeMrC%2BoXvymUhCbhGr%2Fw%2FQjC9rtrMYz2uaOk3Mvn3e16lsbdTXAlrm211N9MkwdI07luo%2F8XHuyeUNDziqKvDV6g3HHAY%2BGZaZIQltpU%2FwR4eZ3b2lTEU8SRORilVK%2Bf93arKxlD1liuBbhRrDP%2FIA5A29731k0uafKBoY5BW62ZzEGjKbpRH%2B9qK0OxYvxvmmR0%2BHf5hNHvkjdt0%2BeGjAcKvDaICR%2BHkd7JUjFeNPYroO7ifFgQJpt4yoaK7u9c2dwpahn1PdkDZ4ShB%2Be%2B36coXKSQwuLl7AVZR7XYfX4qAptkHQGVsYIAz1lXDEjOpZr2skzZxXpnzmtGUGeBTUyyD36wa%2BLuqXhGQa%2Ba5aFCfzka%2Fc40go6DNI%2B4Yep4sLmF9ihBZIEFt5Hra1K8jCdojEPjRSeo8WjDA6MTJBjqkAaTlEu6dtV%2Bq0Xi7T4rBy6Lv0yRFiBc69RgHPMHEq9bLy3hiYiyhkPhoT3Qhznfi%2FwENVJY8Lh%2BYWRLvUmyGA0kocTdfb5FLxRjuz8q1cL2E5j1%2FLrsMOfP8CoJSxw94BTqz6ACwkMVMPUjU7iI2a29jD%2FY5piNiJxlNztyyPPPcm0zsN0gDO13%2Bdk4MwLsJAjMjGc7%2BHrPNCw2i75UnsNhdQwP2&X-Amz-Signature=f96f4e6e683bb0e1b907fee18f8151db5849f124b85d891772a0ecc37bd69e8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

