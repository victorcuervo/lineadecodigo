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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVSTBCGE%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T051701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCICxHbO31jyrX0aFZPB1I%2B8yKSOVJq2yBlibfshXi5Ml4AiEA4StG5DcZooDUq6WJYLzsYe%2Bz2mySxLiG38nlEZ9wcjkq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDEEnv07lUF17FpfvlircA2yDjb0MagKAOCj4rPBu3pfnK1LndyCHUfNv1BfSEuulCJ4DPfzdv4Ht45Hrg5I5nZ8Ka9%2BDHsHqlHhhb9pg6Bv64VR%2FFjAReY7UnbaPSlcMpXmtNPTH9J7v3JDNN4cJ%2BZeyeWDgYNObVn4eZlnP%2F9uttEAOymK90I7w0GXjmbzNZ%2B8VGJY7g2gs7jBsll8ojfHBaZVwTyTkO%2FXv0dSBy9cshpKekLlsIag8CHr8UlBZzrO7FLO5ivjzEjQwQv3HI2oc8Av600K9%2FPn%2Fv63XKzt%2By8w18m1NCV4NY5UHvx6vzvaMA57RwyP%2BxevlvM3XG3Ai%2BGxhJMranIdsyNRKsUMUo%2FTjIDuEi7W2qu9YUYMPtH3594O47n7VEYTzb3K2kpIHxgdaeFK8V8PK1wJXAJ0Zw1wQSYEN5ItBdSlEN5Ib9qJPk9fjkpfG3YXKXuH8U9ixAHZh%2BaRJbEgAhVkQBzjvegJvqFjOzz0LVHpk5XjR4k7MO%2Fg%2Ftteb2HiJdTWPplmf96QfWITgUkPl%2BIRKlLiD2j1r39WjDMGPcR7egenXl6djl08C%2BMzfwY1oYE6be87LBHGdbR2eZ1Dgm4CPjEkM4KraruzH0PALaJ%2BkbE4on9lYgwAABroORR6bMNeUvskGOqUBJRD%2BOqazmCqQJK33SoIKNwh0QeUoO8bVj1YaZHIWpwldk5GlDkcZHInD7qU9CeSYkFl9%2B5bS5RrW3lIVYaaoBWfZIAgtp0fD7CGbnQfWhz%2Byto8kSc4mxj5dUWT%2Fc8ep91YjSCBOR9x%2FXfn1spODuZB72SOMViG91v6tm7553iJpZhLOodVhWV9P4HHboEMAutCBWgDHhc9ELMFlpM1jzGytbCD3&X-Amz-Signature=b7605b214d05d9b60a1d6590dbb4eec85511f595749a4154121f8c4f907f6655&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

