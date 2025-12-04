---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SCAFYGI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T021944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIE8wbzB99SIeDggh01QUZ1ur4xp%2BPf5X32xnzlo9dO52AiEAraNI1Xt8b5EStGdH%2Fld%2FM2z8eybNTMlw2UmUpa9xDYgq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDPQ%2B9EUevQh5k3zZeSrcAxqaGKHyP9TH4FkLroYuCwtN%2F8QTk4KwqIpke8SAJ%2BxrrA0NUWY7oovJbOxCR%2FMWndFYBDH0KM1YQG5%2BM6GT2iAAoRbDGzlgCsMA0wzTPJbuLRf7r98u%2FTPfL11tBzWFDQgy7vkOEnquiKw4tqdArNbl10rU9MzrgrcQ%2F2yVry6fCfgK2PYEBd0UYI2FF084pjjU86I7IuZWD0WYXnNzYuik5POA7MHr6sDa9jXfTE0fEGRuuKUC7ZHUJhU30pKPvgOe47ZOo2rnQOaNFa1tKcBMvZsGavzZNyAk%2BUInCJFiLQqsL7qkruOlLm23O0mocp3SpXQZML%2B%2BbMZsBWkW35JMx4G5AdSsLcxhWlqZWhPnFlmAKMg9lwKPUtBQDUAIaqfO5rhrS9a5Bycn1I9%2BpNgeGtavS9fb%2F21fltv9nxMpr1SckujCY9LGKbol5Z47T2HdnrQVBfUkEkbC1p0Uvbxo6Zdf2FrvweyOFd7mxEw3HpmyNCpe3BRlaIn3Uv9T3h%2BwSK9vYJTzWUqXGCvzyheognGNCbvsmkovU4mnVGl%2B%2B8oXmP41HafSNOAzJyoKjlDQkCD6IwxKVOJgcPoKwVoV2RwFkuvWoV6U8O4niTvb9MTohJx78wUNZ38iMO7Uw8kGOqUBGGvEphonDbhfXBt6YzSZKVT8vPhbuiRt3MwYVaywFBBquFGFOL39wWIg7q1MwueMks5cEjXEaOyWTu3Xn9qt8pZCXksSR9GIom8SrOXiwcBEJnKPfEwNpGjwT1G35x%2Fa%2FCy48%2Bb605uu9Pqi5PAEyj3wQ5Zq9vo6KUx5PB%2BC48p%2Fof5%2BuMmLBf3%2BdCp3T2gH3aiAqq9NhHilCrRpgV4EE3utyr9m&X-Amz-Signature=6867f580dc40a4e3db750131b8747479906a898774d120bac79e43431d5dc91e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

