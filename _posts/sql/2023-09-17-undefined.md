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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWEIKZ7R%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T023403Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDzCTYE4%2Fqjt4nPpKTlpUJ16GNsS2GK3lokEjKUEAIGSQIgV0GPfba3WGxNSoJfFvTrUpiOBHdxXemC83gJacOVhNIq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDH2Z4OVnqZ0ze0mm3CrcA4vKnyDqAfgYugVzv%2BTWyubWLTlOL8e0jMlL3irASBHyM3XUGekpQo522POmTzMLiidDcFCZNnzrjvs7k0BULD5ZbdX12SoMqVK%2FobW1YnfCCng06of4mwsWsGz8ymEoW%2BYWYLT5vUme3DAdTB9D90m0tC4tOvUXQ9iFtFTSSKRiIj2em5iz0xsyUjINz8nqMG3bm8pr2sxupEV5ynyLPmt7aQu1rfmPCO%2F42mPnkp4KuO63ZDARFAOV35IM7YrhMt%2Fp5bi%2F4Qgo%2B1%2BwZ1o8LGU1o4SYWRXFLIrjQw56FN7wbXpq85KApjUYgmPclq0JKudbEZvcESP%2FDIe%2F1gLxHZpAHwplLJZLjd8D%2Bk8ZK0Cyc9%2BMxd1hWJTKTtsR8BRbPY7jCBjL9qG9uHP3CvnR%2BFfQA9mRELQwQI4cCtviFufxhxs8EhEhiQW9Ps7I7BDacmMwi0CZWwIzRRjwRUm81KYmOv45dF6%2BQ3%2F9kZ8B82oLaCzvzN%2F5YFiYz%2FLj8xb0YlqBHOoBBHD5pAo5BVBzKMNqdGpdrjD0Q7x3PbDqBMv4lsVF7KO0LHpgH0w6wyA0sXFmgsNQJp92xAgzK7c7SRRVb%2FvjrD4MK1mQ2b4U92dHIvdNw5Oup7zzgjqFMOKWvskGOqUBHzdPZsHPEOnoFsn8MJlWviEayTzIgF34FBKHlFpqmzurDv%2FV6qVeMmcptaiMfCfhwgD8LocO4PJmiSCS0RJUxkuRU9zeayYoR0rCvBXf0Tw93cMb8qCiioGNlf1tD4O4iyS3BfC23cFzmSqRPCWQp619L9j6zHye9Zz85Rwdl7hpYef2AMKVu4%2Byld5dUZ8wFyYCAl6YzHiFU2KNRzTrQELS%2FVQj&X-Amz-Signature=18ea0e2e7e2c6dd86a19eab33019207a85a7097fbaa3ecaa5564e914680aa81e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

