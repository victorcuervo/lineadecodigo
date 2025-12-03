---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6AX67UF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCmN0RBf1cWM2X8Ny%2BuDYXARFB9xhICENm%2B03s%2BzjU0XwIhAKqCiO%2BScjLZ5Um0MsLHUOCEoytZBF2AOVBW1%2BHQRnCYKv8DCDQQABoMNjM3NDIzMTgzODA1IgwCH6jmOcqCE4fzK2Qq3ANEkL8m449td%2FKykQuaXrAMLNccK9Sz8090AmL61ruwpXsAQvCN5Myz9JTCeoSxXR%2FCD0aFmm%2FXmQrI%2BWM9LrJMthjcc2yeZ5Gqce1PQGg5VZcT%2FXRqTmRD5DQcKxCMVCJPBKhp8Ueek%2FF%2Bi29GlioTct3351Fm6Z%2Bo8SksQSoa0BVVA42s82z%2FliqCbEj3G4bGpeAqeYZbjn5EgmeQ3riJtox10lINQcwWmfDL1PQhC3L2119Cq%2F6NxsKLtpQmDbkgPEK5Vt5U2leCcDJgAY2SXnr%2FA8HlIv8SqpQmcHB%2BeYZIqlRUduJNd5r%2B9uHT9wRs2ryqiTy2KaDho3MrVlX%2BtxHlg%2BSDxsG%2F5XC97a8v%2BIImK0Dm5apGm4jsr6XUqa%2BVjXVVRQKvYT0EyjhhzTshxwqDPNXP%2F7hA32thrr1PBd80NIPpubmv0ZSSHQnrb412BZXqRcWMPUjs6uU%2B08jq%2FoMMqJ70NxVoae11vyrcBEPipSRDo8tXyF5oYGt5FGzKHRFRN3yJPcfkkxahfB5gK%2BurDiu4uZSoLQimEQRBy8TLwInd%2FLyJi%2FCJ9DIr2aJc59gpfmQCUIdyEaudPPYacTfhtDfbjY7SuqMUcmeK3BgCo1j4GpEiK5u%2FpjD%2BkMLJBjqkAXuQ7d4VQv02RR3W69uqSwsLkBYIKsfSTL4K3YMsC8qpkmYz4S4aSOSUsPNxY726DjCtKa4eCxSk9DrglV3NlOrnD9QGqIllhfvsXI0ziyU6ac7r8uoUK04rZr35jCYjbomVfCPFNrcDvAy7w4JdLTk3hP%2B%2BhClXxb3yC%2By%2Bmwjeyz4dX5wgmr%2Fdjh%2Fe2e4JXM4GYWl36RHAqdirdfq3iQMlwZAa&X-Amz-Signature=48d1b5518a486b399cb526049a45339a2350a4ba06158a2b3ff3fdf06ab28f90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

