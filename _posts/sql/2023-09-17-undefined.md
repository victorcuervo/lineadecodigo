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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOLB46EC%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T172713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIHSl%2F%2FplhyslrwIWqufmHKXcVTqIDWs7NYvVuqVtXv1CAiBdGGwaD9SNNjFC90PhQD2puaO6Y%2F9Fdm9lNbj1fHwlLir%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMYCNvWxM0pGmivbQyKtwDmLolrs%2BpPngmFJgDGQXqQ10OjmNqLmlV7Itj7574AOzOrz4b5179qxhbdw5mAc3QivxtQZU%2BxhOnFwg8Szu%2B%2F%2Fg%2Bwl%2F03wGC8WOn%2FAchA6FpVqim8ehOhMCAZDOOOJsgl51fkl936dYX0t%2BVH4yz61c4Un2mUn85UpSoZtvpbr%2BNvOEmqojAaHBnnvO6uT%2F3g5MqUI3lWf1SqWSitZXzrkPtzcAPYpLZjmLm3cz8uri1mwprM4I7yWTK3eXLEDTv9DqEzw9yvZWvSS6TR%2FE9W1xswHFcHtwHpOUUjHSyhLmz0feUnVvpdr4vBYDL3Yoof6Rwnc0%2BV9Ram9nq%2BKIYyHcZjw1UeA%2FqLd9NFAF6obIwOKevvaRhoXKUzhl7EPiwtS1be0QJTXpMb7dCUMm9JwW4DGIWjTJy3MthSup1GuyVcqHnakvq12KhTfsYh4d2YRBvQ1uZrYf7QOKtwDKokdwO10su7rgfRJ9LD6o2u08wY8eAJIVd4YaJCBjWV3TDBi0RqmlQg79WjJmYfWkEuDlqyKqtWEX38o8C1UvFNZMhJ5pXQA3pe1aofPh2h1Dkdpf%2Be%2Ft9uBXTuQm9zSYoKAbpr6LJdqK3zUPy0%2B87o1olhXNuhOAWulgeupkwmdvByQY6pgFE5MjMve03O%2FPHnTDpWMSC%2BXurVR%2FJiwdfvnKAtYpwYamiUo4GPWiAn8rA3FuRn63sk4RcpxD8VEzR8qdJQewX7CysE8VnqwagJWec8aPTZSN2roBXh5axvlsq9G94y8Hzf%2F08MHXeFM5Rdjl7JoeolyAjCS2bKAjNDrLUjWPUqdtwCW7HDf3Sdd6%2Blubf2h0bLkNXq5BZFkxt4EIbrP5%2Fr6QqJ9O6&X-Amz-Signature=def3ffa762f94d60f990b1f7e8e27ac140f5d84c128c4464915709beec587fa4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

