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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666PK6Q2LJ%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T022701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQD6i4AUQDdAJHGn2H7BhJ9YdVCAs5I0EpIzsbEDInd8zQIgBRRnMNih2P87WSV4uezHN2RWUHcvx934P%2BIC3an41gkq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDHfUONksGmi5uQQmmyrcAy%2FyYEnDnIDpoa6LH3XybB2wM8Tz08E3y2ABcvnPqShWIvhsGJmTFp46OOci86cGCliAd3tgmGh1057Ktxo5TskmH7FMtHj7j2QONkhpoEsVYVMXCG%2FVIWVfer4e0ANV8FzBZlODxRxYICGqaNh7JX3YB2%2BRQLncFO1JE3ri9Y%2FRImzyui78HkJLhrndptf6f9kSmNb3NhDuUU31fZdSOWydDWRv3gFY59jMZO%2BcctK%2B6ABMxTduiqP%2FKOPgfXoaw96LV8iWluU4iPkuEQjc2tfg57EHrS4fy0jvWq0js5K8T1ZfV%2FiF7gcX3TE%2BoWQqaqO07x%2FIuTPT3CkmUjyo01J%2FYEWjuaTbQEm3H6b3ok4v4dM4fWvvL3C2IkEYaEJt3ER24kti%2BBQ%2BDJA8MTMmFBfT6Q9QBPd6%2BQv%2FZzXGe%2Feeg8KJX5JRYmoHdptbci9oP2h2j9O0w8Y3w6FuJgMjG0hYGfe26ylZzpHv5Wdh6tOApcd85CaHjIkCfmeA8G0vP%2Fde8gjBaTY8kdZ2uOq5eYx%2BkGZYOR3emIsqzAvDNrOJFUr721%2BVoUrj9hAMc6h8iYv7IfIadF1q4jPsDZfc5cfrnXODq%2Bf6F7DIWeelizSOQDNvmxSVVma6rotwMKWhvskGOqUB8d0ZZ5JIjbdRXT01d3Nxl2CmGGuNK2EKi8RMIJseJVmJqmNqKfeOEt93vtsmDJ7XPuKX4dITaS8k32xRqhnLSnznHS6uWXHIcZxy4mGbyB5L8Ddx9sxscQFDXRlN636XDbI30Z0%2BLkJ114Z6moOqi1s4s4RbovkWHvDXN5jVPOUDI6YCRkB0hwOM%2BuMsTC%2F21T9dpzbXJXZIEjDCB4cLQU2hchIB&X-Amz-Signature=fd6f418220cc8e89faba958f03650b81e30d01d2fec6ddbcd962c5519d527d18&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

