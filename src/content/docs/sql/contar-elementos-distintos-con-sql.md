---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UXECSDY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIC3ulWBlp%2F%2BhvXT4BshmWuJeIVy6j40r%2BkzPPbDKk%2F1xAiEA58lGY6DTxpDEWEl3kPJ4pktmVvRzUPrLHmtYvZp%2FU%2Fsq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDN19pD736RFeYsABfircA5%2FK0lvAQ8RaP5kiTsMTRU1BEF4wadyzJ1h8tt4OqsxxwR2TvP4Xp5iq3m3Y8fzYhfHWioahvPaEDXz1xWNRzVVPi2wDgBUcS36cYG8nwU8gQ7q%2BKK9%2FHNvLWx9PFo91K5KRbscAOfRodZNa2SzuGOGIwLu%2FpEcfg%2BQVHXZvFWW80n5uppYyCibaacoINGFUlQdHtgyjz9DjevmgFkU%2B9uULUKuITAiPj0oPsVroWYVzCXxzQtq3eQUxIi%2BC4IXAU%2B8lFjVmkr5Yr%2BASzwbvBfK46Xehu6C4hsFz4F6Y1S%2BIupauIZJYrlOfaJXds6w08z7WvCW6OifgoezI2bTzz8vcR3rvj%2FFOYFPGBsJglUKzpnOuDf7H%2FCB5YxIex%2F6uCOG6WLmvDnPIyQHTiDWEJKRZvaJQOcgYlTU8Ddsw2KYYCb6iXpMsPwoh23FvL9Vl5LFgQQSNMfod3mBtgY5PVPfbq4tfQXZAUiVvVOAyCT0US7TzqitVsEAIvRQWsO4is575Ggfv29KjaEA5vRPiTJyhK3K0MOsAsvZ3xV9FZYlJjAzPEKHV9WoukSZVSTnXSE0%2FZ5fOYiHO%2FRGhobUaHSy5twCRKIoJ%2B%2BivHOmQV0HnhIwGvBjYRi69%2ByTEMMK%2FxskGOqUB8qoZ796h6I1140eKVyPTHvL7Rf289h5fOwsSWfyrPbvijhJCPHKSnUoFACm24PZtlEhKm5QCKTJPTyUmKv0STi0waFdgh1d5CoC34cjvCvEhoO5%2BWh43arb%2FcJN4XqtYgl8OwGU6P6ZulIrsXFxlCICNNamDWEXBhWPEWCMYkyMk2Z%2FkJLNtDK3Bai6Yc8QPr8LbhS2NotucLxSGlaB50HTiN43x&X-Amz-Signature=e61e555d5b022ba9959bd1f454f8c1847a3a918553e901ef7b1cf93460653649&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

