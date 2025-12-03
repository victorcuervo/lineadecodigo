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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIMJO2OB%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T134443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJGMEQCIB2xMzSfivCAo90Ykf304SgHxYZNFnkMH%2FeyQffPFL0IAiAVisW6hdM4ww3XjKL7Zs89iwEaTj7JzvhFfferoyjI1yr%2FAwguEAAaDDYzNzQyMzE4MzgwNSIMvtUW8D%2FerOSRT7KzKtwDRBzANCcBPNUka%2BzcROGxDQyC%2FhscsXjjKJ9sZrh739TFD4dnNAsMPp1KNgHHMsZWvTGOTFoPSq28IX7zfTUP%2FW7%2Bjbq41Ypxr3npfWBLrkmvvYtOflVtIdpxiP39Eaogt9h7IcN7x40%2Fb0I0u62fbPjP6UBttWB4Qdq6e9xGVjOBHNpUr5%2B%2FsZkg5i%2BHWBzNjQDYnNjoVO68R%2Bi%2F1WU1Dk2L74ZRKIyw4XejgRrqVIaatZH7ZQHAEx2XKPA6aHQdn478VIsgySy8z0iXw7m%2BxSGu%2BJYRhFa2llTdECIa0svjFbtctciH7VhtKTyPt4%2FiK%2B4J9wd8JhL%2BKmr9dOj5b4iHkdWMKEygOowWWrkBeBIvVDJI48zRXjkJAUe3gyRmr%2BDwoNiRJVnCpeiQiQrF2eM%2FLomfbymacf5OHEHfBOTjdx2d07zAI1WTQA0zh%2B%2BQaUsJzYZIpwLzwYMM2euPqyiRXqH8lZmk0g6s3VGX95LwbkD5B41raE9HB4KOJaMkr%2FmmHU6Lwu96mjlk88bcPabRtDxMO9%2FnQT1h%2FIJBwejrcMwRiApoTbjoE2VfNafcOIFYyEt9wtoP02NeG2gPdhy83584NM1cJ4lYi9a%2FkqpT%2FYon4KWN%2FBwTWSgwwenAyQY6pgHXGl3eyTC7HfB9Rzwm5kdjxtkAaZi63%2FZF5En6Med%2BaIjukWp9W5cahklHBs5oYRttPwe%2BWuxTRRnDfMd5gOVC3xQtmb0NZkM%2FytcIr1ZDcSJCm%2FBR8wgwLXyrUdEITO%2Bvyj7raWUOZdGAQSAVVG1MKwy6VqQeOtcixxBAmqlTfD36tSwNL%2FqtQBN%2Frw53mawomkNqBUaDhYBSx%2BNPhFzr6U7ZyKho&X-Amz-Signature=469150c45e1c3a34a5a3f9a0c49a4c998da1fd997b7d7252f61cf6b12590bc25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

