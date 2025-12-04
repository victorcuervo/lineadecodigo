---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SHIEFAP%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T060028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIFsBCEVDPzZxYp%2Bfm33qupHo4CR5aSeTcaKUd4zw864KAiEAlLb19bP2cLBledr1uk2bGfqrZXO%2BseocLvKLkPFBJM4q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDJBeiQCvHhrjo0p8VCrcA%2BnD%2FO4NVL6AB300kDA49XMn4a2fxODCp9QHTu4mvtzxX%2Fh2rFs394CiMrMRNTEKQcKzdecaAp2UuuI4rpognul2kKsSuvTolQDw0nlVAoWNz3MNByptTxjOMnoT%2BPuUd8gLbSuvLVy8hD8ji1KvBBzzP6BQ2yUg6XdhKL1VWNkQSbgLZlptkXtyUOjcU2nRQLXmwcJw4SEM%2BImAbQbN9coUalaFrkkP8qiuoPXeXYJy%2FzrkkVv8CAOoL19YOJp5NIKYFfTgrr6idBrHbzfwSkIp9003KUcBb47MtfHuZ5PcKitfXFjuDym2q%2BSSJ0lJYyYmA5kcGTxux%2BUZjWI26SMUjzFvNz9lTsVdgMZ9Zc%2BBAQlcJzXf7lPQX%2Frn1oNYNzCAYK3whLg2bi6%2F0uiw7Eu7bmdkmLXP%2FQyVBX7zu4ESJHob31O6AKTchqPXl3sR7o5bGUoExJBK2NzDZHUz2CdlaWaJ4Fqfh7Dok%2BuJB5%2BvvtBl8LV7J9sc1Po9y1BZdh9XAqi8kjUhWsBGPH%2BBWNbGxGcWJFwyE%2BiXCpPKAZSYYt7AW4ZyjIvrb2fHYUG%2By5Zd4D%2BoZxr5%2F3dqIuscJUm5REDlIzvBfziePbUNX8oBXlPC9TU1OoZNh0%2BCMMyuxMkGOqUBA%2BLOflBk7ZEYG%2B0MlySrLpC9BuhhcRR2mD9B9HaULiNUgmTj8f8sBMTIk6Xp%2FL2gsK0T5cmS7jychBesC1i6zP6Ia%2F3R84H6qgkurLmqapF%2BlnRZ%2B%2ByLBQNhSCRUn5VfnHqf97ET3j3wE1i7qgBOCtEjK7EB3FLi%2Fd3n6QRyn78SfTv9yF7Gy67zXov1npWEV4EGe3CegZVerXd5sHKsOqlgeYlq&X-Amz-Signature=c17b893dbdcf020750a636bb2cb54a4b697c5ec5f1647fb50b82c82d0cfc2ff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

