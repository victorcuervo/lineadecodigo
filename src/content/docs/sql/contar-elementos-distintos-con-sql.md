---
title: Contar elementos distintos con SQL
description: "Crear una consulta que nos permita contar elementos distintos con SQL mediante una sentencia SELECT y las funciones count() y distinct."
lastUpdated: 2023-09-17
author: victor_cuervo
---

Ya hemos aprendido a [contar los elementos de una consulta con SQL](http://lineadecodigo.com/sql/contar-el-numero-de-registros-en-sql/). Ahora vamos a ver cómo contar elementos distintos con [SQL](https://www.manualweb.net/sql/). Pero, ¿qué significa elementos distintos? La búsqueda de elementos distintos nos permite calcular cuantos elementos de una tipología existen en una tabla.


### Ejemplo para contar elementos distintos con SQL.


Pero la mejor forma de ver cómo podemos calcular los elementos distintos con [SQL](https://manualweb.net/sql/) es mediante un ejemplo. Es por ello que vamos a volver a nuestra tabla de libros que tiene la siguiente estructura:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/708e5005-711e-46e8-bcd0-8b0f977d0956/tabla-libros.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T7FQMKK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T030955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDuP13IgTGYfD2554L9Cj%2BYZJc%2Bwc99kz5FBT%2B1rd%2BTVgIgEP1a%2F6amfC42pozXVw09H%2BDCR2e39MARNvzIZXN1Alwq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDE9rV%2BuVmXNFs55QgyrcA1FWLW%2B89z%2BrLG%2B8PKvE1xahpGh6Lh3gO6T6EXQiC3uHzK4cSmIPEiJS0xcsx%2FEZWcSk2XD%2BKEH%2FMq%2FLgAIssnjpgXoX7oLol6NgE3Ci5gCSA0ZXpb%2Bu9DBfghw8QhwtSY6uWVLGgm7ySw%2FuCURq%2B644%2FINldPNFS9yZUzZf%2BPiXle8l6LeAy70Xv2XPEzKUVWeJSGOmnloIlloT4ovy9EPXVJcyk247cl3tU6meYRwAEy8C4tAdOclncaSKEX%2FWmWf1VJhqhMll%2BmIokFfXXUZQsCSiNZamaRu5WvfBAtYyAn2iX5puJd%2FvuwVXhoGO8kcHlFn8altQUFdOMSvjTSZJyKVBOKlxclePG9kWH48hGj%2BXYxz1O4%2Fquj11vnqmeCoM8Kwbdd1I1ZWhGqDEPiuT8Fz8FKuDT%2Bchg0YPMlduNV6lo2Lz7%2B%2FrLr84vzjDzxfH29naQX4S2O7ij%2F1%2Fcmz52N0baJwoV4XY66M03jb0ZjErnnNe9jw210xGZkVH5aH%2BqKq2Miif%2F%2Fmy2tqpUtrcZhgdjRcxyVxYtSJC4plLPozud%2BjGo%2FyjBgxeBfq7LiccyEL7onD89WpBXEKttjSWpWp%2FiHntZ9SS5euKyEZHEINkYxm%2FOdZsoa1rMLryw8kGOqUBmLEBftsJZaLJ057ZM4NKLDm%2B%2BZ%2Badh7fkknFJ%2FOXe504h1k4OvQyH4taXCgFlCdL71qRazYX0w4K1eYPBC5%2FErwBJeCJSP4vDICVGB4W67GCOBx%2BmnvW6xIjfOQrWCJyn3ncd4uF0TbiJss%2FYoVIIa81faQWRE5Llxvpe4ZFJGLqhRMZCFGAMOruaVc6wMQOFYYSXWJ%2Ff5wScB0Kyno0p2rh4MeE&X-Amz-Signature=b849674887c8d5e92bcb61566500e5380804a42cc31e7f7180b15f84aeb16fb2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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

