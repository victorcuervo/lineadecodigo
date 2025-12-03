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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3ZEBNHV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T055856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIEuDPC%2B0%2FSO87weLK2k6iq%2BhKTSSjM9aNAUeRu85PdcWAiAHuffZWxIzx98he65WyKr8WCnn8ZXdQSwjqC60iy93tCr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMxj6SI%2F%2B8Oym19rbxKtwD4kfe2CcOJvGo%2FmxfBJPFjZ3uzm3i2YqPk9ZrzRxq8%2Fi4I%2BN7F9dIxHMEHJJRl8CPXNOii146MpkJlxv5UPpZGqHQebWhqWQqifHIm%2F5Q%2FNU%2BS1LPi3Bk3V0AAeIavURiN%2F2ed78DcyXyHXfGyAHmlGGNArOHRkxayFlnlxfflMWkgcxc3BWicOf348lcJXBy2vMXiiBIEGUJQbyb8cSv%2B5IWIrQa%2BvC%2B6eM4hVFzXQTNH9Mg5QR6%2FfFLBpQjoIyOjTAgOduzgRN1Ge9VKbTGHAKpuGuX8o2XGuxpJyMBX1m2yWUadCp2xO8M9MAGQgt7TKB9wstvZMPlVXKBlmJgQozpfiO1XrNnUMTHmvXIy0fHf4dd2e5MYqU3mfY4B%2FiuEY9f68YyDtWMUYh44enWMq5XNFh2imPNLTvh4WqkjI3VWfpn1rMgnqeaH4c0DaZFsJBAEYeSn5YtPCngobt6cKCf23Btz7j0LqS%2F2cso01Ue6tfqqEDCi1BfolnI9L7683IRIudNXE%2Fv3g%2Fymf7ZVeucXNO2NmJuDkRoIPtL17uryiuNmw1jcxkVaKDZPi0OchrDqrKokQafwYVq0u5AobDR9Dg%2FC5WkOjuZAsBV4voceuDvSKbVwSD5eD0wx5q%2FyQY6pgHvEok8b4nV3KKvl3BhMaPaYI2mewa2GMaCBV%2FSwqFKDK%2FFjSe1svdM1Ct8k4tpuo6rGo%2F2OYUbu46fozPO6f17tDzxUxL9I9d09HANuK5fDgNpBVr4i96PU3iFvJB5i3kMd6ACvL22xW%2Ffv5q9D%2F1HClnENvDfuSjlI%2FjDZyreJs3mNY5EOq3idus0KtbKHFuWRKVrz4T20UPZ0AfqxgwdTVBunFZg&X-Amz-Signature=90c1213a3a64d91a57e3b0276c42fc17660c12dc7b387714ee9516d8d858940c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

