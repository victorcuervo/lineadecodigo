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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WX66FC2X%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T000630Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCIAuiIxbvH4%2BE%2F5DGL2m2%2BYdFUu%2Byv7pEPyEj0A2eMN0KAiBeyey%2FePcec1Zg7f6jMyD50KA0%2Bmk1QOUCKID0WqPRvCr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIM3X6XC2Ac%2BTjmGAhwKtwDQRbPQfAlX9R8qu9Oykh67OeYblBlzfWZ0RpfEBBc3ViQ7tfnaEUHs3ABFOLY3DAePMpXdfiRuvLckRMI56vyioRFQr75FuwJw6QiKh3AHI%2F982txuPQor8E%2BOa2rVAw3hZDhVrAHzb2YO3sw9qDzj4YDVLIg1xhJDTU63ToZlvWzdbbbPZGkSQvDN2Af7kPGm3o7hvLkhePG9vTATUCTdO5wacZKZ%2BHrCND7njCUY2mQzVuc%2BE%2F8%2FjMB1DMSofAdiNa7YLCa1FD0QQ5pe%2FYQijBUwAbjQZHb4XQV0rUnZL1toJziVpr2vu%2FhUwe7iaNcjZebYl5okSBJ7bLASRGVeIjF1xxVEDpuDma0MW1BApSUsKN8HOgGLMyRwSN%2Bk3JAqF24Y82lAGNXMj4Mmm6w5E9R8RRMeGaLNDbZh7OJxphDqYVkKOqr1U7W%2F7Yh%2FQD4QJO8DUfPfHJGF9RYpvLRtNNFqO6uXlqi%2BgpNTJm920aoMISddBk7XuxTQRLKrJX2VB4bdPglgVoOu9rx%2B794ImBJs9toqEGJcOv0yb%2Fc7a2AmMh6Il9wm8IDdpWKCyLWTvdp2GYMMKO7e3d8MKIDAu%2BnO6AyVb13fRcMqzFpN7iV83yKSgQMkN%2FYweowxeS9yQY6pgH0sxtJP7lMBSqqKFysXsVIVvzl7IXN%2BASfON%2FINNuol%2B9G7M00xwgvRT2Gb%2BQd5CscxAJpW1tZipbLYnm3WpySgUu3qSKF1mXYdUqEXnMXDPCHuGboztlEdRfgzAMAFzhz8e2o5M6jY0jd6Wfqt6cGuXhRIVdxkZvCbwuRenhqxuf3OS90M2pyBrXKnEqBSR4pjTTs1YQ2UKbU9g2kIp1cnkY8PrTK&X-Amz-Signature=59df5c9201cbd5a2f3f56e1188e25a7a535bdc98366a5b3245c2d7ddb9649380&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

