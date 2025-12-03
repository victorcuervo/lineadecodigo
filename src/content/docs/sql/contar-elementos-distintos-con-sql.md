---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RMHS6SW%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T233251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIGXiUkJujJOYimaWQ4wnFlGTwQMLA8yvwPlVOSbbMULyAiA4g8mj%2BidgR9Y83chbIKgn%2Bl13cSRQ1QsvjPhghQPNaSr%2FAwg4EAAaDDYzNzQyMzE4MzgwNSIMM2mURaAQGCbeNOKAKtwDPK%2BwMnHB1Hd%2F4losOupbUZiHlnRstk1vsPPAbP2ALqbUy9IJZKuyeenapW6fKjX6LcC%2FHbDLHYeJFISba0SDdsO6pzrCVzuPfL4%2F9hAv7r6Z1lu1xKue6G%2B71f%2Fx1zIDgZF1UxDTecErDmKsJCtDF02UEhe4941Fv8dFqVMhrKrmDWd6eer4uJRhrxUxCN48lJuzevyshxLQaaAqo6%2F8R%2BjnXHSzKC9CwbVtz1OYsPIrdN9kEikgfFzPTuWp6LajX0r98OMSEI5%2B888NBqYOHAQME7241e7B3wagikIQQIFWwa5q6ijC8M2ZXAUr6rrialJ7eBQTl49dHhrxIPNVjHDxROqe%2B00ASZkLfgS92JRku6ionJferab2B6cPPTIWK17ouRP8CH%2FiAiVfMDCAYY57q2Eh6Tg%2BRtpyXdbbRpzybovXmZsZu%2FxoZzsTPyy8fCF%2BahNcc69IVhPGu5KzmkcZ1ZkX8smccwYgY%2F95UnOtMgB0ZXjdPTCVOZQ9SiIdGTkNYYYhUuA1eXFL3AqaXqX7LayVDYKNGM9dBiLsk3VAiUIX5BGjUjX1PzU9eZQoPcphMK%2Bc9WG1DQ%2BphbamXLkjK7uZv4pYsgetnZeQipFpf2VCiI4QuiHcUp0w%2B%2FjCyQY6pgE3gDaCjY%2BNXoo88X8uyi4BDlD9qY24IVPg2orT9rJgmjBBzufisprGsjVumMeWHKyI8J%2FvVW%2BC30naV7s2MC77U6Pg%2F7eSur48TfiUpKslboWWuaf%2BjquQsH36laBdUvtB2itkADbI6vk%2FXkQlreNtRzc4%2BnQNH74S3%2BjnIMO7W41ydtLjxB4%2BTklVJchYw0qqDCdLRDoY7Cf%2BLRW%2BSceQd9D0SEkn&X-Amz-Signature=1b73c73e58f74ed4abc520cf394b830b59e7e7400bc7caea7f74ac7cbd622bbe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

