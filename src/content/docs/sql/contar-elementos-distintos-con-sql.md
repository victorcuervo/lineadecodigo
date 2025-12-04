---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YO7FB4T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T015829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJIMEYCIQDJyIuTmUr9%2FOM%2FM0V00%2F6wP%2Fd23L3wZ6C0S75BT4z6CwIhALMUvfo9%2FVJriBoHQTmFEfJ%2BOAphfI%2BQpTOIheQqyvEdKv8DCDoQABoMNjM3NDIzMTgzODA1Igx2bqp5EuCphZ1b1%2BUq3AO6ynKy98I3WC8dxrB%2Buc7TVPPfbOvr%2FA6g9FqwH74EZw5RfcRQpS7gGRjScECDtcgL6EB%2BPhakhw4v9Svzn9Fi1k%2Fx7YIR%2F%2FLSBkVwNVFvAEz01QYaZEook6UBfU3d9MjHCnHdpZrDJ8e2TZo%2Bn%2Fy5v0qE7FTQ0rPThId9JKGTTuYzQIANaxCJaf3G52WixcPNTXWQwjVRQvYmrYfbSw8KCauKEoEUYJXq8QNWtUktAOc%2FTsbomA%2F5Qi1%2F8Cbmi7lqiehLk%2F5y8d25HeNNSElVlll54K0ASsKfnu5anMbiKVome30Ofx7h6SM6sl4sjeweWOQ2qMvidP4Yk3NDmtiSTIaq4IdyuH8BM%2FE1AmZm35v9x%2BnbTLjC4SdrYOVtRnJx1UO4NmDMpNQ1U%2BfhNWGt%2BHLuxUZhE9X6tUS%2FwH2yd8qtzxMAz93LCZQF5Y%2FzE8sTeJBLeMs7ariwqMxYXKYawPv0L6E7THXaHrH0TlGqxvOzP2XFqZ8YifzoGGnQYeEZD6pPnBmlcAvKcsDyvy2Ia%2FIqhBfLgiwno4A4D1V0oMvMSw1QzppNBv%2B87Ab0HWtemPJA%2FmW1MOZsWUa1SYz%2FL9aWjUSm%2BZr3l5Vx4l0yketaKCpsAn3dBHhVqjDftcPJBjqkAYTKdC%2Bx41mAma943U%2BzQ6RNVxG8i5jYXfLi%2BaiRY6nFTorZu2EmmE239sD7NXJ5uo%2BZqusIMatq4TAvtCp0h6syH%2F0fhKM6TYO9ERM3t3MGDL9bfnjSCEPnV1yRTi9P0h%2BwPVSRZojeLhFYns%2FtPdtFwR6rnL9NgDiLkUfPbuZVbYice2KQ1YSJUkeKO8dOHy8nHKA7UG0%2FR%2FljjoeIO4DgZkeV&X-Amz-Signature=2cf23d16e4eff7acceb64c6678d0479d8232b093e7a9b3788424cc2d48c5f0eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

