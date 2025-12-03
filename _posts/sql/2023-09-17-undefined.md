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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZJGWQA6%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T054725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIFuPWafGf96AcTKAbQdeG9RzglhbJM%2FwSae%2BgAshp5JxAiBraXuolz%2BWJ9bcaORaS02xmfn1Him7NRSdTRJS36G4yCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMLw4PpCwFnKKEFMRqKtwDK1Ie1evY30yz2vcuDx1Xpz8qinZ78Xb161T4uwTQru6nBXGJ2vQutsovRuiQfkpjepySvykSgvDjDA8JK%2B7Yos%2F%2BHU9QHQF8H4uMokokotqIyw3KcS6iwAy7DyBmZN%2BhYYPQWbqYnU3sJd5jLXBAv1Ym%2BSBpiWdIPdvN6pMqyfcVghwlTlLtkDgeJOGNJPj2wQ6badbL%2FcxZ8CbFRGGLdP4OglXg8cNHmkz%2FQ67OBDoFF%2B30TXAhPb4qAhh1rvCz8P8BRU3XYPOp1oXInfMp%2FnQGQej4hniym9OB63vHvfjaf5HsxN9Mv%2BHuJAXBCGeAca48IvetWbMIQSpj82z54qWoJCyyAJNYjnyY8CvtuyvdLiviH5P2D%2BlgRUR9tqB9XSUAOV7zgDXO38ic7SZiiohfyJ%2BsZaw1tX%2FFiaoB5sWsdLDA%2FZyRKKWo0SwRUxB7ITmxhylXg%2F5MvmgujVHyIhQVwGKs7Rb3szIC7d2MLFeo0CzT2w2GlvTzezC0Zmqu1AqQ7dRe2qL8rExSTHopqIbsgVahlOcWtcEEm%2FXdAUulJzLXWoz%2FVbokE9qhmXucLgCoiNJ4TpUP6s7aShTDeOu7iJobhlzeY%2BAFtpcOPhW49Mazf4O0iUEII90w9Zm%2FyQY6pgELNFrIzPi1E2Ca%2BPqpTkSNc42S3pa8MYcrkD34GJOjHel%2By2Ya7K8CNRO3INqZhredGoh0ITuvpVeYtDkA5Pce9Iq9VHRh2ywtc3PeWAyZXa7SQpTHffeG2Yl1iF37MjghK4TxAOi3tpxZO%2BkR1XK6Z5Zn4i1tXYgpGYWrt8hKTt1qiWSfjoex0FfoAQ85ovVi%2BuuHH9Cw%2BGGxrkBkLxQFsO2Y9sOs&X-Amz-Signature=7da72186e248f84a2d949fca293b9eae2205b737000d0834f07484732a15618f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

