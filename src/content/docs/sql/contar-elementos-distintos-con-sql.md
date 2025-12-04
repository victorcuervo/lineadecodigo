---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EOSYOOR%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIAjTtfiA9Mb2swFqJyrlKpM%2BkzRA6d5ERwjrOtoPiAiJAiAUPel%2BxxRTUXejf8TVmgWNpRjapjhAPEzRfe%2BXfnjyrir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIMitXv75Ac7Qdc7uWgKtwD0dj4er15x0WiV6XBvwzButSvgl0jyMUcMXpVyh3GV2Okvt4cX%2FoXUPDrtqZLQbwojPBg%2BabZ%2BWBuUp6w1863C%2BrpQ0GXV4AHBmu6a2Z3evPfUKnLB1fDlDCLrRu1SUSfWW0cw4VLuFyf6k0K%2BRsasv4Oi8g0ygWYDvzFzZFshsBxtsAISE6f4f94q7vnQgTC28JWYnemW5nAm3giRgRVwpnklcd%2FRJYDt7CigzB9KCU5C8c%2FJ48zFUV4l%2FBy%2Bb7vP750J38LKYTaiyAB50Y%2B3WVx%2FKNqlcYTkKzWxVhtFcwhFUJGIdJwOaYIBRnlgO%2FhJeUalFW9FPEU8z14ctReeCjJD2z7Oi0xDhcj4di4sSwSAj63pBpl85FbjvkXCkJm0pAHD39Xu1Jj0JhK69LYu3EoYAWAIejdwLjhNFTaAQltvD8IFbmRCLPppGRIJg1S2%2FqyFeZlcnzMnGC7XGU34ao6pWOGUZSo6taLSaruUBQd%2BcJdT5s%2B6Oj4wviA%2B6J75jGaPXbUTAxuzlKJ8oOE79zx6rEESAwPzMIwc0oTSg4DSSzD9WowuBih4BKMzD6igvUidU6f3nD87S%2B3kjIUIBkS2%2BYt%2FuuRkkuNRa%2BMuEEfe%2FxlQb%2F5I5ozvx4w8oPGyQY6pgHAit50nJzEdBx01%2BQyHbxRYcVhaDFgiFg3GqcqRsQHaVv%2BrXbrRyCaaXEeAetN0%2BUDwfV82rxpiLfScRXbrLCP1y5ZXp%2Bu1UPwvT6uEmRYWIOMfWVo9DtFr9wKFobgLYadiIl2yDpyzx4J7jo3SYynt5PmTcinutDhPmmIPee%2BoLoUfkLFUR%2FxPyselME9G%2BvXEgMN89QzpYPltODAPhVT426KyosY&X-Amz-Signature=d24aafe97c2f0895e75edaf1f27b723b4c4667a2180011e53781d558cf79b5c6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

