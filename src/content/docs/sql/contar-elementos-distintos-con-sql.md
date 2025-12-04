---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PXZNAW3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023510Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCIDlpXdlsu9A85lWpEr4bzQqS5QQXLzjK1So2eLVPTqOdAiBs%2BbndIp4QQ9n8Wj8aGHiNjIjY77fXGJ0qh9R6Bo1aFSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMvZ1PIlMG0mPsVcDVKtwDLjZwQggmc6Hr0R53hOqWn3wsXdNav4pnD7NPjplFxeuC3WY8se8ufbzGF2KHjdvZjbHHlrZWZsKKs%2B5tZyXdktQT6BFIMeUELs7KX6KtnW4TSzQzgsIlZk7%2FKTcXQju0iAg8nZGShHshjuR2t1HfMYPcI88AYDJuz9W86m88AjellmZ3%2B5soPTA6d6R8Tn8%2BtqZ3jxV8Ri5TcMnGTSab1HpKwZhAB9NkiiET13vvEH%2FsampXacUYGQNnm6kZLqxEk%2FvKwOksvIbjc3WAHfkMSoGpa8rEkV0jDJ52cs4nAKkutKcEMPyus10x7%2F4Kkvr8W1L7wfM06WjJKKDgd5Yr3W0ClLRZj5BKx7wTKrdMPtWvz4Zg2pHTEJFJaYYVdFhghfaaQu3hwLjDR7oQp2WBPKQX7cXRYlCBT44cjF8qRY6Ri5e63LzB040%2BCXENkWgvCpW%2Ft3OX7OmUGaDPJ%2FWJ9lurNWwCZlLoG%2BylVJaaAvcDGvBSd53c4AcLG7kBs5FJv25A6eRf%2Bd9QCx6BSKXtCKp%2FI2VDE4goEPVd%2BdENFOd7EguHssmyho2f7HmSL6uzZFeaxZlHKMxV42D%2Bji4diJ5X5GSFbu4R4fyG6qmLOhCP9wBExUuU0hKtAXgw7tTDyQY6pgGKs1eRkmmWjTSAnfIURXHRlb3lN3y2IQ6KC%2FH05xYVec8fJrwSCddX3jYIbdT2io%2BBIfwYYp%2Bw3%2FXMBHYRDRnAYqdfyfRNFzRcEQSh5E%2F3xnBaxhf0A0nH%2Fc5RYjO6uDg%2BMpxeK%2BXtO45ZRYHFcyRAhojK4brZqwiDruItWssYdrzq32slSixXllSN1ZMdIfSP8dm8T8LkRdWt1fKVCPhl9MmtbyXT&X-Amz-Signature=64a4f52cbc71a24dacc4afad68c1d5785c105c9978e9d231558abc7d59470ec1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

