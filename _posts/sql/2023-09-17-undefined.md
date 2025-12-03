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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TSZ62LKD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T075222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQCH25gNqPCGK7bPHUTfbHZmdBEpuCBlm6OJCV9FfAEPVgIgFiQEZ7b10ul1SmXUClINxJI9wLNHiOoCjPu1AgY5lPUq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDP885i6zZPW3lL0liCrcA93HB2XUlWvLHLMzU6Aw%2BVec3QUQ08pjYNtd0Aqq8fWfmJK%2B%2Bn8BOsE0ndtP2s3q3IXvM0Ot0SDSotu96wAG7xnQy%2FTFulTjro0jWMX5OCs2a%2Bi%2F3DQSusGDRX9wmBXJsgYOXUazcE%2F4HYZgj%2F9mZEaWnOI9Ob%2BAZ2R2fsACPyxE8ce10%2FfRGqb8C5iTISMCzkO9tnUT%2FzyfsmxTOgele9YPzhUGSShw6QKjATrnmDyIrh3xI9KbocpZcCGPc9doeoedF6KzU3ej2zTsgsn1bOGeKSUsDq7JJXL%2BxJuVpN66UlA2mp0LNXLWyIPdlTcaOTJn4fsjkVJiEBJvOVSeQEOBnmo5noiPxBrIZ1kMxSLaAkbvjeTLGMJPeEelXO6osIT9PLbvk0rZpSN5MrDjhJhqNYXdaDaudBhZri1K%2Bsy0%2FIeFvcI%2BDKp%2B5qjrOu0BEFqWq%2F9ZxMeA40K%2F9DBKnHj5KRxkGNIokymD%2F7kk7tdAOYy97RseZ23SrCLrLM9fogwb92WQWtVbDb6n6lgOuXjK7esnFXwWb40SP0hNhs1xek%2BtXsPo%2BLsdIW0BcYZIyj2QApa0qp2i65E1mqFL8C1fHwA4OVpMZXnwZHuwkYbF1q8t2mLglmnRO%2FzgMPPUv8kGOqUBh6QFt44uM6oz4ZOhkmNyKG9V2w8jro6y85kszKxZwHa52kq63RBSaMkYCoQsOuA4WjYDEiGrbusTT40c9LCuP1aoH6ZMXaHxm55HpAgTBJsVklEnyqtsPdiL%2FX%2Fwv4UI9aVS1OPCxIFYnoGOe7A81QxHjl%2BD%2FZK3euFfGoKSIhcF2O85s%2FmDNg%2BTIbKE7EA%2FHMn4ty3Vms2Ip1i6F2sIpAklcCtB&X-Amz-Signature=076b81ce653ce8f2d04919debe80a19ff704beda2e1fa7103ffc15db60dbd83e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

