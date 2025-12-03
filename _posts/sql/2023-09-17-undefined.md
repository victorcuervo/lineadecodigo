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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKWWP4FX%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T124542Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCUfBZsLsHv8unl62C7nZrsqJdsKmIkC35jcJ4iuB5IGgIhANC6I44lBgnH3CntejVUCVQOZ7sjpOiAKjzCaKvymq9qKv8DCC0QABoMNjM3NDIzMTgzODA1Igy3wg13lFIH3g9mWIoq3APpMtUHphjWI44TNR72%2Fe49JrzqlIFTyxhbN%2FvTsGQb1WcJvVmVCf6QmoY4K%2BpTSiOnf4spK3RxMut0oma%2Fg%2BSG%2ByIPdDeXYqIEl%2FfzP9KYRRfBRcR6ZpTOAp5Ad9VuqS6qVkjUEBZFLzO0mcZL572uL1aMTyRQb7sWoQUKSEeeiMiS78aqlTLuYKoWLX4XhV18PsD1OnBev5wNVmaZ5pMdGLOcUY%2BN5BJr%2FtXgnHpfKrjHxyHdwl%2F7HB2u5KhyL6wjEMfjK64yj61jbvfzYMjHIUERvxgn9dSJAuPD%2F3K0BFbCkhsyHWnfEGzvEtpRZNyqg2KKmM2zMlKz151XOc5B5IS9oDA8xPEZ1K6v%2BTO18Kwsnc6Uy9rI66VV3wZ%2FIKU8ie35mPrYNhffqYpvLs3ZLwwhZhHHa4y9p5YV%2Be435APND6lCIFOs0cftIh8brItOGnHzqpl5CJ%2Bwgbv2xt6%2BAX5oSVRHxr%2F7J5pcS41FxcBa2QfuNJRiWf%2BMRPYAg4w5bMmQvRlgc3sKZ7AM5CM%2BWiuUvkY%2BWiAwZ1ZQJJvX4xGAF0CZY90VkWXUsl%2B13fa201SgjUkWQ3bExyzn82ggLld68x7Pgurkt99lfwTgoD46MDyAn7Y9k5VOXjDgzMDJBjqkATTUE6t5a6jzkkc7Q1gojTUECoa%2Fl5TSsNVre5Feb5wuLGsPsDbUMJflY416zcsvT%2BzPBPNPQ6aGfRNktecqZYWGPWJazW9StTyPpHnFraJkCiSZ0h2eVvP9T%2FvVHYdj1WqCtFUCoC9L8UnHSTOeWQDi87tJ2wfyTt5Lp1VCjc1wCihfS%2FVoJ4c418wf6%2FbLUFNXWQSY5Fvrc2jiYLd8sSbG%2Bmid&X-Amz-Signature=4c77813259b38c4d770538921e2979aed6ed21be25a37a5ac5ac3effbf33933f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

