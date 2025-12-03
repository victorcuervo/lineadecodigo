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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T33HZLMU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T171934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJIMEYCIQD%2FSaBhZx9lBNVTrMkI8cMULbeJCC5o5ol3ABZl1PflRwIhAPsawckn%2FsyaKRkTL%2F8uigffD3KhlQVtszefYLSJ8Hf7Kv8DCDIQABoMNjM3NDIzMTgzODA1IgyCmuyBZ4XQ%2B6514Zoq3AMJEQ2gS7DfDfY9Mvyl0vVB1z3r3yIqn1JAku1ZZYHHeqZ71Qs5XlfLa2dEOlFtZStZtkqeYA21raO8dtIoRpgq4ZO1L7ZsKO6lSnAb%2BhBXS0ueYDwFZRzU5LeNSBe1WLVjPOKqbEZq9uRFBFvIJp%2FeDfzQZNFPM0ukFs6JN5JWZRE%2BCdW1YJhG38KTqdwTYQp%2B8KRWyPAjkA2bLa%2BgC0vUDMRxmdmuy9AC7pbnwQ4AZFwCE7v7V6hlJcAp7paEIghTgs4SC5vp94maJnfW9jUKqGSB2wKl7brvHq7W4Sgwro5mhAfd7Sxsut8RtYFtZUUBiAGPbBg1V5s%2BCIXiOhyYtw1pj55XVAZtVXG7X73s%2FNyl%2FyAvoHvrPcjIHNPk0YTO%2BmOA4QVsEinZSQ1QYtyqyWB2TuFU4Q2M2y4SnVmu8yjC2XxorKUUa4P5YHKeazaY8O%2Bt%2BZu93t1H1C%2BFW%2FC9D5okqW%2FhG%2FHisUIu7wptlBbUuRNviankT2uxxZnKSb5XVG0S2VrFWmAqerAZPBs9ciITrYuU088BCog9xgZr1vqj6JP01tmh5zoVg1VNRKW64RgLUo8B9JuAHVrCDSTdJy6d411IYHY2gYhUWPbAhPQ4HpB%2FlWL6vpeB3jCS2sHJBjqkAcKPc4M9u%2FHAc4cMQKSx15LBHb8VqTT7dhKHZhWu3gPmmC9unEt82St2djMN0N2eGEkkQ4focUx0uaRVd0iO2wjjMrsa%2BeM3Ko%2BDffaAK%2FGoRaU3D1Em%2Fo8oVvlpT4BHFAJ3A6ACBe%2FzsGxYkxDAAm1xGSAdY0dRJdtCrlCh9MLeJVNyhpiLQlL8cIAdyRrgYTBNTDxy1sUy519aG1rfkEkFuL7M&X-Amz-Signature=95471787c966aedd597eb6c5f57181d05f4e6586b1a9370140b909aa61ab1eb7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

