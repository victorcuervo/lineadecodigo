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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DJU5KRL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T144200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCe7U2cmnbevB2Ds%2B0EVbxafpspdAibX9JF62we1AP3BgIgBrd0yg6L37Tpp1Bk4hLPwXRYiuc7AMkTFVyga%2BdgRwYq%2FwMILxAAGgw2Mzc0MjMxODM4MDUiDM%2BmQldBvLQyAjqHeCrcA4DGLCFlPM1WGtG1algCzlzjl6QeBdJVg%2BtD%2BsAhTwz7Ytq1bdAXHQrYjwvDv%2BwDMLzO4ry3c65P%2BfLOHjUx2vEBLBdRzkERbJnekm3uvLHNL7hi%2FA1%2Fsh1Sua4TdAMNrw%2FEdWY%2BKvEP07%2B3ZuFcBoD9639ZlFCSZYL9eaIPNMCqFXPSgW%2B%2FyvRF3M5%2BNrj7i0dLKdSGGktHAstNwj0UNYs%2BIR4gf2uC9FSaWg8jlFUHOeaVVy7w1%2Fti0X5ejLlZekt%2FC9ajlScWLHEUF9me9A3A0kYzUfyHDNLPn3dxxG3%2BiFUKzclfdoLlrijEZ5SdXAIRhysbkNTp8Aa99UnJIMR7Gi4Xwls94QvbDJtv7TefssdACfMopKsn%2BxSyqCZzyldRV4GPNh43oc9YsnNy8%2B0pNHLGxh%2BGZzc1j%2FseAvafhc%2FYX9rFLL4e6l%2FRK8Jx%2FsQmZiKbwekPqJ%2Bqmz9FSU%2FJDgTmzs1Xqs8Le61SFdsJstC%2BQCg3o3Kv%2Fm6ekN2OrWWIgK%2B5AEZoEI29Rp%2FdpMsz%2B%2B3CUuoR7dEgeVkDK707Q5GXhm7nHpecwwzEkzZUeFHwI43OwUdUjhnu3Sk7tVvfAqwcQxGIZFMOOEKco%2F%2FUckZOhcNoDUwIe9GYMNWIwckGOqUBkvnB%2BkmKChJDYGxYRzc6lmL6i6vUIseT228820T1pyeDL1MUs08D2CcWqg8Unmgc9EqRMydKds80BODb%2FxO4miyoUCgJaDVzvtu2nsU9tLyVuMw%2FCrOrnjoHQgXZI3ybm%2Fy%2BZFoR0IE0mMgDz8qHYtoEppt2MMRO0R4TvcJmSbqO55LX95lS2RQvUjcvQ3K%2Bq%2BMYVoO4HLFly9knadqr9DbomEm4&X-Amz-Signature=c92cacaba1d5054e57f1bbd6daaaf90774a5932267f335dcec7862750954d511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

