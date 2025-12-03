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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYAOFBIN%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T060806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIAcVdwyzMKARePlR9DJCrbk2N%2FmV5faSPP5B9QmZG5rXAiAb9vfTToAUpdUyiOdl82e02iEnI06z9jV%2BYgflk9C0gCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM4ASf3iGc9D9ohgOYKtwDiLoqdFfuuw1K3owH377Dfmt8Gcg89DgCaNJf2Wf8XVHGRGpodVT22TI3I8C73RpzMQNdLs437z4BF3ssyec6fkfRePDemiBjqhKv7tSZz1BuAZBxJZrPqptZHKaTKErJ8a0zoqeUrrx%2BQEcX2NEoNEv56EqB2s%2F0Ww%2BcIJO%2BQdO9TXbHaB311L%2BO79yGUyAauTbr0F17xodA7ujNIDeYH39rF%2FJ8FjOi%2BHinIFrv9B3Zx9%2BT68zb6a5kF45ilxOb6pWxlba8LOzc8sHhZ84j3Hh0EW5Y8%2FjTgOzhqk%2FEe0J5VF%2FPaPm4DcW3hacb3bbcUEPWN3Psbl5Hn7yLNQou7zoKMvf%2FtezsJ%2BSG14bVdSjCd0h9%2BCGZIz7jUKIm1HN4nNt5RxwjwbnGFg6XUbEjpQDhxKfcltfco5qXCKcI%2BhUYmWEnDU1pnDGoCMcNyyWNX%2Bp%2BUReIamZP746FZYVGMcZQh%2BYTlXpDpOLgysKO9v6wDIzw5%2FoZ0doeyWDhoWoxWL0RUHE51j3301G%2FV2Nvtss83VkD%2BS4z0iTIRq7QOXzfOnn%2BpEjf2kX4PyalS6aBM8I3IYl0tWPSWjVUeeLNDEbiYlVxJs%2F6Jaxhq5tN5%2Bu5aR446%2B8j7qgTOB4w5Jq%2FyQY6pgHGaJVE518ndgUj7sxCl2ASEoYhOuP0kzlYr5sYrWjRrOBc7Sukda3YzvjWLtX0OH9rBrzSEO37kHZaXUOLI7ViLRhUowPg4cokSuasXLqL3lRnD5TeILqIC3NcoKa5jXWTpDRHPl2D4py2er1kR5xgn24EAuPgBtD%2FmbhANTvLDpc8lAt2fSXT7RnCnmuc6GTvB5EUiXCdFdwIUWZSt4USJ6i1FHyF&X-Amz-Signature=e590cdf1e17488d1c18113636a994f1a3163d9732d3bd1566930d7254a9411a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

