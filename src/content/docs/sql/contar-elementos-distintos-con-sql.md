---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZNK72NU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJGMEQCIDB%2B%2BO%2Bl%2FQtl9cvAz3oeHJVyZIKNOY7H%2BwV74WviSCe0AiBL8QsjhrmCylWKPaIFmAeA7ryTsw%2FLSKaemVaTvtvofyr9Awg%2FEAAaDDYzNzQyMzE4MzgwNSIMao%2BqAZ7gIBFt7%2FrEKtoDX0q%2FCFA6WQLBaGsXoMHjzFRmGvd7%2Fs0u4R4Kn%2Bq%2FIfCJdzbDOJs08Lr8u3t5DoHNmnaWq5hrBR1IDDUG4wxGY5k%2B89W4l5vg2gMy%2FtlR5lYIpRCdZUDqOIlBC9ZMKcwfUXvE6q9DvS%2FwmZWHuJnfSNbjSnqXxO86LAu6kSTJ8mR4CIIeczXS2olyVtpN%2FUQ6M9YhBUrxHzLD5WLpO6SB%2FTobIvRDlRr2MVUN4qWbsGd1pVgMd3%2FWUgxtSVD2nT%2B4GkU3bA20e%2B1mH4WEanbiI1YD6Xav%2BDuWX7spk9wrl79HpdSabdgkaENafJO%2BKO5Trmwd4IsOhp8IqUeivo%2FWaFMeJ9WJ3sk%2Fv9c2GrRRD8OzuyQnsdAhHUIr054Tx8uRQ8WutrRlJ%2FFbYS08wCV4eFxlUs0kJt34cJxMAPmw7aiQ6GX4MUHk2gYfynARth7Xzqja1SfNRutDTXJ0Th6t%2BO3DCQX5Xm4L9WstkCMAAu4bqKx5ZCVocRAWLokpJ8UOK1S93PgPLB%2BX35G7mFlO5Jkg6tiv3xEvE9XGtsoOx%2FDsgWrI0hQwdfCwSfR%2FyiaaD%2Bumh3vX6Q34h40q%2FRrIJ7D6Rc%2Bybjmxs8B0O4n%2FujLDJjC75eZ4fFw%2FMJXIxMkGOqYBX3%2FGDA5lcw4L4%2FQVqlJwuTzxc9ixUGXrCOJXQWvOHvwGwxXzp3ki%2BpirTC60OEnE7wCyJ5hCfj1p7csYwIJBaQmoveWSrXh37s3Ureau96a6TkQ5yv5wgX0%2BN3ZV5qfp2qa8arVgGdsUJtuZ6yfKNo120DR01G5wQnu5cW3qb0Qs8e9uFuyubob1m%2FCm1jwjtWStOrLP5T%2F%2F%2FVdGcOIIQuis%2FmEWlw%3D%3D&X-Amz-Signature=55e8c93071289bca9078353d9df642892d13806eddc12ba46242e1cda5b41107&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

