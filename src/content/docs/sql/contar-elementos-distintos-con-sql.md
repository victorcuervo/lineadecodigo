---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWUUMSJX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T042558Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDqksXKTE4BxT7evETCvL9KhjaAm7gPVEqFszRTXofJJAIhAMTMQZBj1eyKDzZWG4gpTS%2B3Fc168BuN7LlCa4OeDbDOKv8DCD0QABoMNjM3NDIzMTgzODA1IgxmbADLMiu60TcFxAMq3ANONspXr3SJjThN%2BhzGtOdu%2Bcx3n3ZCSvXvOG7GnMtooh92EBwau27BP0Jy%2FF8aDHtaSae3aTb1KFL%2FDlH%2FvGFajrbWcwGQzn9kzU%2F%2BrV5ONusVPc6Bm5OfLpN1s2AEeLhoM%2FOYK%2BneKW4OuaHrxPDiW%2BKlavsgcyEByXL4Af0LAMBafqBjlloXsaXbJQ%2F2u8uF%2F80QRZkbW%2F%2FMDC4BLkdnKliSG3J2SxXow1a7z%2B8CEdpGiIGDKgphQGe1JmWZEPl7yAg59XuAjyStvscWDLShrP2vigqXf%2BSF%2Bqz5K7E32DXxYLkASi9p%2Fsh1iqqGfJP5w%2F7ofjh%2BwVE%2BTXkMnOKg3MnqHQZ7QekssKbHH83z8c7y4m1E5jYkkzIBzubH5Rs8TQ62OPlIyV52xaajzPv3X%2B8KTxCZeaAzK8auxgAAg9lM8uhmDfZh8uqEi6Y%2B8e7gS21p%2FyCBGWXJsoFt53LOxnKBSuPmw%2BBoeHlxt9rXTTpYBvClt7Oe3tJlw1pr30iOIunpwIFQGZJssf2T4k8RlKm6y7MezEu6TQqv5bOoy9kyzeIaGAnJYhWhqneI%2FqOf%2FvlO9CB8VuG0POJLAYOQHdBz4pc71fbxTAUDx4Xztspx9hlo4oOYj1XVoTCKkMTJBjqkASod04D7bNIJyAHsMG30xuwz%2FxkIQCJHQqOmjAtH9DB7LEaXffGlWoa%2FtXoTL9TqLAOvoaHRAzAaLl5ALDd6VWJVGjQwDD5vmx1N8kc10o4IL33m0xN3jn1v62O4hRqgCJ6nI3rBgsgb%2BmNfqD1KUwTGLo0fNY55LgaUgXkNHKaq%2F%2FhYpBlu2F7LMSO7PRaJS16mbToHQiGADzmcFX0vsTOg4jXY&X-Amz-Signature=eb17d9618d3f0c6078b74b545bb8d1c5b00c99a5d2b9dac15dbba338d8e2b93d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

