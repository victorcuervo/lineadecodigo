---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN3HKWUU%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T004605Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIA1ik5CK9V1LlTURdpy%2BtbeL5mnwd3Q2Cw%2FOu7r4sJE1AiEA6T%2FCNcwMfdMYW%2F80UCBAYpEAPNpceKdb%2FvLx6klM71Qq%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDA%2BaFfk%2BiAO9YMk9KCrcA3650IWkzayF5ADC3EyXyUypNCfOy2%2BlNKd5JC0Waju%2BHwASUp8dNWjnTGCZT7UrZVirWvYulCVoR1giSM%2BQ57VTFID7wMdhLGspF4uwSlOb8Axm%2FQmoI56Qm7zQLhnCFPBxhvgpJ1YZTjKZWycRlhgdNMAzOptOygNryOuzo01Fq%2B7qX0jiteOBZ0%2BbyPZCM2oaNf9X%2BnMc%2BGz32Vfi4D15aXkZ9b8y4FyYJKowhnKO0MwNIbk2r5kb5oZ6j5QiCBArlLrQWIiDl8PEcFkevT%2FGG1UYnNvaGc%2BFwqd52NFJofSQ%2FjADptMLiBYVoz251KJX0hyk1rtpxWQZoDGy42vfxLtt5CMq31%2FzlcEvF7TFG%2B4v9HHAu2ZDz2a%2FMDWUNGOBVumZLziRP%2Fj9%2FLw5cdfXCZT3hrHwJe1r2x3gJsjCB0nkSv30CEdghvX32nWcPtfllKXmyTHUM8MfqCd8Fr4Yy7A1cAuy%2FnNNO8HtaRdvC5QqJNCzpacO3HbwUhunfsQy3WJ1Sxp5wR3xd7sAcghCgD%2BIpe8bhiHexd0cXuSwNHFfr66iME%2BjeuSnwcpR9HcAsrATtQcpiGDHl6nS3MQWkqVbbhIT3Jto6hYOOvQ70u2Rmov%2BjLRwDaRpMIiVw8kGOqUBQaBV4Rk84oQsYCtwP0JIq0%2F1qdZVJ0J556jgJVkTtBDUDh4R%2F%2FHum7Wkz4HPwRqQO2zbZqzQReVgm8xy2KDiLmbXIKcx3A9fKviC6PtJRstzf71P2XaYgb2omrhRun%2BN5Pgu%2Ffoxg4QgcfLvNRZBp%2BY7XneKWzifGbZvvNjUgOUnqwZ5g6JQdWt448EC52DeglZyff7b%2FXppSKQjQXnOwRHS6GSl&X-Amz-Signature=fdafee6f828a6872a2966db874dee389fc0f766850c84b0064adaa97ce8ce62d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

