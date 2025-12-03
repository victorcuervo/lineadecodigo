---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastupdates: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2JJF7GU%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC3C3nQsmPDOx3iP2LFh53COXniiNMHwostd3PCOwcJTAIgC1hd6P2BQv8SbyuiDxX4lxhD5%2FSQCn9BLS87wsKMkCcq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDICjK%2BkWGDJYVByMJircA3%2BJE0forKYZMEB59SOKgmvqiiYDC8fFJPCcGItz%2B5e0QSusEx3zW0i%2FrfUsvFHVJMbqAyHsMIzKAdQ5pNX1XTwYNMKhTvbFM3qjI6kdB%2Bz11OnmwfsB5NXLnX%2F25%2Biaih3kRZ%2FEnNq7KgYZOrAtP0ADulLHoUDPTzkdc01G3zBZd2qlhx%2FSVBRkl8g%2FLjqA0DbluKMtB363MLD68OC9mFSjr9exwx7ZVjqaZfOLVyepvlleq9eKR93f9xZT24xgCs%2F%2BR61XamWQOx3X%2Bcc9B39DEkFIMaFfWWXYVgNw%2BfZad19bX3H0rUADAodQ0ucNQbszFBTTObS%2BR8yJbtmK%2FsfQtroT%2BqPfgdNNFU481IY3cJeInoAya6pRC7AUaxSiNwqLxYtOQsUZiZh36QkLZnhSZnkWtoGBvLwbejVt%2FAPSXVrmBOtnvSu1RuHiLxAr6OHcAOc1xdiQy41hrHGBRNIvR1P4Of%2FA3sy0xVnTHNAvKAiOHNRTXl4iw%2F5R%2BIJ3aWKfDm29Ako0%2BbuBzc5RkHPXF1M%2BuZS0Otlsd%2B8q6A3hcqUoqqbXL5FjEhC%2BnCk0dpy0RUYrLr3bDW%2FG1Q%2BqAQQLcvdOLywN%2Bi%2BNKWhTroh7A7j9O%2FcVDNxU3sp4MJKRwskGOqUBY%2FEr2AhMRNQD4ivfBL1IgP4V6wSF2ALBKOM5SF%2BHkAJEm2O8kLTp3WIu%2BCqj%2FFhzKvVciXl1mIuxfpHNiFhQEpgeUmL01IG77BaaZ6lJ5CR6Ykxd7JUGCwwPJBzK2hOlO6U3ctvsy1ArBgY0lIX9UtZKG5gNR8iqDlj6WoGst7%2B4lH%2Fjp1qJ%2B5qu6JOtLH9LC2BAThTH7kKgMuZS8ghf181ZZjdU&X-Amz-Signature=648e309f1a623d7984aa6446ad8cee8108d4736cb67f1ecde288c33395bc74c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

