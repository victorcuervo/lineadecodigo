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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VMYRWS6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T105051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIDeEzREhi5%2FzTGWXEmMDZ4%2FARWRz%2B%2BFtJqfGxY5A%2ByEmAiEAi0302nTeYJDsowWRtFZnXXC%2BXTgdjahYT4pan9jIIZMq%2FwMIKxAAGgw2Mzc0MjMxODM4MDUiDA8Yi7wAWM7sfi7kNCrcAznLdtCPeg9rCGlpYFETUFEtMxPY%2BmqULuM6oLryRyef9ecPfXesf8BZ8Juf5Le4OJNFpnOJJv4%2BN3osfazRMUFZYr6Q1XjidJVAitpWMSZAGz8jOA3pxQcurKhEXqaRpQBrE2WSL7Y3bR4L3j0dFLnpC9wgBblJUThyrAy2YasGY48iLbhL8C3qLSzsEgZ77OhId5gSsmgnitvadROfcS353q6%2FPOC3eCGTKTjluc8DvIaLW1i0te5ZWvb2K4ZaJAA3MRBw6tWsdz2w57oJYUcHt4r0ABkIsq85skdLbDlAVDz6Ye6CiSZxiepQBRQNZaGmE%2FFail%2FNTOfq9vfGOcuScwkjyCCaWJvIKUtWoj7i4CAXzObYr1xMkQZqfmwXGy2PPLFKmoZQTPI0uVv99hL3%2FJ8zQwTWXlgmGNJ2%2Bo7Ba60I4YERg6nWULiWf8fi0JM7OmXSOl9FsAV4V6p8S%2Ba9V%2FjWAPgJVuXv2sLcunN19vIXIaqDn0cv0NqDQ446x%2B3w7l%2FWFXXOwkXAIhoxp6D3d0GNTVAt8GBNN2uF9A6hiir3tdrWiuElqlf%2FYZq5Opye5amJ%2BeHtZF6NpKu7rtxUA6QLHj0lXPXr8y%2FvdCBAcgEI%2B4Y9IQB8dyScMM%2BSwMkGOqUBj6msh49VO8QYyDt2DAwoyzcJT03UMMcYMPeveHM3oLQwgpi1rpARpI9GcA9%2B0pYrdehoBMnLuxze5nuwIbck4VijSEfuo8Tw1ovhHPO9GVVcrcyqQBe9Am2KDoYo2glpQu6N0IJXSxRq4XgLK5BP6dfNj37IIGb4lv2QW57XHLGGdTv9fWAYX6az89PgYgwxIZR5RbJKjJbN00U38ocvzbyhs1zX&X-Amz-Signature=92e674553d24f830518b10344abc27302a30aca0a7120fa274c27f3875a20949&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

