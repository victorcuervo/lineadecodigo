---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXVAGHMH%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T120117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCwQIHpqClDU3Uqmju8HTfOPdd2R2QF3nDnI2vhYG02SAIhANopzpQG4sdO4jy31kcuwdbigwDUM5WNncPdgdw1Bwb5Kv8DCEUQABoMNjM3NDIzMTgzODA1Igx1Cmim7D844RMnLuYq3ANUbOsmqBU6RmpT3inUcq8R1pHGL%2FHri88KLUDJylqN4FLj6S7sqIUVEwA%2BFpKWDmFjsEnKtaNS1rtd0UJFqKSiacwffwRFJxAQg10%2FmbKuuCo5Vvb9dIDVYaROjRwSJNsjObNrmJnifpssIhlOctPIWh6a89JbDRXBY5EIRyv2h7xJ4c14TJAyzYBS7eMBk%2B1t%2BDhNE6PlyIH1u4hIpVvbtdftv2tJhhbngFDQjnmfXTbIlJyh6W4xeNzIXm6zPL%2FaLNxQxpDbszcWmSrLuc%2FVRZBZTfHpAqS13mv%2BfmZkX0YvpQVuJK%2FUizFA8tRjJ128SEXy5sJa5ORp58jONH6NO1Zd1K1HB7Xz4Ir5V5q2750nWJdo%2BGFZV1B8mJ%2Fgv5wVE3WgpOKrjX4kk%2BfPzm3q9wHs8RYiqdrQzLqoizKVjo%2Bjk9xQLRnu4247bt7Qpox058SJ%2BpXng5sB%2BUnIC3841d82mPnyZ4oGvBkZTDfiZeQX0uvj6nVWntkqEF0bsIYEma05DvSWHYF7AZCtg5y0s7uKYqOYaHOLqSCXcG3P0EC0emXT%2FncVPgD8fSMJWx%2F866%2BX5hT4si8DBSH%2FwBVyAQHcaGxpnNJonAqfuRZZXDyerDIKmUGSlEbOWzDP58XJBjqkAXFBsFbgrwTAl8sq8sd%2BStJ9aW8lJkzgs0niK7IH%2FUwcm%2Ba2Kmxf%2BIUiv6dVj%2F7dzBw22q3Zp06%2FhDOGemF8JS2a0dJARKbgM3N%2FN2%2FIE32MRryk5kbm%2Bv5WIjoHVmJSz2Jy5%2B0u%2BKMGyEsXNFx5zB8%2F9qWj7R3fwVPk9YNvTBwqnT5B2aCDrb3MwAE0CAuw2Hx7kjrpwt6QETb%2BNJ63Pr90ZRrw&X-Amz-Signature=71eafcb7f5654a53e9b76a525aade51b3f7e0298773ba0bf41d62026209b4181&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

