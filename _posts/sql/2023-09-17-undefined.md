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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAUILHBN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T020010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIHweImdpD81YtkBJ2aUiOjnol1thZjfLUaBg9cWjfBXtAiAXBL1ks%2BFrRaY0%2Fo2J0zSB%2Bi0CHQL0T51h%2BcW%2B%2FqgQiSr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMsuP%2FiSb0A05x4lUnKtwDSoZsvhf3UDgAG4LZpj9I1GGrItpnU5lxniPzRkVczZF%2FkfRJUpLXYYtM9di8b2CMKx0rRgT4FeaVX81mNFmgGxtDQcYJca7E0uP94jZOobaTpl1Z8K1mXaoyzlg8VBgX9SCoY7KKULeW%2F0ZlOTkWf930gyAY9MiieT%2BzGyFRBRu2U0EXY0MVLEBh2dt5DIDYvXqsOknTpKET1pmEevlXwffAxnU5eFGdbSS65DsdvYxGnWoGpblVKfRuLmTnu6KtYZBYx8JNxAnbb%2FbGyrIQiJdt5rhNdNZIxDBj%2Bgkx1KD%2FSqUEii9b4zvQvSRZ1e8IctYbaEXuW8Onre5AaO%2FbZAXkeIy%2BLPaOY7mqS4CBzzRa4NlWG8hUylAkcAziFRNjnsd9e76cURIkoNQL8pHRWtJqjPfCgwUPN0XfBQuhbct%2BvO5dLgwaFTqPJ8UkNEHGLxGYiOhv1gGIQAX72O%2B3Se7NDnpjFNVbzE8FY%2FCAe4p7ncgO22uBOHsZb%2BmFMXbpWnBEKl%2FHiIRpvKEN%2BiQS4rpFcE5gY9BpvelU9xecKODnZS81f7CuteCMpoNI4SqeN9nMGIbZ300uGmEsQLNUCR2IlqhqnS3ZW9WQp3%2BClAkFYMmf4xEyMWK5nswwlpe%2ByQY6pgHxwaIna1ZywXDXe8SVeCoQS3KvxA2Rpsw6ylpTyG%2F8dD4S3v%2FpiNnH9lySMrGbNytoXXMZMhnnvfXHpM9vmwifwa3%2F3Vi9Z6APDLEtLFFl0qouJza2b9c2VwXffxljHUV12%2FfxWaSPpU29j2zIHUrxNDO8Mz6pShNAyKGjtOhfDUJsKdkF4Md%2BHiXolrMl0iTDhgqBQoRqJdzsxzFlX7iljFUh%2BSUE&X-Amz-Signature=7fd13ed7aba4cb7b67779b69da492fcd2be48e38064041971faf4ad4faa45934&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

