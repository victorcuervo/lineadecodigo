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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656ICZA73%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T035212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQC6f1axmzXT8zgsX82RFqtKRFk1Ob4Mt2c%2BpPkWzRmrQgIgVKxbnG6PFm4%2BKC6Lu4w9POZNvPbK1CiVGZ23VHGnm4oq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDN121zlVmKNSGkVsVCrcA59PawvGGDqgl8bfdKv5qydM97Nrc9a8h9D7f4zSUQHzdXYAMQo4fK8BtkQneWEFfiNFeryUpYwW0NDgbROsPbXYRkgcFZmUif26fXGI73YcaRrrJy8%2B%2FkjBZrp72yMls2HpbFzT73aJ3O4q38H%2FaCIZGZdbDWISIipC9oe4gpKjnes%2FCmR85SGVbEf%2Fmsg3%2BrtlE97jXrjWOxeJY8868Zu79x57KmZLlj5cbMmJkXqxkTNcS%2B6twi7gwj4IxxhliNlTFe2eXy7ipq50wpIiipKswgOaBK4cjpki4uAeFQgBSYbGFQzsN3%2F%2F%2B3tB4YKnn1VOwoTMGQN4fJrLznARUSGzNPs01aTlVleFncWheyEXjMksN8YV1wdX4l7bxuV%2Bdgr4eYm065xf32v86yNO2cAIb2%2BRp9vQCwyL9ufE48UHWFKCEglzZEdIGWT4k5hdA1tRQqj7%2B5U5TYAg4hSWC3LFJNE3hyASMZLkU6c3TcgL%2FHINMZ681%2BTUhxlpdKlPKfKdqdVh%2Bc70fUBw0t2aaaHWE7hfZRoAuKQOxpl8s05qWe0Jsi45Kbzl%2FgRmdqk8m7DEi5tRMvCekEZfnwPJMygIN7%2B0UuuOF0yr1aRRIq28kDatoxEwkGC28iGCMNaWvskGOqUBCh12GZZtOlHMRJD6%2BGVfLXTAjXSCqBDTCzNIrjgrsRpPj4jUVfIVW%2Fhg%2FkXNPeZOY6pKvyqNtF3CRykj896i%2FMxqeboIvAnSe59iThko6cNoX16kBGnrY4RX7aN3o4f4Isk4enOXs92gtkeYZD27KcEu%2BNcoCAB9rNvuBgWfqhdi1Dj%2FLO7%2FMwpIYIds0l3EjidN89%2BdpUube%2Ffxyel6plIHvPP7&X-Amz-Signature=07fef16be55394b941265200b98263778b4775307872d35242a745a8100787e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

