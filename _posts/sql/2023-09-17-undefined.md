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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXQBYKWA%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T133032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIDSnxBQ0yyAiE84M29Rb%2FMP5LQNPzHDMXC6h2xWP134PAiBA9PYRfn%2FMsLw0EIez1Feg1AJMSWvqICkVUKBlnOoK3Cr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMKTE4G7sP%2B5sEcrV1KtwDsp7OPK0y2dgHh4L64Wqe05nTnxetYdGiDagbUnk%2BiQ50WGcQGfl9dtLgkhhT0btjF10pMqlrkvKRoPM2JWUVfwtkcDBhVwacH9ZoI7A8dGIWqL1KzE2XHhwuQAzhsv9aBjnTqE50j%2Fz0n0%2FEt09GMs7hFVOLLSbsrmYguD2HAQmQg%2BtMd5xSUqswxtpFbY1DlE%2BFpP6%2BcH3RhOSN7W2JI42XqkdF3CXQiuirHQeOxa3grgVPXxoPfqgVcj24QTZ3qrzu1FgVUAh8KJ8HvnD6ggXERQoX9spWuVcx%2BJqIRyAVpAbJhReQ4tO0UzO%2BP2fK2rMexbtPuVUhjaX2g%2BxeBGEtNBZWgQ6%2B0ozZZLVi%2FDG14N22u1qykbJZbvAYDBtssJX2BISZz9wFQlPMFi9UHkZKXzx%2FU508Z%2FhfiAVxzzQn1AVJNQzVZ6nf2v3eta3GCQCwjky5dKQb6QzR8QgGspODopAjRnfoD8LufVyIGkZSuAKR01uQjaCITnbqu0GLPSNduhIhCtPcHJFXnZdt5NBUbRjil%2By6rPP4LtiUuxA4V7oP9yn7E6IoP3NGA58nTlKZJtZZ8Z7RlK0sTRtXMnkxE0QjqgpYOOqpHjRGrqL6CgEKuxKHS%2BCh4zIwjenAyQY6pgHEkvlBnCEFgWEfQ%2F6bpj3TbMelLa55yvbo6TGKfygp46wM8lKBG5zc3dKuvg7xplIhifTmeOXv1KnVzS%2F8ICuyLB%2Bi6MH0Ymwwhowq7pEqxbxxl%2FNRcTNS%2BMWh1k0%2BtBycRoAsLFlgLdm4Esj%2BXJ%2BT%2FJAfvlqUzPNB2ZRynG25VTAbssDI61wSFwCnEOcS%2BjPeQGfQokJzIAXmtqtrkrmV6kpRShCV&X-Amz-Signature=2abb6956b4e6cdb4dded60b70f3c771dcb87b285e67c04d0cd9a32b1bb7e85c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

