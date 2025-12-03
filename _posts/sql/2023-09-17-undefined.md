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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYCW53WT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T023003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIE15r06QgFjDsEjbwEq3Sw6wXkuIxFRBuhPlNaX7M86SAiEA6BKEdvQvRPJ%2B%2BF0uxxvL8Pm2a%2BkLxsoPoi8T92Fc1hwq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDI7R%2FVPKRw9VmEjVfSrcA9iTPmLB40qEJNKhNi69fkRxbZ9nNkNGrucifuaK7PzMFGDWhfunKDXwiYBf7igZd7aWIqUbY51K3IqLfpYQlh6kPWZkMYIo9bK90PeQpqmMJEluc17rpn%2BZ7q%2BrvH1wPTLEHfpsn3ChOxGuulZOT21cCe6%2FwpybD6b5eRS42QgJ5MWl5MUqsR0jUV8JVCVPF%2BQRKkcDb%2FsJoZM8Yygoc4vPBgAZ%2FItgdOIz6ZHS0ovZwM6%2Fiajy5KZa89Q8IHQo2cUR2u9%2BSzKJP%2FkQ7mZsS7WHWPkayBxuiQvnNcqlAdGFUwjD8V3VR5qp22eAYOoh7StDBGz7DcdwO3zVGlH6eT5oam9znZAqeubhxqhcS09O90qvnpj9UeJafo%2BFo1R%2BBCYrwn0ry3bjQAJNkE14ukFCU8xyzRoKeuN7SOj1Hu6wY8b1WP86MUG4ZfNLIY0Vvll9%2FNQYzG5vfdeTRobGKeoZZqVtytc%2BEMDzHSaYUQykosmXEeg39oKk4LHlpSDD%2BD%2F9Vh6WJ89Lk39nSUgB6vSmjMH6IE%2B3ODa93D0rVt3yFP1NS2sdJ3oz%2B2WsWDUWlRcZYYV4%2FhsyhFsuImKJix0CN7UQu%2FQRBCeyZHdbQ9i4Qtxd63N23VdmwQBSMKKWvskGOqUBIszi2qERV7z2bJAUUU%2BQYM32d%2BjYoUds07U4Yf%2BLL8jRh1MYNbfhpDCixkH%2BHzcpLbaWuJp4sSykVGXQzDQ4ktMe2G3CZeOiWfJghRIc%2FTHp9gXPjgU8qTPiaxTbU%2BCQUpQof6RGb9nVkZdrZt2lohS6cKP%2FM1HWnQprNtl14hHUlpztT%2FdD8p4BG2w7J8RuBbSBMaBe6tZ6905oikby9JuVGrf4&X-Amz-Signature=98948f6aa85d3a71401bc9e96cf7b2fb110de21bf04b856a24551bc9860f01a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

