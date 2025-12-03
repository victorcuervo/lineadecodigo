---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DZMYO5D%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T204029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCICys1FeAwQG7hCI21KqDJkflfDkfVnQnBcozykl9yrCiAiA%2BZHZ99%2BKXNCWy6w5Ikh0KNuaATdTwp8FMcwIHTTbS0yr%2FAwg2EAAaDDYzNzQyMzE4MzgwNSIMjozqdBdEORLTUCLmKtwDWFv7CzrOywrIRirRjlourx%2B5zwlFlz%2F8RBRENSXrK%2BgQ0KEt3IHc1Z83knrvBF95CJYE8dXIwGXFyXoVnTIgrO4QB3rQqB8gv1RDbXV1TdT8RMoF1m1i0haoclxnl0PKYL2NHbEfY%2BEfDOL9AFUqT2FxLJKz%2BK47Mm8Np405LNTINs3%2FIS1ggJe5IqzzmZ%2FilFyOwNkhwHlm%2Baf7z4S4OXOksH4GLGZ0Cl%2F0yiXkXGznyQ3MBiBE4B111knApFNgk84hVk2%2BoZTjtopZ7Botf%2BMXg0xKW4aMDm4AqYFF9err68xJ1qBh3yYKAWMqMNKjHYSd3Qp2GR6WQJ0%2Bmv%2FxRxtol9lhybJe08Ooz5rS7ByLWGJeEFUBUVwyaBEYdp9JV1lw8xA9yVNxBZ7iiAnxNnM139G0%2B6b3VrGeKv66YxUmJ%2FcEPzg3Zj0%2BMjj4UIXsCUC2%2FOfBj8j8KYxT2qzUhxo57E9wz4pCxSHg4oOJGPy35PzAxq3HRH4NCfB%2B1a%2BGB8kK8AQMc1X98iBFB29SvHNadkFNbivH2UxGaX1XBi4K9w2PuzitOApN5f%2BxvjN%2FI6mY5v2nIW%2B%2FzKIA%2F5ZOJjtQSRL2NFCRrePhRZogVCYzA5obhCZ%2BrPDwThww6L3CyQY6pgGmCopCYDPjSRYRr%2FFS0%2FWK8FzcD%2FC7T1eWLrp%2BMbCmL5H4JJEkPXpGzOHPvBpWEnfLTclWOTTh2v9f32jdkFCo7%2Bttref3N7gq7vCCTq3dfYf%2FNlYDJ8Ejode2HqA30aaCpja16GDg5X%2F67q0zVMxkUWE53fAoW%2F5ELmSWRZycYyQYDA6saJa3L%2BltSFHwiPZJXL81hcDyALR0EW3mh3UrV2duk2u7&X-Amz-Signature=9c9df0cc75fad86a67302e03cfa06bcc69c767e80eccc160bf7dfe8b1a8fe09b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

