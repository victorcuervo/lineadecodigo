---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46636UWEMBT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T071912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQCF39bgU5wVzqkX1jUCe%2Fl0qNkJP9vZf%2BZz%2BtJfdlI%2BJgIgEoAtcWdBEQHBBIkxHMlVsR4l0OwR1C57cqQ8r1lAiM0q%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDssXmm2ruDv2RahaSrcAwwt8ogK51w1vi%2BYvadCCsU7zegUmrwfz%2BEeEryH5H9lVp0LVZyNPy%2B86vgPEfXm5xoOpcn2b%2BVyQuoTDABkFzHrr4oOxWVCRhAEn8GPAUteYXhmlpWRrZ%2BR1EGF6SdpJ1v7ci2z2%2BO%2Btphdknv8bTlUVAqyO2C8mStp5VZPSHeAxRlbmTaQO6O9s6SWXeJSLFwb87LKyBadUG%2BA1jKrAEZcnwQEZNdn%2FTYholoy%2B%2FW5LkuQsctSJazpHEs0c%2BN2WXzZiehSAXADgCEs2y7DzNZliy665MDnOMLP00GazNwKWg9lzt%2F7Zy2T4L78b2wUe9NmYXEG5LGiT%2BRodXXh9pLetbgAn81XdX3tpKqzGJ5pUhoDg%2FoBoiHh%2F5jkkILdeIF0%2BX5j93w1nSGWrERcd4T8Q%2B4bDTV%2B7x0bg4bDMxB7UpK%2FhXtqgeB2CB18KtwJMVhq4QebEFT4kdD9QdmdjQMAFArLG4Koo8zAkpWhnPmI3X6%2B8GK%2FMife2SCXUpPp6Okg4lzVJ20WlsBCPOPq%2BSmkobjYGiwfYV1spCLz7dt%2FiSYzrmdmFQNEGmdCdWLHgQZKfbGcwoVAqjv%2BBZI%2FStWn8n6WX5VNFLVzL3Vi7sZH57Qwo%2FnMMnxgEMhzMLDoxMkGOqUBF9q2jC%2FQLiKYFz9BhjVqtDU8mIvUrNbz56qtxov2435YLD0JNIism%2FiSq5sjvfb7B42GGUeolX0n9qaqebCJ5cdvahAHRU7nAGPcet7mm6MrY36GYZshc%2B1sc7zRMTPkXTtyjVylzl8Fooz6wUXThLsvJ%2FaYilBT7kD5DSaqjbZB4R0zFhfYMfkEYydfVxsBKWy%2Bs1O5O8u4OhRyZlpOb0CdXqbl&X-Amz-Signature=ac0e092984669b9b8a5b8a3ca6b7f457dad4e6292efe2f5250d309060abc1c27&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

