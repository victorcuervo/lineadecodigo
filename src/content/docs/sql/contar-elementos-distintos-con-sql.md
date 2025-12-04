---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKBTNJPF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJIMEYCIQC1zy4xlQGnkAFZBDibB7%2B2TjM2R7%2BJqphkbr5VrSApBAIhANBW6J5u%2F8CPLNoWmglwLrqJ5uKcBBkficoof%2FDqKXOIKv8DCEEQABoMNjM3NDIzMTgzODA1IgxRBegImwF9AQWYJU8q3ANo7rMeV3C%2BRC%2BnwfjIEiyPh0w6BK5TzRphq%2BEQycMkghGAZo%2FrAgRuEG0zfkYEtzph3u%2FUuCf24OYgeTvzi2p9tTOHv2ri4pmIIrpefsoFj8pO%2F0UHQpC2pLg9egxGboMKwGqrIJ9rrZqeEBXPP5my93mYn3F79SgLPFBBtfSiwpWGbu1qYlkm7Gt5VsdeywO9jchFC6qLox6OcIx9FaSiTrcbqXwE9Fae3EOMPmCuRgUfX2A8QWFo6I5Ir5bgD%2BfmMQ%2Bv68B%2BBDUXqAWu7TBg1oDFEi7Z8duRrhccOskHBO747yddNqbSbET9y5YRfrisQHZajWAVe9WmjWmappAK9peIFeR%2Bf7tfhiJc28PbHmT5Djfqjaz7qje%2Fo1gEZful7i4NDdRnBV9CNffz7Hx1rEtDJ9kRsxxOa3Pv2JpSgI6cnAqFKwhzTS%2FPrPpJHowwd0QoJX6tXV1RCbMtpzpSGzvrpv8gZKSjwfGD14q8g8yiR7Vy0twlBCGaDIXSe8NJ1frENCX4uuJetuBG07uN3lN7s97%2BC6Q4olAcAJPGwieNB0ZT4N6JWkVNy1kdfe6a%2Fvl1g5NY5XQ7xyxKCR9TExkTcryW2hAKP2bSqWAV1kSpL1oWMgVI868tDDD4hMXJBjqkAbiwzpUDweU8DEkR456WVRKHKomefvrTQwB8cZP8Y2UcMiYYaVbYLNjZn6w80R0JdNpwVHnor2Ch9kTwU1LB2RFWG5USJbl4A8SpNwEtZ5P8UH7g1TdWxODwI4gK84LeKcCMY2zE9kY8sqLcQf4lHJG0ZFdy352JIO7GnLDSqlFyxjGsVYB1V%2B6ytItW06jEpvX3%2B3BPneO6JsBwCN2LmEpelM%2Bs&X-Amz-Signature=b2dc6590fd65b4f341341e4e7fb688d7ff79943d3fcd5ca1626f21a39fbe409c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

