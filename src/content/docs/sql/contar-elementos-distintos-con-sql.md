---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A3YICAF%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T224524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDoBXPue%2FnVbCp9%2FENkIOnn168Y9sQNDmH2EpmIjwqM8gIhAP6bwNkETVIRZxO6lfBCt8enBI7fJy9QUVW3xQocwGC5Kv8DCDgQABoMNjM3NDIzMTgzODA1IgwtyeNQa2Y5L6E8JHkq3ANRK7WHBs2EWygeIDTIbJ3g4%2B32g3qTTBOJUzigerbYBIlUfqzl8ceV%2BuJf7ZcydsKJT8mGWUOauSpR1iUtjsEgComMMJTKN2DbQO8x27LZg%2BIpPzLvSAV%2BM1aE1YGybDUukZlIp3sYEmlVV%2BoCaZzLHA5qCCvnI3gc2umsMjja5dVLy4zgKWCq%2F1LC6HHqmp%2BVaRpxEH9Wl6VwBjEtu%2F15am71MJgNWXO4SwyLHQzSn1FelWSD7l%2B5nk%2FV6CLD80L3taQJLq0I2ndsXVZ0un9bIU%2Fp3wNrbP8Cx96fhg2y9ZiJQzVW2pdPf1Q97AQCFsOayXE18uI5KdChPRhFpAdAlTuZ5zsbtF%2Bum2TWp2%2F5MhKYzJBTLqF6rod6glCVao4fDmxw%2Bk%2Bq9N4LVTsbQ66bt2eUzU7JlveJf4BII6ZUBjVcfwj08eSKYPyB1YW9hX9hfkT9e%2BAJjcLvj7FRuTfUtKx3d5FLfg7a1LGJzuUKOKMHvn%2FKsJEsHEIg0NG8P9e9MuOGxPuztRwe06xki6b21R4Ytu000I5M5%2Frpx%2FKScxuywpQMXH1dNUA89ON43%2B0JZNXtAZUfnSyDx01MuAwzFmbr1FQM5sIDLhKdng1TsTjvigShSIaHVaWQVjDf%2BMLJBjqkAWnF7%2FmaUp0IJgeU22e%2FWRtbxmxNYqu1XwLNg6c8JI4xx1ysTrvdfCqPFyiYuE293fxPNabl7eMGbh1TIzRB3yPYEabNhXuJ0ZDt1yTneQdCXEh36l6pimQIKWJe3SOeHxbSUc8A9qAf6f9Pb%2BgO%2FfTJ2UxL4cT8bPOvG1%2BDPoEA4ycc%2FqQoXSo73aVXDj9lHko09VNm76dJtFRpdP2VIRoaW0p7&X-Amz-Signature=70228b985adb2a7dcee09a64dea2f9c337d00a5fa3e1786e5ef4c0c22b05b476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

